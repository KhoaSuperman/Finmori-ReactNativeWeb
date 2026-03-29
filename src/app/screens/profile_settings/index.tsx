import { useRouter } from "expo-router"
import React, { useState } from "react"
import { ImageBackground, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  BankOutlinedIcon,
  BookOutlinedIcon,
  CheckOutOutlinedIcon,
  DevicesOutlinedIcon,
  FaceIdOutlinedIcon,
  FileOutlinedIcon,
  GlobeOutlinedIcon,
  LockShieldOutlinedIcon,
  PasscodeOutlinedIcon,
  QuestionMarkCircleOutlinedIcon,
  SettingEyeOutlinedIcon,
  SwitchHorizontalOutlinedIcon,
  WalletOutlinedIcon,
  XCircleOutlinedIcon,
} from "@/components/icons"
import {
  AvatarWithIcon,
  BottomNavBar,
  HomeIndicatorBar,
  NavigationBar,
  SectionTitle,
  SettingSingle,
} from "@/components/ui-kit"
import { Typography } from "@/components/ui-kit/Typography"

const AVATAR_URI = "https://i.pravatar.cc/300?img=11"
const headerBgImage = require("../../../../assets/images/profile-settings/bg_profile_settings_header-3x.png")

const ICON_COLOR = "var(--color-fg-brand-primary)"
const ICON_SIZE = 24

export default function ProfileSettingsScreen() {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const [faceIdEnabled, setFaceIdEnabled] = useState(true)
  const [hideBalancesEnabled, setHideBalancesEnabled] = useState(true)

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ==================== HEADER ==================== */}
        <View style={{ position: "relative" }}>
          {/* Background image */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 173,
              overflow: "hidden",
            }}
          >
            <ImageBackground
              source={headerBgImage}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          {/* Navigation bar */}
          <View style={{ paddingTop: Math.max(insets.top, 44) }}>
            <NavigationBar
              variant="with-title"
              title="Profile & Settings"
              showLeftIcon={false}
              showRightIcon={false}
            />
          </View>

          {/* Profile name + avatar */}
          <View
            className="items-center gap-md px-xl"
            style={{ paddingTop: 48, paddingBottom: 24 }}
          >
            <AvatarWithIcon
              avatarProps={{ variant: "image", source: { uri: AVATAR_URI } }}
              size={80}
            />

            <View className="items-center gap-xs w-full">
              <Typography
                size="h2"
                weight="bold"
                className="text-center text-primary"
              >
                John Smith
              </Typography>
              <Typography size="body-small" className="text-center text-secondary">
                johnsmith@gmail.com
              </Typography>
            </View>
          </View>
        </View>

        {/* ==================== SETTING LIST ==================== */}
        <View style={{ gap: 40 }}>

          {/* ── Profile options (no section title) ── */}
          <View style={{ gap: 8 }}>
            <SettingSingle
              label="Card confirmation"
              type="navigation"
              icon={<WalletOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
            />
            <SettingSingle
              label="Account details"
              type="navigation"
              icon={<BankOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
            />
            <SettingSingle
              label="Transaction history"
              type="navigation"
              icon={
                <SwitchHorizontalOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
            <SettingSingle
              label="Documents and statements"
              type="navigation"
              icon={<FileOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
            />
          </View>

          {/* ── Security ── */}
          <View style={{ gap: 12 }}>
            <SectionTitle title="Security" type="caplock" />
            <View style={{ gap: 8 }}>
              <SettingSingle
                label="Devices"
                type="navigation"
                icon={<DevicesOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
              />
              <SettingSingle
                label="Change passcode"
                type="navigation"
                icon={<PasscodeOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
              />
              <SettingSingle
                label="Face ID"
                type="activation"
                icon={<FaceIdOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
                toggleValue={faceIdEnabled}
                onToggleChange={setFaceIdEnabled}
              />
              <SettingSingle
                label="Hide balances"
                type="activation"
                icon={<SettingEyeOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
                toggleValue={hideBalancesEnabled}
                onToggleChange={setHideBalancesEnabled}
              />
            </View>
          </View>

          {/* ── General ── */}
          <View style={{ gap: 12 }}>
            <SectionTitle title="General" type="caplock" />
            <View style={{ gap: 8 }}>
              <SettingSingle
                label="Languages"
                type="navigation"
                icon={<GlobeOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
              />
              <SettingSingle
                label="Help and Support"
                type="navigation"
                icon={
                  <QuestionMarkCircleOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />
                }
              />
            </View>
          </View>

          {/* ── Legal ── */}
          <View style={{ gap: 12 }}>
            <SectionTitle title="Legal" type="caplock" />
            <View style={{ gap: 8 }}>
              <SettingSingle
                label="Privacy Policy"
                type="navigation"
                icon={<LockShieldOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
              />
              <SettingSingle
                label="Terms and Conditions"
                type="navigation"
                icon={<BookOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
              />
            </View>
          </View>

          {/* ── Account options ── */}
          <View style={{ gap: 8 }}>
            <SettingSingle
              label="Log Out"
              type="navigation"
              icon={<CheckOutOutlinedIcon size={ICON_SIZE} color={ICON_COLOR} />}
            />
            <SettingSingle
              label="Delete account"
              type="navigation"
              variant="danger"
              icon={<XCircleOutlinedIcon size={ICON_SIZE} color="var(--color-fg-error)" />}
            />
          </View>
        </View>
      </ScrollView>

      {/* ==================== BOTTOM NAV BAR ==================== */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: insets.bottom,
        }}
      >
        <BottomNavBar activeTab="profile" />
        <HomeIndicatorBar type="default" />
      </View>
    </View>
  )
}
