import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { Typography } from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "UI Kit/Typography",
  component: Typography,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center bg-bg-primary p-4">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    size: {
      control: "select",
      options: [
        "display-xl",
        "display",
        "h1",
        "h2",
        "h3",
        "body",
        "body-small",
        "caption",
        "tiny",
        "number-lg",
        "number-sm",
      ],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    size: "body",
    weight: "regular",
    children: "The quick brown fox jumps over the lazy dog",
  },
}

export const DisplaySizes: Story = {
  render: () => (
    <View className="gap-4">
      <Typography size="display-xl" weight="bold">
        Display xl
      </Typography>
      <Typography size="display" weight="bold">
        Display
      </Typography>
    </View>
  ),
}

export const HeadingSizes: Story = {
  render: () => (
    <View className="gap-3">
      <Typography size="h1" weight="semibold">
        H1 Heading
      </Typography>
      <Typography size="h2" weight="semibold">
        H2 Heading
      </Typography>
      <Typography size="h3" weight="semibold">
        H3 Heading
      </Typography>
    </View>
  ),
}

export const BodySizes: Story = {
  render: () => (
    <View className="gap-3">
      <Typography size="body">Body — The quick brown fox</Typography>
      <Typography size="body-small">Body small — The quick brown fox</Typography>
      <Typography size="caption">Caption — The quick brown fox</Typography>
      <Typography size="tiny">Tiny — The quick brown fox</Typography>
    </View>
  ),
}

export const WeightVariations: Story = {
  render: () => (
    <View className="gap-3">
      <Typography size="h2" weight="regular">
        H2 Regular
      </Typography>
      <Typography size="h2" weight="medium">
        H2 Medium
      </Typography>
      <Typography size="h2" weight="semibold">
        H2 Semibold
      </Typography>
      <Typography size="h2" weight="bold">
        H2 Bold
      </Typography>
    </View>
  ),
}

export const NumberStyles: Story = {
  render: () => (
    <View className="gap-3">
      <Typography size="number-lg">$128,450.32</Typography>
      <Typography size="number-sm">$128,450.32</Typography>
    </View>
  ),
}

export const ComposedCard: Story = {
  render: () => (
    <View className="gap-3 rounded-2xl bg-bg-secondary p-5">
      <Typography size="h1" weight="semibold">
        Portfolio balance
      </Typography>
      <Typography size="number-lg">$128,450.32</Typography>
      <Typography size="caption" className="text-text-success-primary">
        +2.4% today
      </Typography>
      <Typography size="body" className="text-text-tertiary">
        Markets are showing strong momentum heading into Q2.
      </Typography>
    </View>
  ),
}
