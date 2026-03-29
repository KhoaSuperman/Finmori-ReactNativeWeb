import { Image, Linking, Platform, Pressable, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

interface HeaderProps {
  onNavigateToScreens: () => void
  onNavigateToUIKits: () => void
  onNavigateToFeatures: () => void
}

const NAV_ITEMS = [
  { label: "Features", key: "features" },
  { label: "Screens", key: "screens" },
  { label: "UI Kits", key: "uikits" },
] as const

export function Header({
  onNavigateToScreens,
  onNavigateToUIKits,
  onNavigateToFeatures,
}: HeaderProps) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768

  const handleNavPress = (key: (typeof NAV_ITEMS)[number]["key"]) => {
    switch (key) {
      case "screens":
        onNavigateToScreens()
        break
      case "uikits":
        onNavigateToUIKits()
        break
      case "features":
        onNavigateToFeatures()
        break
    }
  }

  const handleGitHubPress = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori-ReactNativeWeb")
  }

  return (
    <View
      style={{
        position: Platform.OS === "web" ? ("fixed" as any) : "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: isDesktop ? 32 : 16,
        backgroundColor: "rgba(14, 16, 27, 0.75)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(64, 73, 104, 0.25)",
        ...(Platform.OS === "web" && {
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }),
      }}
    >
      {/* Logo */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
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
            style={{ width: 22, height: 22 }}
            resizeMode="contain"
          />
        </View>
        {isDesktop && (
          <Typography size="body" weight="semibold" style={{ color: "#f9f9fb" }}>
            Finmori
          </Typography>
        )}
      </View>

      {/* Navigation */}
      {isDesktop && (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <Pressable
              key={item.key}
              onPress={() => handleNavPress(item.key)}
              style={({ pressed, hovered }: any) => ({
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
                backgroundColor: hovered
                  ? "rgba(64, 73, 104, 0.2)"
                  : "transparent",
                opacity: pressed ? 0.7 : 1,
                ...(Platform.OS === "web" && {
                  transition: "all 0.15s ease",
                }),
              })}
            >
              <Typography
                size="body-small"
                weight="medium"
                style={{ color: "#b9c0d4" }}
              >
                {item.label}
              </Typography>
            </Pressable>
          ))}
        </View>
      )}

      {/* CTA Button */}
      <Pressable
        onPress={handleGitHubPress}
        style={({ pressed }: any) => ({
          paddingHorizontal: isDesktop ? 20 : 16,
          paddingVertical: 8,
          borderRadius: 8,
          backgroundColor: "#2f61f3",
          opacity: pressed ? 0.85 : 1,
          ...(Platform.OS === "web" && {
            transition: "all 0.15s ease",
            transform: pressed ? "scale(0.97)" : "scale(1)",
          }),
        })}
      >
        <Typography
          size="body-small"
          weight="semibold"
          style={{ color: "#fff" }}
        >
          {isDesktop ? "View on GitHub" : "GitHub"}
        </Typography>
      </Pressable>
    </View>
  )
}
