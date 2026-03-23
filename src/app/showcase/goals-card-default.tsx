import React from "react"
import { View } from "react-native"

import { IllustrativeShoppingIcon, IllustrativeHealthIcon, IllustrativeRentIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { GoalsCardDefault } from "@/components/ui-kit/GoalsCardDefault"
import { Typography } from "@/components/ui-kit/Typography"

export default function GoalsCardDefaultShowcase() {
  return (
    <ShowcasePage
      title="Goals Card Default"
      description="Full savings goal card showing category, title, illustration, time remaining, progress bar with controller dot, amounts, and motivational message."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default (50%)
        </Typography>
        <GoalsCardDefault
          category="Technology"
          title="New Iphone 17 Pro Max"
          illustration={<IllustrativeShoppingIcon size={28} />}
          currentAmount="$175,000"
          targetAmount="$250k"
          progress={50}
          timeRemaining="3 days 04:15:20"
          progressTag="50%"
          progressUpdate="🚀 You're ahead of pace and should reach your goal 30% ahead of goal management."
        />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Low Progress (10%)
        </Typography>
        <GoalsCardDefault
          category="Health"
          title="Emergency Medical Fund"
          illustration={<IllustrativeHealthIcon size={28} />}
          currentAmount="$5,000"
          targetAmount="$50k"
          progress={10}
          timeRemaining="120 days left"
          progressTag="10%"
          progressUpdate="Keep going! Every contribution brings you closer to your goal."
        />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Almost Complete (90%)
        </Typography>
        <GoalsCardDefault
          category="Housing"
          title="Home Down Payment"
          illustration={<IllustrativeRentIcon size={28} />}
          currentAmount="$90,000"
          targetAmount="$100k"
          progress={90}
          timeRemaining="5 days 08:30:00"
          progressTag="90%"
          progressUpdate="🎉 Almost there! You're just $10,000 away from your dream home down payment."
        />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          No Illustration
        </Typography>
        <GoalsCardDefault
          category="Travel"
          title="Vacation to Japan"
          currentAmount="$3,500"
          targetAmount="$7k"
          progress={50}
          timeRemaining="45 days 12:00:00"
          progressTag="50%"
          progressUpdate="✈️ Halfway to your dream trip! Keep saving and you'll be in Tokyo soon."
        />
      </View>
    </ShowcasePage>
  )
}
