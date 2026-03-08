import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { RecapCard } from "@/components/ui-kit/RecapCard"
import { Typography } from "@/components/ui-kit/Typography"

export default function RecapCardShowcase() {
  return (
    <ShowcasePage
      title="Recap Card"
      description="Compact summary card showing a category title, monetary amount, and a tendancy chip indicator."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Positive Tendancy
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <RecapCard
            title="Income"
            amount="+$5,420.00"
            chipLabel="8%"
            tendancy="positive"
            className="flex-1"
            style={{ minWidth: 160 }}
          />
          <RecapCard
            title="Savings"
            amount="+$1,230.50"
            chipLabel="12%"
            tendancy="positive"
            className="flex-1"
            style={{ minWidth: 160 }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Negative Tendancy
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <RecapCard
            title="Expenses"
            amount="-$3,180.00"
            chipLabel="5%"
            tendancy="negative"
            className="flex-1"
            style={{ minWidth: 160 }}
          />
          <RecapCard
            title="Debt"
            amount="-$890.25"
            chipLabel="2.3%"
            tendancy="negative"
            className="flex-1"
            style={{ minWidth: 160 }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Mixed Row
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Income and expense cards side by side, as they would appear on a dashboard.
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <RecapCard
            title="Income"
            amount="+$5,420.00"
            chipLabel="8%"
            tendancy="positive"
            className="flex-1"
            style={{ minWidth: 160 }}
          />
          <RecapCard
            title="Expenses"
            amount="-$3,180.00"
            chipLabel="3%"
            tendancy="negative"
            className="flex-1"
            style={{ minWidth: 160 }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Single Card
        </Typography>
        <RecapCard
          title="Total Balance"
          amount="$24,580.00"
          chipLabel="15.2%"
          tendancy="positive"
        />
      </View>
    </ShowcasePage>
  )
}
