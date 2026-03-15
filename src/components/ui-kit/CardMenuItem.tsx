import React from "react"
import { Pressable, View } from "react-native"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const cardMenuItemIconVariants = cva(
  "h-[72px] w-[72px] items-center justify-center rounded-xl p-2",
  {
    variants: {
      selected: {
        true: "bg-brand-primary border border-brand",
        false: "bg-primary",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
)

export interface CardMenuItemProps extends VariantProps<typeof cardMenuItemIconVariants> {
  label: string
  icon: React.ReactNode
  selected?: boolean
  onPress?: () => void
  className?: string
}

export function CardMenuItem({
  label,
  icon,
  selected = false,
  onPress,
  className,
}: CardMenuItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "max-w-[144px] items-center gap-2 p-2",
        onPress && "active:opacity-70",
        className,
      )}
    >
      <View
        className={cardMenuItemIconVariants({ selected })}
        style={{
          shadowColor: "#0a0d12",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {icon}
      </View>
      <Typography
        size="body-small"
        weight={selected ? "semibold" : "medium"}
        className={selected ? "text-primary" : "text-secondary"}
        numberOfLines={1}
      >
        {label}
      </Typography>
    </Pressable>
  )
}
