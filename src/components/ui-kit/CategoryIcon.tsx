import React from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

interface CategoryIconProps extends ViewProps {
  icon: React.ReactNode
  className?: string
}

export function CategoryIcon({ icon, className, ...props }: CategoryIconProps) {
  return (
    <View
      className={cn(
        "border-utility-gray-200 h-8 w-8 items-center justify-center rounded-full border bg-primary",
        className,
      )}
      {...props}
    >
      {icon}
    </View>
  )
}

export type { CategoryIconProps }
