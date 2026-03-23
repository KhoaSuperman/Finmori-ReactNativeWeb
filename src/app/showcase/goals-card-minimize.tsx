import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { GoalsCardMinimize } from "@/components/ui-kit/GoalsCardMinimize"
import { Typography } from "@/components/ui-kit/Typography"

export default function GoalsCardMinimizeShowcase() {
  return (
    <ShowcasePage
      title="Goals Card Minimize"
      description="Compact savings goal card showing title, current/target amounts, progress bar, and time remaining."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default (30%)
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <GoalsCardMinimize
            title="New Iphone 17 Pro Max"
            currentAmount="$175,000"
            targetAmount="$250k"
            progress={30}
            timeRemaining="3 days 04:15:20"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Low Progress (10%)
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <GoalsCardMinimize
            title="Emergency Fund"
            currentAmount="$5,000"
            targetAmount="$50k"
            progress={10}
            timeRemaining="120 days left"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Half Progress (50%)
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <GoalsCardMinimize
            title="Vacation to Japan"
            currentAmount="$3,500"
            targetAmount="$7k"
            progress={50}
            timeRemaining="45 days 12:00:00"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Almost Complete (90%)
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <GoalsCardMinimize
            title="MacBook Pro M4"
            currentAmount="$2,800"
            targetAmount="$3k"
            progress={90}
            timeRemaining="5 days 08:30:00"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Complete (100%)
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <GoalsCardMinimize
            title="Car Down Payment"
            currentAmount="$20,000"
            targetAmount="$20k"
            progress={100}
            timeRemaining="Goal reached!"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Multiple Cards
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <GoalsCardMinimize
            title="New Iphone 17 Pro Max"
            currentAmount="$175,000"
            targetAmount="$250k"
            progress={30}
            timeRemaining="3 days 04:15:20"
          />
          <GoalsCardMinimize
            title="Vacation to Japan"
            currentAmount="$3,500"
            targetAmount="$7k"
            progress={50}
            timeRemaining="45 days 12:00:00"
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
