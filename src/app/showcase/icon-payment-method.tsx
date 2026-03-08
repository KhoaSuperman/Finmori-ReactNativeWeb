import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { IconPaymentMethod, type PaymentMethod } from "@/components/ui-kit/IconPaymentMethod"
import { paymentMethodSvgMap } from "@/components/ui-kit/payment-method-icons/payment-method-svgs"
import { Typography } from "@/components/ui-kit/Typography"

const ALL_METHODS = Object.keys(paymentMethodSvgMap) as PaymentMethod[]

function toLabel(method: string) {
  const labels: Record<string, string> = {
    affirm: "Affirm",
    alipay: "Alipay",
    amazon: "Amazon",
    amex: "AMEX",
    applepay: "Apple Pay",
    bancontact: "Bancontact",
    bitcoin: "Bitcoin",
    bitcoincash: "Bitcoin Cash",
    bitpay: "Bitpay",
    citadele: "Citadele",
    dinersclub: "Diners Club",
    discover: "Discover",
    elo: "Elo",
    etherium: "Ethereum",
    forbrugsforeningen: "Forbrugsforeningen",
    giropay: "giropay",
    googlepay: "Google Pay",
    ideal: "iDEAL",
    interac: "Interac",
    jcb: "JCB",
    klarna: "Klarna",
    maestro: "Maestro",
    mastercard: "Mastercard",
    payoneer: "Payoneer",
    paypal: "PayPal",
    paysafe: "Paysafe",
    qiwi: "Qiwi",
    sepa: "SEPA",
    "shop-pay": "Shop Pay",
    skrill: "Skrill",
    sofort: "Sofort",
    stripe: "Stripe",
    unionpay: "UnionPay",
    verifone: "Verifone",
    visa: "Visa",
    webmoney: "WebMoney",
    wechat: "WeChat",
    yandex: "Yandex",
  }
  return labels[method] ?? method
}

export default function IconPaymentMethodShowcase() {
  return (
    <ShowcasePage
      title="Payment Method Icon"
      description="Branded payment method icons with sm, md, and lg size variants."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Size Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Three sizes: sm (32×22), md (44×30), lg (58×40).
        </Typography>
        <View className="flex-row items-end gap-4">
          <View className="items-center gap-2">
            <IconPaymentMethod method="visa" size="sm" />
            <Typography size="caption" className="text-tertiary">
              sm
            </Typography>
          </View>
          <View className="items-center gap-2">
            <IconPaymentMethod method="visa" size="md" />
            <Typography size="caption" className="text-tertiary">
              md
            </Typography>
          </View>
          <View className="items-center gap-2">
            <IconPaymentMethod method="visa" size="lg" />
            <Typography size="caption" className="text-tertiary">
              lg
            </Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Payment Methods — Large
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          {ALL_METHODS.map((method) => (
            <View key={method} className="items-center gap-1.5">
              <IconPaymentMethod method={method} size="lg" />
              <Typography size="tiny" className="text-tertiary" numberOfLines={1}>
                {toLabel(method)}
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Payment Methods — Medium
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          {ALL_METHODS.map((method) => (
            <View key={method} className="items-center gap-1">
              <IconPaymentMethod method={method} size="md" />
              <Typography size="tiny" className="text-tertiary" numberOfLines={1}>
                {toLabel(method)}
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Payment Methods — Small
        </Typography>
        <View className="flex-row flex-wrap gap-2">
          {ALL_METHODS.map((method) => (
            <IconPaymentMethod key={method} method={method} size="sm" />
          ))}
        </View>
      </View>
    </ShowcasePage>
  )
}
