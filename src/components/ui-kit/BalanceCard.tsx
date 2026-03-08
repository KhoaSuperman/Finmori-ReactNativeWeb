import React, { useState } from "react"
import { Platform, Pressable, View, type ViewProps } from "react-native"

import { EyeIcon, EyeOffIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

interface BalanceCardProps extends ViewProps {
  label?: string
  amount: string
  hidden?: boolean
  onToggleVisibility?: (hidden: boolean) => void
  className?: string
}

const HIDDEN_PLACEHOLDER = "••••••"

function GradientAmount({ text }: { text: string }) {
  if (Platform.OS === "web") {
    return (
      <Typography
        size="display"
        weight="medium"
        className="font-display tracking-tighter"
        style={
          {
            fontSize: 34,
            lineHeight: 44,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(180deg, #293056 0%, #3E4784 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          } as any
        }
      >
        {text}
      </Typography>
    )
  }

  return (
    <Typography
      size="display"
      weight="medium"
      className="font-display tracking-tighter"
      style={{ fontSize: 34, lineHeight: 44, letterSpacing: -2, color: "#293056" }}
    >
      {text}
    </Typography>
  )
}

export function BalanceCard({
  label = "Current Balance",
  amount,
  hidden: controlledHidden,
  onToggleVisibility,
  className,
  ...props
}: BalanceCardProps) {
  const [internalHidden, setInternalHidden] = useState(false)
  const isControlled = controlledHidden !== undefined
  const isHidden = isControlled ? controlledHidden : internalHidden

  const handleToggle = () => {
    const next = !isHidden
    if (isControlled) {
      onToggleVisibility?.(next)
    } else {
      setInternalHidden(next)
      onToggleVisibility?.(next)
    }
  }

  return (
    <View className={cn("gap-0", className)} {...props}>
      <View className="flex-row items-center gap-md">
        <Typography size="body-small" weight="semibold" className="text-secondary">
          {label}
        </Typography>
        <Pressable
          onPress={handleToggle}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={isHidden ? "Show balance" : "Hide balance"}
        >
          {isHidden ? (
            <EyeOffIcon size={16} color="#363F72" />
          ) : (
            <EyeIcon size={16} color="#363F72" />
          )}
        </Pressable>
      </View>

      <GradientAmount text={isHidden ? HIDDEN_PLACEHOLDER : amount} />
    </View>
  )
}

export type { BalanceCardProps }
