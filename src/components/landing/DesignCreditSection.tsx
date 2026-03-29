import { Image, Linking, Platform, Pressable, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

export function DesignCreditSection() {
  const handleFigmaPress = () => {
    Linking.openURL("https://www.figma.com/community/file/1234567890")
  }

  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 48,
        alignItems: "center",
      }}
    >
      {/* Section label */}
      <View style={{ alignItems: "center", gap: 6, marginBottom: 24 }}>
        <Typography
          size="caption"
          weight="semibold"
          style={{ color: "#5d6b98", letterSpacing: 1.2, fontSize: 11 }}
        >
          DESIGN CREDIT
        </Typography>
        <Typography
          size="h3"
          weight="semibold"
          style={{ color: "#f9f9fb", textAlign: "center" }}
        >
          Original Figma Design
        </Typography>
        <Typography
          size="caption"
          style={{ color: "#7d89b0", textAlign: "center", maxWidth: 320, lineHeight: 20 }}
        >
          This UI kit is based on the Finmori Figma design by Zoey DO, available free on Figma Community.
        </Typography>
      </View>

      {/* Card */}
      <Pressable
        onPress={handleFigmaPress}
        style={({ pressed, hovered }: any) => ({
          borderRadius: 20,
          borderWidth: 1,
          borderColor: hovered ? "rgba(47, 97, 243, 0.5)" : "rgba(64, 73, 104, 0.3)",
          backgroundColor: "rgba(17, 19, 34, 0.6)",
          overflow: "hidden",
          maxWidth: 480,
          width: "100%",
          opacity: pressed ? 0.85 : 1,
          ...(Platform.OS === "web" && {
            transition: "all 0.2s ease",
            backdropFilter: "blur(12px)",
            boxShadow: hovered
              ? "0 8px 40px rgba(47, 97, 243, 0.2)"
              : "0 4px 24px rgba(0, 0, 0, 0.3)",
          }),
        })}
      >
        {/* Cover image */}
        <Image
          source={require("@/assets/images/landing/finmori-cover.jpg")}
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
        />

        {/* Author row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
          }}
        >
          <Image
            source={require("@/assets/images/landing/Author Image.png")}
            style={{ width: 36, height: 36, borderRadius: 18 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Typography size="body" weight="semibold" style={{ color: "#f9f9fb" }}>
              Finmori · Figma Community
            </Typography>
            <Typography size="caption" style={{ color: "#7d89b0", marginTop: 2 }}>
              Created by Zoey DO
            </Typography>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 8,
              backgroundColor: "rgba(47, 97, 243, 0.15)",
              borderWidth: 1,
              borderColor: "rgba(47, 97, 243, 0.35)",
            }}
          >
            <Typography size="caption" weight="semibold" style={{ color: "#6895f8", fontSize: 12 }}>
              Figma ↗
            </Typography>
          </View>
        </View>
      </Pressable>
    </View>
  )
}
