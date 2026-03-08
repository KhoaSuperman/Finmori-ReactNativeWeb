import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { IconPaymentMethod } from "./IconPaymentMethod"

const meta: Meta<typeof IconPaymentMethod> = {
  title: "UI Kit/IconPaymentMethod",
  component: IconPaymentMethod,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IconPaymentMethod>

export const SmallVisa: Story = {
  args: { method: "visa", size: "sm" },
}

export const MediumVisa: Story = {
  args: { method: "visa", size: "md" },
}

export const LargeVisa: Story = {
  args: { method: "visa", size: "lg" },
}

export const Mastercard: Story = {
  args: { method: "mastercard", size: "lg" },
}

export const PayPal: Story = {
  args: { method: "paypal", size: "lg" },
}

export const ApplePay: Story = {
  args: { method: "applepay", size: "lg" },
}

export const GooglePay: Story = {
  args: { method: "googlepay", size: "lg" },
}

export const Amex: Story = {
  args: { method: "amex", size: "lg" },
}
