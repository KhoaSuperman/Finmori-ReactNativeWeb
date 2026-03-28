import React from "react"
import { View, type ViewProps } from "react-native"

import { CameraOutlineIcon } from "@/components/icons/CameraOutlineIcon"
import { cn } from "@/lib/cn"

import { Avatar } from "./Avatar"
import { type MediaSlotProps } from "./MediaSlot"

interface AvatarWithIconProps extends ViewProps {
  /** Media content for the avatar (image, letter, or icon variant) */
  avatarProps: MediaSlotProps
  /** Size of the avatar in pixels (default 80) */
  size?: number
  /** Custom icon rendered inside the action badge. Defaults to CameraOutlineIcon. */
  icon?: React.ReactNode
  className?: string
}

/**
 * Avatar with an absolutely-positioned action badge (camera icon by default)
 * anchored to the bottom-right corner.
 */
export function AvatarWithIcon({
  avatarProps,
  size = 80,
  icon,
  className,
  style,
  ...viewProps
}: AvatarWithIconProps) {
  const badgeSize = Math.round(32 * (size / 80))
  const iconSize = Math.round(16 * (size / 80))

  return (
    <View
      className={cn("relative", className)}
      style={[{ width: size, height: size }, style]}
      {...viewProps}
    >
      <Avatar size={size} form="circle" {...avatarProps} />

      {/* Action badge — absolutely positioned at bottom-right */}
      <View
        className="absolute items-center justify-center overflow-hidden rounded-full bg-base-white p-xs"
        style={{
          width: badgeSize,
          height: badgeSize,
          bottom: 0,
          right: 0,
          shadowColor: "#0a0d12",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 4 },
          elevation: 4,
        }}
      >
        {icon ?? <CameraOutlineIcon size={iconSize} color="#101323" />}
      </View>
    </View>
  )
}

export type { AvatarWithIconProps }
