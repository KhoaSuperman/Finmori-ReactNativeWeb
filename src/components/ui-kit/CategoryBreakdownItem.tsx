import React from "react"
import { View } from "react-native"

import { cn } from "@/lib/cn"

import { CategoryIcon } from "./CategoryIcon"
import { Typography } from "./Typography"

interface CategoryBreakdownItemProps {
  icon: React.ReactNode
  percentage: string
  categoryName: string
  amount: string
  showDivider?: boolean
  className?: string
}

export function CategoryBreakdownItem({
  icon,
  percentage,
  categoryName,
  amount,
  showDivider = true,
  className,
}: CategoryBreakdownItemProps) {
  return (
    <View className={cn("w-full", className)}>
      <View className="flex-row items-center gap-3xl py-lg">
        <View className="flex-1 flex-row items-center gap-md">
          <CategoryIcon icon={icon} />
          <Typography size="body" weight="semibold" className="text-primary">
            {percentage}
          </Typography>
          <Typography size="body-small" className="text-secondary">
            {categoryName}
          </Typography>
        </View>
        <Typography size="body" weight="semibold" className="text-primary">
          {amount}
        </Typography>
      </View>
      {showDivider && (
        <View className="h-px w-full bg-transparent border-b border-tertiary" />
      )}
    </View>
  )
}

export type { CategoryBreakdownItemProps }
