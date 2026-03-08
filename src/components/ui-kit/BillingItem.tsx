import React from "react"
import { Pressable, View, type ViewProps } from "react-native"

import { MoreVerticalIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Avatar } from "./Avatar"
import type { MediaSlotProps } from "./MediaSlot"
import { Typography } from "./Typography"

const DEFAULT_AVATAR: MediaSlotProps = { variant: "letter", text: "?" }

interface BillingItemProps extends ViewProps {
  label: string
  price: string
  period?: string
  subtitle?: string
  onMenuPress?: () => void
  avatarProps?: MediaSlotProps
  className?: string
}

export function BillingItem({
  label,
  price,
  period,
  subtitle,
  onMenuPress,
  avatarProps = DEFAULT_AVATAR,
  className,
  ...props
}: BillingItemProps) {
  return (
    <View
      className={cn("rounded-xl border border-secondary bg-primary shadow-xs", className)}
      style={{ width: 180 }}
      {...props}
    >
      <View className="gap-xl p-lg">
        {/* Icon and Menu */}
        <View className="flex-row items-center justify-between">
          <Avatar form="circle" size={36} {...avatarProps} />
          <Pressable
            onPress={onMenuPress}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="More options"
          >
            <MoreVerticalIcon size={24} color="#363F72" />
          </Pressable>
        </View>

        {/* Trailing Element */}
        <View className="gap-xs">
          <Typography
            size="body"
            weight="medium"
            className="text-primary"
            numberOfLines={2}
          >
            {label}
          </Typography>

          {(price || period) && (
            <View className="flex-row items-center gap-xs">
              <Typography size="body-small" weight="semibold" className="text-primary">
                {price}
              </Typography>
              {period && (
                <Typography size="caption" className="text-secondary">
                  {period}
                </Typography>
              )}
            </View>
          )}

          {subtitle && (
            <Typography size="caption" className="text-secondary">
              {subtitle}
            </Typography>
          )}
        </View>
      </View>
    </View>
  )
}

export type { BillingItemProps }
