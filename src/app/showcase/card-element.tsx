import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { CardElement, type CardElementGradient } from "@/components/ui-kit/CardElement"
import { Typography } from "@/components/ui-kit/Typography"

const GRADIENTS: { key: CardElementGradient; label: string }[] = [
  { key: 1, label: "Gradient 1" },
  { key: 2, label: "Gradient 2" },
  { key: 3, label: "Gradient 3" },
  { key: 4, label: "Gradient 4" },
  { key: 5, label: "Gradient 5" },
]

export default function CardElementShowcase() {
  return (
    <ShowcasePage
      title="Card Element"
      description="Payment card with gradient background, balance display, chip icons, masked card number, and expiry date. Supports 5 gradient variants and all card types."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default (Visa, Gradient 1)
        </Typography>
        <View className="items-center">
          <CardElement
            balance="$423.812.00"
            cardNumber="•••• •••• •••• 1234"
            expiredDate="10/24"
            cardType="visa"
            gradient={1}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Gradient Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Five unique gradient backgrounds for card personalization.
        </Typography>
        <View className="items-center gap-4">
          {GRADIENTS.map(({ key, label }) => (
            <View key={key} className="items-center gap-2">
              <CardElement
                balance="$423.812.00"
                cardNumber="•••• •••• •••• 1234"
                expiredDate="10/24"
                cardType="visa"
                gradient={key}
              />
              <Typography size="caption" className="text-tertiary">
                {label}
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Card Types
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Supports Visa, Mastercard, and AMEX card type icons.
        </Typography>
        <View className="items-center gap-4">
          <View className="items-center gap-2">
            <CardElement
              balance="$12,458.50"
              cardNumber="•••• •••• •••• 5678"
              expiredDate="03/26"
              cardType="visa"
              gradient={1}
            />
            <Typography size="caption" className="text-tertiary">
              Visa
            </Typography>
          </View>
          <View className="items-center gap-2">
            <CardElement
              balance="$89,234.12"
              cardNumber="•••• •••• •••• 9012"
              expiredDate="07/25"
              cardType="mastercard"
              gradient={2}
            />
            <Typography size="caption" className="text-tertiary">
              Mastercard
            </Typography>
          </View>
          <View className="items-center gap-2">
            <CardElement
              balance="$5,000.00"
              cardNumber="•••• •••• •••• 3456"
              expiredDate="12/27"
              cardType="amex"
              gradient={3}
            />
            <Typography size="caption" className="text-tertiary">
              AMEX
            </Typography>
          </View>
        </View>
      </View>
    </ShowcasePage>
  )
}
