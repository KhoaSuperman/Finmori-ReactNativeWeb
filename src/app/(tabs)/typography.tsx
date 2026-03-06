import React from "react"
import { Platform, ScrollView, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Typography, type TypographySize, type TypographyWeight } from "@/components/ui-kit"
import { BottomTabInset } from "@/constants/theme"

type TypeScaleEntry = {
  name: string
  size: TypographySize
  fontSize: string
  lineHeight: string
  letterSpacing: string
  sampleText: string
}

const LITERATA_SCALES: TypeScaleEntry[] = [
  {
    name: "Display xl",
    size: "display-xl",
    fontSize: "72px",
    lineHeight: "80px",
    letterSpacing: "-2%",
    sampleText: "Display xl",
  },
  {
    name: "Display",
    size: "display",
    fontSize: "34px",
    lineHeight: "44px",
    letterSpacing: "-2%",
    sampleText: "Display",
  },
]

const JAKARTA_SCALES: TypeScaleEntry[] = [
  {
    name: "H1",
    size: "h1",
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "-2%",
    sampleText: "H1",
  },
  {
    name: "H2",
    size: "h2",
    fontSize: "21px",
    lineHeight: "28px",
    letterSpacing: "-2%",
    sampleText: "H2",
  },
  {
    name: "H3",
    size: "h3",
    fontSize: "19px",
    lineHeight: "24px",
    letterSpacing: "0%",
    sampleText: "H3",
  },
  {
    name: "Body",
    size: "body",
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: "0%",
    sampleText: "Body",
  },
  {
    name: "Body small",
    size: "body-small",
    fontSize: "15px",
    lineHeight: "20px",
    letterSpacing: "0%",
    sampleText: "Body small",
  },
  {
    name: "Caption",
    size: "caption",
    fontSize: "13px",
    lineHeight: "16px",
    letterSpacing: "0%",
    sampleText: "Caption",
  },
  {
    name: "Tiny",
    size: "tiny",
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0%",
    sampleText: "Tiny",
  },
]

type NumberEntry = {
  name: string
  size: TypographySize
  fontSize: string
  lineHeight: string
  letterSpacing: string
}

const NUMBER_SCALES: NumberEntry[] = [
  {
    name: "Number Large",
    size: "number-lg",
    fontSize: "34px",
    lineHeight: "Auto",
    letterSpacing: "Auto",
  },
  {
    name: "Number Small",
    size: "number-sm",
    fontSize: "19px",
    lineHeight: "Auto",
    letterSpacing: "Auto",
  },
]

const WEIGHTS: { label: string; value: TypographyWeight }[] = [
  { label: "Regular", value: "regular" },
  { label: "Medium", value: "medium" },
  { label: "Semibold", value: "semibold" },
  { label: "Bold", value: "bold" },
]

function TypefaceHeader({ name, specimen }: { name: string; specimen: string }) {
  return (
    <View className="mb-6">
      <Typography size="display" className="mb-3 text-text-primary">
        {name}
      </Typography>
      <Text className="font-body text-h1 text-text-primary">{specimen}</Text>
    </View>
  )
}

function ScaleRowHeader({ name, meta }: { name: string; meta: string }) {
  return (
    <View className="mb-3 border-b border-border-secondary pb-3">
      <Typography size="h1" weight="semibold">
        {name}
      </Typography>
      <Text className="mt-1 text-caption text-text-brand-tertiary">{meta}</Text>
    </View>
  )
}

function WeightSpecimenRow({ entry }: { entry: TypeScaleEntry }) {
  return (
    <View className="mb-6">
      <ScaleRowHeader
        name={entry.name}
        meta={`Font size: ${entry.fontSize} | Line height: ${entry.lineHeight} | Letter spacing: ${entry.letterSpacing}`}
      />
      <View className="gap-2">
        {WEIGHTS.map((w) => (
          <View key={w.value}>
            <Typography size={entry.size} weight={w.value}>
              {entry.sampleText}
            </Typography>
            <Typography size={entry.size} weight={w.value} className="text-text-secondary">
              {w.label}
            </Typography>
          </View>
        ))}
      </View>
    </View>
  )
}

function NumberSection() {
  return (
    <View className="mb-6">
      <View className="mb-3 border-b border-border-secondary pb-3">
        <Typography size="h1" weight="semibold">
          Number
        </Typography>
      </View>
      <View className="gap-4">
        {NUMBER_SCALES.map((entry) => (
          <View key={entry.name}>
            <Typography size={entry.size} className="text-text-secondary">
              Number
            </Typography>
            <Typography size={entry.size} className="text-text-secondary">
              {entry.name === "Number Large" ? "Large" : "Small"}
            </Typography>
            <Text className="mt-1 text-caption text-text-brand-tertiary">
              Font size: {entry.fontSize} | Line height: {entry.lineHeight} | Letter spacing: {entry.letterSpacing}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function TypefaceSection({ name, specimen, scales }: { name: string; specimen: string; scales: TypeScaleEntry[] }) {
  return (
    <View className="mb-10">
      <TypefaceHeader name={name} specimen={specimen} />
      {scales.map((entry) => (
        <WeightSpecimenRow key={entry.name} entry={entry} />
      ))}
    </View>
  )
}

export default function TypographyScreen() {
  const safeAreaInsets = useSafeAreaInsets()
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + 16,
  }

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: 64,
      paddingBottom: 24,
    },
  })

  return (
    <ScrollView
      className="flex-1 bg-bg-primary"
      contentInset={insets}
      contentContainerStyle={[{ alignItems: "center" }, contentPlatformStyle]}
    >
      <View style={{ maxWidth: 800, width: "100%" }} className="px-4">
        <View className="py-6">
          <Typography size="display" weight="bold" className="mb-2">
            Typography
          </Typography>
          <Typography size="body-small" className="text-text-tertiary">
            Typography tokens define the typefaces, sizes, weights, and line heights used throughout the design system.
            Built from three font families — Literata for display, Plus Jakarta Sans for body and UI, and Iceland for
            numbers.
          </Typography>
        </View>

        <TypefaceSection
          name="Literata"
          specimen={"ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789 !@#$%^&*()"}
          scales={LITERATA_SCALES}
        />

        <TypefaceSection
          name="Plus Jakarta Sans"
          specimen={"ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789 !@#$%^&*()"}
          scales={JAKARTA_SCALES}
        />

        <NumberSection />
      </View>
    </ScrollView>
  )
}
