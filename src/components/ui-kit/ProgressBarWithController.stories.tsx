import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { ProgressBarWithController } from "./ProgressBarWithController"

const meta: Meta<typeof ProgressBarWithController> = {
  title: "UI Kit/ProgressBarWithController",
  component: ProgressBarWithController,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 items-center justify-center p-8">
        <View style={{ width: 341 }}>
          <Story />
        </View>
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ProgressBarWithController>

export const Progress0: Story = {
  args: { value: 0 },
}

export const Progress10: Story = {
  args: { value: 10 },
}

export const Progress25: Story = {
  args: { value: 25 },
}

export const Progress50: Story = {
  args: { value: 50 },
}

export const Progress75: Story = {
  args: { value: 75 },
}

export const Progress90: Story = {
  args: { value: 90 },
}

export const Progress100: Story = {
  args: { value: 100 },
}
