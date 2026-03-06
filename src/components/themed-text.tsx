import { Text, type TextProps } from "react-native"

import { cn } from "@/lib/cn"

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "small" | "smallBold" | "subtitle" | "link" | "linkPrimary" | "code"
  variant?: "primary" | "secondary"
}

const typeClasses: Record<NonNullable<ThemedTextProps["type"]>, string> = {
  default: "text-base leading-6 font-medium",
  title: "text-5xl font-semibold leading-[52px]",
  small: "text-sm leading-5 font-medium",
  smallBold: "text-sm leading-5 font-bold",
  subtitle: "text-[32px] leading-[44px] font-semibold",
  link: "text-sm leading-[30px]",
  linkPrimary: "text-sm leading-[30px] text-fg-brand-primary",
  code: "font-mono font-medium text-xs",
}

const variantClasses: Record<NonNullable<ThemedTextProps["variant"]>, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
}

export function ThemedText({ className, type = "default", variant = "primary", ...rest }: ThemedTextProps) {
  return <Text className={cn(variantClasses[variant], typeClasses[type], className)} {...rest} />
}
