import { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { TabItem, type TabItemState } from "@/components/ui-kit/TabItem"
import { Typography } from "@/components/ui-kit/Typography"

const TABS = ["Overview", "Activity", "Cards", "Settings"]

function InteractiveBoxTabs() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <View className="flex-row flex-wrap gap-xs rounded-2xl bg-secondary p-xs">
      {TABS.map((tab, i) => (
        <TabItem
          key={tab}
          type="box"
          state={activeIndex === i ? "selected" : "default"}
          label={tab}
          onPress={() => setActiveIndex(i)}
        />
      ))}
    </View>
  )
}

function InteractiveLineTabs() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <View className="flex-row border-b border-tertiary">
      {TABS.map((tab, i) => (
        <TabItem
          key={tab}
          type="line"
          state={activeIndex === i ? "selected" : "default"}
          label={tab}
          onPress={() => setActiveIndex(i)}
        />
      ))}
    </View>
  )
}

function StateRow({ state, label }: { state: TabItemState; label: string }) {
  return (
    <View className="gap-3">
      <Typography size="body-small" weight="medium" className="px-1 text-tertiary">
        {label}
      </Typography>
      <View className="flex-row flex-wrap gap-3">
        <TabItem type="box" state={state} label="Tab 1" />
        <TabItem type="line" state={state} label="Tab 1" />
      </View>
    </View>
  )
}

export default function TabItemShowcase() {
  return (
    <ShowcasePage
      title="Tab Item"
      description="Selectable tab with box (pill) and line (underline) type variants across default, selected, and disabled states."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive — Box
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap a tab to switch the selected state. Box tabs sit inside a rounded container.
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-secondary p-xl">
          <InteractiveBoxTabs />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive — Line
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Line tabs use a bottom highlight bar to indicate the active tab.
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <InteractiveLineTabs />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All States
        </Typography>
        <View className="gap-5 rounded-2xl border border-tertiary bg-primary p-xl">
          <StateRow state="default" label="Default" />
          <StateRow state="selected" label="Selected" />
          <StateRow state="disabled" label="Disabled" />
        </View>
      </View>
    </ShowcasePage>
  )
}
