import { Pressable, View, type ViewProps } from "react-native"

import { ChevronRightOutlinedIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

export type RecapCardStatus = "default" | "success" | "critical"

interface RecapCardProps extends ViewProps {
  title: string
  value: string
  status?: RecapCardStatus
  onPress?: () => void
  className?: string
}

const valueColorMap: Record<RecapCardStatus, string> = {
  default: "text-primary",
  success: "text-success",
  critical: "text-error",
}

export function RecapCard({
  title,
  value,
  status = "default",
  onPress,
  className,
  ...props
}: RecapCardProps) {
  const content = (
    <View
      className={cn("rounded-2xl bg-gray-light-50 p-lg gap-xs", className)}
      {...props}
    >
      <View className="flex-row items-center">
        <Typography
          size="body-small"
          weight="regular"
          className="flex-1 text-tertiary"
          numberOfLines={1}
        >
          {title}
        </Typography>
        <ChevronRightOutlinedIcon size={20} color="var(--color-fg-tertiary)" />
      </View>

      <Typography
        size="h1"
        weight="regular"
        className={cn("font-display tracking-tighter", valueColorMap[status])}
        numberOfLines={1}
      >
        {value}
      </Typography>
    </View>
  )

  if (onPress) {
    return (
      <Pressable onPress={onPress} accessibilityRole="button" className="active:opacity-80">
        {content}
      </Pressable>
    )
  }

  return content
}

export type { RecapCardProps }
