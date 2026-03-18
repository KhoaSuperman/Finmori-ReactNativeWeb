import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"
import { Pressable, View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const tabBarVariants = cva("flex-row w-full", {
  variants: {
    type: {
      box: "rounded-xl bg-tertiary border border-tertiary p-xxs gap-xxs",
      line: "",
    },
  },
  defaultVariants: {
    type: "box",
  },
})

type TabBarType = NonNullable<VariantProps<typeof tabBarVariants>["type"]>

interface TabBarTab {
  label: string
  icon?: ((color: string) => React.ReactNode) | React.ReactNode
}

interface TabBarProps extends Omit<ViewProps, "children">, VariantProps<typeof tabBarVariants> {
  tabs: TabBarTab[]
  activeIndex?: number
  onTabChange?: (index: number) => void
  className?: string
}

const boxTabBase = "flex-1 flex-row items-center justify-center gap-md rounded-xl px-xl py-md"
const lineTabBase = "flex-1 flex-row items-center justify-center gap-md px-xl py-lg"

function BoxTab({ tab, isSelected, onPress }: { tab: TabBarTab; isSelected: boolean; onPress: () => void }) {
  const iconColor = isSelected ? "var(--color-fg-primary)" : "var(--color-fg-secondary)"
  const renderedIcon = typeof tab.icon === "function" ? tab.icon(iconColor) : tab.icon

  return (
    <Pressable onPress={onPress} className={cn(boxTabBase, isSelected && "bg-primary shadow-xs")}>
      {renderedIcon}
      <Typography
        size="body"
        weight={isSelected ? "semibold" : "regular"}
        className={isSelected ? "text-primary" : "text-secondary"}
      >
        {tab.label}
      </Typography>
    </Pressable>
  )
}

function LineTab({ tab, isSelected, onPress }: { tab: TabBarTab; isSelected: boolean; onPress: () => void }) {
  const iconColor = isSelected ? "var(--color-fg-brand-primary)" : "var(--color-fg-tertiary)"
  const renderedIcon = typeof tab.icon === "function" ? tab.icon(iconColor) : tab.icon

  return (
    <Pressable onPress={onPress} className={cn(lineTabBase, "bg-primary")}>
      {renderedIcon}
      <Typography
        size="body"
        weight={isSelected ? "semibold" : "regular"}
        className={isSelected ? "text-brand-secondary" : "text-secondary"}
      >
        {tab.label}
      </Typography>
      {isSelected && <View className="absolute bottom-0 left-0 right-0 h-[3px] bg-fg-brand-primary" />}
    </Pressable>
  )
}

export function TabBar({
  type = "box",
  tabs,
  activeIndex: controlledIndex,
  onTabChange,
  className,
  ...props
}: TabBarProps) {
  const resolvedType = type ?? "box"
  const [internalIndex, setInternalIndex] = useState(0)
  const activeIndex = controlledIndex ?? internalIndex

  const handlePress = (index: number) => {
    setInternalIndex(index)
    onTabChange?.(index)
  }

  const TabComponent = resolvedType === "box" ? BoxTab : LineTab

  return (
    <View className={cn(tabBarVariants({ type: resolvedType }), className)} {...props}>
      {tabs.map((tab, i) => (
        <TabComponent
          key={`${tab.label}-${i}`}
          tab={tab}
          isSelected={activeIndex === i}
          onPress={() => handlePress(i)}
        />
      ))}
      {resolvedType === "line" && <View className="absolute bottom-0 left-0 right-0 h-px bg-tertiary" />}
    </View>
  )
}

export { tabBarVariants, type TabBarProps, type TabBarTab, type TabBarType }

