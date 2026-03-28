import React, { useState } from "react"
import { View } from "react-native"

import { EyeOutlinedIcon } from "@/components/icons/EyeOutlinedIcon"
import { ShowcasePage } from "@/components/showcase-page"
import { SettingSingle } from "@/components/ui-kit/SettingSingle"
import { Typography } from "@/components/ui-kit/Typography"

function NavigationSection() {
  return (
    <View className="gap-4">
      <Typography size="h3" weight="bold" className="px-1">
        Type: Navigation
      </Typography>
      <Typography size="body-small" className="px-1 text-tertiary">
        Tapping the row navigates to a new screen. Trailing chevron indicates navigation.
      </Typography>
      <View className="gap-2 overflow-hidden rounded-2xl border border-tertiary bg-primary py-2">
        <SettingSingle
          type="navigation"
          label="Hide balances"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          onPress={() => {}}
        />
        <View className="mx-xl h-px bg-secondary" />
        <SettingSingle
          type="navigation"
          label="Notifications"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          onPress={() => {}}
        />
        <View className="mx-xl h-px bg-secondary" />
        <SettingSingle
          type="navigation"
          label="Privacy & Security"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

function ActivationSection() {
  const [hideBalances, setHideBalances] = useState(true)
  const [notifications, setNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <View className="gap-4">
      <Typography size="h3" weight="bold" className="px-1">
        Type: Activation
      </Typography>
      <Typography size="body-small" className="px-1 text-tertiary">
        Toggle switch controls a boolean setting. Tap the row or the switch to toggle.
      </Typography>
      <View className="gap-2 overflow-hidden rounded-2xl border border-tertiary bg-primary py-2">
        <SettingSingle
          type="activation"
          label="Hide balances"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          toggleValue={hideBalances}
          onToggleChange={setHideBalances}
        />
        <View className="mx-xl h-px bg-secondary" />
        <SettingSingle
          type="activation"
          label="Notifications"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          toggleValue={notifications}
          onToggleChange={setNotifications}
        />
        <View className="mx-xl h-px bg-secondary" />
        <SettingSingle
          type="activation"
          label="Dark mode"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          toggleValue={darkMode}
          onToggleChange={setDarkMode}
        />
      </View>
    </View>
  )
}

function DisabledSection() {
  return (
    <View className="gap-4">
      <Typography size="h3" weight="bold" className="px-1">
        Disabled State
      </Typography>
      <Typography size="body-small" className="px-1 text-tertiary">
        Disabled toggle is non-interactive and rendered at reduced opacity.
      </Typography>
      <View className="gap-2 overflow-hidden rounded-2xl border border-tertiary bg-primary py-2">
        <SettingSingle
          type="activation"
          label="Biometric login"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          toggleValue={false}
          disabled
        />
        <View className="mx-xl h-px bg-secondary" />
        <SettingSingle
          type="activation"
          label="Face ID"
          icon={<EyeOutlinedIcon size={24} color="#1A45E6" />}
          toggleValue={true}
          disabled
        />
      </View>
    </View>
  )
}

export default function SettingSingleShowcase() {
  return (
    <ShowcasePage
      title="Setting Single"
      description="A settings row with an icon badge, label, and a trailing navigation chevron or activation toggle."
    >
      <NavigationSection />
      <ActivationSection />
      <DisabledSection />
    </ShowcasePage>
  )
}
