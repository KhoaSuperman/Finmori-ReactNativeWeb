import { cva, type VariantProps } from "class-variance-authority"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { Button } from "./Button"
import { Typography } from "./Typography"

const sectionTitleVariants = cva("flex-row items-center px-xl py-md gap-lg", {
  variants: {
    type: {
      standard: "",
      caplock: "",
    },
  },
  defaultVariants: {
    type: "standard",
  },
})

type SectionTitleType = NonNullable<
  VariantProps<typeof sectionTitleVariants>["type"]
>

interface SectionTitleProps
  extends ViewProps,
    VariantProps<typeof sectionTitleVariants> {
  title: string
  actionLabel?: string
  actionIcon?: React.ReactNode
  onAction?: () => void
  className?: string
}

export function SectionTitle({
  type = "standard",
  title,
  actionLabel,
  actionIcon,
  onAction,
  className,
  ...props
}: SectionTitleProps) {
  const displayTitle = type === "caplock" ? title.toUpperCase() : title

  return (
    <View
      className={cn(sectionTitleVariants({ type }), className)}
      {...props}
    >
      <Typography
        size="body"
        weight="semibold"
        className="flex-1 text-secondary"
        numberOfLines={1}
      >
        {displayTitle}
      </Typography>
      {actionLabel && (
        <Button
          variant="link-color"
          label={actionLabel}
          iconLeft={actionIcon}
          onPress={onAction}
        />
      )}
    </View>
  )
}

export { sectionTitleVariants, type SectionTitleProps, type SectionTitleType }
