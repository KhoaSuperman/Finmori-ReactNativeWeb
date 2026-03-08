import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { CardElement } from "./CardElement"

const meta: Meta<typeof CardElement> = {
  title: "UI Kit/CardElement",
  component: CardElement,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CardElement>

export const Gradient1: Story = {
  args: {
    balance: "$423.812.00",
    cardNumber: "•••• •••• •••• 1234",
    expiredDate: "10/24",
    cardType: "visa",
    gradient: 1,
  },
}

export const Gradient2: Story = {
  args: {
    balance: "$12,458.50",
    cardNumber: "•••• •••• •••• 5678",
    expiredDate: "03/26",
    cardType: "mastercard",
    gradient: 2,
  },
}

export const Gradient3: Story = {
  args: {
    balance: "$89,234.12",
    cardNumber: "•••• •••• •••• 9012",
    expiredDate: "07/25",
    cardType: "amex",
    gradient: 3,
  },
}

export const Gradient4: Story = {
  args: {
    balance: "$5,000.00",
    cardNumber: "•••• •••• •••• 3456",
    expiredDate: "12/27",
    cardType: "visa",
    gradient: 4,
  },
}

export const Gradient5: Story = {
  args: {
    balance: "$1,234,567.89",
    cardNumber: "•••• •••• •••• 7890",
    expiredDate: "01/28",
    cardType: "mastercard",
    gradient: 5,
  },
}
