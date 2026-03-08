import React, { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { BottomNavBar, type BottomNavTab } from "@/components/ui-kit/BottomNavBar"
import { Typography } from "@/components/ui-kit/Typography"

const ALL_TABS: BottomNavTab[] = ["home", "history", "analytic", "profile"]

export default function BottomNavBarShowcase() {
  const [activeTab, setActiveTab] = useState<BottomNavTab>("home")

  return (
    <ShowcasePage
      title="Bottom Nav Bar"
      description="Pill-shaped bottom navigation with 4 tabs and a central add-transaction button. Active tabs show bold gradient icons and white text; inactive tabs show outline gradient icons with subtle text."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap tabs to switch the active state. The center button triggers the add action.
        </Typography>
        <BottomNavBar
          activeTab={activeTab}
          onTabPress={setActiveTab}
          onAddPress={() => {}}
        />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Tab States
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Each variant with a different active tab highlighted.
        </Typography>
        <View className="gap-4">
          {ALL_TABS.map((tab) => (
            <View key={tab} className="gap-2">
              <Typography size="caption" weight="semibold" className="px-1 text-secondary">
                Active: {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Typography>
              <BottomNavBar activeTab={tab} />
            </View>
          ))}
        </View>
      </View>
    </ShowcasePage>
  )
}
