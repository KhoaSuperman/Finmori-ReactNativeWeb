import React from "react"
import { View } from "react-native"

import { AppleIcon, SearchIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { BillingItem } from "@/components/ui-kit/BillingItem"
import { Typography } from "@/components/ui-kit/Typography"

export default function BillingItemShowcase() {
  return (
    <ShowcasePage
      title="Billing Item"
      description="Compact billing card showing a service icon, invoice label, price with period, and remaining time."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <BillingItem
            label="Apple Invoice #1234"
            price="S$ 20.00"
            period="/month"
            subtitle="2 days left"
            avatarProps={{
              variant: "icon",
              icon: (p) => <AppleIcon {...p} />,
              iconColor: "#000000",
            }}
          />
          <BillingItem
            label="Netflix Premium"
            price="S$ 22.98"
            period="/month"
            subtitle="15 days left"
            avatarProps={{ variant: "letter", text: "N" }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Without Period
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <BillingItem
            label="Domain Renewal"
            price="S$ 45.00"
            subtitle="Expires Mar 30"
            avatarProps={{
              variant: "icon",
              icon: (p) => <SearchIcon {...p} />,
            }}
          />
          <BillingItem
            label="AWS Invoice"
            price="S$ 128.50"
            subtitle="Due in 7 days"
            avatarProps={{ variant: "letter", text: "W" }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Long Label
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Labels truncate to 2 lines when the text is too long.
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <BillingItem
            label="Google Workspace Business Standard Plan"
            price="S$ 16.80"
            period="/month"
            subtitle="Renews Apr 1"
            avatarProps={{ variant: "letter", text: "G" }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Minimal
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Only label and price, without period or subtitle.
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <BillingItem
            label="One-time Payment"
            price="S$ 99.00"
            avatarProps={{
              variant: "icon",
              icon: (p) => <AppleIcon {...p} />,
              iconColor: "#000000",
            }}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
