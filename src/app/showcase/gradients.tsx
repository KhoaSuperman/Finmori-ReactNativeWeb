import React, { useState } from "react"
import { Pressable, ScrollView, View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Typography } from "@/components/ui-kit/Typography"

type GradientToken = {
  name: string
  cssVar: string
  cssValue: string
  from: { label: string; hex: string }
  to: { label: string; hex: string }
  angle: string
  tailwindClass: string
}

const GRAY_DARK_GRADIENTS: GradientToken[] = [
  {
    name: "Gray 600 → 500",
    cssVar: "--gradient-gray-600-500-90",
    cssValue: "linear-gradient(90deg, #3e4784, #4e5ba6)",
    from: { label: "600", hex: "#3e4784" },
    to: { label: "500", hex: "#4e5ba6" },
    angle: "90deg",
    tailwindClass: "bg-gradient-gray-600-500-90",
  },
  {
    name: "Gray 700 → 600",
    cssVar: "--gradient-gray-700-600-45",
    cssValue: "linear-gradient(45deg, #363f72, #3e4784)",
    from: { label: "700", hex: "#363f72" },
    to: { label: "600", hex: "#3e4784" },
    angle: "45deg",
    tailwindClass: "bg-gradient-gray-700-600-45",
  },
  {
    name: "Gray 800 → 600",
    cssVar: "--gradient-gray-800-600-45",
    cssValue: "linear-gradient(45deg, #293056, #3e4784)",
    from: { label: "800", hex: "#293056" },
    to: { label: "600", hex: "#3e4784" },
    angle: "45deg",
    tailwindClass: "bg-gradient-gray-800-600-45",
  },
  {
    name: "Gray 800 → 600",
    cssVar: "--gradient-gray-800-600-90",
    cssValue: "linear-gradient(90deg, #293056, #3e4784)",
    from: { label: "800", hex: "#293056" },
    to: { label: "600", hex: "#3e4784" },
    angle: "90deg",
    tailwindClass: "bg-gradient-gray-800-600-90",
  },
  {
    name: "Gray 800 → 700",
    cssVar: "--gradient-gray-800-700-26",
    cssValue: "linear-gradient(26.5deg, #293056, #363f72)",
    from: { label: "800", hex: "#293056" },
    to: { label: "700", hex: "#363f72" },
    angle: "26.5deg",
    tailwindClass: "bg-gradient-gray-800-700-26",
  },
  {
    name: "Gray 900 → 600",
    cssVar: "--gradient-gray-900-600-45",
    cssValue: "linear-gradient(45deg, #101323, #3e4784)",
    from: { label: "900", hex: "#101323" },
    to: { label: "600", hex: "#3e4784" },
    angle: "45deg",
    tailwindClass: "bg-gradient-gray-900-600-45",
  },
  {
    name: "Gray 900 → 700",
    cssVar: "--gradient-gray-900-700-45",
    cssValue: "linear-gradient(45deg, #101323, #363f72)",
    from: { label: "900", hex: "#101323" },
    to: { label: "700", hex: "#363f72" },
    angle: "45deg",
    tailwindClass: "bg-gradient-gray-900-700-45",
  },
]

const GRAY_LIGHT_GRADIENTS: GradientToken[] = [
  {
    name: "Gray 50 → White",
    cssVar: "--gradient-gray-50-white-180",
    cssValue: "linear-gradient(180deg, #f8f9fc, #ffffff)",
    from: { label: "50", hex: "#f8f9fc" },
    to: { label: "white", hex: "#ffffff" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-50-white-180",
  },
  {
    name: "Gray 100 → White",
    cssVar: "--gradient-gray-100-white-180",
    cssValue: "linear-gradient(180deg, #eaecf5, #ffffff)",
    from: { label: "100", hex: "#eaecf5" },
    to: { label: "white", hex: "#ffffff" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-100-white-180",
  },
  {
    name: "Gray 100 → 25",
    cssVar: "--gradient-gray-100-25-180",
    cssValue: "linear-gradient(180deg, #eaecf5, #fcfcfd)",
    from: { label: "100", hex: "#eaecf5" },
    to: { label: "25", hex: "#fcfcfd" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-100-25-180",
  },
  {
    name: "Gray 100 → 50",
    cssVar: "--gradient-gray-100-50-180",
    cssValue: "linear-gradient(180deg, #eaecf5, #f8f9fc)",
    from: { label: "100", hex: "#eaecf5" },
    to: { label: "50", hex: "#f8f9fc" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-100-50-180",
  },
  {
    name: "Gray 200 → 25",
    cssVar: "--gradient-gray-200-25-180",
    cssValue: "linear-gradient(180deg, #d5d9eb, #fcfcfd)",
    from: { label: "200", hex: "#d5d9eb" },
    to: { label: "25", hex: "#fcfcfd" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-200-25-180",
  },
  {
    name: "Gray 200 → 50",
    cssVar: "--gradient-gray-200-50-180",
    cssValue: "linear-gradient(180deg, #d5d9eb, #f8f9fc)",
    from: { label: "200", hex: "#d5d9eb" },
    to: { label: "50", hex: "#f8f9fc" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-200-50-180",
  },
  {
    name: "Gray 200 → 100",
    cssVar: "--gradient-gray-200-100-180",
    cssValue: "linear-gradient(180deg, #d5d9eb, #eaecf5)",
    from: { label: "200", hex: "#d5d9eb" },
    to: { label: "100", hex: "#eaecf5" },
    angle: "180deg",
    tailwindClass: "bg-gradient-gray-200-100-180",
  },
]

const BRAND_GRADIENTS: GradientToken[] = [
  {
    name: "Brand 600 → 500",
    cssVar: "--gradient-brand-600-500-90",
    cssValue: "linear-gradient(90deg, #1a45e6, #2f61f3)",
    from: { label: "600", hex: "#1a45e6" },
    to: { label: "500", hex: "#2f61f3" },
    angle: "90deg",
    tailwindClass: "bg-gradient-brand-600-500-90",
  },
  {
    name: "Brand 700 → 600",
    cssVar: "--gradient-brand-700-600-45",
    cssValue: "linear-gradient(45deg, #1234d1, #1a45e6)",
    from: { label: "700", hex: "#1234d1" },
    to: { label: "600", hex: "#1a45e6" },
    angle: "45deg",
    tailwindClass: "bg-gradient-brand-700-600-45",
  },
  {
    name: "Brand 800 → 600",
    cssVar: "--gradient-brand-800-600-45",
    cssValue: "linear-gradient(45deg, #182ca3, #1a45e6)",
    from: { label: "800", hex: "#182ca3" },
    to: { label: "600", hex: "#1a45e6" },
    angle: "45deg",
    tailwindClass: "bg-gradient-brand-800-600-45",
  },
  {
    name: "Brand 800 → 600",
    cssVar: "--gradient-brand-800-600-90",
    cssValue: "linear-gradient(90deg, #182ca3, #1a45e6)",
    from: { label: "800", hex: "#182ca3" },
    to: { label: "600", hex: "#1a45e6" },
    angle: "90deg",
    tailwindClass: "bg-gradient-brand-800-600-90",
  },
  {
    name: "Brand 800 → 700",
    cssVar: "--gradient-brand-800-700-26",
    cssValue: "linear-gradient(26.5deg, #182ca3, #1234d1)",
    from: { label: "800", hex: "#182ca3" },
    to: { label: "700", hex: "#1234d1" },
    angle: "26.5deg",
    tailwindClass: "bg-gradient-brand-800-700-26",
  },
  {
    name: "Brand 900 → 600",
    cssVar: "--gradient-brand-900-600-45",
    cssValue: "linear-gradient(45deg, #1a297d, #1a45e6)",
    from: { label: "900", hex: "#1a297d" },
    to: { label: "600", hex: "#1a45e6" },
    angle: "45deg",
    tailwindClass: "bg-gradient-brand-900-600-45",
  },
  {
    name: "Brand 900 → 700",
    cssVar: "--gradient-brand-900-700-45",
    cssValue: "linear-gradient(45deg, #1a297d, #1234d1)",
    from: { label: "900", hex: "#1a297d" },
    to: { label: "700", hex: "#1234d1" },
    angle: "45deg",
    tailwindClass: "bg-gradient-brand-900-700-45",
  },
]

type LinearGradient = {
  num: string
  fromHex: string
  toHex: string
  angle: string
}

const LINEAR_GRADIENTS: LinearGradient[] = [
  { num: "01", fromHex: "#A5C0EE", toHex: "#FBC5EC", angle: "180deg" },
  { num: "02", fromHex: "#FBC2EB", toHex: "#A18CD1", angle: "180deg" },
  { num: "03", fromHex: "#FFD1FF", toHex: "#FAD0C4", angle: "180deg" },
  { num: "04", fromHex: "#FAD0C4", toHex: "#FF9A9E", angle: "225deg" },
  { num: "05", fromHex: "#FCB69F", toHex: "#FFECD2", angle: "270deg" },
  { num: "06", fromHex: "#FECFEF", toHex: "#FF989C", angle: "180deg" },
  { num: "07", fromHex: "#FF9DE4", toHex: "#FFEAF6", angle: "45deg" },
  { num: "08", fromHex: "#E6DEE9", toHex: "#FDCAF1", angle: "180deg" },
  { num: "09", fromHex: "#A6C0FE", toHex: "#FFEAF6", angle: "45deg" },
  { num: "10", fromHex: "#CFC7F8", toHex: "#EBBBA7", angle: "0deg" },
  { num: "11", fromHex: "#FCCB90", toHex: "#D57EEB", angle: "135deg" },
  { num: "12", fromHex: "#7B6AE0", toHex: "#FFBB89", angle: "45deg" },
  { num: "13", fromHex: "#E0C3FC", toHex: "#8EC5FC", angle: "135deg" },
  { num: "14", fromHex: "#FED6E3", toHex: "#A8EDEA", angle: "0deg" },
  { num: "15", fromHex: "#F5F7FA", toHex: "#C3CFE2", angle: "135deg" },
  { num: "16", fromHex: "#DFD1C5", toHex: "#FFF6EB", angle: "45deg" },
  { num: "17", fromHex: "#FFF6B7", toHex: "#FB758A", angle: "135deg" },
  { num: "18", fromHex: "#FF7EC7", toHex: "#FFED46", angle: "45deg" },
  { num: "19", fromHex: "#FEAFA8", toHex: "#F5EFEF", angle: "0deg" },
  { num: "20", fromHex: "#FBFCDB", toHex: "#E9DEFA", angle: "45deg" },
  { num: "21", fromHex: "#FFF1EB", toHex: "#ACE0F9", angle: "0deg" },
  { num: "22", fromHex: "#C1DFC4", toHex: "#DEECDD", angle: "0deg" },
  { num: "23", fromHex: "#A1C4FD", toHex: "#C2E9FB", angle: "45deg" },
  { num: "24", fromHex: "#ACCBEE", toHex: "#E7F0FD", angle: "0deg" },
  { num: "25", fromHex: "#84FAB0", toHex: "#ACCBEE", angle: "0deg" },
  { num: "26", fromHex: "#39A0FF", toHex: "#8FFF85", angle: "45deg" },
  { num: "27", fromHex: "#74EBD5", toHex: "#9FACE6", angle: "270deg" },
  { num: "28", fromHex: "#4A879A", toHex: "#C5EDF5", angle: "45deg" },
  { num: "29", fromHex: "#9890E3", toHex: "#B1F4CF", angle: "45deg" },
  { num: "30", fromHex: "#7CDADA", toHex: "#F697AA", angle: "45deg" },
  { num: "31", fromHex: "#B1FF96", toHex: "#FFADF7", angle: "45deg" },
  { num: "32", fromHex: "#96FBC4", toHex: "#F9F586", angle: "0deg" },
  { num: "33", fromHex: "#4DEF8E", toHex: "#FFEB3A", angle: "45deg" },
  { num: "34", fromHex: "#F0FF00", toHex: "#58CFFB", angle: "135deg" },
  { num: "35", fromHex: "#D1FDFF", toHex: "#FDDB92", angle: "0deg" },
  { num: "36", fromHex: "#EBC0FD", toHex: "#D9DED8", angle: "0deg" },
  { num: "37", fromHex: "#FFA4F6", toHex: "#B7DCFF", angle: "45deg" },
  { num: "38", fromHex: "#CD9CF2", toHex: "#F6F3FF", angle: "0deg" },
  { num: "39", fromHex: "#F5C8F5", toHex: "#DADDFA", angle: "315deg" },
  { num: "40", fromHex: "#E6DEE9", toHex: "#BDC2E8", angle: "0deg" },
  { num: "41", fromHex: "#6A85B6", toHex: "#BAC8E0", angle: "0deg" },
  { num: "42", fromHex: "#8B8B8B", toHex: "#EAEAEA", angle: "45deg" },
  { num: "43", fromHex: "#E2B0FF", toHex: "#9F44D3", angle: "135deg" },
  { num: "44", fromHex: "#CE9FFC", toHex: "#7367F0", angle: "135deg" },
  { num: "45", fromHex: "#72EDF2", toHex: "#5151E5", angle: "135deg" },
  { num: "46", fromHex: "#A3BDED", toHex: "#6991C7", angle: "0deg" },
  { num: "47", fromHex: "#FBC8D4", toHex: "#9795F0", angle: "0deg" },
  { num: "48", fromHex: "#A7A6CB", toHex: "#8989BA", angle: "0deg" },
  { num: "49", fromHex: "#D9AFD9", toHex: "#97D9E1", angle: "0deg" },
  { num: "50", fromHex: "#81FFEF", toHex: "#F067B4", angle: "135deg" },
  { num: "51", fromHex: "#DCB0ED", toHex: "#9999CC", angle: "135deg" },
  { num: "52", fromHex: "#FFF5C3", toHex: "#9452A5", angle: "135deg" },
  { num: "53", fromHex: "#F1CA74", toHex: "#A64DB6", angle: "135deg" },
  { num: "54", fromHex: "#4D6AD0", toHex: "#FF9D7E", angle: "45deg" },
  { num: "55", fromHex: "#FFCF71", toHex: "#2376DD", angle: "135deg" },
  { num: "56", fromHex: "#E8D07A", toHex: "#5312D6", angle: "135deg" },
  { num: "57", fromHex: "#BFD9FE", toHex: "#DF89B5", angle: "180deg" },
  { num: "58", fromHex: "#FA71CD", toHex: "#C471F5", angle: "0deg" },
  { num: "59", fromHex: "#43CBFF", toHex: "#9708CC", angle: "135deg" },
  { num: "60", fromHex: "#7579FF", toHex: "#B224EF", angle: "180deg" },
  { num: "61", fromHex: "#AD00FE", toHex: "#00E0EE", angle: "45deg" },
  { num: "62", fromHex: "#89F7FE", toHex: "#66A6FF", angle: "135deg" },
  { num: "63", fromHex: "#009EFD", toHex: "#2AF598", angle: "0deg" },
  { num: "64", fromHex: "#FFB800", toHex: "#FFF500", angle: "45deg" },
  { num: "65", fromHex: "#FFA8A8", toHex: "#FCFF00", angle: "135deg" },
  { num: "66", fromHex: "#FF7A00", toHex: "#FFD439", angle: "45deg" },
  { num: "67", fromHex: "#FFD3A5", toHex: "#FD6585", angle: "135deg" },
  { num: "68", fromHex: "#F9D423", toHex: "#E14FAD", angle: "180deg" },
  { num: "69", fromHex: "#F74FAC", toHex: "#FCB24F", angle: "135deg" },
  { num: "70", fromHex: "#F49062", toHex: "#FD371F", angle: "135deg" },
  { num: "71", fromHex: "#FF6C6C", toHex: "#DD7BFF", angle: "45deg" },
  { num: "72", fromHex: "#F97794", toHex: "#623AA2", angle: "135deg" },
  { num: "73", fromHex: "#C569CF", toHex: "#EE609C", angle: "180deg" },
  { num: "74", fromHex: "#C7EAFD", toHex: "#E8198B", angle: "0deg" },
  { num: "75", fromHex: "#F093FB", toHex: "#F5576C", angle: "135deg" },
  { num: "76", fromHex: "#F6CEEC", toHex: "#D939CD", angle: "135deg" },
  { num: "77", fromHex: "#EE9AE5", toHex: "#5961F9", angle: "135deg" },
  { num: "78", fromHex: "#6A11CB", toHex: "#2575FC", angle: "270deg" },
  { num: "79", fromHex: "#0017E4", toHex: "#3793FF", angle: "45deg" },
  { num: "80", fromHex: "#00C6FB", toHex: "#005BEA", angle: "0deg" },
  { num: "81", fromHex: "#4B73FF", toHex: "#7CF7FF", angle: "45deg" },
  { num: "82", fromHex: "#5EFCE8", toHex: "#736EFE", angle: "135deg" },
  { num: "83", fromHex: "#7028E4", toHex: "#E5B2CA", angle: "0deg" },
  { num: "84", fromHex: "#7873F5", toHex: "#EC77AB", angle: "90deg" },
  { num: "85", fromHex: "#B01EFF", toHex: "#E1467C", angle: "135deg" },
  { num: "86", fromHex: "#D079EE", toHex: "#8A88FB", angle: "45deg" },
  { num: "87", fromHex: "#C99FFF", toHex: "#981ED2", angle: "135deg" },
  { num: "88", fromHex: "#9B23EA", toHex: "#5F72BD", angle: "0deg" },
  { num: "89", fromHex: "#B39FFF", toHex: "#6A1ED2", angle: "135deg" },
  { num: "90", fromHex: "#4300B1", toHex: "#A531DC", angle: "45deg" },
  { num: "91", fromHex: "#764BA2", toHex: "#667EEA", angle: "315deg" },
]

function GradientSwatch({ gradient }: { gradient: GradientToken }) {
  return (
    <View className="overflow-hidden rounded-xl border border-tertiary">
      <View style={{ backgroundImage: gradient.cssValue, height: 188 }} className="rounded-t-xl" />
      <View className="gap-1 border-t border-tertiary bg-primary px-3 py-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 gap-0.5">
            <Typography weight="medium" size="body-small" className="text-primary">
              {gradient.from.label}
            </Typography>
            <Typography size="caption" className="text-tertiary">
              {gradient.from.hex}
            </Typography>
          </View>
          <Typography size="caption" className="px-2 text-tertiary">
            {gradient.angle}
          </Typography>
          <View className="flex-1 items-end gap-0.5">
            <Typography weight="medium" size="body-small" className="text-right text-primary">
              {gradient.to.label}
            </Typography>
            <Typography size="caption" className="text-right text-tertiary">
              {gradient.to.hex}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  )
}

function LinearGradientSwatch({ gradient }: { gradient: LinearGradient }) {
  const cssValue = `linear-gradient(${gradient.angle}, ${gradient.fromHex}, ${gradient.toHex})`
  return (
    <View className="overflow-hidden rounded-xl border border-tertiary">
      <View style={{ backgroundImage: cssValue, height: 120 }} className="rounded-t-xl" />
      <View className="gap-0.5 border-t border-tertiary bg-primary px-3 py-2">
        <Typography weight="semibold" size="caption" className="text-primary">
          #{gradient.num}
        </Typography>
        <View className="flex-row items-center justify-between">
          <Typography size="tiny" className="font-mono text-tertiary">
            {gradient.fromHex}
          </Typography>
          <Typography size="tiny" className="text-tertiary">
            {gradient.angle}
          </Typography>
          <Typography size="tiny" className="font-mono text-tertiary">
            {gradient.toHex}
          </Typography>
        </View>
      </View>
    </View>
  )
}

function GradientReference({ gradient }: { gradient: GradientToken }) {
  return (
    <View className="flex-row items-center gap-3 border-b border-tertiary px-1 py-4">
      <View
        style={{ backgroundImage: gradient.cssValue }}
        className="h-12 w-12 shrink-0 rounded-lg border border-black/[0.08]"
      />
      <View className="flex-1 gap-1">
        <Typography weight="semibold" size="body-small">
          {gradient.name} ({gradient.angle})
        </Typography>
        <View className="self-start rounded-xs bg-secondary px-2 py-0.5">
          <Typography size="tiny" className="font-mono text-tertiary">
            {gradient.tailwindClass}
          </Typography>
        </View>
      </View>
    </View>
  )
}

function CollapsibleSection({
  title,
  count,
  defaultOpen = false,
  children,
}: {
  title: string
  count: number
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <View className="gap-4">
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className="flex-row items-center justify-between px-1 py-2 active:opacity-70"
      >
        <View className="flex-row items-center gap-2">
          <Typography size="h3" weight="bold">
            {title}
          </Typography>
          <View className="rounded-full bg-secondary px-2 py-0.5">
            <Typography size="tiny" weight="bold" className="text-tertiary">
              {count}
            </Typography>
          </View>
        </View>
        <Typography size="body" className="text-tertiary">
          {isOpen ? "▼" : "▶"}
        </Typography>
      </Pressable>
      {isOpen && children}
    </View>
  )
}

function GradientGrid({ gradients }: { gradients: GradientToken[] }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 4, gap: 16, paddingVertical: 4 }}
    >
      {gradients.map((g) => (
        <View key={g.cssVar} style={{ width: 240 }}>
          <GradientSwatch gradient={g} />
        </View>
      ))}
    </ScrollView>
  )
}

function LinearGradientGrid({ gradients }: { gradients: LinearGradient[] }) {
  return (
    <View className="flex-row flex-wrap gap-3 px-1">
      {gradients.map((g) => (
        <View key={g.num} style={{ width: "47%" }}>
          <LinearGradientSwatch gradient={g} />
        </View>
      ))}
    </View>
  )
}

function GradientOverview() {
  const allSystemGradients = [...GRAY_DARK_GRADIENTS, ...GRAY_LIGHT_GRADIENTS, ...BRAND_GRADIENTS]

  return (
    <View className="gap-4">
      <Typography size="h3" weight="bold" className="px-1">
        System Palette Overview
      </Typography>
      <View className="gap-1 overflow-hidden rounded-xl border border-tertiary">
        {allSystemGradients.map((g) => (
          <View key={g.cssVar} style={{ backgroundImage: g.cssValue, height: 32 }} />
        ))}
      </View>
    </View>
  )
}

export default function GradientsShowcase() {
  return (
    <ShowcasePage
      title="Gradients"
      description="Gradient tokens for backgrounds, cards, and decorative surfaces. Includes system gradients (Gray & Brand) and 91 decorative linear gradients."
    >
      <GradientOverview />

      <CollapsibleSection title="Gray Dark" count={GRAY_DARK_GRADIENTS.length} defaultOpen>
        <GradientGrid gradients={GRAY_DARK_GRADIENTS} />
        <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
          {GRAY_DARK_GRADIENTS.map((g) => (
            <GradientReference key={g.cssVar} gradient={g} />
          ))}
        </View>
      </CollapsibleSection>

      <CollapsibleSection title="Gray Light" count={GRAY_LIGHT_GRADIENTS.length} defaultOpen>
        <GradientGrid gradients={GRAY_LIGHT_GRADIENTS} />
        <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
          {GRAY_LIGHT_GRADIENTS.map((g) => (
            <GradientReference key={g.cssVar} gradient={g} />
          ))}
        </View>
      </CollapsibleSection>

      <CollapsibleSection title="Brand" count={BRAND_GRADIENTS.length} defaultOpen>
        <GradientGrid gradients={BRAND_GRADIENTS} />
        <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
          {BRAND_GRADIENTS.map((g) => (
            <GradientReference key={g.cssVar} gradient={g} />
          ))}
        </View>
      </CollapsibleSection>

      <CollapsibleSection title="Linear (Decorative)" count={LINEAR_GRADIENTS.length}>
        <LinearGradientGrid gradients={LINEAR_GRADIENTS} />
      </CollapsibleSection>
    </ShowcasePage>
  )
}
