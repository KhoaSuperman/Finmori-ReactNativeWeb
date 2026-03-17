import React, { useMemo, useState } from "react"
import { Platform, Pressable, View, type ViewProps } from "react-native"
import Svg, { Path } from "react-native-svg"

import { cn } from "@/lib/cn"

import { IndicatorDots } from "./IndicatorDots"
import { Tooltip } from "./Tooltip"
import { Typography } from "./Typography"

export interface SpendingDataPoint {
  label: string
  value: number
}

export interface SpendingChartProps extends ViewProps {
  data: SpendingDataPoint[]
  activeIndex?: number
  yTicks?: number[]
  formatValue?: (value: number) => string
  formatTooltipDate?: (item: SpendingDataPoint) => string
  className?: string
  onActiveIndexChange?: (index: number) => void
}

const DEFAULT_Y_TICKS = [2000, 1000, 500, 100, 0]
const CHART_HEIGHT = 176
const LABEL_WIDTH = 40
const LABEL_GAP = 6
const CHART_LEFT_OFFSET = LABEL_WIDTH + LABEL_GAP
const LINE_COLOR = "#1A45E6"
const SMOOTH_TENSION = 0.2

function smoothPath(pts: { x: number; y: number }[]): string {
  const n = pts.length
  if (n < 2) return ""

  let d = `M${pts[0].x},${pts[0].y}`

  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(i + 2, n - 1)]

    const cp1x = p1.x + (p2.x - p0.x) * SMOOTH_TENSION
    const cp1y = p1.y + (p2.y - p0.y) * SMOOTH_TENSION
    const cp2x = p2.x - (p3.x - p1.x) * SMOOTH_TENSION
    const cp2y = p2.y - (p3.y - p1.y) * SMOOTH_TENSION

    d += `C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`
  }

  return d
}

function GridLine({ isDashed }: { isDashed: boolean }) {
  if (Platform.OS === "web") {
    return (
      <View
        className="flex-1"
        style={
          {
            height: 1,
            borderBottomWidth: 1,
            borderBottomColor: isDashed ? "var(--color-border-secondary)" : "var(--color-border-primary)",
            borderStyle: isDashed ? "dashed" : "solid",
          } as any
        }
      />
    )
  }

  return (
    <View
      className={cn("flex-1", isDashed ? "border-b border-dashed border-secondary" : "border-b border-primary")}
      style={{ height: 1 }}
    />
  )
}

export function SpendingChart({
  data,
  activeIndex: controlledActiveIndex,
  yTicks = DEFAULT_Y_TICKS,
  formatValue,
  formatTooltipDate,
  className,
  onActiveIndexChange,
  ...props
}: SpendingChartProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(controlledActiveIndex ?? Math.floor(data.length / 2))
  const activeIndex = controlledActiveIndex ?? internalActiveIndex

  const format = formatValue ?? ((v: number) => `${v}$`)

  const gridRowCount = yTicks.length - 1
  const gridSpacing = gridRowCount > 0 ? CHART_HEIGHT / gridRowCount : CHART_HEIGHT

  const chartPoints = useMemo(() => {
    if (data.length === 0) return []

    const valueToY = (value: number): number => {
      for (let i = 0; i < yTicks.length - 1; i++) {
        const upper = yTicks[i]
        const lower = yTicks[i + 1]
        if (
          (upper >= lower && value >= lower && value <= upper) ||
          (upper < lower && value >= upper && value <= lower)
        ) {
          const range = upper - lower
          const fraction = range !== 0 ? (value - lower) / range : 0
          const bandTop = i / gridRowCount
          const bandBottom = (i + 1) / gridRowCount
          return 1 - (bandBottom - fraction * (bandBottom - bandTop))
        }
      }
      const maxTick = yTicks[0]
      const minTick = yTicks[yTicks.length - 1]
      if (maxTick === minTick) return 0.5
      return (value - minTick) / (maxTick - minTick)
    }

    if (data.length === 1) return [{ x: 0.5, y: valueToY(data[0].value) }]

    return data.map((d, i) => ({
      x: i / (data.length - 1),
      y: valueToY(d.value),
    }))
  }, [data, yTicks, gridRowCount])

  const handlePress = (index: number) => {
    setInternalActiveIndex(index)
    onActiveIndexChange?.(index)
  }

  const activePoint = chartPoints[activeIndex]
  const activeData = data[activeIndex]
  const tooltipDate = activeData ? (formatTooltipDate ? formatTooltipDate(activeData) : activeData.label) : ""

  return (
    <View className={cn("rounded-2xl p-xl", className)} {...props}>
      <View style={{ paddingVertical: 3 }}>
        <View style={{ position: "relative" }}>
          {/* Grid lines with Y-axis labels */}
          <View style={{ gap: gridSpacing - 16 }}>
            {yTicks.map((tick, i) => {
              const isBase = i === yTicks.length - 1
              return (
                <View key={tick} className="flex-row items-center gap-sm">
                  <Typography size="tiny" weight="regular" className="text-tertiary" style={{ minWidth: LABEL_WIDTH }}>
                    {format(tick)}
                  </Typography>
                  <GridLine isDashed={!isBase} />
                </View>
              )
            })}
          </View>

          {/* Chart overlay: SVG line + indicator + tooltip */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: CHART_LEFT_OFFSET,
              right: 0,
              height: CHART_HEIGHT,
            }}
          >
            <ChartLineOverlay
              points={chartPoints}
              width="100%"
              height={CHART_HEIGHT}
              activeIndex={activeIndex}
              activeData={activeData}
              activePoint={activePoint}
              tooltipDate={tooltipDate}
              formatValue={format}
              onPointPress={handlePress}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

interface ChartLineOverlayProps {
  points: { x: number; y: number }[]
  width: string | number
  height: number
  activeIndex: number
  activeData?: SpendingDataPoint
  activePoint?: { x: number; y: number }
  tooltipDate: string
  formatValue: (v: number) => string
  onPointPress: (index: number) => void
}

function ChartLineOverlay({
  points,
  height,
  activeIndex,
  activeData,
  activePoint,
  tooltipDate,
  formatValue,
  onPointPress,
}: ChartLineOverlayProps) {
  const [chartWidth, setChartWidth] = React.useState(0)

  const pathD = useMemo(() => {
    if (chartWidth === 0 || points.length === 0) return ""

    const pts = points.map((p) => ({
      x: p.x * chartWidth,
      y: (1 - p.y) * height,
    }))

    if (pts.length === 1) return `M${pts[0].x},${pts[0].y}`
    if (pts.length === 2) return `M${pts[0].x},${pts[0].y}L${pts[1].x},${pts[1].y}`

    return smoothPath(pts)
  }, [points, chartWidth, height])

  const activePx = activePoint ? activePoint.x * chartWidth : 0
  const activePy = activePoint ? (1 - activePoint.y) * height : 0

  return (
    <View style={{ flex: 1 }} onLayout={(e) => setChartWidth(e.nativeEvent.layout.width)}>
      {chartWidth > 0 && (
        <>
          <Svg
            width={chartWidth}
            height={height}
            viewBox={`0 0 ${chartWidth} ${height}`}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <Path
              d={pathD}
              fill="none"
              stroke={LINE_COLOR}
              strokeWidth={1}
              strokeDasharray="6 4"
              strokeLinecap="round"
            />
          </Svg>

          {activePoint && activeData && (
            <>
              <View
                style={{
                  position: "absolute",
                  left: activePx - 8,
                  top: activePy - 8,
                }}
                pointerEvents="none"
              >
                <IndicatorDots count={1} activeIndex={0} />
              </View>

              <View
                style={{
                  position: "absolute",
                  left: activePx,
                  top: activePy - 12,
                  transform: [{ translateX: -40 }, { translateY: -64 }],
                }}
                pointerEvents="none"
              >
                <Tooltip title={tooltipDate} description={formatValue(activeData.value)} placement="top-center" />
              </View>
            </>
          )}

          {/* Tap targets */}
          {points.map((p, i) => {
            const px = p.x * chartWidth
            const py = (1 - p.y) * height
            return (
              <Pressable
                key={i}
                style={{
                  position: "absolute",
                  left: px - 16,
                  top: py - 16,
                  width: 32,
                  height: 32,
                }}
                onPress={() => onPointPress(i)}
              />
            )
          })}
        </>
      )}
    </View>
  )
}
