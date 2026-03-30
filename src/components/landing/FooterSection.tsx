import { Image, Linking, Platform, Pressable, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

const TECH_BADGES = [
  { label: "React Native", url: "https://reactnative.dev" },
  { label: "Expo SDK 55", url: "https://expo.dev" },
  { label: "NativeWind v4", url: "https://www.nativewind.dev" },
  { label: "TailwindCSS", url: "https://tailwindcss.com" },
  { label: "TypeScript", url: "https://www.typescriptlang.org" },
]

export function FooterSection() {
  const handleGitHub = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori")
  }

  const currentYear = new Date().getFullYear()

  return (
    <View style={{ marginTop: 16 }}>
      {/* Gradient separator line */}
      <View
        style={{
          height: 1,
          marginHorizontal: 24,
          ...(Platform.OS === "web"
            ? {
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(47, 97, 243, 0.4) 50%, transparent 100%)",
              }
            : {
                backgroundColor: "rgba(64, 73, 104, 0.3)",
              }),
        }}
      />

      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 48,
        }}
      >
        <View style={{ alignItems: "center", gap: 24 }}>
          {/* Logo + description */}
          <View style={{ alignItems: "center", gap: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  backgroundColor: "rgba(47, 97, 243, 0.15)",
                  borderWidth: 1,
                  borderColor: "rgba(47, 97, 243, 0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("@/assets/images/logo-glow.png")}
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                />
              </View>
              <Typography size="body" weight="semibold" style={{ color: "#f9f9fb" }}>
                Finmori ReactNative
              </Typography>
            </View>
            <Typography
              size="caption"
              style={{
                maxWidth: 300,
                textAlign: "center",
                color: "#5d6b98",
                lineHeight: 20,
              }}
            >
              An open source design system built with React Native Web, Expo, and
              NativeWind. Free to use and extend.
            </Typography>
          </View>

          {/* Tech stack badges */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {TECH_BADGES.map((badge) => (
              <Pressable
                key={badge.label}
                onPress={() => Linking.openURL(badge.url)}
                style={({ pressed, hovered }: any) => ({
                  borderRadius: 9999,
                  borderWidth: 1,
                  borderColor: hovered
                    ? "rgba(64, 73, 104, 0.6)"
                    : "rgba(64, 73, 104, 0.3)",
                  backgroundColor: hovered
                    ? "rgba(17, 19, 34, 0.8)"
                    : "rgba(14, 16, 27, 0.5)",
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                  opacity: pressed ? 0.7 : 1,
                  ...(Platform.OS === "web" && {
                    transition: "all 0.15s ease",
                    transform: hovered ? "scale(1.03)" : "scale(1)",
                  }),
                })}
              >
                <Typography
                  size="caption"
                  weight="medium"
                  style={{ color: "#b9c0d4", fontSize: 12 }}
                >
                  {badge.label}
                </Typography>
              </Pressable>
            ))}
          </View>

          {/* GitHub link */}
          <Pressable
            onPress={handleGitHub}
            style={({ pressed, hovered }: any) => ({
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              borderRadius: 9999,
              borderWidth: 1,
              borderColor: hovered
                ? "rgba(47, 97, 243, 0.4)"
                : "rgba(64, 73, 104, 0.3)",
              paddingHorizontal: 20,
              paddingVertical: 8,
              opacity: pressed ? 0.7 : 1,
              ...(Platform.OS === "web" && {
                transition: "all 0.15s ease",
              }),
            })}
          >
            <Typography
              size="caption"
              weight="medium"
              style={{ color: "#b9c0d4" }}
            >
              ★ Star on GitHub
            </Typography>
          </Pressable>

          {/* License */}
          <Typography size="caption" style={{ color: "#404968" }}>
            MIT License · {currentYear} · Open Source
          </Typography>
        </View>
      </View>
    </View>
  )
}
