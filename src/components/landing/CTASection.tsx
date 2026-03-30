import { Linking, Platform, Pressable, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

export function CTASection() {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768

  const handleGitHub = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori")
  }

  return (
    <View
      style={{
        width: "100%",
        paddingVertical: isDesktop ? 96 : 72,
        paddingHorizontal: 24,
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient mesh background */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ...(Platform.OS === "web"
            ? {
                background: `
                  radial-gradient(ellipse at 30% 50%, rgba(47, 97, 243, 0.15) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(ellipse at 50% 70%, rgba(47, 97, 243, 0.06) 0%, transparent 40%)
                `,
              }
            : {
                backgroundColor: "rgba(14, 16, 27, 0.8)",
              }),
        }}
      />

      {/* Subtle grid pattern */}
      {Platform.OS === "web" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            ...(Platform.OS === "web" && {
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }),
          }}
        />
      )}

      <View style={{ alignItems: "center", gap: 20, maxWidth: 560, zIndex: 1 }}>
        {/* MIT badge */}
        <View
          style={{
            paddingHorizontal: 14,
            paddingVertical: 5,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(16, 185, 129, 0.3)",
            backgroundColor: "rgba(16, 185, 129, 0.08)",
          }}
        >
          <Typography size="caption" weight="semibold" style={{ color: "#10b981", fontSize: 12 }}>
            MIT Licensed · Free Forever
          </Typography>
        </View>

        {/* Headline with gradient text */}
        <View
          style={
            Platform.OS === "web"
              ? {
                  backgroundImage: "linear-gradient(135deg, #f9f9fb 0%, #6895f8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
              : {}
          }
        >
          <Typography
            size="h1"
            weight="bold"
            className="text-center"
            style={{
              color: "#f9f9fb",
              fontSize: isDesktop ? 40 : 32,
              lineHeight: isDesktop ? 48 : 40,
              letterSpacing: -0.5,
            }}
          >
            The future of UI development?
          </Typography>
        </View>

        <Typography size="body" className="text-center" style={{ color: "#7d89b0", maxWidth: 480, lineHeight: 24 }}>
          See what vibecoding can do. This UI kit is 90% AI-generated from Figma with 99% design fidelity. Minimal tweaks, maximum output.
        </Typography>

        {/* Dual CTAs */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            marginTop: 8,
          }}
        >
          <Pressable
            onPress={handleGitHub}
            style={({ pressed }) => ({
              paddingHorizontal: 32,
              paddingVertical: 16,
              borderRadius: 12,
              backgroundColor: "#2f61f3",
              opacity: pressed ? 0.9 : 1,
              ...(Platform.OS === "web" && {
                transition: "all 0.2s ease",
                transform: pressed ? "scale(0.97)" : "scale(1)",
                boxShadow: "0 4px 24px rgba(47, 97, 243, 0.4)",
              }),
            })}
          >
            <Typography size="body" weight="semibold" style={{ color: "#fff" }}>
              View on GitHub
            </Typography>
          </Pressable>

          <Pressable
            onPress={handleGitHub}
            style={({ pressed }) => ({
              paddingHorizontal: 32,
              paddingVertical: 16,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "rgba(64, 73, 104, 0.5)",
              backgroundColor: "rgba(17, 19, 34, 0.5)",
              opacity: pressed ? 0.7 : 1,
              ...(Platform.OS === "web" && {
                transition: "all 0.2s ease",
                transform: pressed ? "scale(0.97)" : "scale(1)",
                backdropFilter: "blur(8px)",
              }),
            })}
          >
            <Typography size="body" weight="semibold" style={{ color: "#f9f9fb" }}>
              Read Docs
            </Typography>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
