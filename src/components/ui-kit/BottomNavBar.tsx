import React from "react"
import { Pressable, View, type ViewProps } from "react-native"

import {
  AddCircleBoldIcon,
  BillListBoldIcon,
  BillListOutlineIcon,
  ChartPieBoldIcon,
  ChartPieOutlineIcon,
  HomeSmileBoldIcon,
  HomeSmileOutlineIcon,
  UserCircleBoldIcon,
  UserCircleOutlineIcon,
} from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

export type BottomNavTab = "home" | "history" | "analytic" | "profile"

const TAB_CONFIG = {
  home: {
    label: "Home",
    OutlineIcon: HomeSmileOutlineIcon,
    BoldIcon: HomeSmileBoldIcon,
  },
  history: {
    label: "History",
    OutlineIcon: BillListOutlineIcon,
    BoldIcon: BillListBoldIcon,
  },
  analytic: {
    label: "Analytic",
    OutlineIcon: ChartPieOutlineIcon,
    BoldIcon: ChartPieBoldIcon,
  },
  profile: {
    label: "Profile",
    OutlineIcon: UserCircleOutlineIcon,
    BoldIcon: UserCircleBoldIcon,
  },
} as const

export interface BottomNavBarProps extends ViewProps {
  activeTab: BottomNavTab
  onTabPress?: (tab: BottomNavTab) => void
  onAddPress?: () => void
  className?: string
}

export function BottomNavBar({
  activeTab,
  onTabPress,
  onAddPress,
  className,
  ...rest
}: BottomNavBarProps) {
  const tabOrder: BottomNavTab[] = ["home", "history", "analytic", "profile"]

  return (
    <View className={cn("px-xl py-xs", className)} {...rest}>
      <View className="flex-row items-center rounded-full bg-primary-solid px-lg py-md">
        {tabOrder.map((tab, index) => (
          <React.Fragment key={tab}>
            {index === 2 && (
              <Pressable
                onPress={onAddPress}
                className="active:opacity-70"
                accessibilityRole="button"
                accessibilityLabel="Add transaction"
              >
                <AddCircleBoldIcon size={48} />
              </Pressable>
            )}
            <TabItem
              tab={tab}
              isActive={activeTab === tab}
              onPress={() => onTabPress?.(tab)}
            />
          </React.Fragment>
        ))}
      </View>
    </View>
  )
}

interface TabItemProps {
  tab: BottomNavTab
  isActive: boolean
  onPress: () => void
}

function TabItem({ tab, isActive, onPress }: TabItemProps) {
  const config = TAB_CONFIG[tab]
  const Icon = isActive ? config.BoldIcon : config.OutlineIcon

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center gap-xs active:opacity-70"
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
      accessibilityLabel={config.label}
    >
      <Icon size={24} />
      <Typography
        size="tiny"
        weight={isActive ? "semibold" : "regular"}
        className={isActive ? "text-base-white" : "text-base-white/80"}
        style={{ fontSize: 11, lineHeight: 16 }}
      >
        {config.label}
      </Typography>
    </Pressable>
  )
}
