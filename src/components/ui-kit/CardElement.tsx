import React from "react"
import { Image, View, type ImageSourcePropType, type ViewProps } from "react-native"

import { CardChipIcon, ContactlessIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { IconCardType, type CardType } from "./IconCardType"
import { Typography } from "./Typography"

const CARD_BG_IMAGES: Record<CardElementGradient, ImageSourcePropType> = {
  1: require("../../../assets/images/card-bg/bg_card_gradient_1-3x.png"),
  2: require("../../../assets/images/card-bg/bg_card_gradient_2-3x.png"),
  3: require("../../../assets/images/card-bg/bg_card_gradient_3-3x.png"),
  4: require("../../../assets/images/card-bg/bg_card_gradient_4-3x.png"),
  5: require("../../../assets/images/card-bg/bg_card_gradient_5-3x.png"),
}

export type CardElementGradient = 1 | 2 | 3 | 4 | 5

export interface CardElementProps extends ViewProps {
  balance: string
  cardNumber: string
  expiredDate: string
  cardType?: CardType
  gradient?: CardElementGradient
  className?: string
}

export function CardElement({
  balance,
  cardNumber,
  expiredDate,
  cardType = "visa",
  gradient = 1,
  className,
  ...props
}: CardElementProps) {
  return (
    <View
      className={cn("overflow-hidden rounded-2xl", className)}
      style={{ width: 340, height: 196 }}
      {...props}
    >
      {/* Background image - absolute positioned */}
      <Image
        source={CARD_BG_IMAGES[gradient]}
        style={{
          position: "absolute",
          width: 340,
          height: 196,
          top: 0,
          left: 0,
        }}
        resizeMode="cover"
      />

      {/* Card content overlay */}
      <View className="flex-1 justify-between p-3xl" style={{ zIndex: 1 }}>
        {/* Top: Balance & Card Type Icon */}
        <View className="flex-row items-center gap-lg">
          <View className="flex-1">
            <Typography size="caption" className="text-primary-on-brand opacity-80">
              Balance
            </Typography>
            <Typography size="number-lg" className="text-primary-on-brand">
              {balance}
            </Typography>
          </View>
          <IconCardType type={cardType} size="lg" />
        </View>

        {/* Middle: Card Chip & Contactless */}
        <View className="flex-row items-center gap-xs">
          <CardChipIcon size={24} />
          <ContactlessIcon size={24} color="white" />
        </View>

        {/* Bottom: Card Number & Expired Date */}
        <View className="flex-row items-center justify-between">
          <View className="flex-1 justify-center">
            <Typography size="number-sm" className="text-primary-on-brand">
              {cardNumber}
            </Typography>
          </View>
          <View className="items-end gap-xs">
            <Typography size="caption" className="text-primary-on-brand opacity-80">
              Expired Date
            </Typography>
            <Typography size="number-sm" className="text-primary-on-brand">
              {expiredDate}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  )
}
