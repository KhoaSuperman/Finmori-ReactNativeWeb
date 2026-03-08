import { Pressable, View, type ViewProps } from "react-native"

import { AltArrowRightIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Chip, type ChipTendancy } from "./Chip"
import { Typography } from "./Typography"

interface RecapCardProps extends ViewProps {
  title: string
  amount: string
  chipLabel: string
  tendancy?: ChipTendancy
  onPress?: () => void
  className?: string
}

export function RecapCard({
  title,
  amount,
  chipLabel,
  tendancy = "positive",
  onPress,
  className,
  ...props
}: RecapCardProps) {
  const content = (
    <View
      className={cn(
        "gap-md rounded-2xl border border-secondary bg-primary p-xl",
        className,
      )}
      {...props}
    >
      <View className="flex-row items-center">
        <Typography size="body-small" weight="semibold" className="flex-1 text-secondary">
          {title}
        </Typography>
        <AltArrowRightIcon size={16} color="#3E4784" />
      </View>

      <Typography size="body" weight="semibold" className="text-primary">
        {amount}
      </Typography>

      <Chip tendancy={tendancy} label={chipLabel} className="self-start" />
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
