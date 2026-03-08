import { View } from "react-native"

import { SearchIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { MediaSlot } from "@/components/ui-kit/MediaSlot"
import { Typography } from "@/components/ui-kit/Typography"

const AVATAR_URI = "https://i.pravatar.cc/300?img=12"

export default function MediaSlotShowcase() {
  return (
    <ShowcasePage
      title="Media Slot"
      description="Scalable media container with image, letter, and icon variants. All content scales proportionally with the root size."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Three variants at the default 74px size.
        </Typography>
        <View className="flex-row flex-wrap items-center gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          <View className="items-center gap-2">
            <MediaSlot variant="image" source={{ uri: AVATAR_URI }} />
            <Typography size="caption" className="text-tertiary">Image</Typography>
          </View>
          <View className="items-center gap-2">
            <MediaSlot variant="letter" text="JD" />
            <Typography size="caption" className="text-tertiary">Letter</Typography>
          </View>
          <View className="items-center gap-2">
            <MediaSlot
              variant="icon"
              icon={(props) => <SearchIcon {...props} />}
            />
            <Typography size="caption" className="text-tertiary">Icon</Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Scalable Sizes
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Letter variant at 32px, 48px, 74px, 100px, and 140px — text scales with the container.
        </Typography>
        <View className="flex-row flex-wrap items-end gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          {[32, 48, 74, 100, 140].map((s) => (
            <View key={s} className="items-center gap-2">
              <MediaSlot variant="letter" text="JD" size={s} />
              <Typography size="tiny" className="text-quaternary">{s}px</Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Icon Scaling
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Icon variant at different sizes — the icon scales proportionally (~75% of container).
        </Typography>
        <View className="flex-row flex-wrap items-end gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          {[32, 48, 74, 100, 140].map((s) => (
            <View key={s} className="items-center gap-2">
              <MediaSlot
                variant="icon"
                icon={(props) => <SearchIcon {...props} />}
                size={s}
              />
              <Typography size="tiny" className="text-quaternary">{s}px</Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Image Scaling
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Image variant at different sizes.
        </Typography>
        <View className="flex-row flex-wrap items-end gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          {[32, 48, 74, 100, 140].map((s) => (
            <View key={s} className="items-center gap-2">
              <MediaSlot variant="image" source={{ uri: AVATAR_URI }} size={s} />
              <Typography size="tiny" className="text-quaternary">{s}px</Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Letter Variations
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Different initials at default size.
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <MediaSlot variant="letter" text="AB" />
          <MediaSlot variant="letter" text="KN" />
          <MediaSlot variant="letter" text="W" />
          <MediaSlot variant="letter" text="ZX" />
        </View>
      </View>
    </ShowcasePage>
  )
}
