import React, { useCallback, useEffect, useRef, useState } from "react"
import { Platform, Pressable, TextInput, View, type ViewProps } from "react-native"

import { CloseCircleBoldIcon } from "@/components/icons/CloseCircleBoldIcon"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

interface TransactionTextInputProps extends ViewProps {
  value?: string
  onChangeValue?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  maxLength?: number
  className?: string
}

function TransactionTextInput({
  value,
  onChangeValue,
  placeholder = "Name the transaction",
  autoFocus = false,
  maxLength,
  className,
  ...props
}: TransactionTextInputProps) {
  const [internalValue, setInternalValue] = useState(value ?? "")
  const [isFocused, setIsFocused] = useState(autoFocus)
  const inputRef = useRef<TextInput>(null)
  const cursorVisible = useRef(true)
  const [cursorOn, setCursorOn] = useState(true)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const isTyping = isFocused && currentValue.length > 0
  const isFocussedEmpty = isFocused && currentValue.length === 0
  const isActive = !isFocused && currentValue.length > 0
  const showPlaceholder = !isFocused && currentValue.length === 0

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

  const handleChangeText = useCallback(
    (text: string) => {
      if (!isControlled) {
        setInternalValue(text)
      }
      onChangeValue?.(text)
    },
    [isControlled, onChangeValue],
  )

  const handleFocus = useCallback(() => setIsFocused(true), [])
  const handleBlur = useCallback(() => setIsFocused(false), [])

  const handlePress = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const handleClear = useCallback(() => {
    if (!isControlled) {
      setInternalValue("")
    }
    onChangeValue?.("")
    inputRef.current?.focus()
  }, [isControlled, onChangeValue])

  const isBrandBorder = isFocused || isActive

  return (
    <Pressable onPress={handlePress} accessibilityRole="none" {...props}>
      <View className={cn("gap-2", className)} style={{ minWidth: 160, maxWidth: 360 }}>
        {/* Text row */}
        <View className="flex-row items-center justify-center" style={{ gap: 6, height: 20 }}>
          <TextInput
            ref={inputRef}
            value={currentValue}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            caretHidden
            selectionColor="transparent"
            maxLength={maxLength}
            style={[
              {
                fontFamily: "PlusJakartaSans",
                fontSize: 15,
                fontWeight: "400",
                lineHeight: Platform.OS === "web" ? undefined : 20,
                color: "#101323",
                position: "absolute",
                opacity: 0,
                width: 1,
                height: 1,
                ...(Platform.OS === "web" && { pointerEvents: "auto" as any }),
              },
            ]}
            accessibilityLabel="Transaction name input"
          />

          {showPlaceholder && (
            <Typography
              size="body"
              className="text-placeholder"
              style={{ fontSize: 15, lineHeight: 20 }}
              numberOfLines={1}
            >
              {placeholder}
            </Typography>
          )}

          {(isFocussedEmpty || isTyping || isActive) && (
            <View className="flex-row items-center" style={{ gap: 0 }}>
              {currentValue.length > 0 && (
                <Typography
                  size="body"
                  className="text-primary"
                  style={{ fontSize: 15, lineHeight: 20 }}
                  numberOfLines={1}
                >
                  {currentValue}
                </Typography>
              )}
              {isFocused && (
                <View
                  style={{
                    width: 1.5,
                    height: 18,
                    backgroundColor: cursorOn ? "#2c7aff" : "transparent",
                    borderRadius: 1,
                    marginLeft: currentValue.length > 0 ? 1 : 0,
                  }}
                />
              )}
            </View>
          )}

          {isTyping && (
            <Pressable
              onPress={handleClear}
              accessibilityRole="button"
              accessibilityLabel="Clear transaction name"
              hitSlop={8}
            >
              <CloseCircleBoldIcon size={16} color="#3e4784" />
            </Pressable>
          )}
        </View>

        {/* Bottom dashed border line */}
        <View
          style={{
            borderBottomWidth: 1,
            borderStyle: "dashed",
            borderColor: isBrandBorder ? "#2f61f3" : "#b3b8db",
          }}
        />
      </View>
    </Pressable>
  )
}

export { TransactionTextInput, type TransactionTextInputProps }
