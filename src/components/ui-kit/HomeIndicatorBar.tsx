import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { Pressable, View } from "react-native"

import { EditIcon } from "@/components/icons/EditIcon"
import { TrashCanIcon } from "@/components/icons/TrashCanIcon"
import { cn } from "@/lib/cn"

import { Button } from "./Button"
import { Typography } from "./Typography"

// ─── Home Indicator ────────────────────────────────────────────────────────────

function HomeIndicator({ className }: { className?: string }) {
  return (
    <View
      className={cn("w-full items-center justify-center pt-[21px] pb-[8px]", className)}
      style={{ height: 34 }}
    >
      <View
        className="bg-primary-text rounded-full"
        style={{ width: 134, height: 5, borderRadius: 100, backgroundColor: "#000000" }}
      />
    </View>
  )
}

// ─── Component Variants ────────────────────────────────────────────────────────

const homeIndicatorBarVariants = cva("w-full bg-primary", {
  variants: {
    type: {
      default: "",
      "1-button": "",
      "2-buttons-hor": "",
      "2-buttons-ver": "",
      "3-buttons": "",
      "action-sheet": "rounded-t-2xl bg-tertiary",
    },
  },
  defaultVariants: {
    type: "default",
  },
})

// ─── Action Sheet Item ─────────────────────────────────────────────────────────

interface ActionSheetItemProps {
  label: string
  icon: React.ReactNode
  onPress?: () => void
  isFirst?: boolean
  isLast?: boolean
  destructive?: boolean
}

function ActionSheetItem({ label, icon, onPress, isFirst, isLast, destructive }: ActionSheetItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="active:opacity-70"
      style={[
        isFirst && { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
        isLast && { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
      ]}
    >
      <View className="flex-row items-center justify-between bg-primary px-xl py-lg">
        <Typography
          size="body"
          weight="medium"
          className={cn("flex-1", destructive ? "text-error-primary" : "text-primary")}
        >
          {label}
        </Typography>
        <View style={{ width: 24, height: 24 }}>{icon}</View>
      </View>
      {!isLast && (
        <View className="mx-xl" style={{ height: 1, backgroundColor: "#e9eaeb" }} />
      )}
    </Pressable>
  )
}

// ─── Props ─────────────────────────────────────────────────────────────────────

export interface HomeIndicatorBarProps extends VariantProps<typeof homeIndicatorBarVariants> {
  /** Primary button label (used in 1-button, 2-buttons-hor, 2-buttons-ver, 3-buttons types) */
  primaryLabel?: string
  /** Secondary/cancel button label (used in 2-buttons-hor, 2-buttons-ver, 3-buttons types) */
  secondaryLabel?: string
  /** Third button label (used in 3-buttons type, shown alongside secondary) */
  tertiaryLabel?: string
  /** Action sheet edit label (used in action-sheet type) */
  editLabel?: string
  /** Action sheet delete label (used in action-sheet type) */
  deleteLabel?: string
  /** Action sheet cancel/exit label (used in action-sheet type) */
  cancelLabel?: string
  onPrimaryPress?: () => void
  onSecondaryPress?: () => void
  onTertiaryPress?: () => void
  onEditPress?: () => void
  onDeletePress?: () => void
  onCancelPress?: () => void
  className?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function HomeIndicatorBar({
  type = "default",
  primaryLabel = "Continue",
  secondaryLabel = "Cancel",
  tertiaryLabel = "Cancel",
  editLabel = "Chỉnh sửa",
  deleteLabel = "Xóa bữa ăn",
  cancelLabel = "Thoát",
  onPrimaryPress,
  onSecondaryPress,
  onTertiaryPress,
  onEditPress,
  onDeletePress,
  onCancelPress,
  className,
}: HomeIndicatorBarProps) {
  if (type === "default") {
    return (
      <View className={cn(homeIndicatorBarVariants({ type }), className)}>
        <HomeIndicator />
      </View>
    )
  }

  if (type === "1-button") {
    return (
      <View className={cn(homeIndicatorBarVariants({ type }), className)}>
        <View className="px-xl pt-xl pb-md">
          <Button
            variant="primary"
            label={primaryLabel}
            onPress={onPrimaryPress}
            className="w-full"
          />
        </View>
        <HomeIndicator />
      </View>
    )
  }

  if (type === "2-buttons-hor") {
    return (
      <View className={cn(homeIndicatorBarVariants({ type }), className)}>
        <View className="flex-row gap-md px-xl pt-xl pb-md">
          <Button
            variant="tertiary"
            label={secondaryLabel}
            onPress={onSecondaryPress}
            className="flex-1"
          />
          <Button
            variant="primary"
            label={primaryLabel}
            onPress={onPrimaryPress}
            className="flex-1"
          />
        </View>
        <HomeIndicator />
      </View>
    )
  }

  if (type === "2-buttons-ver") {
    return (
      <View className={cn(homeIndicatorBarVariants({ type }), className)}>
        <View className="gap-md px-xl pt-xl pb-md">
          <Button
            variant="primary"
            label={primaryLabel}
            onPress={onPrimaryPress}
            className="w-full"
          />
          <Button
            variant="tertiary"
            label={secondaryLabel}
            onPress={onSecondaryPress}
            className="w-full"
          />
        </View>
        <HomeIndicator />
      </View>
    )
  }

  if (type === "3-buttons") {
    return (
      <View className={cn(homeIndicatorBarVariants({ type }), className)}>
        <View className="gap-lg px-xl pt-xl pb-md">
          <Button
            variant="primary"
            label={primaryLabel}
            onPress={onPrimaryPress}
            className="w-full"
          />
          <View className="flex-row gap-lg">
            <Button
              variant="tertiary"
              label={secondaryLabel}
              onPress={onSecondaryPress}
              className="flex-1"
            />
            <Button
              variant="tertiary"
              label={tertiaryLabel}
              onPress={onTertiaryPress}
              className="flex-1"
            />
          </View>
        </View>
        <HomeIndicator />
      </View>
    )
  }

  if (type === "action-sheet") {
    return (
      <View className={cn(homeIndicatorBarVariants({ type }), className)}>
        <View className="gap-lg px-xl pt-xl pb-md">
          <View className="rounded-xl overflow-hidden">
            <ActionSheetItem
              label={editLabel}
              icon={<EditIcon size={24} color="#535862" />}
              onPress={onEditPress}
              isFirst
              destructive={false}
            />
            <ActionSheetItem
              label={deleteLabel}
              icon={<TrashCanIcon size={24} color="#f04438" />}
              onPress={onDeletePress}
              isLast
              destructive
            />
          </View>
          <Button
            variant="link-gray"
            label={cancelLabel}
            onPress={onCancelPress}
            className="w-full justify-center"
          />
        </View>
        <HomeIndicator />
      </View>
    )
  }

  return null
}

export { homeIndicatorBarVariants }
export type HomeIndicatorBarType = NonNullable<VariantProps<typeof homeIndicatorBarVariants>["type"]>
