import React, { useCallback, useEffect, useRef, useState } from "react"
import { Platform, Pressable, TextInput, View, type ViewProps } from "react-native"

import { CloseCircleAlphaIcon } from "@/components/icons/CloseCircleAlphaIcon"
import { SearchMagnifierOutlineIcon } from "@/components/icons/SearchMagnifierOutlineIcon"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

interface SearchFieldProps extends ViewProps {
  value?: string
  onChangeValue?: (value: string) => void
  onCancel?: () => void
  placeholder?: string
  showCancel?: boolean
  autoFocus?: boolean
  maxLength?: number
  className?: string
}

function SearchField({
  value,
  onChangeValue,
  onCancel,
  placeholder = "Search",
  showCancel = false,
  autoFocus = false,
  maxLength,
  className,
  ...props
}: SearchFieldProps) {
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

  const handleCancel = useCallback(() => {
    if (!isControlled) {
      setInternalValue("")
    }
    onChangeValue?.("")
    setIsFocused(false)
    inputRef.current?.blur()
    onCancel?.()
  }, [isControlled, onChangeValue, onCancel])

  return (
    <View className={cn("flex-row items-center", className)} style={{ gap: 8 }} {...props}>
      {/* Input Field */}
      <Pressable
        onPress={handlePress}
        accessibilityRole="none"
        className="flex-1 flex-row items-center rounded-lg bg-disabled-subtle"
        style={{ paddingHorizontal: 12, paddingVertical: 12, gap: 8 }}
      >
        {/* Hidden real TextInput */}
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
              fontSize: 17,
              fontWeight: "400",
              lineHeight: Platform.OS === "web" ? undefined : 24,
              color: "#101323",
              position: "absolute",
              opacity: 0,
              width: 1,
              height: 1,
              ...(Platform.OS === "web" && { pointerEvents: "auto" as any }),
            },
          ]}
          accessibilityLabel="Search input"
        />

        {/* Search icon */}
        <SearchMagnifierOutlineIcon size={20} color="#3e4784" />

        {/* Text area */}
        <View className="flex-1 flex-row items-center" style={{ minHeight: 24 }}>
          {showPlaceholder && (
            <Typography
              size="body"
              className="text-placeholder"
              style={{ fontSize: 17, lineHeight: 24 }}
              numberOfLines={1}
            >
              {placeholder}
            </Typography>
          )}

          {(isFocussedEmpty || isTyping || isActive) && (
            <View className="flex-row items-center">
              {currentValue.length > 0 && (
                <Typography
                  size="body"
                  weight="medium"
                  className="text-primary"
                  style={{ fontSize: 17, lineHeight: 24 }}
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
        </View>

        {/* Clear button — shown when there is text */}
        {(isTyping || isActive) && (
          <Pressable
            onPress={handleClear}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            hitSlop={8}
          >
            <CloseCircleAlphaIcon size={20} color="rgba(0,0,0,0.6)" />
          </Pressable>
        )}
      </Pressable>

      {/* Cancel button */}
      {showCancel && (
        <Pressable
          onPress={handleCancel}
          accessibilityRole="button"
          accessibilityLabel="Cancel search"
          hitSlop={8}
        >
          <Typography
            size="body"
            weight="medium"
            style={{ fontSize: 17, lineHeight: 24, color: "#1a297d" }}
          >
            Cancel
          </Typography>
        </Pressable>
      )}
    </View>
  )
}

export { SearchField, type SearchFieldProps }
