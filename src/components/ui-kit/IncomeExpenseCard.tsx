import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { TouchableOpacity, View, type ViewProps } from "react-native"

import { IllustrativeExpenseIcon, IllustrativeIncomeIcon, MoreHorizontalIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

const incomeExpenseCardVariants = cva("rounded-2xl border border-tertiary p-4 gap-2", {
  variants: {
    type: {
      income: "bg-success-primary",
      expense: "bg-error-primary",
    },
  },
  defaultVariants: {
    type: "income",
  },
})

export type IncomeExpenseCardType = NonNullable<VariantProps<typeof incomeExpenseCardVariants>["type"]>

export interface IncomeExpenseCardProps extends ViewProps {
  type?: IncomeExpenseCardType
  title?: string
  amount: string
  onMenuPress?: () => void
  className?: string
}

export function IncomeExpenseCard({
  type = "income",
  title,
  amount,
  onMenuPress,
  className,
  ...props
}: IncomeExpenseCardProps) {
  const isIncome = type === "income"
  const defaultTitle = isIncome ? "Income" : "Expense"

  return (
    <View className={cn(incomeExpenseCardVariants({ type }), className)} {...props}>
      {/* Header row: icon circle + menu */}
      <View className="flex-row items-start justify-between">
        <View
          className={cn(
            "h-10 w-10 items-center justify-center rounded-full",
            isIncome ? "bg-fg-success-secondary" : "bg-fg-error-secondary",
          )}
        >
          {isIncome ? <IllustrativeIncomeIcon size={23} /> : <IllustrativeExpenseIcon size={23} />}
        </View>

        <TouchableOpacity onPress={onMenuPress} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} activeOpacity={0.6}>
          <MoreHorizontalIcon size={20} color="#3E4784" />
        </TouchableOpacity>
      </View>

      {/* Content: title + amount */}
      <View className="gap-0.5">
        <Typography size="body-small" weight="regular" className="text-secondary">
          {title ?? defaultTitle}
        </Typography>

        <Typography
          size="h1"
          weight="semibold"
          className={cn("font-display tracking-tighter", isIncome ? "text-success-primary" : "text-error-primary")}
        >
          {amount}
        </Typography>
      </View>
    </View>
  )
}

export { incomeExpenseCardVariants }
