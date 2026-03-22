import { View, type ViewProps } from "react-native"
import Svg, { Defs, Line, Pattern, Rect } from "react-native-svg"

import { cn } from "@/lib/cn"

// Diagonal stripe pattern derived from the Figma vector network:
// vertices alternate between (x, 0) and (x - 8.79, 7.34), forming
// white diagonal lines at ~40° across the gray track background.
// Pattern tile: 8.74px wide × 7.34px tall, stripe at ~40° angle.
const STRIPE_TILE_W = 8.74
const STRIPE_TILE_H = 7.34

export interface ProgressBarWithControllerProps extends ViewProps {
  /** Progress value from 0 to 100 */
  value: number
  withController?: boolean
  className?: string
}

export function ProgressBarWithController({
  value,
  withController = true,
  className,
  style,
  ...props
}: ProgressBarWithControllerProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <View className={cn("h-4 w-full justify-center", className)} style={style} {...props}>
      {/* Track background with diagonal stripe pattern */}
      <View className="h-2 w-full overflow-hidden rounded-full" style={{ position: "relative" }}>
        <Svg width="100%" height="8" style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <Defs>
            <Pattern
              id="stripes"
              x="0"
              y="0"
              width={STRIPE_TILE_W}
              height={STRIPE_TILE_H}
              patternUnits="userSpaceOnUse"
            >
              {/* Diagonal line from top-right to bottom-left within the tile */}
              <Line
                x1={STRIPE_TILE_W}
                y1="0"
                x2="0"
                y2={STRIPE_TILE_H}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Wrap-around continuation so the pattern tiles seamlessly */}
              <Line
                x1={STRIPE_TILE_W * 2}
                y1="0"
                x2={STRIPE_TILE_W}
                y2={STRIPE_TILE_H}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </Pattern>
          </Defs>
          {/* Gray background */}
          <Rect width="100%" height="8" fill="#D5D9EB" />
          {/* Stripe overlay */}
          <Rect width="100%" height="8" fill="url(#stripes)" />
        </Svg>
      </View>

      {/* Progress fill + controller dot — absolutely positioned */}
      <View
        className="absolute inset-0 flex-row items-center"
        style={{ width: `${clampedValue}%` as unknown as number }}
        pointerEvents="none"
      >
        {/* Progress fill bar */}
        <View className="h-2 flex-1 rounded-full bg-green-light-500" style={{ marginRight: -8 }} />
        {withController && (
          <>
            {/* Controller dot */}
            <View
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: "#66C61C",
                borderWidth: 1,
                borderColor: "#EAECF5",
                shadowColor: "#0A0D12",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 2,
                flexShrink: 0,
              }}
            />
          </>
        )}
      </View>
    </View>
  )
}
