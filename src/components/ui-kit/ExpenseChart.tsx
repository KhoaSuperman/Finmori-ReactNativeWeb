import React, { useMemo } from "react"
import { View, type ViewProps } from "react-native"
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from "react-native-svg"

import {
  IllustrativeEntertainmentIcon,
  IllustrativeGroceryIcon,
  IllustrativeHealthIcon,
  IllustrativeMealIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
  IllustrativeTransportIcon,
} from "@/components/icons"
import { cn } from "@/lib/cn"

import { CategoryIcon } from "./CategoryIcon"

export interface ExpenseCategory {
  id: string
  label: string
  value: number
  gradient: [string, string]
  icon: React.ReactNode
}

export interface ExpenseChartProps extends ViewProps {
  categories: ExpenseCategory[]
  size?: number
  className?: string
}

const DEFAULT_CATEGORIES: ExpenseCategory[] = [
  {
    id: "meals",
    label: "Meals",
    value: 5.74,
    gradient: ["#ff7a00", "#ffd439"],
    icon: <IllustrativeMealIcon size={24} />,
  },
  {
    id: "groceries",
    label: "Groceries",
    value: 8.77,
    gradient: ["#f49062", "#fd371f"],
    icon: <IllustrativeGroceryIcon size={24} />,
  },
  {
    id: "rent",
    label: "Rent",
    value: 12.09,
    gradient: ["#ffd3a5", "#fd6585"],
    icon: <IllustrativeRentIcon size={24} />,
  },
  {
    id: "shopping",
    label: "Shopping",
    value: 15.19,
    gradient: ["#ffd1ff", "#fad0c4"],
    icon: <IllustrativeShoppingIcon size={24} />,
  },
  {
    id: "fun",
    label: "Fun",
    value: 18.04,
    gradient: ["#ce9ffc", "#7367f0"],
    icon: <IllustrativeEntertainmentIcon size={24} />,
  },
  {
    id: "transport",
    label: "Transport",
    value: 17.31,
    gradient: ["#f093fb", "#f5576c"],
    icon: <IllustrativeTransportIcon size={24} />,
  },
  {
    id: "health",
    label: "Health",
    value: 22.93,
    gradient: ["#ff9de4", "#ffeaf6"],
    icon: <IllustrativeHealthIcon size={24} />,
  },
]

const INDICATOR_COLOR = "#d5d9eb"
const BG_RING_COLOR = "#FFFFFF"

function polarToCartesian(cx: number, cy: number, r: number, angleRad: number) {
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  }
}

function describeArc(cx: number, cy: number, outerR: number, innerR: number, startAngle: number, endAngle: number) {
  const sweep = endAngle - startAngle
  const largeArc = sweep > Math.PI ? 1 : 0

  const outerStart = polarToCartesian(cx, cy, outerR, startAngle)
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle)
  const innerStart = polarToCartesian(cx, cy, innerR, endAngle)
  const innerEnd = polarToCartesian(cx, cy, innerR, startAngle)

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ")
}

export function ExpenseChart({ categories = DEFAULT_CATEGORIES, size = 240, className, ...props }: ExpenseChartProps) {
  const ringSize = (size * 160) / 240
  const ringOffset = (size * 40) / 240
  const outerR = ringSize / 2
  const innerR = outerR * 0.5
  const cx = ringOffset + outerR
  const cy = ringOffset + outerR

  const total = useMemo(() => categories.reduce((s, c) => s + c.value, 0), [categories])

  const arcs = useMemo(() => {
    const startAngle = -Math.PI / 2
    let currentAngle = startAngle
    return categories.map((cat) => {
      const sweep = (cat.value / total) * 2 * Math.PI
      const arc = {
        ...cat,
        startAngle: currentAngle,
        endAngle: currentAngle + sweep,
        midAngle: currentAngle + sweep / 2,
      }
      currentAngle += sweep
      return arc
    })
  }, [categories, total])

  const iconPositions = useMemo(() => {
    const iconDistance = (size / 2) * 0.92
    const iconSize = (size * 32) / 240
    return arcs.map((arc) => {
      const pos = polarToCartesian(size / 2, size / 2, iconDistance, arc.midAngle)
      return {
        x: pos.x - iconSize / 2,
        y: pos.y - iconSize / 2,
        iconSize,
        centerX: pos.x,
        centerY: pos.y,
      }
    })
  }, [arcs, size])

  return (
    <View style={{ width: size, height: size }} className={cn("relative", className)} {...props}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          {arcs.map((arc, i) => {
            const angle = ((arc.midAngle + Math.PI / 2) * 180) / Math.PI
            return (
              <LinearGradient
                key={arc.id}
                id={`grad-${arc.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                gradientTransform={`rotate(${angle}, 0.5, 0.5)`}
              >
                <Stop offset="0%" stopColor={arc.gradient[0]} />
                <Stop offset="100%" stopColor={arc.gradient[1]} />
              </LinearGradient>
            )
          })}
        </Defs>

        {/* Indicator lines from center to icon positions */}
        {iconPositions.map((pos, i) => (
          <Path
            key={`indicator-${arcs[i].id}`}
            d={`M ${cx} ${cy} L ${pos.centerX} ${pos.centerY}`}
            stroke={INDICATOR_COLOR}
            strokeWidth={1}
            fill="none"
          />
        ))}

        {/* Background ring */}
        <Circle cx={cx} cy={cy} r={outerR} fill={BG_RING_COLOR} />
        <Circle cx={cx} cy={cy} r={innerR} fill={BG_RING_COLOR} />

        {/* Category arcs */}
        {arcs.map((arc) => (
          <Path
            key={arc.id}
            d={describeArc(cx, cy, outerR, innerR, arc.startAngle, arc.endAngle)}
            fill={`url(#grad-${arc.id})`}
          />
        ))}

        {/* Inner white circle to create donut hole */}
        <Circle cx={cx} cy={cy} r={innerR} fill={BG_RING_COLOR} />
      </Svg>

      {/* Category icons */}
      {arcs.map((arc, i) => {
        const pos = iconPositions[i]
        return (
          <View
            key={`icon-${arc.id}`}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: pos.iconSize,
              height: pos.iconSize,
            }}
          >
            <CategoryIcon icon={arc.icon} />
          </View>
        )
      })}
    </View>
  )
}

export { DEFAULT_CATEGORIES }
