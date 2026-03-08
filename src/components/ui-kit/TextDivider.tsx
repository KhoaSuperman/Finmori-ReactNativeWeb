import { cva, type VariantProps } from "class-variance-authority"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const textDividerVariants = cva("flex-row items-center px-xl py-md", {
  variants: {
    type: {
      "text-line": "gap-lg",
      "text-colored": "bg-secondary",
    },
  },
  defaultVariants: {
    type: "text-line",
  },
})

type TextDividerType = NonNullable<VariantProps<typeof textDividerVariants>["type"]>

interface TextDividerProps extends ViewProps, VariantProps<typeof textDividerVariants> {
  label: string
  className?: string
}

export function TextDivider({ type = "text-line", label, className, ...props }: TextDividerProps) {
  return (
    <View className={cn(textDividerVariants({ type }), className)} {...props}>
      <Typography size="body-small" weight="semibold" className="text-secondary">
        {label}
      </Typography>
      {type === "text-line" && <View className="flex-1 border-t border-tertiary" />}
    </View>
  )
}

export { textDividerVariants, type TextDividerProps, type TextDividerType }
