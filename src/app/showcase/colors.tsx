import React, { useState } from "react"
import { Modal, Pressable, Text, View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"

type ColorToken = {
  name: string
  lightHex: string
  darkHex: string
  lightAlias: string
  darkAlias: string
  usage: string
}

type ColorCategory = {
  title: string
  description: string
  tokens: ColorToken[]
}

function formatAlias(raw: string): string {
  return raw.replace(/^Colors\//, "")
}

const COLOR_DATA: ColorCategory[] = [
  {
    title: "Text color",
    description: "Use text color variables to manage all text fill colors in your designs across light and dark modes.",
    tokens: [
      {
        name: "text-primary",
        lightHex: "#101323",
        darkHex: "#F9F9FB",
        lightAlias: "Colors/Gray (light mode)/900",
        darkAlias: "Colors/Gray (dark mode)/50",
        usage: "Primary text such as page headings.",
      },
      {
        name: "text-primary_on-brand",
        lightHex: "#FFFFFF",
        darkHex: "#F9F9FB",
        lightAlias: "Colors/Base/white",
        darkAlias: "Colors/Gray (dark mode)/50",
        usage: "Primary text on solid brand color backgrounds.",
      },
      {
        name: "text-secondary",
        lightHex: "#363F72",
        darkHex: "#B9C0D4",
        lightAlias: "Colors/Gray (light mode)/700",
        darkAlias: "Colors/Gray (dark mode)/300",
        usage: "Secondary text such as labels and section headings.",
      },
      {
        name: "text-secondary_on-brand",
        lightHex: "#B7CDFC",
        darkHex: "#B9C0D4",
        lightAlias: "Colors/Brand/200",
        darkAlias: "Colors/Gray (dark mode)/300",
        usage: "Secondary text on solid brand backgrounds.",
      },
      {
        name: "text-tertiary",
        lightHex: "#3E4784",
        darkHex: "#7D89B0",
        lightAlias: "Colors/Gray (light mode)/600",
        darkAlias: "Colors/Gray (dark mode)/400",
        usage: "Tertiary text such as supporting and paragraph text.",
      },
      {
        name: "text-tertiary_on-brand",
        lightHex: "#B7CDFC",
        darkHex: "#7D89B0",
        lightAlias: "Colors/Brand/200",
        darkAlias: "Colors/Gray (dark mode)/400",
        usage: "Tertiary text on solid brand backgrounds.",
      },
      {
        name: "text-quaternary",
        lightHex: "#4E5BA6",
        darkHex: "#7D89B0",
        lightAlias: "Colors/Gray (light mode)/500",
        darkAlias: "Colors/Gray (dark mode)/400",
        usage: "Quaternary text for subtle and lower-contrast text.",
      },
      {
        name: "text-quaternary_on-brand",
        lightHex: "#88AEFB",
        darkHex: "#7D89B0",
        lightAlias: "Colors/Brand/300",
        darkAlias: "Colors/Gray (dark mode)/400",
        usage: "Quaternary text on solid brand backgrounds.",
      },
      {
        name: "text-white",
        lightHex: "#FFFFFF",
        darkHex: "#101323",
        lightAlias: "Colors/Base/white",
        darkAlias: "Colors/Gray (light mode)/900",
        usage: "White text on dark backgrounds.",
      },
      {
        name: "text-white_subtle",
        lightHex: "rgba(255,255,255,0.8)",
        darkHex: "rgba(255,255,255,0.8)",
        lightAlias: "Colors/Gray (dark mode alpha)/300",
        darkAlias: "Colors/Gray (dark mode alpha)/300",
        usage: "Subtle white text with reduced opacity.",
      },
      {
        name: "text-disabled",
        lightHex: "#7D89B0",
        darkHex: "#5D6B98",
        lightAlias: "Colors/Gray (dark mode)/400",
        darkAlias: "Colors/Gray (dark mode)/500",
        usage: "Text for disabled states.",
      },
      {
        name: "text-placeholder",
        lightHex: "#7D89B0",
        darkHex: "#5D6B98",
        lightAlias: "Colors/Gray (dark mode)/400",
        darkAlias: "Colors/Gray (dark mode)/500",
        usage: "Placeholder text in inputs.",
      },
      {
        name: "text-placeholder_subtle",
        lightHex: "#7D89B0",
        darkHex: "#404968",
        lightAlias: "Colors/Gray (dark mode)/400",
        darkAlias: "Colors/Gray (dark mode)/700",
        usage: "Subtle placeholder text.",
      },
      {
        name: "text-brand-primary",
        lightHex: "#1A297D",
        darkHex: "#F9F9FB",
        lightAlias: "Colors/Brand/900",
        darkAlias: "Colors/Gray (dark mode)/50",
        usage: "Brand primary text color.",
      },
      {
        name: "text-brand-secondary",
        lightHex: "#1234D1",
        darkHex: "#B9C0D4",
        lightAlias: "Colors/Brand/700",
        darkAlias: "Colors/Gray (dark mode)/300",
        usage: "Brand secondary text color.",
      },
      {
        name: "text-brand-tertiary",
        lightHex: "#1A45E6",
        darkHex: "#7D89B0",
        lightAlias: "Colors/Brand/600",
        darkAlias: "Colors/Gray (dark mode)/400",
        usage: "Brand tertiary text color.",
      },
      {
        name: "text-brand-quaternary",
        lightHex: "#2F61F3",
        darkHex: "#F9F9FB",
        lightAlias: "Colors/Brand/500",
        darkAlias: "Colors/Gray (dark mode)/50",
        usage: "Brand quaternary text color.",
      },
      {
        name: "text-error",
        lightHex: "#D92D20",
        darkHex: "#F97066",
        lightAlias: "Colors/Error/600",
        darkAlias: "Colors/Error/400",
        usage: "Error text for validation messages.",
      },
      {
        name: "text-warning",
        lightHex: "#DC6803",
        darkHex: "#FDB022",
        lightAlias: "Colors/Warning/600",
        darkAlias: "Colors/Warning/400",
        usage: "Warning text color.",
      },
      {
        name: "text-success",
        lightHex: "#079455",
        darkHex: "#47CD89",
        lightAlias: "Colors/Success/600",
        darkAlias: "Colors/Success/400",
        usage: "Success text color.",
      },
    ],
  },
  {
    title: "Border color",
    description: "Use border color variables to manage all stroke and border colors across light and dark modes.",
    tokens: [
      {
        name: "border-primary",
        lightHex: "#B3B8DB",
        darkHex: "#404968",
        lightAlias: "Colors/Gray (light mode)/300",
        darkAlias: "Colors/Gray (dark mode)/700",
        usage: "Primary border for inputs and cards.",
      },
      {
        name: "border-secondary",
        lightHex: "#D5D9EB",
        darkHex: "#30374F",
        lightAlias: "Colors/Gray (light mode)/200",
        darkAlias: "Colors/Gray (dark mode)/800",
        usage: "Secondary border for dividers and separators.",
      },
      {
        name: "border-tertiary",
        lightHex: "#EAECF5",
        darkHex: "#30374F",
        lightAlias: "Colors/Gray (light mode)/100",
        darkAlias: "Colors/Gray (dark mode)/800",
        usage: "Tertiary border for very subtle dividers.",
      },
      {
        name: "border-disabled",
        lightHex: "#B3B8DB",
        darkHex: "#404968",
        lightAlias: "Colors/Gray (light mode)/300",
        darkAlias: "Colors/Gray (dark mode)/700",
        usage: "Border for disabled elements.",
      },
      {
        name: "border-disabled_subtle",
        lightHex: "#D5D9EB",
        darkHex: "#30374F",
        lightAlias: "Colors/Gray (light mode)/200",
        darkAlias: "Colors/Gray (dark mode)/800",
        usage: "Subtle border for disabled elements.",
      },
      {
        name: "border-brand",
        lightHex: "#2F61F3",
        darkHex: "#6895F8",
        lightAlias: "Colors/Brand/500",
        darkAlias: "Colors/Brand/400",
        usage: "Brand-colored border for focused inputs.",
      },
      {
        name: "border-error",
        lightHex: "#F04438",
        darkHex: "#F97066",
        lightAlias: "Colors/Error/500",
        darkAlias: "Colors/Error/400",
        usage: "Error border for invalid inputs.",
      },
    ],
  },
  {
    title: "Foreground color",
    description: "Use foreground color variables for icons, indicators, and other non-text foreground elements.",
    tokens: [
      {
        name: "fg-primary",
        lightHex: "#101323",
        darkHex: "#FFFFFF",
        lightAlias: "Colors/Gray (light mode)/900",
        darkAlias: "Colors/Base/white",
        usage: "Primary foreground for icons and indicators.",
      },
      {
        name: "fg-secondary",
        lightHex: "#363F72",
        darkHex: "#B9C0D4",
        lightAlias: "Colors/Gray (light mode)/700",
        darkAlias: "Colors/Gray (dark mode)/300",
        usage: "Secondary foreground for less prominent icons.",
      },
      {
        name: "fg-tertiary",
        lightHex: "#4E5BA6",
        darkHex: "#5D6B98",
        lightAlias: "Colors/Gray (light mode)/500",
        darkAlias: "Colors/Gray (dark mode)/500",
        usage: "Tertiary foreground for decorative elements.",
      },
      {
        name: "fg-quaternary",
        lightHex: "#717BBC",
        darkHex: "#4A5578",
        lightAlias: "Colors/Gray (light mode)/400",
        darkAlias: "Colors/Gray (dark mode)/600",
        usage: "Quaternary foreground for the most subtle elements.",
      },
      {
        name: "fg-white",
        lightHex: "#FFFFFF",
        darkHex: "#FFFFFF",
        lightAlias: "Colors/Base/white",
        darkAlias: "Colors/Base/white",
        usage: "White foreground on dark or brand backgrounds.",
      },
      {
        name: "fg-disabled",
        lightHex: "#B3B8DB",
        darkHex: "#4A5578",
        lightAlias: "Colors/Gray (light mode)/300",
        darkAlias: "Colors/Gray (dark mode)/600",
        usage: "Foreground for disabled states.",
      },
      {
        name: "fg-brand-primary",
        lightHex: "#1A45E6",
        darkHex: "#2F61F3",
        lightAlias: "Colors/Brand/600",
        darkAlias: "Colors/Brand/500",
        usage: "Primary brand foreground.",
      },
      {
        name: "fg-brand-secondary",
        lightHex: "#2F61F3",
        darkHex: "#6895F8",
        lightAlias: "Colors/Brand/500",
        darkAlias: "Colors/Brand/400",
        usage: "Secondary brand foreground.",
      },
      {
        name: "fg-error",
        lightHex: "#D92D20",
        darkHex: "#F04438",
        lightAlias: "Colors/Error/600",
        darkAlias: "Colors/Error/500",
        usage: "Error foreground.",
      },
      {
        name: "fg-warning",
        lightHex: "#DC6803",
        darkHex: "#F79009",
        lightAlias: "Colors/Warning/600",
        darkAlias: "Colors/Warning/500",
        usage: "Warning foreground.",
      },
      {
        name: "fg-success",
        lightHex: "#079455",
        darkHex: "#17B26A",
        lightAlias: "Colors/Success/600",
        darkAlias: "Colors/Success/500",
        usage: "Success foreground.",
      },
    ],
  },
  {
    title: "Background color",
    description: "Use background color variables to manage all background fills across light and dark modes.",
    tokens: [
      {
        name: "bg-primary",
        lightHex: "#FFFFFF",
        darkHex: "#0E101B",
        lightAlias: "Colors/Base/white",
        darkAlias: "Colors/Gray (dark mode)/950",
        usage: "Primary background for pages and cards.",
      },
      {
        name: "bg-primary-solid",
        lightHex: "#293056",
        darkHex: "#FFFFFF",
        lightAlias: "Colors/Gray (light mode)/800",
        darkAlias: "Colors/Gray (dark mode alpha)/25",
        usage: "Solid primary background for strong emphasis.",
      },
      {
        name: "bg-secondary",
        lightHex: "#F8F9FC",
        darkHex: "#111322",
        lightAlias: "Colors/Gray (light mode)/50",
        darkAlias: "Colors/Gray (dark mode)/900",
        usage: "Secondary background for sections and panels.",
      },
      {
        name: "bg-secondary-solid",
        lightHex: "#2F61F3",
        darkHex: "#2F61F3",
        lightAlias: "Colors/Brand/500",
        darkAlias: "Colors/Brand/500",
        usage: "Secondary solid background.",
      },
      {
        name: "bg-tertiary",
        lightHex: "#EAECF5",
        darkHex: "#30374F",
        lightAlias: "Colors/Gray (light mode)/100",
        darkAlias: "Colors/Gray (dark mode)/800",
        usage: "Tertiary background.",
      },
      {
        name: "bg-quaternary",
        lightHex: "#D5D9EB",
        darkHex: "#404968",
        lightAlias: "Colors/Gray (light mode)/200",
        darkAlias: "Colors/Gray (dark mode)/700",
        usage: "Quaternary background.",
      },
      {
        name: "bg-disabled",
        lightHex: "#EAECF5",
        darkHex: "#30374F",
        lightAlias: "Colors/Gray (light mode)/100",
        darkAlias: "Colors/Gray (dark mode)/800",
        usage: "Background for disabled elements.",
      },
      {
        name: "bg-disabled_subtle",
        lightHex: "#F8F9FC",
        darkHex: "#111322",
        lightAlias: "Colors/Gray (light mode)/50",
        darkAlias: "Colors/Gray (dark mode)/900",
        usage: "Subtle disabled background.",
      },
      {
        name: "bg-brand-primary",
        lightHex: "#EDF2FF",
        darkHex: "#2F61F3",
        lightAlias: "Colors/Brand/50",
        darkAlias: "Colors/Brand/500",
        usage: "Light brand background.",
      },
      {
        name: "bg-brand-primary_subtle",
        lightHex: "#EDF2FF",
        darkHex: "#182CA3",
        lightAlias: "Colors/Brand/50",
        darkAlias: "Colors/Brand/800",
        usage: "Subtle brand primary background.",
      },
      {
        name: "bg-brand-secondary",
        lightHex: "#6895F8",
        darkHex: "#88AEFB",
        lightAlias: "Colors/Brand/400",
        darkAlias: "Colors/Brand/300",
        usage: "Secondary brand background.",
      },
      {
        name: "bg-brand-solid",
        lightHex: "#1A45E6",
        darkHex: "#1A45E6",
        lightAlias: "Colors/Brand/600",
        darkAlias: "Colors/Brand/600",
        usage: "Solid brand background for buttons and CTAs.",
      },
      {
        name: "bg-brand-section",
        lightHex: "#182CA3",
        darkHex: "#182CA3",
        lightAlias: "Colors/Brand/800",
        darkAlias: "Colors/Brand/800",
        usage: "Brand section background.",
      },
      {
        name: "bg-error",
        lightHex: "#FEF3F2",
        darkHex: "#55160C",
        lightAlias: "Colors/Error/50",
        darkAlias: "Colors/Error/950",
        usage: "Error background for alerts.",
      },
      {
        name: "bg-warning",
        lightHex: "#FFFAEB",
        darkHex: "#4E1D09",
        lightAlias: "Colors/Warning/50",
        darkAlias: "Colors/Warning/950",
        usage: "Warning background.",
      },
      {
        name: "bg-success",
        lightHex: "#ECFDF3",
        darkHex: "#053321",
        lightAlias: "Colors/Success/50",
        darkAlias: "Colors/Success/950",
        usage: "Success background.",
      },
    ],
  },
]

function ColorPill({ hex, label, onPress }: { hex: string; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} className="active:opacity-70">
      <View className="flex-row items-center gap-1.5 rounded-lg border border-tertiary bg-primary px-2 py-1.5">
        <View className="flex h-5 w-5 items-center justify-center rounded border border-tertiary">
          <View className="h-4 w-4 rounded border border-tertiary" style={{ backgroundColor: hex }} />
        </View>

        <Text className="text-xs text-secondary" numberOfLines={1}>
          {label}
        </Text>
      </View>
    </Pressable>
  )
}

function HexTooltip({ visible, hex, onClose }: { visible: boolean; hex: string; onClose: () => void }) {
  if (!visible) return null

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <View className="flex-row items-center gap-3 rounded-2xl border border-secondary bg-primary px-5 py-4">
          <View className="h-10 w-10 rounded-lg" style={{ backgroundColor: hex }} />
          <View>
            <Text className="mb-0.5 text-xs text-tertiary">Hex value</Text>
            <Text className="font-mono text-lg font-semibold text-primary">{hex}</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
}

function TokenCard({ token }: { token: ColorToken }) {
  const [tooltip, setTooltip] = useState<string | null>(null)

  const lightLabel = token.lightAlias ? formatAlias(token.lightAlias) : token.lightHex
  const darkLabel = token.darkAlias ? formatAlias(token.darkAlias) : token.darkHex || "—"

  return (
    <View className="border-b border-tertiary px-3 py-4">
      <HexTooltip visible={!!tooltip} hex={tooltip ?? ""} onClose={() => setTooltip(null)} />

      <View className="mb-2">
        <Text className="text-sm font-semibold text-primary">{token.name}</Text>
      </View>

      <View className="mb-2 flex-row flex-wrap gap-2">
        <View className="gap-1">
          <Text className="text-[10px] font-medium uppercase tracking-wider text-quaternary">Light</Text>
          <ColorPill hex={token.lightHex} label={lightLabel} onPress={() => setTooltip(token.lightHex)} />
        </View>
        {token.darkHex ? (
          <View className="gap-1">
            <Text className="text-[10px] font-medium uppercase tracking-wider text-quaternary">Dark</Text>
            <ColorPill hex={token.darkHex} label={darkLabel} onPress={() => setTooltip(token.darkHex)} />
          </View>
        ) : null}
      </View>

      <Text className="text-xs leading-4 text-tertiary">{token.usage}</Text>
    </View>
  )
}

function CategorySection({ category }: { category: ColorCategory }) {
  return (
    <View className="mb-8">
      <View className="mb-1.5 flex-row items-center gap-2">
        <Text className="text-lg font-semibold text-primary">{category.title}</Text>
        <View className="rounded-full bg-brand-primary px-2 py-0.5">
          <Text className="text-[10px] font-medium text-fg-brand-primary">Variables</Text>
        </View>
      </View>
      <Text className="mb-3 text-sm leading-5 text-tertiary">{category.description}</Text>

      <View className="overflow-hidden rounded-xl border border-tertiary bg-primary">
        {category.tokens.map((token) => (
          <TokenCard key={token.name} token={token} />
        ))}
      </View>
    </View>
  )
}

function LiveSwatch({ cssVar, name }: { cssVar: string; name: string }) {
  return (
    <View className="items-center gap-1">
      <View className="h-10 w-10 rounded-lg border border-secondary" style={{ backgroundColor: `var(${cssVar})` }} />
      <Text className="text-center text-[10px] text-tertiary" numberOfLines={2}>
        {name}
      </Text>
    </View>
  )
}

function LivePreviewGrid() {
  const groups = [
    {
      label: "Text",
      items: [
        { var: "--color-text-primary", name: "primary" },
        { var: "--color-text-secondary", name: "secondary" },
        { var: "--color-text-tertiary", name: "tertiary" },
        { var: "--color-text-quaternary", name: "quaternary" },
        { var: "--color-text-disabled", name: "disabled" },
        { var: "--color-text-brand-primary", name: "brand" },
        { var: "--color-text-error", name: "error" },
        { var: "--color-text-warning", name: "warning" },
        { var: "--color-text-success", name: "success" },
      ],
    },
    {
      label: "Background",
      items: [
        { var: "--color-bg-primary", name: "primary" },
        { var: "--color-bg-secondary", name: "secondary" },
        { var: "--color-bg-tertiary", name: "tertiary" },
        { var: "--color-bg-quaternary", name: "quaternary" },
        { var: "--color-bg-brand-primary", name: "brand" },
        { var: "--color-bg-brand-solid", name: "brand-solid" },
        { var: "--color-bg-error", name: "error" },
        { var: "--color-bg-warning", name: "warning" },
        { var: "--color-bg-success", name: "success" },
      ],
    },
    {
      label: "Border",
      items: [
        { var: "--color-border-primary", name: "primary" },
        { var: "--color-border-secondary", name: "secondary" },
        { var: "--color-border-tertiary", name: "tertiary" },
        { var: "--color-border-brand", name: "brand" },
        { var: "--color-border-error", name: "error" },
      ],
    },
    {
      label: "Foreground",
      items: [
        { var: "--color-fg-primary", name: "primary" },
        { var: "--color-fg-secondary", name: "secondary" },
        { var: "--color-fg-tertiary", name: "tertiary" },
        { var: "--color-fg-brand-primary", name: "brand" },
        { var: "--color-fg-error", name: "error" },
        { var: "--color-fg-warning", name: "warning" },
        { var: "--color-fg-success", name: "success" },
      ],
    },
  ]

  return (
    <View className="mb-8">
      <Text className="mb-1 text-lg font-semibold text-primary">Live preview</Text>
      <Text className="mb-3 text-sm text-tertiary">Swatches respond to your current color mode.</Text>
      {groups.map((group) => (
        <View key={group.label} className="mb-3">
          <Text className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">{group.label}</Text>
          <View className="flex-row flex-wrap gap-3">
            {group.items.map((item) => (
              <LiveSwatch key={item.var} cssVar={item.var} name={item.name} />
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

export default function ColorsScreen() {
  return (
    <ShowcasePage
      title="Color variables"
      description="Color variables (Figma's version of design tokens) store reusable values that can be applied to all kinds of design properties including fill and stroke colors. They act as a \u0022single source of truth\u0022 while allowing designers to create multiple color modes."
    >
      <LivePreviewGrid />

      {COLOR_DATA.map((category) => (
        <CategorySection key={category.title} category={category} />
      ))}
    </ShowcasePage>
  )
}
