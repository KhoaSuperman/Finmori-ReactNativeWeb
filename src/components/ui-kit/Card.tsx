import { cva, type VariantProps } from "class-variance-authority"
import { View, Text, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

const cardVariants = cva("rounded-2xl p-4", {
  variants: {
    variant: {
      elevated: "bg-surface-elevated shadow-md shadow-black/10",
      outlined: "bg-surface border border-border",
      filled: "bg-surface-muted",
    },
  },
  defaultVariants: {
    variant: "elevated",
  },
})

interface CardProps extends ViewProps, VariantProps<typeof cardVariants> {
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

export function Card({ title, subtitle, children, variant, className, ...props }: CardProps) {
  return (
    <View className={cn(cardVariants({ variant }), className)} {...props}>
      {title && <Text className="text-content text-lg font-semibold">{title}</Text>}
      {subtitle && <Text className="text-content-secondary mt-1 text-sm">{subtitle}</Text>}
      {children && <View className="mt-3">{children}</View>}
    </View>
  )
}
