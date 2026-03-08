import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { AppleIcon } from "@/components/icons"

import { ActivityItem } from "./ActivityItem"

const meta: Meta<typeof ActivityItem> = {
  title: "UI Kit/ActivityItem",
  component: ActivityItem,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ActivityItem>

export const Default: Story = {
  args: {
    type: "default",
    label: "Apple Invoice #1234",
    overline: "31/12/2025 · 15:00",
    trailing: {
      amount: "-S$ 20.00",
      balanceLabel: "Balance: S$ 20.00",
      paymentMethod: "visa",
    },
    avatarProps: {
      variant: "icon",
      icon: (p) => <AppleIcon {...p} />,
      iconColor: "#000000",
    },
  },
}

export const WithAction: Story = {
  args: {
    type: "with-action",
    label: "Apple Invoice #1234",
    overline: "S$ 20.00",
    trailing: {
      actionLabel: "Action",
    },
    avatarProps: {
      variant: "icon",
      icon: (p) => <AppleIcon {...p} />,
      iconColor: "#000000",
    },
  },
}

export const DefaultNoDivider: Story = {
  args: {
    type: "default",
    label: "Netflix Subscription",
    overline: "15/01/2026 · 09:30",
    trailing: {
      amount: "-S$ 22.98",
    },
    showDivider: false,
    avatarProps: { variant: "letter", text: "N" },
  },
}

export const WithActionNoDivider: Story = {
  args: {
    type: "with-action",
    label: "Spotify Premium",
    overline: "S$ 9.99",
    trailing: {
      actionLabel: "Pay Now",
    },
    showDivider: false,
    avatarProps: { variant: "letter", text: "S" },
  },
}
