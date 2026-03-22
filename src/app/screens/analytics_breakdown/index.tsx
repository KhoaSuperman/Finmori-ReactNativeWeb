import React, { useState } from "react"
import { Platform, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  ChartLineSteppedFilledIcon,
  ChartPieSliceOutlineIcon,
  IllustrativeEntertainmentIcon,
  IllustrativeGroceryIcon,
  IllustrativeHealthIcon,
  IllustrativeMealIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
  IllustrativeTransportIcon,
} from "@/components/icons"
import {
  BottomNavBar,
  CategoryBreakdownItem,
  DEFAULT_CATEGORIES,
  ExpenseChart,
  HomeIndicatorBar,
  NavigationBar,
  TabBar,
  type TabBarTab,
} from "@/components/ui-kit"

const OUTER_TABS: TabBarTab[] = [
  {
    label: "Overview",
    icon: (color: string) => <ChartLineSteppedFilledIcon size={20} color={color} />,
  },
  {
    label: "Breakdown",
    icon: (color: string) => <ChartPieSliceOutlineIcon size={20} color={color} />,
  },
]

const EXPENSE_INCOME_TABS: TabBarTab[] = [
  { label: "Expense" },
  { label: "Income" },
]

const BREAKDOWN_ITEMS = [
  { icon: <IllustrativeMealIcon size={24} />, percentage: "23%", categoryName: "Meals", amount: "$210,000" },
  { icon: <IllustrativeGroceryIcon size={24} />, percentage: "18%", categoryName: "Groceries", amount: "$650,000" },
  { icon: <IllustrativeRentIcon size={24} />, percentage: "17%", categoryName: "Rent", amount: "$198,000" },
  { icon: <IllustrativeShoppingIcon size={24} />, percentage: "15%", categoryName: "Shopping", amount: "$198,000" },
  { icon: <IllustrativeEntertainmentIcon size={24} />, percentage: "12%", categoryName: "Fun", amount: "$198,000" },
  { icon: <IllustrativeTransportIcon size={24} />, percentage: "9%", categoryName: "Transport", amount: "$462,128" },
  { icon: <IllustrativeHealthIcon size={24} />, percentage: "6%", categoryName: "Health", amount: "$198,000", showDivider: false },
]

export default function AnalyticsBreakdownScreen() {
  const insets = useSafeAreaInsets()
  const [activeExpenseTab, setActiveExpenseTab] = useState(0)

  const backgroundStyle = Platform.OS === "web"
    ? ({ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #edf2ff 100%)" } as any)
    : { backgroundColor: "#edf2ff" }

  return (
    <View className="flex-1" style={backgroundStyle}>
      <View style={{ height: Math.max(insets.top, 44) }} />

      <NavigationBar
        variant="with-selector"
        title="Analytics"
        selectorLabel="March 2026"
        showLeftIcon={false}
        showRightIcon={false}
      />

      <TabBar
        type="line"
        tabs={OUTER_TABS}
        activeIndex={1}
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="p-xl">
          <View
            className="rounded-2xl border border-tertiary bg-primary overflow-hidden"
            style={{ gap: 24, paddingVertical: 16 }}
          >
            {/* Expense / Income tab switcher */}
            <View className="items-center px-xl">
              <TabBar
                type="box"
                tabs={EXPENSE_INCOME_TABS}
                activeIndex={activeExpenseTab}
                onTabChange={setActiveExpenseTab}
                style={{ maxWidth: 209 }}
              />
            </View>

            {/* Donut chart */}
            <View className="items-center">
              <ExpenseChart categories={DEFAULT_CATEGORIES} size={240} />
            </View>

            {/* Category breakdown list */}
            <View className="px-xl">
              {BREAKDOWN_ITEMS.map((item, index) => (
                <CategoryBreakdownItem
                  key={item.categoryName}
                  icon={item.icon}
                  percentage={item.percentage}
                  categoryName={item.categoryName}
                  amount={item.amount}
                  showDivider={item.showDivider !== false}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

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
