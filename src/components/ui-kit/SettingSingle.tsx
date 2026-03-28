import React from "react"
import { Pressable, View, type ViewProps } from "react-native"

import { ChevronRightOutlinedIcon } from "@/components/icons/ChevronRightOutlinedIcon"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

// ─── Toggle ──────────────────────────────────────────────────────────────────

interface ToggleProps {
  value: boolean
  onValueChange?: (value: boolean) => void
  disabled?: boolean
}

function Toggle({ value, onValueChange, disabled }: ToggleProps) {
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      onPress={() => !disabled && onValueChange?.(!value)}
      style={{
        width: 58,
        height: 36,
        borderRadius: 9999,
        backgroundColor: value ? "#1A45E6" : "#D5D9EB",
        justifyContent: "center",
        paddingHorizontal: 2,
        shadowColor: "#0a0d12",
        shadowOpacity: value ? 0.18 : 0,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 0 },
        elevation: value ? 2 : 0,
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 9999,
          backgroundColor: "#FFFFFF",
          alignSelf: value ? "flex-end" : "flex-start",
        }}
      />
    </Pressable>
  )
}

// ─── SettingSingle ────────────────────────────────────────────────────────────

type SettingSingleType = "navigation" | "activation"

interface SettingSingleProps extends ViewProps {
  /** Row label */
  label: string
  /** Icon rendered inside the 44×44 brand-colored badge */
  icon: React.ReactNode
  /** Determines trailing element: chevron (navigation) or toggle (activation) */
  type: SettingSingleType
  /** Toggle value — only used when type="activation" */
  toggleValue?: boolean
  /** Toggle change handler — only used when type="activation" */
  onToggleChange?: (value: boolean) => void
  /** Press handler — only used when type="navigation" */
  onPress?: () => void
  /** Whether the toggle is disabled — only used when type="activation" */
  disabled?: boolean
  className?: string
}

export function SettingSingle({
  label,
  icon,
  type,
  toggleValue = false,
  onToggleChange,
  onPress,
  disabled,
  className,
  style,
  ...viewProps
}: SettingSingleProps) {
  const isNavigation = type === "navigation"
  const Container = isNavigation && onPress ? Pressable : View

  return (
    <Container
      onPress={isNavigation ? onPress : undefined}
      className={cn(
        "flex-row items-center gap-md px-xl",
        isNavigation && onPress && "active:opacity-70",
        className,
      )}
      style={[{ minHeight: 44 }, style]}
      {...(viewProps as ViewProps)}
    >
      {/* Icon badge */}
      <View
        className="items-center justify-center rounded-full bg-brand-primary"
        style={{ width: 44, height: 44 }}
      >
        {icon}
      </View>

      {/* Label */}
      <View className="flex-1">
        <Typography size="body" weight="medium" className="text-primary">
          {label}
        </Typography>
      </View>

      {/* Trailing element */}
      {isNavigation ? (
        <ChevronRightOutlinedIcon size={24} color="#4E5BA6" />
      ) : (
        <Toggle
          value={toggleValue}
          onValueChange={onToggleChange}
          disabled={disabled}
        />
      )}
    </Container>
  )
}

export type { SettingSingleProps, SettingSingleType }
