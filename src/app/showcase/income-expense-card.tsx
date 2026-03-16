import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { IncomeExpenseCard } from "@/components/ui-kit/IncomeExpenseCard"
import { Typography } from "@/components/ui-kit/Typography"

export default function IncomeExpenseCardShowcase() {
  return (
    <ShowcasePage
      title="Income & Expense Card"
      description="Compact summary card showing income or expense totals with an illustrative icon, title, amount, and menu action."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Income
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Green background with income wallet icon and success-colored amount.
        </Typography>
        <IncomeExpenseCard type="income" amount="$5,420.00" />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Expense
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Red background with expense wallet icon and error-colored amount.
        </Typography>
        <IncomeExpenseCard type="expense" amount="$3,210.50" />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Side by Side
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Typical usage: two cards in a row for a financial overview summary.
        </Typography>
        <View className="flex-row gap-3">
          <View className="flex-1">
            <IncomeExpenseCard type="income" amount="$5,420.00" />
          </View>
          <View className="flex-1">
            <IncomeExpenseCard type="expense" amount="$3,210.50" />
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Custom Title
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Override the default title with a custom label.
        </Typography>
        <View className="flex-row gap-3">
          <View className="flex-1">
            <IncomeExpenseCard type="income" title="Monthly Income" amount="$8,000.00" />
          </View>
          <View className="flex-1">
            <IncomeExpenseCard type="expense" title="Monthly Spend" amount="$4,750.00" />
          </View>
        </View>
      </View>
    </ShowcasePage>
  )
}
