import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { IncomeExpenseChart, type ChartDataItem } from "./IncomeExpenseChart"

const SAMPLE_DATA: ChartDataItem[] = [
  { label: "01/2026", expense: 1600, income: 1000 },
  { label: "02/2026", expense: 1390, income: 1150 },
  { label: "03/2026", expense: 1520, income: 970 },
]

const meta: Meta<typeof IncomeExpenseChart> = {
  title: "UI Kit/IncomeExpenseChart",
  component: IncomeExpenseChart,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IncomeExpenseChart>

export const Default: Story = {
  args: {
    data: SAMPLE_DATA,
  },
}

export const CustomMax: Story = {
  args: {
    data: SAMPLE_DATA,
    maxValue: 3000,
  },
}

export const SingleMonth: Story = {
  args: {
    data: [{ label: "03/2026", expense: 800, income: 1200 }],
  },
}
