import { View } from "react-native"

import { SearchIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { IconFrame } from "@/components/ui-kit/IconFrame"
import { Typography } from "@/components/ui-kit/Typography"

export default function IconFrameShowcase() {
  return (
    <ShowcasePage
      title="Icon Frame"
      description="A circular container that wraps an icon with a bordered background. Used for icon buttons, list item leading icons, and action indicators."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Sizes
        </Typography>

        <View className="gap-4">
          <View className="flex-row items-center gap-4">
            <IconFrame icon={(props) => <SearchIcon {...props} />} size="sm" />
            <View className="gap-0.5">
              <Typography size="body-small" weight="semibold">Small (24px)</Typography>
              <Typography size="caption" className="text-tertiary">12px icon</Typography>
            </View>
          </View>

          <View className="flex-row items-center gap-4">
            <IconFrame icon={(props) => <SearchIcon {...props} />} size="md" />
            <View className="gap-0.5">
              <Typography size="body-small" weight="semibold">Medium (32px)</Typography>
              <Typography size="caption" className="text-tertiary">16px icon — default</Typography>
            </View>
          </View>

          <View className="flex-row items-center gap-4">
            <IconFrame icon={(props) => <SearchIcon {...props} />} size="lg" />
            <View className="gap-0.5">
              <Typography size="body-small" weight="semibold">Large (40px)</Typography>
              <Typography size="caption" className="text-tertiary">20px icon</Typography>
            </View>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Inline Comparison
        </Typography>

        <View className="flex-row items-center gap-3">
          <IconFrame icon={(props) => <SearchIcon {...props} />} size="sm" />
          <IconFrame icon={(props) => <SearchIcon {...props} />} size="md" />
          <IconFrame icon={(props) => <SearchIcon {...props} />} size="lg" />
        </View>
      </View>
    </ShowcasePage>
  )
}
