import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { cardTypeSvgMap, type CardType } from "./card-type-icons/card-type-svgs"

const SIZE_MAP = {
  sm: { width: 36, height: 24 },
  md: { width: 54, height: 36 },
  lg: { width: 72, height: 48 },
} as const

const iconCardTypeVariants = cva("overflow-hidden rounded-sm", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const CARD_BG: Record<CardType, string> = {
  visa: "#1A1F71",
  mastercard: "#1D1D1B",
  amex: "#006FCF",
}

export interface IconCardTypeProps extends ViewProps, VariantProps<typeof iconCardTypeVariants> {
  type: CardType
  className?: string
}

export function IconCardType({ type, size = "md", className, ...rest }: IconCardTypeProps) {
  const SvgComponent = cardTypeSvgMap[type]
  if (!SvgComponent) return null

  const dimensions = SIZE_MAP[size ?? "md"]

  return (
    <View
      className={cn(iconCardTypeVariants({ size }), className)}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      {...rest}
    >
      <SvgComponent width={dimensions.width} height={dimensions.height} />
    </View>
  )
}

export { cardTypeSvgMap, iconCardTypeVariants, type CardType }

