import React, { useState } from "react"
import { Pressable, View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Typography } from "@/components/ui-kit/Typography"

type ColorStep = {
  step: string
  hex: string
}

type ColorGroup = {
  name: string
  tailwindPrefix: string
  steps: ColorStep[]
}

const COLOR_PALETTE: ColorGroup[] = [
  {
    name: "Base",
    tailwindPrefix: "base",
    steps: [
      { step: "white", hex: "#FFFFFF" },
      { step: "black", hex: "#000000" },
      { step: "transparent", hex: "transparent" },
    ],
  },
  {
    name: "Gray (light mode)",
    tailwindPrefix: "gray-light",
    steps: [
      { step: "25", hex: "#FCFCFD" },
      { step: "50", hex: "#F8F9FC" },
      { step: "100", hex: "#EAECF5" },
      { step: "200", hex: "#D5D9EB" },
      { step: "300", hex: "#B3B8DB" },
      { step: "400", hex: "#717BBC" },
      { step: "500", hex: "#4E5BA6" },
      { step: "600", hex: "#3E4784" },
      { step: "700", hex: "#363F72" },
      { step: "800", hex: "#293056" },
      { step: "900", hex: "#101323" },
      { step: "950", hex: "#0D0F1C" },
    ],
  },
  {
    name: "Gray (dark mode)",
    tailwindPrefix: "gray-dark",
    steps: [
      { step: "25", hex: "#FCFCFD" },
      { step: "50", hex: "#F9F9FB" },
      { step: "100", hex: "#EFF1F5" },
      { step: "200", hex: "#DCDFEA" },
      { step: "300", hex: "#B9C0D4" },
      { step: "400", hex: "#7D89B0" },
      { step: "500", hex: "#5D6B98" },
      { step: "600", hex: "#4A5578" },
      { step: "700", hex: "#404968" },
      { step: "800", hex: "#30374F" },
      { step: "900", hex: "#111322" },
      { step: "950", hex: "#0E101B" },
    ],
  },
  {
    name: "Gray (dark mode alpha)",
    tailwindPrefix: "gray-dark-alpha",
    steps: [
      { step: "25", hex: "rgba(255,255,255,0.98)" },
      { step: "50", hex: "rgba(255,255,255,0.96)" },
      { step: "100", hex: "rgba(255,255,255,0.94)" },
      { step: "200", hex: "rgba(255,255,255,0.92)" },
      { step: "300", hex: "rgba(255,255,255,0.80)" },
      { step: "400", hex: "rgba(255,255,255,0.56)" },
      { step: "500", hex: "rgba(255,255,255,0.50)" },
      { step: "600", hex: "rgba(255,255,255,0.35)" },
      { step: "700", hex: "rgba(255,255,255,0.16)" },
      { step: "800", hex: "rgba(255,255,255,0.08)" },
      { step: "900", hex: "rgba(255,255,255,0.04)" },
      { step: "950", hex: "rgba(255,255,255,0)" },
    ],
  },
  {
    name: "Brand",
    tailwindPrefix: "brand",
    steps: [
      { step: "25", hex: "#F8FAFF" },
      { step: "50", hex: "#EDF2FF" },
      { step: "100", hex: "#D6E2FD" },
      { step: "200", hex: "#B7CDFC" },
      { step: "300", hex: "#88AEFB" },
      { step: "400", hex: "#6895F8" },
      { step: "500", hex: "#2F61F3" },
      { step: "600", hex: "#1A45E6" },
      { step: "700", hex: "#1234D1" },
      { step: "800", hex: "#182CA3" },
      { step: "900", hex: "#1A297D" },
      { step: "950", hex: "#161C49" },
    ],
  },
  {
    name: "Error",
    tailwindPrefix: "error",
    steps: [
      { step: "25", hex: "#FFFBFA" },
      { step: "50", hex: "#FEF3F2" },
      { step: "100", hex: "#FEE4E2" },
      { step: "200", hex: "#FECDCA" },
      { step: "300", hex: "#FDA29B" },
      { step: "400", hex: "#F97066" },
      { step: "500", hex: "#F04438" },
      { step: "600", hex: "#D92D20" },
      { step: "700", hex: "#B42318" },
      { step: "800", hex: "#912018" },
      { step: "900", hex: "#7A271A" },
      { step: "950", hex: "#55160C" },
    ],
  },
  {
    name: "Warning",
    tailwindPrefix: "warning",
    steps: [
      { step: "25", hex: "#FFFCF5" },
      { step: "50", hex: "#FFFAEB" },
      { step: "100", hex: "#FEF0C7" },
      { step: "200", hex: "#FEDF89" },
      { step: "300", hex: "#FEC84B" },
      { step: "400", hex: "#FDB022" },
      { step: "500", hex: "#F79009" },
      { step: "600", hex: "#DC6803" },
      { step: "700", hex: "#B54708" },
      { step: "800", hex: "#93370D" },
      { step: "900", hex: "#7A2E0E" },
      { step: "950", hex: "#4E1D09" },
    ],
  },
  {
    name: "Success",
    tailwindPrefix: "success",
    steps: [
      { step: "25", hex: "#F6FEF9" },
      { step: "50", hex: "#ECFDF3" },
      { step: "100", hex: "#DCFAE6" },
      { step: "200", hex: "#ABEFC6" },
      { step: "300", hex: "#75E0A7" },
      { step: "400", hex: "#47CD89" },
      { step: "500", hex: "#17B26A" },
      { step: "600", hex: "#079455" },
      { step: "700", hex: "#067647" },
      { step: "800", hex: "#085D3A" },
      { step: "900", hex: "#074D31" },
      { step: "950", hex: "#053321" },
    ],
  },
  {
    name: "Gray Blue",
    tailwindPrefix: "gray-blue",
    steps: [
      { step: "25", hex: "#FCFCFD" },
      { step: "50", hex: "#F8F9FC" },
      { step: "100", hex: "#EAECF5" },
      { step: "200", hex: "#D5D9EB" },
      { step: "300", hex: "#B3B8DB" },
      { step: "400", hex: "#717BBC" },
      { step: "500", hex: "#4E5BA6" },
      { step: "600", hex: "#3E4784" },
      { step: "700", hex: "#363F72" },
      { step: "800", hex: "#293056" },
      { step: "900", hex: "#101323" },
      { step: "950", hex: "#0D0F1C" },
    ],
  },
  {
    name: "Gray Cool",
    tailwindPrefix: "gray-cool",
    steps: [
      { step: "25", hex: "#FCFCFD" },
      { step: "50", hex: "#F9F9FB" },
      { step: "100", hex: "#EFF1F5" },
      { step: "200", hex: "#DCDFEA" },
      { step: "300", hex: "#B9C0D4" },
      { step: "400", hex: "#7D89B0" },
      { step: "500", hex: "#5D6B98" },
      { step: "600", hex: "#4A5578" },
      { step: "700", hex: "#404968" },
      { step: "800", hex: "#30374F" },
      { step: "900", hex: "#111322" },
      { step: "950", hex: "#0E101B" },
    ],
  },
  {
    name: "Gray Modern",
    tailwindPrefix: "gray-modern",
    steps: [
      { step: "25", hex: "#FCFCFD" },
      { step: "50", hex: "#F8FAFC" },
      { step: "100", hex: "#EEF2F6" },
      { step: "200", hex: "#E3E8EF" },
      { step: "300", hex: "#CDD5DF" },
      { step: "400", hex: "#9AA4B2" },
      { step: "500", hex: "#697586" },
      { step: "600", hex: "#4B5565" },
      { step: "700", hex: "#364152" },
      { step: "800", hex: "#202939" },
      { step: "900", hex: "#121926" },
      { step: "950", hex: "#0D121C" },
    ],
  },
  {
    name: "Gray Neutral",
    tailwindPrefix: "gray-neutral",
    steps: [
      { step: "25", hex: "#FCFCFD" },
      { step: "50", hex: "#F9FAFB" },
      { step: "100", hex: "#F3F4F6" },
      { step: "200", hex: "#E5E7EB" },
      { step: "300", hex: "#D2D6DB" },
      { step: "400", hex: "#9DA4AE" },
      { step: "500", hex: "#6C737F" },
      { step: "600", hex: "#4D5761" },
      { step: "700", hex: "#384250" },
      { step: "800", hex: "#1F2A37" },
      { step: "900", hex: "#111927" },
      { step: "950", hex: "#0D121C" },
    ],
  },
  {
    name: "Gray Iron",
    tailwindPrefix: "gray-iron",
    steps: [
      { step: "25", hex: "#FCFCFC" },
      { step: "50", hex: "#FAFAFA" },
      { step: "100", hex: "#F4F4F5" },
      { step: "200", hex: "#E4E4E7" },
      { step: "300", hex: "#D1D1D6" },
      { step: "400", hex: "#A0A0AB" },
      { step: "500", hex: "#70707B" },
      { step: "600", hex: "#51525C" },
      { step: "700", hex: "#3F3F46" },
      { step: "800", hex: "#26272B" },
      { step: "900", hex: "#1A1A1E" },
      { step: "950", hex: "#131316" },
    ],
  },
  {
    name: "Gray True",
    tailwindPrefix: "gray-true",
    steps: [
      { step: "25", hex: "#FCFCFC" },
      { step: "50", hex: "#F7F7F7" },
      { step: "100", hex: "#F5F5F5" },
      { step: "200", hex: "#E5E5E5" },
      { step: "300", hex: "#D6D6D6" },
      { step: "400", hex: "#A3A3A3" },
      { step: "500", hex: "#737373" },
      { step: "600", hex: "#525252" },
      { step: "700", hex: "#424242" },
      { step: "800", hex: "#292929" },
      { step: "900", hex: "#141414" },
      { step: "950", hex: "#0F0F0F" },
    ],
  },
  {
    name: "Gray Warm",
    tailwindPrefix: "gray-warm",
    steps: [
      { step: "25", hex: "#FDFDFC" },
      { step: "50", hex: "#FAFAF9" },
      { step: "100", hex: "#F5F5F4" },
      { step: "200", hex: "#E7E5E4" },
      { step: "300", hex: "#D7D3D0" },
      { step: "400", hex: "#A9A29D" },
      { step: "500", hex: "#79716B" },
      { step: "600", hex: "#57534E" },
      { step: "700", hex: "#44403C" },
      { step: "800", hex: "#292524" },
      { step: "900", hex: "#1C1917" },
      { step: "950", hex: "#171412" },
    ],
  },
  {
    name: "Moss",
    tailwindPrefix: "moss",
    steps: [
      { step: "25", hex: "#FAFDF7" },
      { step: "50", hex: "#F5FBEE" },
      { step: "100", hex: "#E6F4D7" },
      { step: "200", hex: "#CEEAB0" },
      { step: "300", hex: "#ACDC79" },
      { step: "400", hex: "#86CB3C" },
      { step: "500", hex: "#669F2A" },
      { step: "600", hex: "#4F7A21" },
      { step: "700", hex: "#3F621A" },
      { step: "800", hex: "#335015" },
      { step: "900", hex: "#2B4212" },
      { step: "950", hex: "#1A280B" },
    ],
  },
  {
    name: "Green Light",
    tailwindPrefix: "green-light",
    steps: [
      { step: "25", hex: "#FAFEF5" },
      { step: "50", hex: "#F3FEE7" },
      { step: "100", hex: "#E3FBCC" },
      { step: "200", hex: "#D0F8AB" },
      { step: "300", hex: "#A6EF67" },
      { step: "400", hex: "#85E13A" },
      { step: "500", hex: "#66C61C" },
      { step: "600", hex: "#4CA30D" },
      { step: "700", hex: "#3B7C0F" },
      { step: "800", hex: "#326212" },
      { step: "900", hex: "#2B5314" },
      { step: "950", hex: "#15290A" },
    ],
  },
  {
    name: "Green",
    tailwindPrefix: "green",
    steps: [
      { step: "25", hex: "#F6FEF9" },
      { step: "50", hex: "#EDFCF2" },
      { step: "100", hex: "#D3F8DF" },
      { step: "200", hex: "#AAF0C4" },
      { step: "300", hex: "#73E2A3" },
      { step: "400", hex: "#3CCB7F" },
      { step: "500", hex: "#16B364" },
      { step: "600", hex: "#099250" },
      { step: "700", hex: "#087443" },
      { step: "800", hex: "#095C37" },
      { step: "900", hex: "#084C2E" },
      { step: "950", hex: "#052E1C" },
    ],
  },
  {
    name: "Teal",
    tailwindPrefix: "teal",
    steps: [
      { step: "25", hex: "#F6FEFC" },
      { step: "50", hex: "#F0FDF9" },
      { step: "100", hex: "#CCFBEF" },
      { step: "200", hex: "#99F6E0" },
      { step: "300", hex: "#5FE9D0" },
      { step: "400", hex: "#2ED3B7" },
      { step: "500", hex: "#15B79E" },
      { step: "600", hex: "#0E9384" },
      { step: "700", hex: "#107569" },
      { step: "800", hex: "#125D56" },
      { step: "900", hex: "#134E48" },
      { step: "950", hex: "#0A2926" },
    ],
  },
  {
    name: "Cyan",
    tailwindPrefix: "cyan",
    steps: [
      { step: "25", hex: "#F5FEFF" },
      { step: "50", hex: "#ECFDFF" },
      { step: "100", hex: "#CFF9FE" },
      { step: "200", hex: "#A5F0FC" },
      { step: "300", hex: "#67E3F9" },
      { step: "400", hex: "#22CCEE" },
      { step: "500", hex: "#06AED4" },
      { step: "600", hex: "#088AB2" },
      { step: "700", hex: "#0E7090" },
      { step: "800", hex: "#155B75" },
      { step: "900", hex: "#164C63" },
      { step: "950", hex: "#0D2D3A" },
    ],
  },
  {
    name: "Blue Light",
    tailwindPrefix: "blue-light",
    steps: [
      { step: "25", hex: "#F5FBFF" },
      { step: "50", hex: "#F0F9FF" },
      { step: "100", hex: "#E0F2FE" },
      { step: "200", hex: "#B9E6FE" },
      { step: "300", hex: "#7CD4FD" },
      { step: "400", hex: "#36BFFA" },
      { step: "500", hex: "#0BA5EC" },
      { step: "600", hex: "#0086C9" },
      { step: "700", hex: "#026AA2" },
      { step: "800", hex: "#065986" },
      { step: "900", hex: "#0B4A6F" },
      { step: "950", hex: "#062C41" },
    ],
  },
  {
    name: "Blue",
    tailwindPrefix: "blue",
    steps: [
      { step: "25", hex: "#F5FAFF" },
      { step: "50", hex: "#EFF8FF" },
      { step: "100", hex: "#D1E9FF" },
      { step: "200", hex: "#B2DDFF" },
      { step: "300", hex: "#84CAFF" },
      { step: "400", hex: "#53B1FD" },
      { step: "500", hex: "#2E90FA" },
      { step: "600", hex: "#1570EF" },
      { step: "700", hex: "#175CD3" },
      { step: "800", hex: "#1849A9" },
      { step: "900", hex: "#194185" },
      { step: "950", hex: "#102A56" },
    ],
  },
  {
    name: "Blue Dark",
    tailwindPrefix: "blue-dark",
    steps: [
      { step: "25", hex: "#F5F8FF" },
      { step: "50", hex: "#EFF4FF" },
      { step: "100", hex: "#D1E0FF" },
      { step: "200", hex: "#B2CCFF" },
      { step: "300", hex: "#84ADFF" },
      { step: "400", hex: "#528BFF" },
      { step: "500", hex: "#2970FF" },
      { step: "600", hex: "#155EEF" },
      { step: "700", hex: "#004EEB" },
      { step: "800", hex: "#0040C1" },
      { step: "900", hex: "#00359E" },
      { step: "950", hex: "#002266" },
    ],
  },
  {
    name: "Tangerine",
    tailwindPrefix: "tangerine",
    steps: [
      { step: "25", hex: "#FFFAF9" },
      { step: "50", hex: "#FEF3F0" },
      { step: "100", hex: "#FEE5DD" },
      { step: "200", hex: "#FECEC2" },
      { step: "300", hex: "#FD9C84" },
      { step: "400", hex: "#FB8264" },
      { step: "500", hex: "#F15C3B" },
      { step: "600", hex: "#DB4424" },
      { step: "700", hex: "#B4361C" },
      { step: "800", hex: "#912F1A" },
      { step: "900", hex: "#752C1B" },
      { step: "950", hex: "#3E160D" },
    ],
  },
  {
    name: "Indigo",
    tailwindPrefix: "indigo",
    steps: [
      { step: "25", hex: "#F5F8FF" },
      { step: "50", hex: "#EEF4FF" },
      { step: "100", hex: "#E0EAFF" },
      { step: "200", hex: "#C7D7FE" },
      { step: "300", hex: "#A4BCFD" },
      { step: "400", hex: "#8098F9" },
      { step: "500", hex: "#6172F3" },
      { step: "600", hex: "#444CE7" },
      { step: "700", hex: "#3538CD" },
      { step: "800", hex: "#2D31A6" },
      { step: "900", hex: "#2D3282" },
      { step: "950", hex: "#1F235B" },
    ],
  },
  {
    name: "Violet",
    tailwindPrefix: "violet",
    steps: [
      { step: "25", hex: "#FBFAFF" },
      { step: "50", hex: "#F5F3FF" },
      { step: "100", hex: "#ECE9FE" },
      { step: "200", hex: "#DDD6FE" },
      { step: "300", hex: "#C3B5FD" },
      { step: "400", hex: "#A48AFB" },
      { step: "500", hex: "#875BF7" },
      { step: "600", hex: "#7839EE" },
      { step: "700", hex: "#6927DA" },
      { step: "800", hex: "#5720B7" },
      { step: "900", hex: "#491C96" },
      { step: "950", hex: "#2E125E" },
    ],
  },
  {
    name: "Purple",
    tailwindPrefix: "purple",
    steps: [
      { step: "25", hex: "#FAFAFF" },
      { step: "50", hex: "#F4F3FF" },
      { step: "100", hex: "#EBE9FE" },
      { step: "200", hex: "#D9D6FE" },
      { step: "300", hex: "#BDB4FE" },
      { step: "400", hex: "#9B8AFB" },
      { step: "500", hex: "#7A5AF8" },
      { step: "600", hex: "#6938EF" },
      { step: "700", hex: "#5925DC" },
      { step: "800", hex: "#4A1FB8" },
      { step: "900", hex: "#3E1C96" },
      { step: "950", hex: "#27115F" },
    ],
  },
  {
    name: "Pink",
    tailwindPrefix: "pink",
    steps: [
      { step: "25", hex: "#FEF6FB" },
      { step: "50", hex: "#FDF2FA" },
      { step: "100", hex: "#FCE7F6" },
      { step: "200", hex: "#FCCEEE" },
      { step: "300", hex: "#FAA7E0" },
      { step: "400", hex: "#F670C7" },
      { step: "500", hex: "#EE46BC" },
      { step: "600", hex: "#DD2590" },
      { step: "700", hex: "#C11574" },
      { step: "800", hex: "#9E165F" },
      { step: "900", hex: "#851651" },
      { step: "950", hex: "#4E0D30" },
    ],
  },
  {
    name: "Ros\u00e9",
    tailwindPrefix: "rose",
    steps: [
      { step: "25", hex: "#FFF5F6" },
      { step: "50", hex: "#FFF1F3" },
      { step: "100", hex: "#FFE4E8" },
      { step: "200", hex: "#FECDD6" },
      { step: "300", hex: "#FEA3B4" },
      { step: "400", hex: "#FD6F8E" },
      { step: "500", hex: "#F63D68" },
      { step: "600", hex: "#E31B54" },
      { step: "700", hex: "#C01048" },
      { step: "800", hex: "#A11043" },
      { step: "900", hex: "#89123E" },
      { step: "950", hex: "#510B24" },
    ],
  },
  {
    name: "Orange Dark",
    tailwindPrefix: "orange-dark",
    steps: [
      { step: "25", hex: "#FFF9F5" },
      { step: "50", hex: "#FFF4ED" },
      { step: "100", hex: "#FFE6D5" },
      { step: "200", hex: "#FFD6AE" },
      { step: "300", hex: "#FF9C66" },
      { step: "400", hex: "#FF692E" },
      { step: "500", hex: "#FF4405" },
      { step: "600", hex: "#E62E05" },
      { step: "700", hex: "#BC1B06" },
      { step: "800", hex: "#97180C" },
      { step: "900", hex: "#771A0D" },
      { step: "950", hex: "#57130A" },
    ],
  },
  {
    name: "Orange",
    tailwindPrefix: "orange",
    steps: [
      { step: "25", hex: "#FEFAF5" },
      { step: "50", hex: "#FEF6EE" },
      { step: "100", hex: "#FDEAD7" },
      { step: "200", hex: "#F9DBAF" },
      { step: "300", hex: "#F7B27A" },
      { step: "400", hex: "#F38744" },
      { step: "500", hex: "#EF6820" },
      { step: "600", hex: "#E04F16" },
      { step: "700", hex: "#B93815" },
      { step: "800", hex: "#932F19" },
      { step: "900", hex: "#772917" },
      { step: "950", hex: "#511C10" },
    ],
  },
  {
    name: "Yellow",
    tailwindPrefix: "yellow",
    steps: [
      { step: "25", hex: "#FEFDF0" },
      { step: "50", hex: "#FEFBE8" },
      { step: "100", hex: "#FEF7C3" },
      { step: "200", hex: "#FEEE95" },
      { step: "300", hex: "#FDE272" },
      { step: "400", hex: "#FAC515" },
      { step: "500", hex: "#EAAA08" },
      { step: "600", hex: "#CA8504" },
      { step: "700", hex: "#A15C07" },
      { step: "800", hex: "#854A0E" },
      { step: "900", hex: "#713B12" },
      { step: "950", hex: "#542C0D" },
    ],
  },
] as const

const CORE_GROUPS = ["Brand", "Error", "Warning", "Success"] as const
const GRAY_GROUPS = [
  "Gray (light mode)",
  "Gray (dark mode)",
  "Gray (dark mode alpha)",
  "Gray Blue",
  "Gray Cool",
  "Gray Modern",
  "Gray Neutral",
  "Gray Iron",
  "Gray True",
  "Gray Warm",
] as const

function isLightColor(hex: string): boolean {
  if (hex === "transparent") return true
  if (hex.startsWith("rgba")) {
    const match = hex.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/)
    if (!match) return true
    const alpha = parseFloat(match[4])
    if (alpha < 0.3) return true
    const r = parseInt(match[1]), g = parseInt(match[2]), b = parseInt(match[3])
    return (r * 299 + g * 587 + b * 114) / 1000 > 160
  }
  const c = hex.replace("#", "")
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 160
}

function ColorSwatch({ step, hex }: ColorStep) {
  const light = isLightColor(hex)
  const isTransparent = hex === "transparent"
  const isAlpha = hex.startsWith("rgba")
  const needsBorder = isTransparent || isAlpha

  return (
    <View className="flex-1" style={{ minWidth: 56 }}>
      <View
        className="h-12 rounded-lg items-center justify-center"
        style={[
          { backgroundColor: isTransparent ? "#FFFFFF" : hex },
          needsBorder && { borderWidth: 1, borderColor: "#D5D9EB" },
          isTransparent && { borderStyle: "dashed" as const },
        ]}
      >
        <Typography
          size="tiny"
          weight="bold"
          style={light ? { color: "#101323" } : { color: "#FFFFFF" }}
        >
          {step}
        </Typography>
      </View>
      <Typography size="tiny" className="text-tertiary mt-1 text-center">
        {isAlpha ? hex.replace("rgba(255,255,255,", "a:").replace(")", "") : hex}
      </Typography>
    </View>
  )
}

function PaletteStrip({ group }: { group: ColorGroup }) {
  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Typography size="body-small" weight="bold">
          {group.name}
        </Typography>
        <View className="bg-secondary px-2 py-0.5 rounded-full">
          <Typography size="tiny" className="text-tertiary font-mono">
            {group.tailwindPrefix}-*
          </Typography>
        </View>
      </View>
      <View className="flex-row flex-wrap gap-1.5">
        {group.steps.map((s) => (
          <ColorSwatch key={s.step} {...s} />
        ))}
      </View>
    </View>
  )
}

function CollapsibleSection({
  title,
  count,
  children,
  defaultOpen = false,
}: {
  title: string
  count: number
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <View className="gap-3">
      <Pressable
        onPress={() => setOpen((v) => !v)}
        className="flex-row items-center justify-between bg-secondary rounded-xl px-4 py-3 active:opacity-80"
      >
        <Typography size="body-small" weight="bold">
          {title}
        </Typography>
        <View className="flex-row items-center gap-2">
          <View className="bg-tertiary px-2 py-0.5 rounded-full">
            <Typography size="tiny" weight="bold" className="text-secondary">
              {count}
            </Typography>
          </View>
          <Typography size="body" className="text-tertiary">
            {open ? "\u25B2" : "\u25BC"}
          </Typography>
        </View>
      </Pressable>
      {open && (
        <View className="gap-5 px-1">{children}</View>
      )}
    </View>
  )
}

function TokenReferenceRow({ group }: { group: ColorGroup }) {
  return (
    <View className="gap-2">
      <Typography size="body-small" weight="bold" className="px-1">
        {group.name}
      </Typography>
      <View className="rounded-xl border border-tertiary bg-primary overflow-hidden">
        {group.steps.map((s, i) => (
          <View
            key={s.step}
            className={`flex-row items-center px-3 py-2.5 ${i < group.steps.length - 1 ? "border-b border-tertiary" : ""}`}
          >
            <View
              className="h-7 w-7 rounded-md shrink-0 border border-tertiary"
              style={{ backgroundColor: s.hex === "transparent" ? undefined : s.hex }}
            />
            <View className="flex-1 ml-3">
              <Typography size="caption" weight="semibold">
                {group.tailwindPrefix}-{s.step}
              </Typography>
            </View>
            <Typography size="tiny" className="text-tertiary font-mono">
              {s.hex}
            </Typography>
          </View>
        ))}
      </View>
    </View>
  )
}

function AppliedExamples() {
  return (
    <View className="gap-3">
      <Typography size="h3" weight="bold" className="px-1">
        Applied examples
      </Typography>
      <View className="gap-4">
        <View className="rounded-xl border border-tertiary bg-primary p-4 gap-3">
          <Typography size="body-small" weight="bold">
            Status indicators
          </Typography>
          <View className="flex-row flex-wrap gap-2">
            {[
              { label: "Active", bg: "#DCFAE6", text: "#067647", border: "#ABEFC6" },
              { label: "Pending", bg: "#FEF0C7", text: "#B54708", border: "#FEDF89" },
              { label: "Error", bg: "#FEE4E2", text: "#B42318", border: "#FECDCA" },
              { label: "Info", bg: "#D6E2FD", text: "#1234D1", border: "#B7CDFC" },
            ].map((item) => (
              <View
                key={item.label}
                className="rounded-full px-3 py-1"
                style={{ backgroundColor: item.bg, borderWidth: 1, borderColor: item.border }}
              >
                <Typography size="caption" weight="semibold" style={{ color: item.text }}>
                  {item.label}
                </Typography>
              </View>
            ))}
          </View>
        </View>

        <View className="rounded-xl border border-tertiary bg-primary p-4 gap-3">
          <Typography size="body-small" weight="bold">
            Brand gradient card
          </Typography>
          <View className="rounded-xl overflow-hidden">
            <View className="flex-row h-3">
              {["#F8FAFF", "#EDF2FF", "#D6E2FD", "#B7CDFC", "#88AEFB", "#6895F8", "#2F61F3", "#1A45E6", "#1234D1", "#182CA3", "#1A297D", "#161C49"].map(
                (hex) => (
                  <View key={hex} className="flex-1" style={{ backgroundColor: hex }} />
                )
              )}
            </View>
            <View className="p-4" style={{ backgroundColor: "#161C49" }}>
              <Typography size="body-small" weight="bold" style={{ color: "#B7CDFC" }}>
                Brand scale in action
              </Typography>
              <Typography size="caption" style={{ color: "#6895F8" }} className="mt-1">
                From lightest 25 to darkest 950
              </Typography>
            </View>
          </View>
        </View>

        <View className="rounded-xl border border-tertiary bg-primary p-4 gap-3">
          <Typography size="body-small" weight="bold">
            Color temperature comparison
          </Typography>
          <View className="gap-2">
            {[
              { name: "Gray Cool", colors: ["#F9F9FB", "#B9C0D4", "#5D6B98", "#111322"] },
              { name: "Gray Neutral", colors: ["#F9FAFB", "#D2D6DB", "#6C737F", "#111927"] },
              { name: "Gray Warm", colors: ["#FAFAF9", "#D7D3D0", "#79716B", "#1C1917"] },
            ].map((row) => (
              <View key={row.name} className="flex-row items-center gap-2">
                <Typography size="tiny" className="text-tertiary" style={{ width: 80 }}>
                  {row.name}
                </Typography>
                <View className="flex-1 flex-row rounded-lg overflow-hidden h-8">
                  {row.colors.map((hex) => (
                    <View key={hex} className="flex-1" style={{ backgroundColor: hex }} />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default function PrimitiveColorsShowcase() {
  const coreGroups = COLOR_PALETTE.filter((g) =>
    (CORE_GROUPS as readonly string[]).includes(g.name)
  )
  const grayGroups = COLOR_PALETTE.filter((g) =>
    (GRAY_GROUPS as readonly string[]).includes(g.name)
  )
  const otherGroups = COLOR_PALETTE.filter(
    (g) =>
      !(CORE_GROUPS as readonly string[]).includes(g.name) &&
      !(GRAY_GROUPS as readonly string[]).includes(g.name) &&
      g.name !== "Base"
  )
  const baseGroup = COLOR_PALETTE.find((g) => g.name === "Base")!

  const totalTokens = COLOR_PALETTE.reduce((sum, g) => sum + g.steps.length, 0)

  return (
    <ShowcasePage
      title="Primitive Colors"
      description={`The foundational color palette with ${totalTokens} tokens across ${COLOR_PALETTE.length} scales. These raw values underpin all semantic color tokens.`}
    >
      {/* Overview strip */}
      <View className="gap-3">
        <Typography size="h3" weight="bold" className="px-1">
          Full palette overview
        </Typography>
        <View className="rounded-xl border border-tertiary bg-primary overflow-hidden">
          {COLOR_PALETTE.filter((g) => g.name !== "Base").map((group) => (
            <View key={group.name} className="flex-row h-6">
              {group.steps.map((s) => (
                <View
                  key={s.step}
                  className="flex-1"
                  style={{ backgroundColor: s.hex }}
                />
              ))}
            </View>
          ))}
        </View>
        <Typography size="caption" className="text-tertiary px-1">
          Each row represents one color scale from lightest (25) to darkest (950).
        </Typography>
      </View>

      {/* Base */}
      <View className="gap-3">
        <Typography size="h3" weight="bold" className="px-1">
          Base
        </Typography>
        <PaletteStrip group={baseGroup} />
      </View>

      {/* Core semantic colors */}
      <CollapsibleSection
        title="Core Colors"
        count={coreGroups.reduce((s, g) => s + g.steps.length, 0)}
        defaultOpen
      >
        {coreGroups.map((g) => (
          <PaletteStrip key={g.name} group={g} />
        ))}
      </CollapsibleSection>

      {/* Gray scales */}
      <CollapsibleSection
        title="Gray Scales"
        count={grayGroups.reduce((s, g) => s + g.steps.length, 0)}
      >
        {grayGroups.map((g) => (
          <PaletteStrip key={g.name} group={g} />
        ))}
      </CollapsibleSection>

      {/* Extended palette */}
      <CollapsibleSection
        title="Extended Palette"
        count={otherGroups.reduce((s, g) => s + g.steps.length, 0)}
      >
        {otherGroups.map((g) => (
          <PaletteStrip key={g.name} group={g} />
        ))}
      </CollapsibleSection>

      {/* Token reference */}
      <View className="gap-3">
        <Typography size="h3" weight="bold" className="px-1">
          Token reference
        </Typography>
        <Typography size="caption" className="text-tertiary px-1">
          Tailwind class format: bg-{"{prefix}"}-{"{step}"}, text-{"{prefix}"}-{"{step}"}, border-{"{prefix}"}-{"{step}"}
        </Typography>
        <CollapsibleSection title="Core token values" count={coreGroups.reduce((s, g) => s + g.steps.length, 0)}>
          {coreGroups.map((g) => (
            <TokenReferenceRow key={g.name} group={g} />
          ))}
        </CollapsibleSection>
        <CollapsibleSection title="Gray token values" count={grayGroups.reduce((s, g) => s + g.steps.length, 0)}>
          {grayGroups.map((g) => (
            <TokenReferenceRow key={g.name} group={g} />
          ))}
        </CollapsibleSection>
        <CollapsibleSection title="Extended token values" count={otherGroups.reduce((s, g) => s + g.steps.length, 0)}>
          {otherGroups.map((g) => (
            <TokenReferenceRow key={g.name} group={g} />
          ))}
        </CollapsibleSection>
      </View>

      <AppliedExamples />
    </ShowcasePage>
  )
}
