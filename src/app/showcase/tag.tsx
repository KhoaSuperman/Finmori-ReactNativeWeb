import { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Tag, type TagColor } from "@/components/ui-kit/Tag"
import { Typography } from "@/components/ui-kit/Typography"

const ALL_COLORS: TagColor[] = ["black", "red", "yellow", "green", "blue", "purple", "cyan", "pink"]

export default function TagShowcase() {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())

  const toggleDismiss = (key: string) => {
    setDismissed((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  return (
    <ShowcasePage
      title="Tag"
      description="Compact label pill with 8 color variants and optional dismiss action."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Colors — No Dismiss
        </Typography>
        <View className="flex-row flex-wrap gap-md rounded-2xl border border-tertiary bg-primary p-xl">
          {ALL_COLORS.map((color) => (
            <Tag key={color} color={color} label={color.charAt(0).toUpperCase() + color.slice(1)} />
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Colors — With Dismiss
        </Typography>
        <View className="flex-row flex-wrap gap-md rounded-2xl border border-tertiary bg-primary p-xl">
          {ALL_COLORS.map((color) => (
            <Tag key={color} color={color} label={color.charAt(0).toUpperCase() + color.slice(1)} onDismiss={() => {}} />
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive — Dismiss to Remove
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap the × to dismiss a tag. Tap again to restore.
        </Typography>
        <View className="flex-row flex-wrap gap-md rounded-2xl border border-tertiary bg-primary p-xl">
          {ALL_COLORS.map((color) => {
            const key = `dismiss-${color}`
            if (dismissed.has(key)) return null
            return (
              <Tag
                key={key}
                color={color}
                label={color.charAt(0).toUpperCase() + color.slice(1)}
                onDismiss={() => toggleDismiss(key)}
              />
            )
          })}
          {ALL_COLORS.every((c) => dismissed.has(`dismiss-${c}`)) && (
            <Typography size="body-small" className="text-tertiary">
              All tags dismissed. Tap below to reset.
            </Typography>
          )}
        </View>
        {ALL_COLORS.some((c) => dismissed.has(`dismiss-${c}`)) && (
          <View className="flex-row flex-wrap gap-md px-1">
            {ALL_COLORS.filter((c) => dismissed.has(`dismiss-${c}`)).map((color) => (
              <Tag
                key={`restore-${color}`}
                color={color}
                label={`+ ${color}`}
                onDismiss={() => toggleDismiss(`dismiss-${color}`)}
              />
            ))}
          </View>
        )}
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Usage Example — Category Tags
        </Typography>
        <View className="flex-row flex-wrap gap-md rounded-2xl border border-tertiary bg-primary p-xl">
          <Tag color="green" label="Income" />
          <Tag color="red" label="Expense" />
          <Tag color="blue" label="Transfer" />
          <Tag color="yellow" label="Pending" />
          <Tag color="purple" label="Investment" />
          <Tag color="cyan" label="Savings" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Usage Example — Filter Tags with Dismiss
        </Typography>
        <View className="flex-row flex-wrap gap-md rounded-2xl border border-tertiary bg-primary p-xl">
          <Tag color="black" label="All time" onDismiss={() => {}} />
          <Tag color="blue" label="Food & Drink" onDismiss={() => {}} />
          <Tag color="green" label="Income" onDismiss={() => {}} />
          <Tag color="pink" label="Shopping" onDismiss={() => {}} />
        </View>
      </View>
    </ShowcasePage>
  )
}
