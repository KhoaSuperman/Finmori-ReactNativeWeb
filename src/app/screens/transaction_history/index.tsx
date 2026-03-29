import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  IllustrativeGroceryIcon,
  IllustrativeHealthIcon,
  IllustrativeMealIcon,
  IllustrativeRentIcon,
  IllustrativeTransportIcon,
} from "@/components/icons"
import {
  ActivityItem,
  BottomNavBar,
  type BottomNavTab,
  FilterChip,
  HomeIndicatorBar,
  NavigationBar,
  SearchField,
  SectionTitle,
} from "@/components/ui-kit"
import type { MediaSlotProps } from "@/components/ui-kit/MediaSlot"

// ─── Transaction Data ──────────────────────────────────────────────────────────

interface Transaction {
  id: string
  label: string
  overline: string
  amount: string
  trailingLabel: string
  isIncome: boolean
  avatarProps: MediaSlotProps
}

interface DayGroup {
  date: string
  transactions: Transaction[]
}

const SALARY_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeHealthIcon {...p} />,
}

const RENT_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeRentIcon {...p} />,
}

const GROCERY_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeGroceryIcon {...p} />,
}

const HEALTH_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeHealthIcon {...p} />,
}

const FREELANCE_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeMealIcon {...p} />,
}

const MEAL_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeMealIcon {...p} />,
}

const TRANSPORT_AVATAR: MediaSlotProps = {
  variant: "icon",
  icon: (p) => <IllustrativeTransportIcon {...p} />,
}

const TRANSACTION_GROUPS: DayGroup[] = [
  {
    date: "today",
    transactions: [
      {
        id: "1",
        label: "Salary-January",
        overline: "31/12/2025 · 15:00",
        amount: "+S$ 2000",
        trailingLabel: "Income",
        isIncome: true,
        avatarProps: SALARY_AVATAR,
      },
      {
        id: "2",
        label: "Rent Payment",
        overline: "31/12/2025 · 15:00",
        amount: "-S$290",
        trailingLabel: "Outcome",
        isIncome: false,
        avatarProps: RENT_AVATAR,
      },
      {
        id: "3",
        label: "Grocery for Lunar Year",
        overline: "31/12/2025 · 15:00",
        amount: "-S$35",
        trailingLabel: "Outcome",
        isIncome: false,
        avatarProps: GROCERY_AVATAR,
      },
    ],
  },
  {
    date: "Tuesday, oct 24",
    transactions: [
      {
        id: "4",
        label: "Gym Membership",
        overline: "31/12/2025 · 15:00",
        amount: "-S$20",
        trailingLabel: "Outcome",
        isIncome: false,
        avatarProps: HEALTH_AVATAR,
      },
      {
        id: "5",
        label: "Freelance Design Project",
        overline: "31/12/2025 · 15:00",
        amount: "+S$ 135",
        trailingLabel: "Income",
        isIncome: true,
        avatarProps: FREELANCE_AVATAR,
      },
      {
        id: "6",
        label: "Coffee & Mile tea",
        overline: "31/12/2025 · 15:00",
        amount: "-S$25",
        trailingLabel: "Outcome",
        isIncome: false,
        avatarProps: MEAL_AVATAR,
      },
      {
        id: "7",
        label: "Ride share with Mike",
        overline: "31/12/2025 · 15:00",
        amount: "-S$25",
        trailingLabel: "Outcome",
        isIncome: false,
        avatarProps: TRANSPORT_AVATAR,
      },
    ],
  },
]

// ─── Filter Types ──────────────────────────────────────────────────────────────

type FilterType = "all" | "income" | "outcome"

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function TransactionHistoryScreen() {
  const insets = useSafeAreaInsets()
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  const [activeTab, setActiveTab] = useState<BottomNavTab>("analytic")

  const filteredGroups = TRANSACTION_GROUPS.map((group) => ({
    ...group,
    transactions: group.transactions.filter((t) => {
      if (activeFilter === "income") return t.isIncome
      if (activeFilter === "outcome") return !t.isIncome
      return true
    }),
  })).filter((group) => group.transactions.length > 0)

  return (
    <View className="flex-1 bg-primary">
      <View style={{ height: Math.max(insets.top, 44) }} />

      {/* ── Header ── */}
      <NavigationBar
        variant="with-title"
        title="Transaction History"
        showLeftIcon={false}
        showRightIcon={false}
        style={{ height: 56 }}
      />

      {/* ── Search + Filters ── */}
      <View className="px-xl pb-lg" style={{ gap: 10 }}>
        <SearchField placeholder="Search" />
        <View className="flex-row" style={{ gap: 12 }}>
          <FilterChip
            type="icon"
            selected={false}
          />
          <FilterChip
            type="label"
            label="All"
            selected={activeFilter === "all"}
            onPress={() => setActiveFilter("all")}
          />
          <FilterChip
            type="label"
            label="Income"
            selected={activeFilter === "income"}
            onPress={() => setActiveFilter("income")}
          />
          <FilterChip
            type="label"
            label="Outcome"
            selected={activeFilter === "outcome"}
            onPress={() => setActiveFilter("outcome")}
          />
        </View>
      </View>

      {/* ── Transaction List ── */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {filteredGroups.map((group) => (
          <View key={group.date} className="py-lg">
            <SectionTitle type="caplock" title={group.date} />
            <View className="px-xl" style={{ gap: 4 }}>
              {group.transactions.map((transaction, index) => (
                <ActivityItem
                  key={transaction.id}
                  type="default"
                  label={transaction.label}
                  overline={transaction.overline}
                  trailing={{
                    amount: transaction.amount,
                    amountVariant: transaction.isIncome ? "income" : "default",
                    balanceLabel: transaction.trailingLabel,
                  }}
                  avatarProps={transaction.avatarProps}
                  showDivider={index < group.transactions.length - 1}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* ── Bottom Bar ── */}
      <View style={{ paddingBottom: insets.bottom }}>
        <BottomNavBar
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
        <HomeIndicatorBar type="default" />
      </View>
    </View>
  )
}
