import React from "react"
import { ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  AddCircleBoldIcon,
  IllustrativeIphoneIcon,
  IllustrativeRelocationIcon,
  IllustrativeVacationIcon,
} from "@/components/icons"
import {
  BottomNavBar,
  GoalsCardDefault,
  GoalsCardMinimize,
  NavigationBar,
  SectionTitle,
} from "@/components/ui-kit"

const newCarBgImage = require("../../../../assets/images/goals-card/bg_goals_card_new_car.png")

export default function GoalsScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ==================== HEADER ==================== */}
        <View style={{ paddingTop: Math.max(insets.top, 44) }}>
          <NavigationBar
            variant="with-title"
            title="Goals"
            showLeftIcon={false}
            showRightIcon={false}
          />
        </View>

        {/* ==================== GOAL SUMMARY (horizontal mini cards) ==================== */}
        <View className="flex-row gap-lg px-xl py-md">
          <GoalsCardMinimize
            title="New Iphone 17 Pro Max"
            currentAmount="$700"
            targetAmount="$250k"
            progress={10}
            timeRemaining="3 days 04:15:20"
            style={{ flex: 1 }}
          />
          <GoalsCardMinimize
            title="New car"
            currentAmount="$9800"
            targetAmount="$250k"
            progress={30}
            timeRemaining="93 days left"
            bgImage={newCarBgImage}
            style={{ flex: 1 }}
          />
        </View>

        {/* ==================== ALL MY GOALS ==================== */}
        <SectionTitle
          title="All My Goals"
          actionLabel="Add Goal"
          actionIcon={<AddCircleBoldIcon size={16} color="var(--color-fg-brand-primary)" />}
          type="standard"
        />

        {/* ==================== GOAL LIST ==================== */}
        <View className="gap-lg px-xl py-xl">
          {/* Vacation — Trip to Mexico (50%) */}
          <GoalsCardDefault
            category="Vacation"
            title="Trip to Mexico"
            illustration={<IllustrativeVacationIcon size={28} />}
            currentAmount="$175,000"
            targetAmount="$250k"
            progress={50}
            timeRemaining="3 days 04:15:20"
            progressTag="50%"
            tagColor="green"
            progressUpdate=""
          />

          {/* Technology — New Iphone 17 Pro Max (80%) */}
          <GoalsCardDefault
            category="Technology"
            title="New Iphone 17 Pro Max"
            illustration={<IllustrativeIphoneIcon size={28} />}
            currentAmount="$175,000"
            targetAmount="$12,000"
            progress={80}
            timeRemaining="3 days 04:15:20"
            progressTag="80%"
            tagColor="blue"
            progressUpdate="🚀 You're ahead of pace and should reach your goal 30% ahead of goal management."
          />

          {/* Trip — Relocate to Vietnam (40%) */}
          <GoalsCardDefault
            category="Trip"
            title="Relocate to Vietnam"
            illustration={<IllustrativeRelocationIcon size={28} />}
            currentAmount="$175,000"
            targetAmount="$18,000"
            progress={40}
            timeRemaining="3 days 04:15:20"
            progressTag="40%"
            tagColor="yellow"
            progressUpdate=""
          />
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
      </View>
    </View>
  )
}
