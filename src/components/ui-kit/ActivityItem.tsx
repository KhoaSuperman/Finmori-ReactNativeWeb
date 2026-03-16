import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/cn"

import { Avatar } from "./Avatar"
import { Button } from "./Button"
import { IconPaymentMethod, type PaymentMethod } from "./IconPaymentMethod"
import type { MediaSlotProps } from "./MediaSlot"
import { Typography } from "./Typography"

const activityItemVariants = cva("rounded-xl bg-primary", {
  variants: {
    type: {
      default: "",
      "with-action": "",
    },
  },
  defaultVariants: {
    type: "default",
  },
})

type ActivityItemType = NonNullable<VariantProps<typeof activityItemVariants>["type"]>

type AmountVariant = "default" | "income" | "outcome"

interface TrailingDefault {
  amount: string
  amountVariant?: AmountVariant
  balanceLabel?: string
  paymentMethod?: PaymentMethod
}

interface TrailingAction {
  actionLabel: string
  onActionPress?: () => void
}

type ActivityItemBaseProps = ViewProps &
  VariantProps<typeof activityItemVariants> & {
    label: string
    overline: string
    avatarProps?: MediaSlotProps
    avatarSize?: number
    className?: string
    showDivider?: boolean
  }

type ActivityItemDefaultProps = ActivityItemBaseProps & {
  type?: "default"
  trailing: TrailingDefault
}

type ActivityItemWithActionProps = ActivityItemBaseProps & {
  type: "with-action"
  trailing: TrailingAction
}

type ActivityItemProps = ActivityItemDefaultProps | ActivityItemWithActionProps

function isTrailingAction(
  type: ActivityItemType | null | undefined,
  trailing: TrailingDefault | TrailingAction,
): trailing is TrailingAction {
  return type === "with-action"
}

export function ActivityItem({
  type = "default",
  label,
  overline,
  trailing,
  avatarProps,
  avatarSize = 36,
  showDivider = true,
  className,
  ...props
}: ActivityItemProps) {
  return (
    <View className={cn(activityItemVariants({ type }), className)} {...props}>
      <View className="flex-row items-start gap-lg p-lg">
        <Avatar form="circle" size={avatarSize} {...(avatarProps as MediaSlotProps)} />

        <View className="flex-1 flex-row items-start gap-lg">
          <View className="flex-1 gap-xxxs">
            <Typography
              size="body"
              weight="medium"
              className="text-primary"
              numberOfLines={1}
            >
              {label}
            </Typography>

            {type === "default" ? (
              <Typography size="caption" className="text-secondary" numberOfLines={1}>
                {overline}
              </Typography>
            ) : (
              <Typography size="body-small" weight="semibold" className="text-primary" numberOfLines={1}>
                {overline}
              </Typography>
            )}
          </View>

          {isTrailingAction(type, trailing) ? (
            <View className="items-end justify-center">
              <Button
                variant="secondary"
                label={trailing.actionLabel}
                onPress={trailing.onActionPress}
              />
            </View>
          ) : (
            <View className="items-end gap-xxs">
              <Typography
                size="body-small"
                weight="semibold"
                className={
                  trailing.amountVariant === "income"
                    ? "text-success-primary"
                    : "text-primary"
                }
              >
                {trailing.amount}
              </Typography>
              {trailing.balanceLabel && (
                <View className="flex-row items-center gap-xxs">
                  <Typography size="caption" className="text-secondary">
                    {trailing.balanceLabel}
                  </Typography>
                  {trailing.paymentMethod && (
                    <IconPaymentMethod method={trailing.paymentMethod} size="sm" />
                  )}
                </View>
              )}
            </View>
          )}
        </View>
      </View>

      {showDivider && <View className="border-b border-secondary" />}
    </View>
  )
}

export { activityItemVariants, type ActivityItemProps, type ActivityItemType, type AmountVariant }
