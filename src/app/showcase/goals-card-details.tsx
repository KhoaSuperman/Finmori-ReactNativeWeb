import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { GoalsCardDetails } from "@/components/ui-kit/GoalsCardDetails"
import { Typography } from "@/components/ui-kit/Typography"

export default function GoalsCardDetailsShowcase() {
  return (
    <ShowcasePage
      title="Goals Card Details"
      description="Detailed savings goal card showing the target illustration, saved amount, remaining amount, progress bar, actual saving vs target, time remaining, and end date."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default (50%)
        </Typography>
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

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Low Progress (10%)
        </Typography>
        <GoalsCardDetails
          savedLabel="You've already saved"
          currentAmount="$5,000"
          remainingAmount="$45,000 left"
          progress={10}
          actualSaving="$5,000"
          targetAmount="$50k"
          timeRemaining="120 days left"
          endDate="Dec 1st, 2026"
        />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Almost Complete (90%)
        </Typography>
        <GoalsCardDetails
          savedLabel="You've already saved"
          currentAmount="$90,000"
          remainingAmount="$10,000 left"
          progress={90}
          actualSaving="$90,000"
          targetAmount="$100k"
          timeRemaining="5 days 08:30:00"
          endDate="Mar 29th, 2026"
        />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Progress Update
        </Typography>
        <GoalsCardDetails
          savedLabel="You've already saved"
          currentAmount="$175,000"
          remainingAmount="$175,000 left"
          progress={50}
          actualSaving="$175,000"
          targetAmount="$250k"
          timeRemaining="3 days 04:15:20"
          endDate="Jul 3rd, 2026"
          showProgressUpdate
          progressUpdate="🚀 You're ahead of pace and should reach your goal 30% ahead of goal management."
        />
      </View>
    </ShowcasePage>
  )
}
