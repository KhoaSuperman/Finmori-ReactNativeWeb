import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

const iconFrameVariants = cva(
  "items-center justify-center rounded-full border border-secondary bg-primary",
  {
    variants: {
      size: {
        sm: "h-6 w-6 p-xs",
        md: "h-8 w-8 p-md",
        lg: "h-10 w-10 p-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

const ICON_SIZE_MAP = {
  sm: 12,
  md: 16,
  lg: 20,
} as const

interface IconFrameProps extends ViewProps, VariantProps<typeof iconFrameVariants> {
  icon: (props: { size: number; color: string }) => React.ReactNode
  iconColor?: string
  className?: string
}

export function IconFrame({
  icon,
  iconColor,
  size = "md",
  className,
  ...props
}: IconFrameProps) {
  const resolvedSize = size ?? "md"
  const iconSize = ICON_SIZE_MAP[resolvedSize]

  return (
    <View className={cn(iconFrameVariants({ size }), className)} {...props}>
      {icon({ size: iconSize, color: iconColor ?? "#101323" })}
    </View>
  )
}

export { iconFrameVariants, type IconFrameProps }
