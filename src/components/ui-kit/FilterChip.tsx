import { cva, type VariantProps } from "class-variance-authority"
import { Pressable, type PressableProps } from "react-native"

import { SortOutlineIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const filterChipVariants = cva(
  "flex-row items-center justify-center rounded-full border",
  {
    variants: {
      type: {
        label: "px-xl py-md gap-xs",
        icon: "p-md",
      },
      selected: {
        true: "bg-brand-primary border-brand",
        false: "bg-primary border-secondary",
      },
    },
    defaultVariants: {
      type: "label",
      selected: false,
    },
  }
)

interface FilterChipProps extends Omit<PressableProps, "children">, VariantProps<typeof filterChipVariants> {
  label?: string
  className?: string
}

export function FilterChip({ type = "label", selected = false, label, className, ...props }: FilterChipProps) {
  const isSelected = selected ?? false

  return (
    <Pressable
      className={cn(filterChipVariants({ type, selected: isSelected }), className)}
      {...props}
    >
      {type === "icon" ? (
        <SortOutlineIcon
          size={20}
          color={isSelected ? "#1A45E6" : "#000000"}
        />
      ) : (
        <Typography
          size="body"
          weight={isSelected ? "semibold" : "regular"}
          className={isSelected ? "text-brand-primary" : "text-primary"}
        >
          {label}
        </Typography>
      )}
    </Pressable>
  )
}

export { filterChipVariants, type FilterChipProps }
