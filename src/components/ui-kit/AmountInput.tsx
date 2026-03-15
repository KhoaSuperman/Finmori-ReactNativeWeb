import React, { useCallback, useEffect, useRef, useState } from "react"
import { Platform, Pressable, TextInput, View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

interface AmountInputProps extends ViewProps {
  value?: string
  onChangeValue?: (raw: string, formatted: string) => void
  maxLength?: number
  thousandSeparator?: string
  autoFocus?: boolean
  className?: string
}

function formatAmount(raw: string, separator: string): string {
  if (!raw || raw === "0") return raw
  const cleaned = raw.replace(/^0+/, "") || "0"
  return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

function AmountInput({
  value,
  onChangeValue,
  maxLength = 7,
  thousandSeparator = ".",
  autoFocus = false,
  className,
  ...props
}: AmountInputProps) {
  const [raw, setRaw] = useState(value ?? "0")
  const [isFocused, setIsFocused] = useState(autoFocus)
  const inputRef = useRef<TextInput>(null)
  const cursorVisible = useRef(true)
  const [cursorOn, setCursorOn] = useState(true)

  const isControlled = value !== undefined
  const currentRaw = isControlled ? value : raw
  const formatted = formatAmount(currentRaw, thousandSeparator)

  useEffect(() => {
    if (!isFocused) return
    cursorVisible.current = true
    setCursorOn(true)
    const interval = setInterval(() => {
      cursorVisible.current = !cursorVisible.current
      setCursorOn(cursorVisible.current)
    }, 530)
    return () => clearInterval(interval)
  }, [isFocused])

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [autoFocus])

  const handleKeyInput = useCallback(
    (text: string) => {
      const digits = text.replace(/\D/g, "")
      let next: string

      if (digits.length === 0) {
        next = "0"
      } else {
        const stripped = digits.replace(/^0+/, "") || "0"
        next = stripped.slice(0, maxLength)
      }

      if (!isControlled) {
        setRaw(next)
      }
      onChangeValue?.(next, formatAmount(next, thousandSeparator))
    },
    [isControlled, maxLength, onChangeValue, thousandSeparator],
  )

  const handleFocus = useCallback(() => setIsFocused(true), [])
  const handleBlur = useCallback(() => setIsFocused(false), [])

  const handlePress = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const textStyle = {
    fontFamily: "Literata",
    fontSize: 72,
    fontWeight: "600" as const,
    letterSpacing: -2,
    color: "#1a297d",
    lineHeight: Platform.OS === "web" ? undefined : 107,
  }

  return (
    <Pressable onPress={handlePress} accessibilityRole="none" {...props}>
      <View
        className={cn("flex-row items-center", className)}
        style={{ gap: 6, maxWidth: 360 }}
      >
        <TextInput
          ref={inputRef}
          value={currentRaw}
          onChangeText={handleKeyInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="number-pad"
          caretHidden
          selectionColor="transparent"
          style={[
            textStyle,
            {
              position: "absolute",
              opacity: 0,
              width: 1,
              height: 1,
              ...(Platform.OS === "web" && { pointerEvents: "auto" as any }),
            },
          ]}
          accessibilityLabel="Amount input"
        />

        <Typography
          size="display-xl"
          weight="semibold"
          className="font-display"
          style={textStyle}
        >
          {formatted}
        </Typography>

        {isFocused && (
          <View
            style={{
              width: 2,
              height: 72,
              backgroundColor: cursorOn ? "#2c7aff" : "transparent",
              borderRadius: 1,
            }}
          />
        )}
      </View>
    </Pressable>
  )
}

export { AmountInput, type AmountInputProps }
