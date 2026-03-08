import React from "react"
import { Image, Platform, Text, View, type ImageSourcePropType, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

const BASE_SIZE = 74
const ICON_RATIO = 56 / 74
const LETTER_FONT_RATIO = 34 / 74
const RADIUS_RATIO = 16 / 74

type MediaSlotVariant = "image" | "letter" | "icon"

interface MediaSlotBaseProps extends ViewProps {
  size?: number
  className?: string
}

interface MediaSlotImageProps extends MediaSlotBaseProps {
  variant: "image"
  source: ImageSourcePropType | { uri: string }
}

interface MediaSlotLetterProps extends MediaSlotBaseProps {
  variant: "letter"
  text: string
}

interface MediaSlotIconProps extends MediaSlotBaseProps {
  variant: "icon"
  icon: (props: { size: number; color: string }) => React.ReactNode
  iconColor?: string
}

type MediaSlotProps = MediaSlotImageProps | MediaSlotLetterProps | MediaSlotIconProps

function LetterBackground({
  size,
  children,
}: {
  size: number
  children: React.ReactNode
}) {
  const radius = Math.round(size * RADIUS_RATIO)

  if (Platform.OS === "web") {
    return (
      <View
        style={
          {
            width: size,
            height: size,
            borderRadius: radius,
            backgroundImage: "linear-gradient(135deg, #E9DEFA 0%, #FFF6EB 100%)",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          } as any
        }
      >
        {children}
      </View>
    )
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: "#E9DEFA",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {children}
    </View>
  )
}

export function MediaSlot(props: MediaSlotProps) {
  const { variant, size = BASE_SIZE, className, ...rest } = props
  const radius = Math.round(size * RADIUS_RATIO)

  if (variant === "image") {
    const { source } = props as MediaSlotImageProps
    return (
      <View
        className={cn("overflow-hidden", className)}
        style={{ width: size, height: size, borderRadius: radius }}
        {...rest}
      >
        <Image
          source={source}
          style={{ width: size, height: size }}
          resizeMode="cover"
          accessibilityIgnoresInvertColors
        />
      </View>
    )
  }

  if (variant === "letter") {
    const { text } = props as MediaSlotLetterProps
    const fontSize = Math.round(size * LETTER_FONT_RATIO)

    return (
      <LetterBackground size={size}>
        <Text
          style={{
            fontSize,
            lineHeight: fontSize * 1.2,
            color: "#101323",
            textAlign: "center",
          }}
          allowFontScaling={false}
          className={cn("font-display font-medium", className)}
        >
          {text}
        </Text>
      </LetterBackground>
    )
  }

  const { icon, iconColor = "#000000" } = props as MediaSlotIconProps
  const iconSize = Math.round(size * ICON_RATIO)

  return (
    <View
      className={cn("items-center justify-center overflow-hidden", className)}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: "#F8F9FC",
      }}
      {...rest}
    >
      {icon({ size: iconSize, color: iconColor })}
    </View>
  )
}

export { type MediaSlotProps, type MediaSlotVariant }
