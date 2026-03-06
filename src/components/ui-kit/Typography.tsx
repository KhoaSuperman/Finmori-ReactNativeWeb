import { cva, type VariantProps } from "class-variance-authority"
import { Text, type TextProps } from "react-native"

import { cn } from "@/lib/cn"

const typographyVariants = cva("text-primary", {
  variants: {
    size: {
      "display-xl": "font-display text-display-xl tracking-tighter",
      display: "font-display text-display tracking-tighter",
      h1: "font-body text-h1 tracking-tighter",
      h2: "font-body text-h2 tracking-tighter",
      h3: "font-body text-h3",
      body: "font-body text-body",
      "body-small": "font-body text-body-small",
      caption: "font-body text-caption",
      tiny: "font-body text-tiny",
      "number-lg": "font-number text-display",
      "number-sm": "font-number text-h3",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "body",
    weight: "regular",
  },
})

type TypographySize = NonNullable<VariantProps<typeof typographyVariants>["size"]>
type TypographyWeight = NonNullable<VariantProps<typeof typographyVariants>["weight"]>

interface TypographyProps extends TextProps, VariantProps<typeof typographyVariants> {
  children?: React.ReactNode
}

export function Typography({ size, weight, className, children, ...props }: TypographyProps) {
  return (
    <Text className={cn(typographyVariants({ size, weight }), className)} {...props}>
      {children}
    </Text>
  )
}

export { typographyVariants, type TypographySize, type TypographyWeight }
