import { View, type ViewProps } from "react-native"

import { ClockIcon } from "@/components/icons"
import { IllustrativeTargetIcon } from "@/components/icons/IllustrativeTargetIcon"
import { cn } from "@/lib/cn"

import { ProgressBarWithController } from "./ProgressBarWithController"
import { Typography } from "./Typography"

export interface GoalsCardDetailsProps extends ViewProps {
  /** Label shown above the saved amount */
  savedLabel?: string
  /** Current saved amount (large display) */
  currentAmount?: string
  /** Remaining amount label */
  remainingAmount?: string
  /** Progress value from 0 to 100 */
  progress?: number
  /** Actual saving amount shown in the bottom-left */
  actualSaving?: string
  /** Target amount shown in the bottom-right */
  targetAmount?: string
  /** Time remaining (countdown) */
  timeRemaining?: string
  /** End date label */
  endDate?: string
  /** Optional motivational message (hidden by default in design) */
  progressUpdate?: string
  /** Whether to show the progress update message */
  showProgressUpdate?: boolean
  className?: string
}

export function GoalsCardDetails({
  savedLabel = "You've already saved",
  currentAmount = "$175,000",
  remainingAmount = "$175,000 left",
  progress = 50,
  actualSaving = "$175,000",
  targetAmount = "$250k",
  timeRemaining = "3 days 04:15:20",
  endDate = "Jul 3rd, 2026",
  progressUpdate = "🚀 You're ahead of pace and should reach your goal 30% ahead of goal management.",
  showProgressUpdate = false,
  className,
  style,
  ...props
}: GoalsCardDetailsProps) {
  return (
    <View
      className={cn("rounded-xl border border-tertiary bg-secondary p-lg gap-xl", className)}
      style={style}
      {...props}
    >
      {/* Inner card with shadow */}
      <View
        className="rounded-xl bg-primary p-lg gap-lg"
        style={{
          shadowColor: "#0A0D12",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {/* Info section: icon + labels */}
        <View className="items-center gap-xs">
          {/* Target illustration icon */}
          <IllustrativeTargetIcon size={56} />

          {/* "You've already saved" label */}
          <Typography size="body-small" weight="regular" className="text-tertiary text-center">
            {savedLabel}
          </Typography>

          {/* Big amount */}
          <Typography size="display" weight="semibold" className="text-primary text-center tracking-tighter font-display">
            {currentAmount}
          </Typography>

          {/* Remaining amount */}
          <View className="flex-row items-center justify-center gap-sm">
            <Typography size="body-small" weight="semibold" className="text-primary text-center">
              {remainingAmount}
            </Typography>
          </View>
        </View>

        {/* Progress bar */}
        <ProgressBarWithController value={progress} />

        {/* Subheader: actual saving + target */}
        <View className="flex-row items-center gap-md">
          <View className="flex-1">
            <Typography size="body-small" weight="regular" className="text-tertiary">
              {actualSaving}
            </Typography>
          </View>
          <Typography size="body-small" weight="semibold" className="text-primary">
            {targetAmount}
          </Typography>
        </View>
      </View>

      {/* Footer: time remaining + end date */}
      <View className="flex-row items-center justify-between">
        {/* Left: countdown with clock icon */}
        <View className="flex-row items-center gap-xs">
          <ClockIcon size={16} color="#363F72" />
          <Typography size="body-small" weight="regular" className="text-secondary">
            {timeRemaining}
          </Typography>
        </View>

        {/* Right: end date */}
        <View className="flex-row items-center gap-xs">
          <Typography size="body-small" weight="regular" className="text-secondary">
            End:
          </Typography>
          <Typography size="body-small" weight="semibold" className="text-secondary">
            {endDate}
          </Typography>
        </View>
      </View>

      {/* Optional progress update message */}
      {showProgressUpdate && (
        <Typography size="caption" weight="regular" className="text-disabled">
          {progressUpdate}
        </Typography>
      )}
    </View>
  )
}
