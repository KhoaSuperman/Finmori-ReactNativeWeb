import React from "react"
import { View } from "react-native"

import { AppleIcon, SearchIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { ActivityItem } from "@/components/ui-kit/ActivityItem"
import { Typography } from "@/components/ui-kit/Typography"

export default function ActivityItemShowcase() {
  return (
    <ShowcasePage
      title="Activity Item"
      description="Transaction activity row with avatar, label, overline, and trailing element. Supports default (amount + balance) and action button variants."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Shows transaction amount and optional balance with payment method icon.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <ActivityItem
            label="Apple Invoice #1234"
            overline="31/12/2025 · 15:00"
            trailing={{
              amount: "-S$ 20.00",
              balanceLabel: "Balance: S$ 20.00",
              paymentMethod: "visa",
            }}
            avatarProps={{
              variant: "icon",
              icon: (p) => <AppleIcon {...p} />,
              iconColor: "#000000",
            }}
          />
          <ActivityItem
            label="Netflix Subscription"
            overline="15/01/2026 · 09:30"
            trailing={{
              amount: "-S$ 22.98",
              balanceLabel: "Balance: S$ 150.00",
              paymentMethod: "mastercard",
            }}
            avatarProps={{ variant: "letter", text: "N" }}
          />
          <ActivityItem
            label="Salary Deposit"
            overline="01/02/2026 · 00:00"
            trailing={{
              amount: "+S$ 5,000.00",
            }}
            showDivider={false}
            avatarProps={{
              variant: "icon",
              icon: (p) => <SearchIcon {...p} />,
            }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Action
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Shows an action button instead of the amount trailing element.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <ActivityItem
            type="with-action"
            label="Apple Invoice #1234"
            overline="S$ 20.00"
            trailing={{
              actionLabel: "Action",
            }}
            avatarProps={{
              variant: "icon",
              icon: (p) => <AppleIcon {...p} />,
              iconColor: "#000000",
            }}
          />
          <ActivityItem
            type="with-action"
            label="Spotify Premium"
            overline="S$ 9.99"
            trailing={{
              actionLabel: "Pay Now",
            }}
            showDivider={false}
            avatarProps={{ variant: "letter", text: "S" }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Without Divider
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Single activity items without the bottom divider line.
        </Typography>
        <View className="gap-3">
          <View className="overflow-hidden rounded-xl border border-secondary">
            <ActivityItem
              label="Domain Renewal"
              overline="28/03/2026 · 12:00"
              trailing={{
                amount: "-S$ 45.00",
              }}
              showDivider={false}
              avatarProps={{
                variant: "icon",
                icon: (p) => <SearchIcon {...p} />,
              }}
            />
          </View>
          <View className="overflow-hidden rounded-xl border border-secondary">
            <ActivityItem
              type="with-action"
              label="AWS Invoice"
              overline="S$ 128.50"
              trailing={{
                actionLabel: "Review",
              }}
              showDivider={false}
              avatarProps={{ variant: "letter", text: "W" }}
            />
          </View>
        </View>
      </View>
    </ShowcasePage>
  )
}
