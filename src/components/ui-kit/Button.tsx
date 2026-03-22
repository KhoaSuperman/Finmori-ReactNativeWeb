import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  View,
} from "react-native"

import { cn } from "@/lib/cn"
import { Typography } from "./Typography"

const buttonVariants = cva(
  "flex-row items-center justify-center active:opacity-80",
  {
    variants: {
      variant: {
        primary: "bg-primary-solid rounded-xl",
        secondary: "bg-secondary-solid rounded-xl",
        tertiary: "rounded-xl border border-primary bg-primary",
        "link-color": "",
        "link-gray": "",
      },
      size: {
        default: "",
        iconOnly: "",
      },
      destructive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Primary default padding
      { variant: "primary", size: "default", className: "gap-2 px-xl py-lg" },
      { variant: "primary", size: "iconOnly", className: "p-lg" },
      // Secondary default padding
      {
        variant: "secondary",
        size: "default",
        className: "gap-2 px-xl py-lg",
      },
      { variant: "secondary", size: "iconOnly", className: "p-lg" },
      // Tertiary default padding
      { variant: "tertiary", size: "default", className: "gap-2 px-xl py-lg" },
      { variant: "tertiary", size: "iconOnly", className: "p-lg" },
      // Link variants padding
      { variant: "link-color", size: "default", className: "gap-xs" },
      { variant: "link-gray", size: "default", className: "gap-xs" },

      // Destructive overrides
      {
        variant: "primary",
        destructive: true,
        className: "bg-error-600",
      },
      {
        variant: "secondary",
        destructive: true,
        className:
          "border-0 bg-error",
      },
      {
        variant: "tertiary",
        destructive: true,
        className: "border-error bg-primary",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      destructive: false,
    },
  },
)

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>

interface ButtonProps
  extends Omit<PressableProps, "children">,
    VariantProps<typeof buttonVariants> {
  label?: string
  loading?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

function getTextColorClass(
  variant: ButtonVariant,
  destructive: boolean,
  disabled: boolean,
): string {
  if (disabled) {
    if (variant === "link-color" || variant === "link-gray")
      return "text-fg-disabled"
    return "text-fg-disabled"
  }
  if (destructive) {
    if (variant === "primary") return "text-white"
    return "text-error"
  }
  switch (variant) {
    case "primary":
      return "text-white"
    case "secondary":
      return "text-white"
    case "tertiary":
      return "text-secondary"
    case "link-color":
      return "text-brand-tertiary"
    case "link-gray":
      return "text-tertiary"
    default:
      return "text-primary"
  }
}

function getIconColorClass(
  variant: ButtonVariant,
  destructive: boolean,
  disabled: boolean,
): string {
  if (disabled) return "text-fg-disabled"
  if (destructive) {
    if (variant === "primary") return "text-fg-white"
    return "text-fg-error"
  }
  switch (variant) {
    case "primary":
      return "text-fg-white"
    case "secondary":
      return "text-fg-white"
    case "tertiary":
      return "text-fg-quaternary"
    case "link-color":
      return "text-fg-brand-secondary"
    case "link-gray":
      return "text-fg-quaternary"
    default:
      return "text-fg-primary"
  }
}

function getSpinnerColor(
  variant: ButtonVariant,
  destructive: boolean,
): string {
  if (destructive) {
    if (variant === "primary") return "#ffffff"
    return "#f04438"
  }
  switch (variant) {
    case "primary":
      return "#f8faff"
    case "secondary":
      return "#ffffff"
    case "tertiary":
      return "#717bbc"
    case "link-color":
      return "#2f61f3"
    case "link-gray":
      return "#717bbc"
    default:
      return "#717bbc"
  }
}

function getDisabledContainerClass(variant: ButtonVariant): string {
  switch (variant) {
    case "primary":
    case "secondary":
      return "bg-disabled border-0"
    case "tertiary":
      return "bg-disabled border-disabled-subtle"
    case "link-color":
    case "link-gray":
      return ""
    default:
      return "bg-disabled"
  }
}

function getLoadingContainerClass(variant: ButtonVariant): string {
  switch (variant) {
    case "primary":
      return "bg-gray-light-400"
    case "secondary":
      return "bg-gray-light-50"
    case "tertiary":
      return "bg-gray-light-50"
    default:
      return ""
  }
}

const isLink = (variant: ButtonVariant) =>
  variant === "link-color" || variant === "link-gray"

const ICON_SIZE_BUTTON = 20
const ICON_SIZE_LINK = 16
const ICON_SIZE_ICON_ONLY = 24

export function Button({
  variant = "primary",
  size = "default",
  destructive = false,
  label,
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  icon,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading
  const v = variant ?? "primary"
  const isIconOnly = size === "iconOnly"
  const link = isLink(v)
  const iconSize = isIconOnly
    ? ICON_SIZE_ICON_ONLY
    : link
      ? ICON_SIZE_LINK
      : ICON_SIZE_BUTTON
  const iconColorClass = getIconColorClass(v, !!destructive, !!disabled)
  const textColorClass = getTextColorClass(v, !!destructive, !!disabled)

  const disabledClass = disabled ? getDisabledContainerClass(v) : ""
  const loadingClass = loading && !disabled ? getLoadingContainerClass(v) : ""

  return (
    <Pressable
      disabled={isDisabled}
      className={cn(
        buttonVariants({ variant, size, destructive }),
        disabledClass,
        loadingClass,
        className,
      )}
      {...props}
    >
      {isIconOnly ? (
        loading ? (
          <ActivityIndicator
            size="small"
            color={getSpinnerColor(v, !!destructive)}
          />
        ) : (
          <View className={iconColorClass} style={{ width: iconSize, height: iconSize }}>
            {icon}
          </View>
        )
      ) : (
        <>
          {loading ? (
            <ActivityIndicator
              size="small"
              color={getSpinnerColor(v, !!destructive)}
            />
          ) : (
            iconLeft && (
              <View className={iconColorClass} style={{ width: iconSize, height: iconSize }}>
                {iconLeft}
              </View>
            )
          )}
          {label && (
            <Typography
              size={link ? "body-small" : "body"}
              weight={link ? "medium" : "semibold"}
              className={textColorClass}
            >
              {label}
            </Typography>
          )}
          {!loading && iconRight && (
            <View className={iconColorClass} style={{ width: iconSize, height: iconSize }}>
              {iconRight}
            </View>
          )}
        </>
      )}
    </Pressable>
  )
}

export { buttonVariants, type ButtonProps, type ButtonVariant }
