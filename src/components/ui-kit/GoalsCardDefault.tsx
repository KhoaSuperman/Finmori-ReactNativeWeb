import { Pressable, View, type ViewProps } from "react-native"

import { ChevronRightOutlinedIcon, ClockIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { ProgressBarWithController } from "./ProgressBarWithController"
import { Tag } from "./Tag"
import { Typography } from "./Typography"

export interface GoalsCardDefaultProps extends ViewProps {
  /** Category label shown above the goal name */
  category?: string
  /** Goal name / product name */
  title?: string
  /** Illustration slot — 40×40 rounded-full element rendered in the header */
  illustration?: React.ReactNode
  /** Current saved amount */
  currentAmount?: string
  /** Target amount */
  targetAmount?: string
  /** Progress value from 0 to 100 */
  progress?: number
  /** Time remaining label */
  timeRemaining?: string
  /** Tag label shown next to the time (e.g. "50%") */
  progressTag?: string
  /** Motivational message shown at the bottom */
  progressUpdate?: string
  onPress?: () => void
  className?: string
}

export function GoalsCardDefault({
  category = "Technology",
  title = "New Iphone 17 Pro Max",
  illustration,
  currentAmount = "$175,000",
  targetAmount = "$250k",
  progress = 50,
  timeRemaining = "3 days 04:15:20",
  progressTag = "50%",
  progressUpdate = "🚀 You're ahead of pace and should reach your goal 30% ahead of goal management.",
  onPress,
  className,
  style,
  ...props
}: GoalsCardDefaultProps) {
  return (
    <Pressable onPress={onPress} style={style} {...(props as any)}>
      <View
        className={cn(
          "rounded-xl border border-tertiary bg-secondary p-lg gap-lg",
          className,
        )}
      >
        {/* Header: illustration + product info + chevron */}
        <View className="flex-row items-center gap-xs">
          {/* Illustration slot */}
          <View className="flex-row items-center gap-md flex-1">
            <View
              className="rounded-full border border-tertiary bg-primary items-center justify-center overflow-hidden"
              style={{ width: 40, height: 40, flexShrink: 0 }}
            >
              {illustration}
            </View>

            {/* Product info */}
            <View className="flex-1 justify-center">
              <Typography size="body-small" weight="regular" className="text-secondary">
                {category}
              </Typography>
              <Typography size="body-small" weight="regular" className="text-secondary" numberOfLines={1}>
                {title}
              </Typography>
            </View>
          </View>

          {/* Chevron */}
          <ChevronRightOutlinedIcon size={20} color="#4E5BA6" />
        </View>

        {/* Container: time badge + progress bar + amounts */}
        <View
          className="rounded-xl bg-primary p-lg gap-md"
          style={{
            shadowColor: "#0A0D12",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }}
        >
          {/* Days left badge row */}
          <View className="flex-row items-center gap-md">
            {/* Time container */}
            <View className="flex-1 flex-row items-center gap-xs">
              <ClockIcon size={16} color="#363F72" />
              <Typography size="body-small" weight="regular" className="text-secondary">
                {timeRemaining}
              </Typography>
            </View>

            {/* Progress tag */}
            <Tag color="green" label={progressTag} />
          </View>

          {/* Progress bar */}
          <ProgressBarWithController value={progress} />

          {/* Subheader: current amount + target amount */}
          <View className="flex-row items-center gap-md">
            <View className="flex-1">
              <Typography size="body-small" weight="regular" className="text-tertiary">
                {currentAmount}
              </Typography>
            </View>
            <Typography size="body-small" weight="semibold" className="text-primary">
              {targetAmount}
            </Typography>
          </View>
        </View>

        {/* Progress update message */}
        <Typography size="caption" weight="regular" className="text-disabled">
          {progressUpdate}
        </Typography>
      </View>
    </Pressable>
  )
}
