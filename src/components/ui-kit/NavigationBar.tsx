import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { Pressable, View, type ViewProps } from "react-native"

import { AltArrowDownIcon, AltArrowLeftIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const navigationBarVariants = cva("flex-row items-center w-full", {
  variants: {
    variant: {
      blank: "",
      "with-title": "",
      "progress-bar": "",
      dropdown: "",
      "with-selector": "",
    },
  },
  defaultVariants: {
    variant: "blank",
  },
})

type NavigationBarVariant = NonNullable<
  VariantProps<typeof navigationBarVariants>["variant"]
>

interface NavigationBarBaseProps
  extends ViewProps,
    VariantProps<typeof navigationBarVariants> {
  onBackPress?: () => void
  onRightPress?: () => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  showLeftIcon?: boolean
  showRightIcon?: boolean
  className?: string
}

interface NavigationBarBlankProps extends NavigationBarBaseProps {
  variant?: "blank"
}

interface NavigationBarWithTitleProps extends NavigationBarBaseProps {
  variant: "with-title"
  title: string
  subtitle?: string
}

interface NavigationBarProgressBarProps extends NavigationBarBaseProps {
  variant: "progress-bar"
  progress?: number
}

interface NavigationBarDropdownProps extends NavigationBarBaseProps {
  variant: "dropdown"
  title: string
  onDropdownPress?: () => void
}

interface NavigationBarWithSelectorProps extends NavigationBarBaseProps {
  variant: "with-selector"
  title: string
  selectorLabel: string
  onSelectorPress?: () => void
}

type NavigationBarProps =
  | NavigationBarBlankProps
  | NavigationBarWithTitleProps
  | NavigationBarProgressBarProps
  | NavigationBarDropdownProps
  | NavigationBarWithSelectorProps

function MenuItemLeft({
  onPress,
  showIcon = true,
  icon,
}: {
  onPress?: () => void
  showIcon?: boolean
  icon?: React.ReactNode
}) {
  return (
    <Pressable
      onPress={onPress}
      className="max-w-[86px] flex-1 flex-row items-center p-xl active:opacity-70"
      accessibilityRole="button"
      accessibilityLabel="Go back"
    >
      {showIcon &&
        (icon ?? <AltArrowLeftIcon size={24} color="var(--color-fg-primary)" />)}
    </Pressable>
  )
}

function MenuItemRight({
  onPress,
  showIcon = true,
  icon,
}: {
  onPress?: () => void
  showIcon?: boolean
  icon?: React.ReactNode
}) {
  return (
    <Pressable
      onPress={onPress}
      className="max-w-[86px] flex-1 flex-row items-center justify-end p-xl active:opacity-70"
      accessibilityRole="button"
    >
      {showIcon &&
        (icon ?? <AltArrowLeftIcon size={24} color="var(--color-fg-primary)" />)}
    </Pressable>
  )
}

function CenterBlank() {
  return <View className="flex-1 items-center justify-center" />
}

function CenterWithTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <View className="flex-1 items-center justify-center">
      <Typography
        size="body"
        weight="semibold"
        className="text-primary text-center"
        numberOfLines={1}
        style={{ fontSize: 17, lineHeight: 24 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          size="caption"
          className="text-secondary text-center"
          numberOfLines={1}
          style={{ fontSize: 13, lineHeight: 16 }}
        >
          {subtitle}
        </Typography>
      )}
    </View>
  )
}

function CenterProgressBar({ progress = 0 }: { progress: number }) {
  const clampedProgress = Math.max(0, Math.min(100, progress))

  return (
    <View className="flex-1 items-center justify-center px-md py-lg">
      <View className="h-2 w-full overflow-hidden rounded-full bg-disabled">
        <View
          className="h-full rounded-full bg-fg-brand-primary"
          style={{ width: `${clampedProgress}%` }}
        />
      </View>
    </View>
  )
}

function CenterDropdown({
  title,
  onDropdownPress,
}: {
  title: string
  onDropdownPress?: () => void
}) {
  return (
    <Pressable
      onPress={onDropdownPress}
      className="flex-1 flex-row items-center justify-center gap-md active:opacity-70"
    >
      <Typography
        size="body"
        weight="medium"
        className="text-primary"
        numberOfLines={1}
        style={{ fontSize: 17, lineHeight: 24, maxWidth: 225 }}
      >
        {title}
      </Typography>
      <AltArrowDownIcon size={16} color="var(--color-fg-secondary)" />
    </Pressable>
  )
}

function CenterWithSelector({
  title,
  selectorLabel,
  onSelectorPress,
}: {
  title: string
  selectorLabel: string
  onSelectorPress?: () => void
}) {
  return (
    <View className="flex-1 items-center justify-center">
      <Typography
        size="body"
        weight="semibold"
        className="text-primary text-center"
        numberOfLines={1}
        style={{ fontSize: 17, lineHeight: 24 }}
      >
        {title}
      </Typography>
      <Pressable
        onPress={onSelectorPress}
        className="flex-row items-center justify-center gap-xs rounded-full px-lg py-xxs active:opacity-70"
      >
        <Typography
          size="caption"
          className="text-primary"
          numberOfLines={1}
          style={{ fontSize: 13, lineHeight: 16 }}
        >
          {selectorLabel}
        </Typography>
        <AltArrowDownIcon size={16} color="var(--color-fg-tertiary)" />
      </Pressable>
    </View>
  )
}

export function NavigationBar(props: NavigationBarProps) {
  const {
    variant = "blank",
    onBackPress,
    onRightPress,
    leftIcon,
    rightIcon,
    showLeftIcon = true,
    showRightIcon = true,
    className,
    ...rest
  } = props

  const renderCenter = () => {
    switch (variant) {
      case "with-title":
        return (
          <CenterWithTitle
            title={(props as NavigationBarWithTitleProps).title}
            subtitle={(props as NavigationBarWithTitleProps).subtitle}
          />
        )
      case "progress-bar":
        return (
          <CenterProgressBar
            progress={(props as NavigationBarProgressBarProps).progress ?? 0}
          />
        )
      case "dropdown":
        return (
          <CenterDropdown
            title={(props as NavigationBarDropdownProps).title}
            onDropdownPress={
              (props as NavigationBarDropdownProps).onDropdownPress
            }
          />
        )
      case "with-selector":
        return (
          <CenterWithSelector
            title={(props as NavigationBarWithSelectorProps).title}
            selectorLabel={
              (props as NavigationBarWithSelectorProps).selectorLabel
            }
            onSelectorPress={
              (props as NavigationBarWithSelectorProps).onSelectorPress
            }
          />
        )
      case "blank":
      default:
        return <CenterBlank />
    }
  }

  return (
    <View
      className={cn(navigationBarVariants({ variant }), className)}
      {...rest}
    >
      <MenuItemLeft
        onPress={onBackPress}
        showIcon={showLeftIcon}
        icon={leftIcon}
      />
      {renderCenter()}
      <MenuItemRight
        onPress={onRightPress}
        showIcon={showRightIcon}
        icon={rightIcon}
      />
    </View>
  )
}

export {
  navigationBarVariants,
  type NavigationBarProps,
  type NavigationBarVariant,
}
