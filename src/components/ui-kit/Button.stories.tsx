import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { Button } from "./Button"
import { Typography } from "./Typography"

const PlaceholderIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 1.5,
      borderColor: color,
    }}
  />
)

const meta: Meta<typeof Button> = {
  title: "UI Kit/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center bg-primary p-4">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "link-color", "link-gray"],
    },
    size: {
      control: "select",
      options: ["default", "iconOnly"],
    },
    destructive: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Action",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Action",
  },
}

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Action",
  },
}

export const LinkColor: Story = {
  args: {
    variant: "link-color",
    label: "Action",
  },
}

export const LinkGray: Story = {
  args: {
    variant: "link-gray",
    label: "Action",
  },
}

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Action",
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    variant: "primary",
    label: "Action",
    loading: true,
  },
}

export const Destructive: Story = {
  args: {
    variant: "primary",
    label: "Action",
    destructive: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <View className="gap-6">
      <View className="gap-2">
        <Typography size="body-small" weight="semibold" className="text-secondary">
          Default
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="primary" label="Action" />
          <Button variant="secondary" label="Action" />
          <Button variant="tertiary" label="Action" />
        </View>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="link-color" label="Action" />
          <Button variant="link-gray" label="Action" />
        </View>
      </View>

      <View className="gap-2">
        <Typography size="body-small" weight="semibold" className="text-secondary">
          Disabled
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="primary" label="Action" disabled />
          <Button variant="secondary" label="Action" disabled />
          <Button variant="tertiary" label="Action" disabled />
        </View>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="link-color" label="Action" disabled />
          <Button variant="link-gray" label="Action" disabled />
        </View>
      </View>

      <View className="gap-2">
        <Typography size="body-small" weight="semibold" className="text-secondary">
          Loading
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="primary" label="Action" loading />
          <Button variant="secondary" label="Action" loading />
          <Button variant="tertiary" label="Action" loading />
        </View>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="link-color" label="Action" loading />
          <Button variant="link-gray" label="Action" loading />
        </View>
      </View>

      <View className="gap-2">
        <Typography size="body-small" weight="semibold" className="text-secondary">
          Destructive
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="primary" label="Action" destructive />
          <Button variant="secondary" label="Action" destructive />
          <Button variant="tertiary" label="Action" destructive />
        </View>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="link-color" label="Action" destructive />
          <Button variant="link-gray" label="Action" destructive />
        </View>
      </View>
    </View>
  ),
}
