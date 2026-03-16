import React, { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { SearchField } from "@/components/ui-kit/SearchField"
import { Typography } from "@/components/ui-kit/Typography"

export default function SearchFieldShowcase() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("Type something")
  const [value5, setValue5] = useState("Type something")
  const [value6, setValue6] = useState("Type something")
  const [value7, setValue7] = useState("Type something")

  return (
    <ShowcasePage
      title="Search Field"
      description="Search input with placeholder, focused, typing, and active states. Supports an optional Cancel button and a clear (×) button when text is present."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Empty and unfocused. Shows placeholder text with a search icon.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField value={value1} onChangeValue={setValue1} placeholder="Search" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Focussed — No Cancel
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Focused with no text. Shows a blinking cursor. No cancel button.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField value={value2} onChangeValue={setValue2} placeholder="Search" autoFocus />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Focussed — With Cancel
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Focused with no text and Cancel button visible. Tapping Cancel clears and blurs the field.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField
            value={value3}
            onChangeValue={setValue3}
            placeholder="Search"
            showCancel
            autoFocus
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Typing — With Cancel
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Focused with text entered. Shows typed text, blinking cursor, clear (×) button, and Cancel.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField
            value={value4}
            onChangeValue={setValue4}
            placeholder="Search"
            showCancel
            autoFocus
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Value: "{value4}"
          </Typography>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Typing — No Cancel
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Focused with text entered. Shows typed text, blinking cursor, and clear (×) button.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField
            value={value5}
            onChangeValue={setValue5}
            placeholder="Search"
            autoFocus
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Value: "{value5}"
          </Typography>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Active — With Cancel
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Unfocused with text. Shows entered value with clear (×) button and Cancel. Tap to edit.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField
            value={value6}
            onChangeValue={setValue6}
            placeholder="Search"
            showCancel
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Value: "{value6}"
          </Typography>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Active — No Cancel
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Unfocused with text and no Cancel button. Shows entered value with clear (×) button.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary bg-primary px-4 py-5">
          <SearchField
            value={value7}
            onChangeValue={setValue7}
            placeholder="Search"
          />
          <Typography size="caption" className="mt-3 text-tertiary">
            Value: "{value7}"
          </Typography>
        </View>
      </View>
    </ShowcasePage>
  )
}
