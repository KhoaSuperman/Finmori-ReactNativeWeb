import { ImageBackground, Pressable, View, type ViewProps } from "react-native"

import { ChevronRightOutlinedIcon } from "@/components/icons"
import { cn } from "@/lib/cn"

import { ProgressBarWithController } from "./ProgressBarWithController"
import { Typography } from "./Typography"

const bgImage = require("../../../assets/images/goals-card/bg_goals_card_minimize.png")

export interface GoalsCardMinimizeProps extends ViewProps {
  title?: string
  currentAmount?: string
  targetAmount?: string
  /** Progress value from 0 to 100 */
  progress?: number
  timeRemaining?: string
  onPress?: () => void
  className?: string
}

export function GoalsCardMinimize({
  title = "New Iphone 17 Pro Max",
  currentAmount = "$175,000",
  targetAmount = "$250k",
  progress = 30,
  timeRemaining = "3 days 04:15:20",
  onPress,
  className,
  style,
  ...props
}: GoalsCardMinimizeProps) {
  return (
    <Pressable onPress={onPress} style={style} {...(props as any)}>
      <View className={cn("overflow-hidden rounded-xl", className)}>
        <ImageBackground source={bgImage} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
          <View className="gap-md p-md">
            {/* Header row: title + chevron */}
            <View className="flex-row items-center gap-xs py-xs">
              <Typography
                size="body-small"
                weight="medium"
                className="flex-1 text-primary"
                numberOfLines={1}
              >
                {title}
              </Typography>
              <ChevronRightOutlinedIcon size={20} color="#4E5BA6" />
            </View>

            {/* Container: amounts + progress bar + time */}
            <View
              className="gap-md rounded-xl bg-primary p-md"
              style={{
                shadowColor: "#0A0D12",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
                elevation: 3,
              }}
            >
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

              {/* Progress bar */}
              <ProgressBarWithController value={progress} withController={false} />

              {/* Time remaining */}
              <Typography size="caption" weight="regular" className="text-tertiary">
                {timeRemaining}
              </Typography>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  )
}
