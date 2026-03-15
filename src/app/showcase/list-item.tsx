import React from "react"
import { View } from "react-native"

import { CalendarDotsIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { ListItem } from "@/components/ui-kit/ListItem"
import { Typography } from "@/components/ui-kit/Typography"

export default function ListItemShowcase() {
  return (
    <ShowcasePage
      title="List Item"
      description="Settings-style row with optional leading icon, label, help text, trailing value, and chevron."
    >
      {/* Default — label + value + chevron */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Label with trailing value and chevron arrow.
        </Typography>
        <View className="gap-3">
          <ListItem label="Action" value="String" />
          <ListItem label="Language" value="English" />
          <ListItem label="Currency" value="SGD" />
        </View>
      </View>

      {/* With Leading Icon */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Icon
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Leading icon alongside label and trailing value.
        </Typography>
        <View className="gap-3">
          <ListItem
            label="Schedule"
            value="Weekly"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
          />
          <ListItem
            label="Reminder"
            value="On"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
          />
        </View>
      </View>

      {/* With Help Text */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Help Text
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Secondary help text below the label for additional context.
        </Typography>
        <View className="gap-3">
          <ListItem
            label="Notifications"
            helpText="Receive alerts for new transactions"
            value="On"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
          />
          <ListItem
            label="Auto-sync"
            helpText="Sync data every 15 minutes"
            value="Enabled"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
          />
        </View>
      </View>

      {/* Label Only */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Label Only
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Minimal variant with just a label and chevron.
        </Typography>
        <View className="gap-3">
          <ListItem label="Privacy Policy" />
          <ListItem label="Terms of Service" />
          <ListItem label="Help & Support" />
        </View>
      </View>

      {/* No Chevron */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          No Chevron
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Display-only row without the navigation arrow.
        </Typography>
        <View className="gap-3">
          <ListItem label="App Version" value="1.0.0" showChevron={false} />
          <ListItem label="Build" value="2026.03.15" showChevron={false} />
        </View>
      </View>

      {/* Pressable / Interactive */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tappable rows with onPress handler (opacity feedback on press).
        </Typography>
        <View className="gap-3">
          <ListItem
            label="Change Password"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            onPress={() => {}}
          />
          <ListItem
            label="Two-Factor Auth"
            value="Disabled"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            onPress={() => {}}
          />
          <ListItem
            label="Sign Out"
            showChevron={false}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Grouped List */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Grouped List
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Multiple items stacked to form a settings section.
        </Typography>
        <View className="gap-3">
          <ListItem
            label="Profile"
            value="John Doe"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            onPress={() => {}}
          />
          <ListItem
            label="Email"
            value="john@example.com"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            onPress={() => {}}
          />
          <ListItem
            label="Phone"
            value="+65 9123 4567"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            onPress={() => {}}
          />
          <ListItem
            label="Date of Birth"
            helpText="Used for identity verification"
            value="01 Jan 1990"
            icon={<CalendarDotsIcon size={24} color="#363F72" />}
            onPress={() => {}}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
