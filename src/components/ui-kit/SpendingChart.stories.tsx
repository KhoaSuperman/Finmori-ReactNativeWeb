import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { SpendingChart, type SpendingDataPoint } from "./SpendingChart"

const SAMPLE_DATA: SpendingDataPoint[] = [
  { label: "1 Aug", value: 30 },
  { label: "3 Aug", value: 50 },
  { label: "5 Aug", value: 1950 },
  { label: "7 Aug", value: 50 },
  { label: "9 Aug", value: 200 },
  { label: "11 Aug", value: 30 },
  { label: "13 Aug", value: 80 },
  { label: "15 Aug", value: 10 },
  { label: "17 Aug", value: 10 },
  { label: "19 Aug", value: 100 },
  { label: "21 Aug", value: 700 },
  { label: "23 Aug", value: 300 },
  { label: "25 Aug", value: 200 },
  { label: "27 Aug", value: 50 },
  { label: "29 Aug", value: 120 },
  { label: "31 Aug", value: 30 },
]

const meta: Meta<typeof SpendingChart> = {
  title: "UI Kit/SpendingChart",
  component: SpendingChart,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SpendingChart>

export const Default: Story = {
  args: {
    data: SAMPLE_DATA,
    activeIndex: 10,
  },
}

export const CustomTicks: Story = {
  args: {
    data: [
      { label: "Jan", value: 450 },
      { label: "Feb", value: 1200 },
      { label: "Mar", value: 800 },
      { label: "Apr", value: 350 },
      { label: "May", value: 920 },
    ],
    yTicks: [1500, 1000, 500, 250, 0],
    activeIndex: 1,
  },
}

export const FewPoints: Story = {
  args: {
    data: [
      { label: "Week 1", value: 200 },
      { label: "Week 2", value: 500 },
      { label: "Week 3", value: 150 },
    ],
    activeIndex: 1,
  },
}
