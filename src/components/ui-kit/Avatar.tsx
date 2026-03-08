import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { MediaSlot, type MediaSlotProps } from "./MediaSlot"

const OUTER_SIZE = 80
const INNER_SIZE = 74
const SQUARE_RADIUS = 12

const avatarVariants = cva("items-center justify-center overflow-hidden bg-tertiary", {
  variants: {
    form: {
      circle: "rounded-full",
      square: "",
    },
  },
  defaultVariants: {
    form: "circle",
  },
})

interface AvatarBaseProps extends ViewProps, VariantProps<typeof avatarVariants> {
  size?: number
  className?: string
}

type AvatarProps = AvatarBaseProps & Omit<MediaSlotProps, "size" | "className">

export function Avatar({ form = "circle", size = OUTER_SIZE, className, ...mediaProps }: AvatarProps) {
  const scale = size / OUTER_SIZE
  const innerSize = Math.round(INNER_SIZE * scale)
  const outerRadius = form === "circle" ? 9999 : Math.round(SQUARE_RADIUS * scale)
  const innerRadius = form === "circle" ? 9999 : Math.round(SQUARE_RADIUS * scale)

  return (
    <View
      className={cn(avatarVariants({ form }), className)}
      style={{ width: size, height: size, borderRadius: outerRadius }}
    >
      <View
        style={{
          width: innerSize,
          height: innerSize,
          borderRadius: innerRadius,
          overflow: "hidden",
        }}
      >
        <MediaSlot {...(mediaProps as MediaSlotProps)} size={innerSize} />
      </View>
    </View>
  )
}

export { avatarVariants, type AvatarProps }

