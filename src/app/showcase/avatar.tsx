import { View } from "react-native"

import { SearchIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { Avatar } from "@/components/ui-kit/Avatar"
import { Typography } from "@/components/ui-kit/Typography"

const AVATAR_URI = "https://i.pravatar.cc/300?img=12"

export default function AvatarShowcase() {
  return (
    <ShowcasePage
      title="Avatar"
      description="Image container with circle and square form variants. Wraps MediaSlot with a bg-tertiary outline border."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Form Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Circle and square forms at the default 80px size.
        </Typography>
        <View className="flex-row flex-wrap items-center gap-6 rounded-2xl border border-tertiary bg-primary p-xl">
          <View className="items-center gap-2">
            <Avatar form="circle" variant="image" {...{ source: { uri: AVATAR_URI } }} />
            <Typography size="caption" className="text-tertiary">
              Circle
            </Typography>
          </View>
          <View className="items-center gap-2">
            <Avatar form="square" variant="image" {...{ source: { uri: AVATAR_URI } }} />
            <Typography size="caption" className="text-tertiary">
              Square
            </Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Media Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Image, letter, and icon content inside circle form.
        </Typography>
        <View className="flex-row flex-wrap items-center gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          <View className="items-center gap-2">
            <Avatar form="circle" variant="image" {...{ source: { uri: AVATAR_URI } }} />
            <Typography size="caption" className="text-tertiary">
              Image
            </Typography>
          </View>
          <View className="items-center gap-2">
            <Avatar form="circle" variant="letter" {...{ text: "JD" }} />
            <Typography size="caption" className="text-tertiary">
              Letter
            </Typography>
          </View>
          <View className="items-center gap-2">
            <Avatar form="circle" variant="icon" {...{ icon: (props: any) => <SearchIcon {...props} /> }} />
            <Typography size="caption" className="text-tertiary">
              Icon
            </Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Square Media Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Image, letter, and icon content inside square form.
        </Typography>
        <View className="flex-row flex-wrap items-center gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          <View className="items-center gap-2">
            <Avatar form="square" variant="image" {...{ source: { uri: AVATAR_URI } }} />
            <Typography size="caption" className="text-tertiary">
              Image
            </Typography>
          </View>
          <View className="items-center gap-2">
            <Avatar form="square" variant="letter" {...{ text: "KN" }} />
            <Typography size="caption" className="text-tertiary">
              Letter
            </Typography>
          </View>
          <View className="items-center gap-2">
            <Avatar form="square" variant="icon" {...{ icon: (props: any) => <SearchIcon {...props} /> }} />
            <Typography size="caption" className="text-tertiary">
              Icon
            </Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Scalable Sizes
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Circle form at 40px, 60px, 80px, 100px, and 140px.
        </Typography>
        <View className="flex-row flex-wrap items-end gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          {[40, 60, 80, 100, 140].map((s) => (
            <View key={s} className="items-center gap-2">
              <Avatar form="circle" variant="image" {...{ source: { uri: AVATAR_URI } }} size={s} />
              <Typography size="tiny" className="text-quaternary">
                {s}px
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Square Sizes
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Square form at 40px, 60px, 80px, 100px, and 140px.
        </Typography>
        <View className="flex-row flex-wrap items-end gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          {[40, 60, 80, 100, 140].map((s) => (
            <View key={s} className="items-center gap-2">
              <Avatar form="square" variant="image" {...{ source: { uri: AVATAR_URI } }} size={s} />
              <Typography size="tiny" className="text-quaternary">
                {s}px
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Letter Variations
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Different initials in both forms.
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <Avatar form="circle" variant="letter" {...{ text: "AB" }} />
          <Avatar form="circle" variant="letter" {...{ text: "KN" }} />
          <Avatar form="square" variant="letter" {...{ text: "W" }} />
          <Avatar form="square" variant="letter" {...{ text: "ZX" }} />
        </View>
      </View>
    </ShowcasePage>
  )
}
