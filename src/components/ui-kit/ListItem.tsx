import React from "react"
import { Pressable, View, type ViewProps } from "react-native"

import { AltArrowRightIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

interface ListItemProps extends ViewProps {
  label: string
  helpText?: string
  value?: string
  icon?: React.ReactNode
  showChevron?: boolean
  onPress?: () => void
  className?: string
}

export function ListItem({
  label,
  helpText,
  value,
  icon,
  showChevron = true,
  onPress,
  className,
  ...props
}: ListItemProps) {
  const Container = onPress ? Pressable : View

  return (
    <Container
      onPress={onPress}
      className={cn(
        "flex-row items-center gap-lg rounded-md border border-tertiary bg-primary px-xl py-lg",
        onPress && "active:opacity-70",
        className,
      )}
      {...(props as ViewProps)}
    >
      {/* Icon + Content */}
      <View className="flex-1 flex-row items-start gap-lg">
        {icon && (
          <View className="h-6 w-6 items-center justify-center rounded-sm">{icon}</View>
        )}

        <View className="flex-1 gap-xs">
          <Typography size="body" className="text-primary">
            {label}
          </Typography>
          {helpText && (
            <Typography size="body-small" className="text-tertiary">
              {helpText}
            </Typography>
          )}
        </View>
      </View>

      {/* Suffix */}
      {(value || showChevron) && (
        <View className="flex-row items-center gap-lg">
          {value && (
            <Typography size="body" weight="medium" className="text-primary">
              {value}
            </Typography>
          )}
          {showChevron && <AltArrowRightIcon size={16} color="#3E4784" />}
        </View>
      )}
    </Container>
  )
}

export type { ListItemProps }
