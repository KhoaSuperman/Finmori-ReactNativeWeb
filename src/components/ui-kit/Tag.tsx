import { cva, type VariantProps } from "class-variance-authority"
import { Pressable, View, type PressableProps, type ViewProps } from "react-native"

import { XOutlinedIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const tagVariants = cva(
  "flex-row items-center self-start rounded-full border px-md py-xxs gap-xs",
  {
    variants: {
      color: {
        black: "bg-utility-gray-100 border-utility-gray-200",
        red: "bg-utility-error-100 border-utility-error-300",
        yellow: "bg-utility-warning-100 border-utility-warning-300",
        green: "bg-utility-success-100 border-utility-success-400",
        blue: "bg-utility-blue-dark-50 border-utility-blue-dark-300",
        purple: "bg-utility-purple-100 border-utility-purple-300",
        cyan: "bg-utility-blue-light-100 border-utility-blue-400",
        pink: "bg-utility-pink-100 border-utility-pink-300",
      },
    },
    defaultVariants: {
      color: "black",
    },
  }
)

type TagColor = NonNullable<VariantProps<typeof tagVariants>["color"]>

const tagTextColor: Record<TagColor, string> = {
  black: "text-utility-gray-800",
  red: "text-utility-error-600",
  yellow: "text-utility-warning-600",
  green: "text-utility-success-600",
  blue: "text-utility-blue-dark-700",
  purple: "text-utility-purple-600",
  cyan: "text-utility-blue-light-600",
  pink: "text-utility-pink-600",
}

interface TagProps extends ViewProps, VariantProps<typeof tagVariants> {
  label: string
  onDismiss?: () => void
  className?: string
}

export function Tag({ color = "black", label, onDismiss, className, ...props }: TagProps) {
  const resolvedColor = color ?? "black"

  return (
    <View className={cn(tagVariants({ color: resolvedColor }), className)} {...props}>
      <Typography
        size="tiny"
        weight="medium"
        className={tagTextColor[resolvedColor]}
      >
        {label}
      </Typography>
      {onDismiss != null && (
        <Pressable onPress={onDismiss} hitSlop={4}>
          <XOutlinedIcon size={12} color="#4E5BA6" />
        </Pressable>
      )}
    </View>
  )
}

export { tagVariants, type TagColor, type TagProps }
