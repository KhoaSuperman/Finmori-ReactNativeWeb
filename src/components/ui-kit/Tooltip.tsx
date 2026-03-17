import { cva, type VariantProps } from "class-variance-authority"
import { Platform, View, type ViewProps } from "react-native"

import {
  TooltipArrowDownIcon,
  TooltipArrowLeftIcon,
  TooltipArrowRightIcon,
  TooltipArrowUpIcon,
} from "@/components/icons"
import { cn } from "@/lib/cn"

import { Typography } from "./Typography"

export type TooltipPlacement = "top-center" | "bottom-center" | "left" | "right"

const ARROW_COLOR = "#293056"
const ARROW_SIZE = 12

const tooltipBodyVariants = cva("rounded-xs bg-primary-solid p-md gap-xxs", {
  variants: {
    placement: {
      "top-center": "items-center",
      "bottom-center": "items-center",
      left: "items-start",
      right: "items-start",
    },
  },
  defaultVariants: {
    placement: "top-center",
  },
})

export interface TooltipProps extends ViewProps {
  title?: string
  description: string
  placement?: TooltipPlacement
  maxWidth?: number
  className?: string
}

const shadowStyle =
  Platform.OS === "web"
    ? ({ boxShadow: "0px 4px 6px rgba(10, 13, 18, 0.10)" } as object)
    : {
        shadowColor: "#0a0d12",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
      }

export function Tooltip({
  title,
  description,
  placement = "top-center",
  maxWidth = 240,
  className,
  style,
  ...props
}: TooltipProps) {
  const isHorizontal = placement === "left" || placement === "right"

  return (
    <View
      className={cn(isHorizontal ? "flex-row items-center" : "flex-col items-center", className)}
      style={style}
      {...props}
    >
      {placement === "bottom-center" && <TooltipArrowUpIcon size={ARROW_SIZE} color={ARROW_COLOR} />}
      {placement === "right" && <TooltipArrowLeftIcon size={ARROW_SIZE} color={ARROW_COLOR} />}

      <View className={cn(tooltipBodyVariants({ placement }))} style={[{ maxWidth }, shadowStyle]}>
        {title ? (
          <Typography size="tiny" className="text-primary-on-brand">
            {title}
          </Typography>
        ) : null}
        <Typography size="caption" weight="semibold" className="text-primary-on-brand">
          {description}
        </Typography>
      </View>

      {placement === "top-center" && <TooltipArrowDownIcon size={ARROW_SIZE} color={ARROW_COLOR} />}
      {placement === "left" && <TooltipArrowRightIcon size={ARROW_SIZE} color={ARROW_COLOR} />}
    </View>
  )
}

export { tooltipBodyVariants }
export type TooltipVariants = VariantProps<typeof tooltipBodyVariants>
