import { cva, type VariantProps } from "class-variance-authority"
import { Pressable, View, type PressableProps } from "react-native"

import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const tabItemVariants = cva("flex-row items-center justify-center gap-md", {
  variants: {
    type: {
      box: "rounded-xl px-xl py-md",
      line: "px-xl py-lg",
    },
    state: {
      default: "",
      selected: "",
      disabled: "",
    },
  },
  compoundVariants: [
    { type: "box", state: "selected", className: "bg-primary shadow-xs" },
    { type: "box", state: "disabled", className: "bg-disabled-subtle" },
    { type: "line", state: "selected", className: "bg-primary" },
    { type: "line", state: "disabled", className: "bg-disabled-subtle" },
  ],
  defaultVariants: {
    type: "box",
    state: "default",
  },
})

type TabItemType = NonNullable<VariantProps<typeof tabItemVariants>["type"]>
type TabItemState = NonNullable<VariantProps<typeof tabItemVariants>["state"]>

const textClassName: Record<TabItemState, string> = {
  default: "text-secondary",
  selected: "text-primary",
  disabled: "text-disabled",
}

const textWeight: Record<TabItemState, "regular" | "semibold"> = {
  default: "regular",
  selected: "semibold",
  disabled: "regular",
}

interface TabItemProps
  extends Omit<PressableProps, "children">,
    VariantProps<typeof tabItemVariants> {
  label: string
  /** Pass a render function to receive the resolved icon color for the current state */
  icon?: ((color: string) => React.ReactNode) | React.ReactNode
  className?: string
}

const iconColorVars: Record<TabItemState, string> = {
  default: "var(--color-fg-secondary)",
  selected: "var(--color-fg-primary)",
  disabled: "var(--color-fg-disabled)",
}

export function TabItem({
  type = "box",
  state = "default",
  label,
  icon,
  className,
  ...props
}: TabItemProps) {
  const resolvedState = state ?? "default"
  const resolvedType = type ?? "box"
  const iconColor = iconColorVars[resolvedState]

  const renderedIcon = typeof icon === "function" ? icon(iconColor) : icon

  return (
    <Pressable
      disabled={resolvedState === "disabled"}
      className={cn(tabItemVariants({ type: resolvedType, state: resolvedState }), className)}
      {...props}
    >
      {renderedIcon}
      <Typography
        size="body"
        weight={textWeight[resolvedState]}
        className={textClassName[resolvedState]}
      >
        {label}
      </Typography>
      {resolvedType === "line" && resolvedState === "selected" && (
        <View className="absolute bottom-0 left-0 right-0 h-[2px] bg-fg-brand-primary" />
      )}
    </Pressable>
  )
}

export { tabItemVariants, type TabItemProps, type TabItemType, type TabItemState }
