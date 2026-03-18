import React from "react"
import { Platform, View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

export interface ChartDataItem {
  label: string
  expense: number
  income: number
}

export interface IncomeExpenseChartProps extends ViewProps {
  data: ChartDataItem[]
  maxValue?: number
  className?: string
  formatValue?: (value: number) => string
}

const DEFAULT_Y_TICKS = [2000, 1000, 500, 100, 0]
const BAR_AREA_HEIGHT = 170

const EXPENSE_GRADIENT = Platform.OS === "web" ? "linear-gradient(180deg, #fecdd3, #fda4af)" : undefined

const INCOME_GRADIENT = Platform.OS === "web" ? "linear-gradient(180deg, #aceee5, #84fab0)" : undefined

function BarFill({ height, type }: { height: number; type: "expense" | "income" }) {
  const gradient = type === "expense" ? EXPENSE_GRADIENT : INCOME_GRADIENT
  const fallbackColor = type === "expense" ? "#fda4af" : "#84fab0"

  return (
    <View
      className="flex-1 rounded-md"
      style={[
        { height },
        Platform.OS === "web" ? ({ backgroundImage: gradient } as any) : { backgroundColor: fallbackColor },
      ]}
    />
  )
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

export function IncomeExpenseChart({ data, maxValue, className, formatValue, ...props }: IncomeExpenseChartProps) {
  const resolvedMax = maxValue ?? Math.max(...data.flatMap((d) => [d.expense, d.income]), ...DEFAULT_Y_TICKS)

  const yTicks = maxValue ? generateTicks(maxValue) : DEFAULT_Y_TICKS

  const format = formatValue ?? ((v: number) => `${v}$`)

  const barHeight = (value: number) => (resolvedMax > 0 ? (value / resolvedMax) * BAR_AREA_HEIGHT : 0)

  return (
    <View className={cn("rounded-2xl p-xl", className)} {...props}>
      {/* Chart area */}
      <View style={{ paddingVertical: 3 }}>
        <View className="gap-xxs">
          {/* Y-axis grid + bar overlay */}
          <View style={{ position: "relative" }}>
            {/* Grid lines with labels */}
            <View className="gap-3xl">
              {yTicks.map((tick, i) => {
                const isBase = i === yTicks.length - 1
                return (
                  <View key={tick} className="flex-row items-center gap-sm">
                    <Typography size="tiny" weight="regular" className="text-tertiary" style={{ minWidth: 40 }}>
                      {format(tick)}
                    </Typography>
                    <GridLine isDashed={!isBase} />
                  </View>
                )
              })}
            </View>

            {/* Bars overlaid on the grid */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 46,
                right: 0,
                height: BAR_AREA_HEIGHT,
              }}
              className="flex-row gap-lg px-xl"
            >
              {data.map((item) => (
                <View
                  key={item.label}
                  className="flex-1 flex-row items-end gap-xxs"
                  style={{ height: BAR_AREA_HEIGHT }}
                >
                  <BarFill height={barHeight(item.expense)} type="expense" />
                  <BarFill height={barHeight(item.income)} type="income" />
                </View>
              ))}
            </View>
          </View>

          {/* X-axis date labels */}
          <View className="flex-row items-center" style={{ justifyContent: "space-around", paddingRight: 20 }}>
            {data.map((item) => (
              <Typography key={item.label} size="tiny" weight="regular" className="text-tertiary">
                {item.label}
              </Typography>
            ))}
          </View>
        </View>
      </View>

      {/* Legend */}
      <View className="flex-row items-center justify-center gap-5xl" style={{ marginTop: 16 }}>
        <LegendItem type="expense" label="Expense" />
        <LegendItem type="income" label="Income" />
      </View>
    </View>
  )
}

function LegendItem({ type, label }: { type: "expense" | "income"; label: string }) {
  const gradient = type === "expense" ? EXPENSE_GRADIENT : INCOME_GRADIENT
  const fallbackColor = type === "expense" ? "#fda4af" : "#84fab0"

  return (
    <View className="flex-row items-center gap-sm">
      <View
        className="rounded-xxs"
        style={[
          { width: 16, height: 16 },
          Platform.OS === "web" ? ({ backgroundImage: gradient } as any) : { backgroundColor: fallbackColor },
        ]}
      />
      <Typography size="caption" weight="regular" className="text-primary">
        {label}
      </Typography>
    </View>
  )
}

function generateTicks(max: number): number[] {
  const step = Math.ceil(max / 4)
  const ticks: number[] = []
  for (let i = 4; i >= 0; i--) {
    ticks.push(step * i)
  }
  return ticks
}
