import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { NavigationBar } from "@/components/ui-kit/NavigationBar"
import { Typography } from "@/components/ui-kit/Typography"

export default function NavigationBarShowcase() {
  return (
    <ShowcasePage
      title="Navigation Bar"
      description="Top navigation bar with back button, center content area, and optional right action. Supports blank, title, progress bar, dropdown, and selector variants."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Blank
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Minimal navigation bar with only left and right icon buttons.
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <NavigationBar variant="blank" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Title
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Centered title with optional subtitle text below.
        </Typography>
        <View className="gap-3">
          <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
            <NavigationBar
              variant="with-title"
              title="Settings"
              subtitle="Manage your account"
            />
          </View>
          <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
            <NavigationBar variant="with-title" title="Profile" />
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Progress Bar
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Horizontal progress indicator in the center area.
        </Typography>
        <View className="gap-3">
          <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
            <NavigationBar variant="progress-bar" progress={0} />
          </View>
          <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
            <NavigationBar variant="progress-bar" progress={35} />
          </View>
          <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
            <NavigationBar variant="progress-bar" progress={75} />
          </View>
          <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
            <NavigationBar variant="progress-bar" progress={100} />
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Dropdown
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Centered title with a dropdown arrow for selection menus.
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <NavigationBar variant="dropdown" title="All Accounts" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Selector
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Title with a tappable date or category selector below.
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <NavigationBar
            variant="with-selector"
            title="Transactions"
            selectorLabel="March 2026"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Without Right Icon
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Navigation bar with the right icon hidden.
        </Typography>
        <View className="overflow-hidden rounded-2xl border border-tertiary bg-primary">
          <NavigationBar
            variant="with-title"
            title="Details"
            showRightIcon={false}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
