import React, { useState } from "react"
import { Platform, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { ChartLineSteppedFilledIcon, ChartPieSliceOutlineIcon } from "@/components/icons"
import {
  BottomNavBar,
  HomeIndicatorBar,
  IncomeExpenseCard,
  IncomeExpenseChart,
  type ChartDataItem,
  NavigationBar,
  SectionTitle,
  SpendingChart,
  type SpendingDataPoint,
  TabBar,
  type TabBarTab,
} from "@/components/ui-kit"

const CHART_DATA: ChartDataItem[] = [
  { label: "01/2026", expense: 1600, income: 1000 },
  { label: "02/2026", expense: 1390, income: 1150 },
  { label: "03/2026", expense: 1520, income: 970 },
]

const SPENDING_DATA: SpendingDataPoint[] = [
  { label: "1 Mar", value: 30 },
  { label: "3 Mar", value: 50 },
  { label: "5 Mar", value: 1950 },
  { label: "7 Mar", value: 50 },
  { label: "9 Mar", value: 200 },
  { label: "11 Mar", value: 30 },
  { label: "13 Mar", value: 80 },
  { label: "15 Mar", value: 10 },
  { label: "17 Mar", value: 10 },
  { label: "19 Mar", value: 100 },
  { label: "21 Mar", value: 700 },
  { label: "23 Mar", value: 300 },
  { label: "25 Mar", value: 200 },
  { label: "27 Mar", value: 50 },
  { label: "29 Mar", value: 120 },
  { label: "31 Mar", value: 30 },
]

const TAB_ITEMS: TabBarTab[] = [
  {
    label: "Overview",
    icon: (color: string) => <ChartLineSteppedFilledIcon size={20} color={color} />,
  },
  {
    label: "Breakdown",
    icon: (color: string) => <ChartPieSliceOutlineIcon size={20} color={color} />,
  },
]

export default function AnalyticsOverviewScreen() {
  const insets = useSafeAreaInsets()
  const [activeTab, setActiveTab] = useState(0)

  const backgroundStyle = Platform.OS === "web"
    ? ({ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #edf2ff 100%)" } as any)
    : { backgroundColor: "#edf2ff" }

  return (
    <View className="flex-1" style={backgroundStyle}>
      {/* Safe area spacer */}
      <View style={{ height: Math.max(insets.top, 44) }} />

      {/* Navigation Bar */}
      <NavigationBar
        variant="with-selector"
        title="Analytics"
        selectorLabel="March 2026"
        showLeftIcon={false}
        showRightIcon={false}
      />

      {/* Tab Bar */}
      <TabBar
        type="line"
        tabs={TAB_ITEMS}
        activeIndex={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Income & Expense Recap */}
        <View className="flex-row gap-lg px-xl pt-xl pb-md">
          <IncomeExpenseCard
            type="expense"
            amount="$5,420.00"
            className="flex-1"
          />
          <IncomeExpenseCard
            type="income"
            amount="$5,420.00"
            className="flex-1"
          />
        </View>

        {/* Last 3-months Bar Chart */}
        <View className="px-xl py-md">
          <View className="rounded-2xl border border-tertiary bg-primary">
            <SectionTitle title="Last 3-months" type="standard" />
            <IncomeExpenseChart data={CHART_DATA} />
          </View>
        </View>

        {/* Monthly Spending Trend */}
        <View className="px-xl py-md">
          <View className="rounded-2xl border border-tertiary bg-primary">
            <SectionTitle title="Monthly Spending Trend" type="standard" />
            <SpendingChart
              data={SPENDING_DATA}
              activeIndex={10}
              formatTooltipDate={(item) => {
                const parts = item.label.split(" ")
                return `${parts[0]} Aug, 2026`
              }}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar - fixed */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavBar activeTab="analytic" />
        <HomeIndicatorBar type="default" />
      </View>
    </View>
  )
}
