import { useRouter } from "expo-router"
import React from "react"
import { ImageBackground, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  AltArrowLeftIcon,
  AppleIcon,
  IllustrativeVacationIcon,
  MoreVerticalIcon,
  NotionIcon,
  PayPalIcon,
  SpotifyIcon,
} from "@/components/icons"
import {
  ActivityItem,
  BottomNavBar,
  GoalsCardDetails,
  HomeIndicatorBar,
  NavigationBar,
  RecapCard,
  SectionTitle,
} from "@/components/ui-kit"
import { Typography } from "@/components/ui-kit/Typography"

const headerBgImage = require("../../../../assets/images/goals-details/bg_goals_details_header-3x.png")

const TRANSACTIONS = [
  {
    key: "apple-1",
    label: "Apple Invoice #1234",
    overline: "31/12/2025 · 15:00",
    amount: "-S$ 20.00",
    avatarProps: {
      variant: "icon" as const,
      icon: (p: { size?: number; color?: string }) => <AppleIcon {...p} />,
      iconColor: "#000000",
    },
  },
  {
    key: "paypal-1",
    label: "Paypal Invoice #1234",
    overline: "31/12/2025 · 15:00",
    amount: "-S$ 20.00",
    avatarProps: {
      variant: "icon" as const,
      icon: (p: { size?: number; color?: string }) => <PayPalIcon {...p} />,
      iconColor: "#003087",
    },
  },
  {
    key: "spotify-1",
    label: "Apple Invoice #1234",
    overline: "31/12/2025 · 15:00",
    amount: "-S$ 20.00",
    avatarProps: {
      variant: "icon" as const,
      icon: (p: { size?: number; color?: string }) => <SpotifyIcon {...p} />,
    },
  },
  {
    key: "notion-1",
    label: "Apple Invoice #1234",
    overline: "31/12/2025 · 15:00",
    amount: "-S$ 20.00",
    avatarProps: {
      variant: "icon" as const,
      icon: (p: { size?: number; color?: string }) => <NotionIcon {...p} />,
    },
  },
]

export default function GoalsDetailsScreen() {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ==================== HEADER ==================== */}
        <View style={{ position: "relative" }}>
          {/* Background image */}
          <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: 172, overflow: "hidden" }}>
            <ImageBackground source={headerBgImage} resizeMode="cover" style={{ width: "100%", height: "100%" }} />
          </View>

          {/* Navigation bar */}
          <View style={{ paddingTop: Math.max(insets.top, 44) }}>
            <NavigationBar
              variant="with-title"
              title="Goals"
              onBackPress={() => router.back()}
              rightIcon={<MoreVerticalIcon size={24} color="var(--color-fg-primary)" />}
            />
          </View>

          {/* Profile name + avatar */}
          <View className="items-center gap-md px-xl py-xl">
            {/* Avatar circle */}
            <View className="items-center justify-center rounded-full bg-secondary" style={{ width: 95, height: 95 }}>
              <IllustrativeVacationIcon size={80} />
            </View>

            {/* Name + description */}
            <View className="items-center gap-xs">
              <Typography
                size="h1"
                weight="semibold"
                className="text-center font-display tracking-tighter text-primary"
              >
                Vacation
              </Typography>
              <Typography size="body-small" weight="regular" className="text-center text-secondary">
                Trip to Mexico
              </Typography>
            </View>
          </View>
        </View>

        {/* ==================== GOALS CARD DETAILS ==================== */}
        <View className="px-xl py-md">
          <GoalsCardDetails
            savedLabel="You've already saved"
            currentAmount="$175,000"
            remainingAmount="$175,000 left"
            progress={50}
            actualSaving="$175,000"
            targetAmount="$250k"
            timeRemaining="3 days 04:15:20"
            endDate="Jul 3rd, 2026"
          />
        </View>

        {/* ==================== GOAL STATISTICS ==================== */}
        <View className="py-md">
          <SectionTitle title="Goal Statistics" type="standard" />

          <View className="gap-md px-xl py-md">
            {/* Row 1 */}
            <View className="flex-row gap-md">
              <View className="flex-1">
                <RecapCard title="Monthly Target" value="$30K" status="default" />
              </View>
              <View className="flex-1">
                <RecapCard title="This Month" value="$35K" status="success" />
              </View>
            </View>

            {/* Row 2 */}
            <View className="flex-row gap-md">
              <View className="flex-1">
                <RecapCard title="Start Date" value="03 Aug, 2026" status="default" />
              </View>
              <View className="flex-1">
                <RecapCard title="Avg. Monthly" value="$33K" status="default" />
              </View>
            </View>
          </View>
        </View>

        {/* ==================== RECENT TRANSACTIONS ==================== */}
        <View className="py-md">
          <SectionTitle title="Recent Transactions" type="standard" actionLabel="View All" />

          <View className="gap-md px-xl">
            {TRANSACTIONS.map((tx, index) => (
              <ActivityItem
                key={tx.key}
                type="default"
                label={tx.label}
                overline={tx.overline}
                trailing={{ amount: tx.amount }}
                avatarProps={tx.avatarProps}
                showDivider={index < TRANSACTIONS.length - 1}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ==================== BOTTOM NAV BAR ==================== */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: insets.bottom,
        }}
      >
        <BottomNavBar activeTab="goals" />
        <HomeIndicatorBar type="default" />
      </View>
    </View>
  )
}
