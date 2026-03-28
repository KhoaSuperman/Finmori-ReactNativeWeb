import { View } from "react-native"

import { SearchIcon } from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { AvatarWithIcon } from "@/components/ui-kit/AvatarWithIcon"
import { Typography } from "@/components/ui-kit/Typography"

const AVATAR_URI = "https://i.pravatar.cc/300?img=12"

export default function AvatarWithIconShowcase() {
  return (
    <ShowcasePage
      title="Avatar with Icon"
      description="Avatar with an action badge anchored to the bottom-right corner. Defaults to a camera icon for profile photo upload flows."
    >
      {/* Default */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          80px circle avatar with camera badge — image, letter, and icon variants.
        </Typography>
        <View className="flex-row flex-wrap items-center gap-6 rounded-2xl border border-tertiary bg-primary p-xl">
          <View className="items-center gap-2">
            <AvatarWithIcon avatarProps={{ variant: "image", source: { uri: AVATAR_URI } }} />
            <Typography size="caption" className="text-tertiary">
              Image
            </Typography>
          </View>
          <View className="items-center gap-2">
            <AvatarWithIcon avatarProps={{ variant: "letter", text: "JD" }} />
            <Typography size="caption" className="text-tertiary">
              Letter
            </Typography>
          </View>
          <View className="items-center gap-2">
            <AvatarWithIcon
              avatarProps={{
                variant: "icon",
                icon: ({ size: s, color: c }) => <SearchIcon size={s} color={c} />,
              }}
            />
            <Typography size="caption" className="text-tertiary">
              Icon
            </Typography>
          </View>
        </View>
      </View>

      {/* Scalable sizes */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Scalable Sizes
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Badge and camera icon scale proportionally with the avatar size.
        </Typography>
        <View className="flex-row flex-wrap items-end gap-4 rounded-2xl border border-tertiary bg-primary p-xl">
          {[48, 64, 80, 96, 120].map((s) => (
            <View key={s} className="items-center gap-2">
              <AvatarWithIcon
                size={s}
                avatarProps={{ variant: "image", source: { uri: AVATAR_URI } }}
              />
              <Typography size="tiny" className="text-quaternary">
                {s}px
              </Typography>
            </View>
          ))}
        </View>
      </View>

      {/* On dark background */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          On Dark Background
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          The white badge with shadow remains legible on dark surfaces.
        </Typography>
        <View className="flex-row flex-wrap items-center gap-6 rounded-2xl bg-gray-light-900 p-xl">
          <View className="items-center gap-2">
            <AvatarWithIcon avatarProps={{ variant: "image", source: { uri: AVATAR_URI } }} />
            <Typography size="caption" className="text-base-white">
              Image
            </Typography>
          </View>
          <View className="items-center gap-2">
            <AvatarWithIcon avatarProps={{ variant: "letter", text: "KN" }} />
            <Typography size="caption" className="text-base-white">
              Letter
            </Typography>
          </View>
        </View>
      </View>
    </ShowcasePage>
  )
}
