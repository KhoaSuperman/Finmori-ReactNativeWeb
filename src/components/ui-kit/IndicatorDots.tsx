import { cva, type VariantProps } from "class-variance-authority"
import { View, type ViewProps } from "react-native"

import { IndicatorDotActiveIcon } from "@/components/icons/IndicatorDotActiveIcon"
import { cn } from "@/lib/cn"

const indicatorDotsVariants = cva("flex-row items-center", {
  variants: {
    gap: {
      sm: "gap-xs",
      md: "gap-md",
    },
  },
  defaultVariants: {
    gap: "sm",
  },
})

const DOT_ACTIVE_COLOR = "#1A45E6"
const DOT_INACTIVE_COLOR = "#1A45E6"
const DOT_INACTIVE_OPACITY = 0.3

export interface IndicatorDotsProps extends ViewProps, VariantProps<typeof indicatorDotsVariants> {
  count: number
  activeIndex?: number
  activeColor?: string
  inactiveColor?: string
  className?: string
}

export function IndicatorDots({
  count,
  activeIndex = 0,
  activeColor = DOT_ACTIVE_COLOR,
  inactiveColor = DOT_INACTIVE_COLOR,
  gap,
  className,
  style,
  ...props
}: IndicatorDotsProps) {
  return (
    <View className={cn(indicatorDotsVariants({ gap }), className)} style={style} {...props}>
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === activeIndex
        if (isActive) {
          return <IndicatorDotActiveIcon key={i} size={16} color={activeColor} />
        }
        return (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: inactiveColor,
              opacity: DOT_INACTIVE_OPACITY,
            }}
          />
        )
      })}
    </View>
  )
}

export { indicatorDotsVariants }
export type IndicatorDotsVariants = VariantProps<typeof indicatorDotsVariants>
