import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { IncomeExpenseChart, type ChartDataItem } from "@/components/ui-kit/IncomeExpenseChart"
import { Typography } from "@/components/ui-kit/Typography"

const SAMPLE_DATA: ChartDataItem[] = [
  { label: "01/2026", expense: 1600, income: 1000 },
  { label: "02/2026", expense: 1390, income: 1150 },
  { label: "03/2026", expense: 1520, income: 970 },
]

const HIGH_VALUE_DATA: ChartDataItem[] = [
  { label: "Jan", expense: 4200, income: 3800 },
  { label: "Feb", expense: 3100, income: 4500 },
  { label: "Mar", expense: 2700, income: 3200 },
  { label: "Apr", expense: 5000, income: 4100 },
]

const SINGLE_MONTH: ChartDataItem[] = [
  { label: "03/2026", expense: 800, income: 1200 },
]

export default function IncomeExpenseChartShowcase() {
  return (
    <ShowcasePage
      title="Income & Expense Chart"
      description="Bar chart comparing income and expense values over time with Y-axis grid lines, date labels, and a color-coded legend."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Three months of data with auto-calculated Y-axis ticks.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <IncomeExpenseChart data={SAMPLE_DATA} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Custom Max Value
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Explicit maxValue of 5000 spreads bars across a larger range.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <IncomeExpenseChart data={HIGH_VALUE_DATA} maxValue={5000} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Single Month
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Works with a single data point as well.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <IncomeExpenseChart data={SINGLE_MONTH} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Custom Value Format
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Override the Y-axis label formatting with a custom function.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <IncomeExpenseChart
            data={SAMPLE_DATA}
            formatValue={(v) => `$${v.toLocaleString()}`}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
