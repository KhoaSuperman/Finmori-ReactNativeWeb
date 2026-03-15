import React, { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { TransactionTextInput } from "@/components/ui-kit/TransactionTextInput"
import { Typography } from "@/components/ui-kit/Typography"

export default function TransactionTextInputShowcase() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("Lunch")
  const [value4, setValue4] = useState("Lunch with colleagues")

  return (
    <ShowcasePage
      title="Transaction Text Input"
      description="Inline text input for naming a transaction. Features placeholder, focussed (blinking cursor), typing (with clear button), and active states — all with a bottom-border indicator."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Shows placeholder text when empty and unfocused. Border uses the primary border color.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <TransactionTextInput value={value1} onChangeValue={setValue1} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Focussed (Empty)
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          When focused with no text, shows a blinking cursor. Border switches to brand blue.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <TransactionTextInput value={value2} onChangeValue={setValue2} autoFocus />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Typing
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          While typing, shows entered text, a blinking cursor after the last character, and a clear
          button to reset the input.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <TransactionTextInput value={value3} onChangeValue={setValue3} autoFocus />
          <Typography size="caption" className="mt-3 text-tertiary">
            Value: "{value3}"
          </Typography>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Active (Filled)
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          After losing focus with text entered, shows the value in primary text color with a brand
          blue border. Tap to edit again.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-5 py-6">
          <TransactionTextInput value={value4} onChangeValue={setValue4} />
          <Typography size="caption" className="mt-3 text-tertiary">
            Value: "{value4}"
          </Typography>
        </View>
      </View>
    </ShowcasePage>
  )
}
