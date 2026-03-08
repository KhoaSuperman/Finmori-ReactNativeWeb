import React from "react"
import { View, type ViewProps } from "react-native"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

import { paymentMethodSvgMap } from "./payment-method-icons/payment-method-svgs"

const SIZE_MAP = {
  sm: { width: 32, height: 22 },
  md: { width: 44, height: 30 },
  lg: { width: 58, height: 40 },
} as const

const iconPaymentMethodVariants = cva("overflow-hidden", {
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

export type PaymentMethod = keyof typeof paymentMethodSvgMap

export interface IconPaymentMethodProps
  extends ViewProps,
    VariantProps<typeof iconPaymentMethodVariants> {
  method: PaymentMethod
  className?: string
}

export function IconPaymentMethod({
  method,
  size = "md",
  className,
  ...rest
}: IconPaymentMethodProps) {
  const SvgComponent = paymentMethodSvgMap[method]
  if (!SvgComponent) return null

  const dimensions = SIZE_MAP[size ?? "md"]

  return (
    <View
      className={cn(iconPaymentMethodVariants({ size }), className)}
      style={{ width: dimensions.width, height: dimensions.height }}
      {...rest}
    >
      <SvgComponent width={dimensions.width} height={dimensions.height} />
    </View>
  )
}

export { iconPaymentMethodVariants }
export { paymentMethodSvgMap }
