import React from "react"
import { Image, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { AppleIcon, BellIcon, PayPalIcon, SearchIcon, YoutubeIcon } from "@/components/icons"
import {
  ActivityItem,
  Avatar,
  BalanceCard,
  BillingItem,
  BottomNavBar,
  CardElement,
  IconFrame,
  IncomeOutcomeTrendCard,
  SectionTitle,
  Typography,
} from "@/components/ui-kit"

const HEADER_BG = require("../../../../assets/images/home/bg_home_header-3x.png")

export default function MainHomeScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ==================== HEADER ==================== */}
        <View
          style={{
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            overflow: "hidden",
            paddingBottom: 128,
          }}
        >
          <Image
            source={HEADER_BG}
            style={{
              position: "absolute",
              width: "110%",
              height: "120%",
              top: 0,
              left: 0,
            }}
            resizeMode="cover"
          />

          {/* Safe-area spacer */}
          <View style={{ height: Math.max(insets.top, 44) }} />

          {/* Greeting & Balance */}
          <View className="gap-3xl px-xl py-lg">
            {/* Greeting Row */}
            <View className="flex-row items-center">
              {/* User Info */}
              <View className="flex-1 flex-row items-center gap-lg">
                <Avatar size={44} form="circle" variant="letter" {...{ text: "JD" }} />
                <View>
                  <Typography size="body" weight="semibold" className="text-primary">
                    John Doe
                  </Typography>
                  <Typography size="caption" className="text-tertiary">
                    Welcome back
                  </Typography>
                </View>
              </View>

              {/* Action Icons */}
              <View className="flex-row items-center gap-lg">
                <IconFrame size="lg" icon={(p) => <SearchIcon {...p} />} className="border-secondary bg-base-white" />
                <IconFrame size="lg" icon={(p) => <BellIcon {...p} />} className="border-secondary bg-base-white" />
              </View>
            </View>

            {/* Balance Card */}
            <BalanceCard amount="$12,458.50" />
          </View>
        </View>

        {/* ==================== BODY (overlaps header by -128) ==================== */}
        <View style={{ marginTop: -128 }} className="gap-xl">
          {/* Card List (horizontal scroll) */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 14, paddingVertical: 8 }}
          >
            <CardElement
              balance="$423,812.00"
              cardNumber="•••• •••• •••• 1234"
              expiredDate="10/24"
              cardType="visa"
              gradient={1}
            />
            <CardElement
              balance="$12,458.50"
              cardNumber="•••• •••• •••• 5678"
              expiredDate="03/26"
              cardType="amex"
              gradient={2}
            />
            <CardElement
              balance="$89,234.12"
              cardNumber="•••• •••• •••• 9012"
              expiredDate="07/25"
              cardType="amex"
              gradient={3}
            />
          </ScrollView>

          {/* Recap Cards */}
          <View className="flex-row gap-md px-xl py-md">
            <IncomeOutcomeTrendCard
              title="Total Spent"
              amount="+$5,420.00"
              chipLabel="8%"
              tendancy="negative"
              className="flex-1"
            />
            <IncomeOutcomeTrendCard
              title="Saved"
              amount="+$5,420.00"
              chipLabel="8%"
              tendancy="positive"
              className="flex-1"
            />
          </View>

          {/* Upcoming Payments / Billing */}
          <View className="gap-md">
            <SectionTitle title="Recent Transactions" actionLabel="See all" type="standard" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
            >
              <BillingItem
                label="Apple Invoice #1234"
                price="S$ 20.00"
                period="/month"
                subtitle="2 days left"
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <AppleIcon {...p} />,
                  iconColor: "#000000",
                }}
              />
              <BillingItem
                label="Youtube Premium"
                price="S$ 20.00"
                period="/month"
                subtitle="2 days left"
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <YoutubeIcon {...p} />,
                }}
              />
              <BillingItem
                label="PayPal Transfer"
                price="S$ 20.00"
                period="/month"
                subtitle="2 days left"
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <PayPalIcon {...p} />,
                }}
              />
            </ScrollView>
          </View>

          {/* Recent Transactions List */}
          <View className="gap-md">
            <SectionTitle title="Recent Transactions" actionLabel="See all" type="standard" />
            <View className="gap-md px-xl">
              <ActivityItem
                type="default"
                label="Apple Invoice #1234"
                overline="31/12/2025 · 15:00"
                trailing={{ amount: "-S$ 20.00" }}
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <AppleIcon {...p} />,
                  iconColor: "#000000",
                }}
              />
              <ActivityItem
                type="default"
                label="Apple Invoice #1234"
                overline="31/12/2025 · 15:00"
                trailing={{ amount: "-S$ 20.00" }}
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <YoutubeIcon {...p} />,
                }}
              />
              <ActivityItem
                type="default"
                label="Apple Invoice #1234"
                overline="31/12/2025 · 15:00"
                trailing={{ amount: "-S$ 20.00" }}
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <YoutubeIcon {...p} />,
                }}
              />
              <ActivityItem
                type="default"
                label="Apple Invoice #1234"
                overline="31/12/2025 · 15:00"
                trailing={{ amount: "-S$ 20.00" }}
                showDivider={false}
                avatarProps={{
                  variant: "icon",
                  icon: (p) => <PayPalIcon {...p} />,
                }}
              />
            </View>
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
        <BottomNavBar activeTab="home" />
      </View>
    </View>
  )
}
