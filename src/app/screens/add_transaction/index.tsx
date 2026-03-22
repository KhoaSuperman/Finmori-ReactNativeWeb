import { useRouter } from "expo-router"
import React, { useState } from "react"
import { ScrollView, View } from "react-native"

import {
  CalendarDotsIcon,
  IllustrativeEntertainmentIcon,
  IllustrativeGroceryIcon,
  IllustrativeHealthIcon,
  IllustrativeMealIcon,
  IllustrativeMoreIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
  IllustrativeTransportIcon,
} from "@/components/icons"
import { AmountInput } from "@/components/ui-kit/AmountInput"
import { CardMenuItem } from "@/components/ui-kit/CardMenuItem"
import { HomeIndicatorBar } from "@/components/ui-kit/HomeIndicatorBar"
import { ListItem } from "@/components/ui-kit/ListItem"
import { NavigationBar } from "@/components/ui-kit/NavigationBar"
import { SectionTitle } from "@/components/ui-kit/SectionTitle"
import { TabBar } from "@/components/ui-kit/TabBar"
import { TransactionTextInput } from "@/components/ui-kit/TransactionTextInput"
import { Typography } from "@/components/ui-kit/Typography"

type CategoryId = "groceries" | "meal" | "transport" | "rent" | "fun" | "health" | "shopping" | "more"

const CATEGORIES: {
  id: CategoryId
  label: string
  icon: React.ReactNode
}[] = [
  {
    id: "groceries",
    label: "Groceries",
    icon: <IllustrativeGroceryIcon size={56} />,
  },
  {
    id: "meal",
    label: "Meal",
    icon: <IllustrativeMealIcon size={56} />,
  },
  {
    id: "transport",
    label: "Transport",
    icon: <IllustrativeTransportIcon size={56} />,
  },
  {
    id: "rent",
    label: "Rent",
    icon: <IllustrativeRentIcon size={56} />,
  },
  {
    id: "fun",
    label: "Fun",
    icon: <IllustrativeEntertainmentIcon size={56} />,
  },
  {
    id: "health",
    label: "Health",
    icon: <IllustrativeHealthIcon size={56} />,
  },
  {
    id: "shopping",
    label: "Shopping",
    icon: <IllustrativeShoppingIcon size={56} />,
  },
  {
    id: "more",
    label: "More",
    icon: <IllustrativeMoreIcon size={56} />,
  },
]

export default function AddTransactionScreen() {
  const router = useRouter()
  const [tabIndex, setTabIndex] = useState(0)
  const [amount, setAmount] = useState("1200465")
  const [note, setNote] = useState("Lunar Year Foods for whole family")
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("groceries")

  const row1 = CATEGORIES.slice(0, 4)
  const row2 = CATEGORIES.slice(4, 8)

  return (
    <View className="flex-1 bg-primary">
      {/* Header */}
      <NavigationBar
        variant="with-title"
        title="New Transaction"
        showRightIcon={false}
        leftIcon={
          <Typography size="body" weight="medium" className="text-brand-tertiary" style={{ fontSize: 17 }}>
            Cancel
          </Typography>
        }
        onBackPress={() => router.back()}
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Segment Button Container */}
        <View className="px-xl py-xl">
          <TabBar
            type="box"
            tabs={[{ label: "Expense" }, { label: "Income" }]}
            activeIndex={tabIndex}
            onTabChange={setTabIndex}
          />
        </View>

        {/* Amount Container */}
        <View className="items-center px-xl py-xl" style={{ gap: 8 }}>
          {/* Amount Input Row */}
          <View className="flex-row items-end justify-center" style={{ gap: 8, maxWidth: "100%" }}>
            <Typography
              size="display-xl"
              weight="semibold"
              style={{
                fontFamily: "Literata",
                fontSize: 40,
                fontWeight: "600",
                color: "#1a297d",
                lineHeight: 48,
              }}
            >
              $
            </Typography>
            <AmountInput value={amount} onChangeValue={(raw) => setAmount(raw)} maxLength={7} />
          </View>

          {/* Transaction Note Input */}
          <TransactionTextInput value={note} onChangeValue={setNote} />
        </View>

        {/* Date Container */}
        <View className="px-xl py-xl">
          <ListItem
            label="Date"
            value="Today"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            showChevron
            onPress={() => {}}
          />
        </View>

        {/* Category Section */}
        <SectionTitle type="caplock" title="Select Category" />

        {/* Category Menu */}
        <View style={{ paddingVertical: 8 }}>
          {/* Row 1 */}
          <View className="flex-row px-xl" style={{ justifyContent: "space-between" }}>
            {row1.map((cat) => (
              <CardMenuItem
                key={cat.id}
                label={cat.label}
                icon={cat.icon}
                selected={selectedCategory === cat.id}
                onPress={() => setSelectedCategory(cat.id)}
              />
            ))}
          </View>

          {/* Row 2 */}
          <View className="flex-row px-xl" style={{ justifyContent: "space-between" }}>
            {row2.map((cat) => (
              <CardMenuItem
                key={cat.id}
                label={cat.label}
                icon={cat.icon}
                selected={selectedCategory === cat.id}
                onPress={() => setSelectedCategory(cat.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <HomeIndicatorBar type="1-button" primaryLabel="Save" onPrimaryPress={() => {}} />
    </View>
  )
}
