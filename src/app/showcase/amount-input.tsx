import React, { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { AmountInput } from "@/components/ui-kit/AmountInput"
import { Typography } from "@/components/ui-kit/Typography"

export default function AmountInputShowcase() {
  const [value1, setValue1] = useState("0")
  const [formatted1, setFormatted1] = useState("0")
  const [value2, setValue2] = useState("1200")
  const [formatted2, setFormatted2] = useState("1.200")
  const [value3, setValue3] = useState("1200465")
  const [formatted3, setFormatted3] = useState("1.200.465")

  return (
    <ShowcasePage
      title="Amount Input"
      description="Large numeric input with Literata display font, blinking cursor, and automatic thousand-separator formatting. Supports focussed, active, and maximum character states."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Focussed (Initial)
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Shows "0" with a blinking cursor when the input is focused but empty.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <AmountInput
            value={value1}
            onChangeValue={(raw, fmt) => {
              setValue1(raw)
              setFormatted1(fmt)
            }}
            autoFocus
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Raw: {value1} · Formatted: {formatted1}
          </Typography>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Active
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Displays the entered amount. Tap to edit.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <AmountInput
            value={value2}
            onChangeValue={(raw, fmt) => {
              setValue2(raw)
              setFormatted2(fmt)
            }}
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Raw: {value2} · Formatted: {formatted2}
          </Typography>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Reach Maximum Character
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          At max length (7 digits), input stops accepting new characters. Thousand separators are
          applied automatically.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <AmountInput
            value={value3}
            onChangeValue={(raw, fmt) => {
              setValue3(raw)
              setFormatted3(fmt)
            }}
            maxLength={7}
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Raw: {value3} · Formatted: {formatted3}
          </Typography>
        </View>
      </View>
    </ShowcasePage>
  )
}
