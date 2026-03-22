import { cva, type VariantProps } from "class-variance-authority"
import { View, type ViewProps } from "react-native"

import { ArrowRightDownIcon, ArrowRightUpIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const chipVariants = cva("flex-row items-center gap-xs rounded-full px-sm py-sm", {
  variants: {
    tendancy: {
      positive: "bg-success",
      negative: "bg-error",
    },
  },
  defaultVariants: {
    tendancy: "positive",
  },
})

type ChipTendancy = NonNullable<VariantProps<typeof chipVariants>["tendancy"]>

const tendancyTextColor: Record<ChipTendancy, string> = {
  positive: "text-success",
  negative: "text-error",
}

const tendancyIconColor: Record<ChipTendancy, string> = {
  positive: "#079455",
  negative: "#D92D20",
}

const TendancyIcon: Record<ChipTendancy, typeof ArrowRightUpIcon> = {
  positive: ArrowRightUpIcon,
  negative: ArrowRightDownIcon,
}

interface ChipProps extends ViewProps, VariantProps<typeof chipVariants> {
  label: string
  className?: string
}

export function Chip({ tendancy = "positive", label, className, ...props }: ChipProps) {
  const resolvedTendancy = tendancy ?? "positive"
  const Icon = TendancyIcon[resolvedTendancy]

  return (
    <View className={cn(chipVariants({ tendancy }), className)} {...props}>
      <Icon size={16} color={tendancyIconColor[resolvedTendancy]} />
      <Typography
        size="caption"
        weight="semibold"
        className={tendancyTextColor[resolvedTendancy]}
      >
        {label}
      </Typography>
    </View>
  )
}

export { chipVariants, type ChipProps, type ChipTendancy }
