import { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { TabBar } from "@/components/ui-kit/TabBar"
import { Typography } from "@/components/ui-kit/Typography"

const TABS_2 = [{ label: "Overview" }, { label: "Activity" }]
const TABS_3 = [{ label: "Overview" }, { label: "Activity" }, { label: "Cards" }]
const TABS_4 = [{ label: "Overview" }, { label: "Activity" }, { label: "Cards" }, { label: "Settings" }]

function InteractiveBox2() {
  const [active, setActive] = useState(0)
  return <TabBar type="box" tabs={TABS_2} activeIndex={active} onTabChange={setActive} />
}

function InteractiveBox3() {
  const [active, setActive] = useState(0)
  return <TabBar type="box" tabs={TABS_3} activeIndex={active} onTabChange={setActive} />
}

function InteractiveBox4() {
  const [active, setActive] = useState(0)
  return <TabBar type="box" tabs={TABS_4} activeIndex={active} onTabChange={setActive} />
}

function InteractiveLine2() {
  const [active, setActive] = useState(0)
  return <TabBar type="line" tabs={TABS_2} activeIndex={active} onTabChange={setActive} />
}

function InteractiveLine3() {
  const [active, setActive] = useState(0)
  return <TabBar type="line" tabs={TABS_3} activeIndex={active} onTabChange={setActive} />
}

function InteractiveLine4() {
  const [active, setActive] = useState(0)
  return <TabBar type="line" tabs={TABS_4} activeIndex={active} onTabChange={setActive} />
}

export default function TabBarShowcase() {
  return (
    <ShowcasePage
      title="Tab Bar"
      description="Horizontal tab container with box (segmented control) and line (underline) type variants supporting 2–4 tabs."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Box — 2 Tabs
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Segmented control style with rounded pill container and selected chip.
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <InteractiveBox2 />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Box — 3 Tabs
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <InteractiveBox3 />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Box — 4 Tabs
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <InteractiveBox4 />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Line — 2 Tabs
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Full-width underline style with a bottom highlight bar on the active tab.
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <InteractiveLine2 />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Line — 3 Tabs
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <InteractiveLine3 />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Line — 4 Tabs
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <InteractiveLine4 />
        </View>
      </View>
    </ShowcasePage>
  )
}
