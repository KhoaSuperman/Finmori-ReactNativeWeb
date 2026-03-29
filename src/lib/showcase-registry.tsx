import React from "react"

// Showcase components
import AmountInputShowcase from "@/app/showcase/amount-input"
import AvatarShowcase from "@/app/showcase/avatar"
import AvatarWithIconShowcase from "@/app/showcase/avatar-with-icon"
import BalanceCardShowcase from "@/app/showcase/balance-card"
import ActivityItemShowcase from "@/app/showcase/activity-item"
import BillingItemShowcase from "@/app/showcase/billing-item"
import BottomNavBarShowcase from "@/app/showcase/bottom-nav-bar"
import ButtonsShowcase from "@/app/showcase/buttons"
import CardShowcase from "@/app/showcase/card"
import CardElementShowcase from "@/app/showcase/card-element"
import CardMenuItemShowcase from "@/app/showcase/card-menu-item"
import CategoryBreakdownItemShowcase from "@/app/showcase/category-breakdown-item"
import CategoryIconShowcase from "@/app/showcase/category-icon"
import ChipShowcase from "@/app/showcase/chip"
import ColorsShowcase from "@/app/showcase/colors"
import ContainersShowcase from "@/app/showcase/containers"
import ExpenseChartShowcase from "@/app/showcase/expense-chart"
import FilterChipShowcase from "@/app/showcase/filter-chip"
import GoalsCardDefaultShowcase from "@/app/showcase/goals-card-default"
import GoalsCardDetailsShowcase from "@/app/showcase/goals-card-details"
import GoalsCardMinimizeShowcase from "@/app/showcase/goals-card-minimize"
import GradientsShowcase from "@/app/showcase/gradients"
import HomeIndicatorBarShowcase from "@/app/showcase/home-indicator-bar"
import IconCardTypeShowcase from "@/app/showcase/icon-card-type"
import IconFrameShowcase from "@/app/showcase/icon-frame"
import IconPaymentMethodShowcase from "@/app/showcase/icon-payment-method"
import IncomeExpenseCardShowcase from "@/app/showcase/income-expense-card"
import IncomeExpenseChartShowcase from "@/app/showcase/income-expense-chart"
import IncomeOutcomeTrendCardShowcase from "@/app/showcase/income-outcome-trend-card"
import IndicatorDotsShowcase from "@/app/showcase/indicator-dots"
import ListItemShowcase from "@/app/showcase/list-item"
import MediaSlotShowcase from "@/app/showcase/media-slot"
import NavigationBarShowcase from "@/app/showcase/navigation-bar"
import PrimitiveColorsShowcase from "@/app/showcase/primitive-colors"
import ProgressBarWithControllerShowcase from "@/app/showcase/progress-bar-with-controller"
import RadiusShowcase from "@/app/showcase/radius"
import RecapCardShowcase from "@/app/showcase/recap-card"
import SearchFieldShowcase from "@/app/showcase/search-field"
import SectionTitleShowcase from "@/app/showcase/section-title"
import SettingSingleShowcase from "@/app/showcase/setting-single"
import ShadowsShowcase from "@/app/showcase/shadows"
import SpacingShowcase from "@/app/showcase/spacing"
import SpendingChartShowcase from "@/app/showcase/spending-chart"
import TabBarShowcase from "@/app/showcase/tab-bar"
import TabItemShowcase from "@/app/showcase/tab-item"
import TagShowcase from "@/app/showcase/tag"
import TextDividerShowcase from "@/app/showcase/text-divider"
import TooltipShowcase from "@/app/showcase/tooltip"
import TransactionTextInputShowcase from "@/app/showcase/transaction-text-input"
import TypographyShowcase from "@/app/showcase/typography"
import WidthsShowcase from "@/app/showcase/widths"

export type ShowcaseComponent = React.ComponentType<{ onClose?: () => void }>

/**
 * Maps showcase routes to their page components.
 * Screen routes (/screens/*) are excluded — they navigate as before.
 */
export const SHOWCASE_REGISTRY: Record<string, ShowcaseComponent> = {
  "/showcase/amount-input": AmountInputShowcase,
  "/showcase/avatar": AvatarShowcase,
  "/showcase/avatar-with-icon": AvatarWithIconShowcase,
  "/showcase/balance-card": BalanceCardShowcase,
  "/showcase/activity-item": ActivityItemShowcase,
  "/showcase/billing-item": BillingItemShowcase,
  "/showcase/bottom-nav-bar": BottomNavBarShowcase,
  "/showcase/buttons": ButtonsShowcase,
  "/showcase/card": CardShowcase,
  "/showcase/card-element": CardElementShowcase,
  "/showcase/card-menu-item": CardMenuItemShowcase,
  "/showcase/category-breakdown-item": CategoryBreakdownItemShowcase,
  "/showcase/category-icon": CategoryIconShowcase,
  "/showcase/chip": ChipShowcase,
  "/showcase/colors": ColorsShowcase,
  "/showcase/containers": ContainersShowcase,
  "/showcase/expense-chart": ExpenseChartShowcase,
  "/showcase/filter-chip": FilterChipShowcase,
  "/showcase/goals-card-default": GoalsCardDefaultShowcase,
  "/showcase/goals-card-details": GoalsCardDetailsShowcase,
  "/showcase/goals-card-minimize": GoalsCardMinimizeShowcase,
  "/showcase/gradients": GradientsShowcase,
  "/showcase/home-indicator-bar": HomeIndicatorBarShowcase,
  "/showcase/icon-card-type": IconCardTypeShowcase,
  "/showcase/icon-frame": IconFrameShowcase,
  "/showcase/icon-payment-method": IconPaymentMethodShowcase,
  "/showcase/income-expense-card": IncomeExpenseCardShowcase,
  "/showcase/income-expense-chart": IncomeExpenseChartShowcase,
  "/showcase/income-outcome-trend-card": IncomeOutcomeTrendCardShowcase,
  "/showcase/indicator-dots": IndicatorDotsShowcase,
  "/showcase/list-item": ListItemShowcase,
  "/showcase/media-slot": MediaSlotShowcase,
  "/showcase/navigation-bar": NavigationBarShowcase,
  "/showcase/primitive-colors": PrimitiveColorsShowcase,
  "/showcase/progress-bar-with-controller": ProgressBarWithControllerShowcase,
  "/showcase/radius": RadiusShowcase,
  "/showcase/recap-card": RecapCardShowcase,
  "/showcase/search-field": SearchFieldShowcase,
  "/showcase/section-title": SectionTitleShowcase,
  "/showcase/setting-single": SettingSingleShowcase,
  "/showcase/shadows": ShadowsShowcase,
  "/showcase/spacing": SpacingShowcase,
  "/showcase/spending-chart": SpendingChartShowcase,
  "/showcase/tab-bar": TabBarShowcase,
  "/showcase/tab-item": TabItemShowcase,
  "/showcase/tag": TagShowcase,
  "/showcase/text-divider": TextDividerShowcase,
  "/showcase/tooltip": TooltipShowcase,
  "/showcase/transaction-text-input": TransactionTextInputShowcase,
  "/showcase/typography": TypographyShowcase,
  "/showcase/widths": WidthsShowcase,
}
