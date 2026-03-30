import { Image, Linking, Platform, Pressable, ScrollView, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

interface HeroSectionProps {
  onExplorePress: () => void
}

export function HeroSection({ onExplorePress }: HeroSectionProps) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 1024
  const isTablet = Platform.OS === "web" && width > 768 && width <= 1024

  const handleGitHub = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori-ReactNativeWeb")
  }

  return (
    <View
      style={{
        width: "100%",
        minHeight: isDesktop ? 720 : isTablet ? 640 : 580,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0e101b",
      }}
    >
      {/* Animated gradient orbs background */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#0e101b",
          ...(Platform.OS === "web" && {
            background: `
              radial-gradient(ellipse 800px 800px at 20% 40%, rgba(47, 97, 243, 0.25) 0%, transparent 60%),
              radial-gradient(ellipse 600px 600px at 80% 30%, rgba(139, 92, 246, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse 500px 500px at 60% 80%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 400px 400px at 40% 70%, rgba(47, 97, 243, 0.1) 0%, transparent 45%),
              #0e101b
            `,
          }),
        }}
      />

      {/* Subtle grid pattern overlay */}
      {Platform.OS === "web" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.025,
            ...(Platform.OS === "web" && {
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }),
          }}
        />
      )}

      {/* Bottom fade */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 150,
          ...(Platform.OS === "web"
            ? { background: "linear-gradient(to top, #0e101b 0%, transparent 100%)" }
            : { backgroundColor: "rgba(14, 16, 27, 0.8)" }),
        }}
      />

      {/* Content Container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: isDesktop ? 64 : isTablet ? 48 : 24,
            paddingTop: isDesktop ? 140 : 100,
            paddingBottom: isDesktop ? 100 : 60,
          }}
        >
          {/* Main Content Card with glow */}
          <View
            style={{
              alignItems: "center",
              gap: 32,
              maxWidth: 720,
              zIndex: 10,
            }}
          >
            {/* Logo & Brand */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "rgba(17, 19, 34, 0.6)",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "rgba(64, 73, 104, 0.3)",
                ...(Platform.OS === "web" && {
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }),
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: "rgba(47, 97, 243, 0.2)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("@/assets/images/landing/finmori-logo.png")}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <Typography
                size="body"
                weight="bold"
                style={{
                  color: "#f9f9fb",
                  fontSize: 18,
                  letterSpacing: -0.3,
                }}
              >
                Finmori
              </Typography>
              <View
                style={{
                  width: 1,
                  height: 16,
                  backgroundColor: "rgba(64, 73, 104, 0.4)",
                  marginHorizontal: 4,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#10b981",
                    ...(Platform.OS === "web" && {
                      boxShadow: "0 0 8px #10b981",
                    }),
                  }}
                />
                <Typography
                  size="caption"
                  style={{
                    color: "#7d89b0",
                    fontSize: 13,
                  }}
                >
                  Open Source
                </Typography>
              </View>
            </View>

            {/* Headline */}
            <View style={{ alignItems: "center", gap: 20 }}>
              <View
                style={
                  Platform.OS === "web"
                    ? {
                        // @ts-ignore — web-only gradient text
                        backgroundImage: "linear-gradient(135deg, #ffffff 0%, #b9c0d4 50%, #6895f8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {}
                }
              >
                <Typography
                  size="display"
                  weight="bold"
                  style={{
                    color: "#f9f9fb",
                    fontSize: isDesktop ? 64 : isTablet ? 52 : 40,
                    lineHeight: isDesktop ? 72 : isTablet ? 60 : 48,
                    letterSpacing: -2,
                    textAlign: "center",
                  }}
                >
                  {isDesktop ? "React Native\nDesign System" : "React Native\nDesign System"}
                </Typography>
              </View>

              <Typography
                size="body"
                style={{
                  textAlign: "center",
                  color: "#8a94b8",
                  fontSize: isDesktop ? 20 : 17,
                  lineHeight: isDesktop ? 32 : 28,
                  maxWidth: 560,
                }}
              >
                Production-ready UI kit for{" "}
                <Typography
                  size="body"
                  weight="bold"
                  style={{
                    color: "#f9f9fb",
                    fontSize: isDesktop ? 20 : 17,
                    lineHeight: isDesktop ? 32 : 28,
                  }}
                >
                  React Native
                </Typography>
                {" & "}
                <Typography
                  size="body"
                  weight="bold"
                  style={{
                    color: "#f9f9fb",
                    fontSize: isDesktop ? 20 : 17,
                    lineHeight: isDesktop ? 32 : 28,
                  }}
                >
                  Android
                </Typography>
                . For iOS and Flutter, it will be supported soon. Built with Expo, NativeWind, and TypeScript.
              </Typography>
            </View>

            {/* Stats Pills */}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {[
                { value: "8", label: "Screens", color: "#10b981" },
                { value: "40+", label: "Components", color: "#2f61f3" },
                { value: "100+", label: "Tokens", color: "#8b5cf6" },
                { value: "MIT", label: "License", color: "#f59e0b" },
              ].map((stat, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: "rgba(17, 19, 34, 0.5)",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "rgba(64, 73, 104, 0.3)",
                    ...(Platform.OS === "web" && {
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }),
                  }}
                >
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: stat.color,
                      ...(Platform.OS === "web" && {
                        boxShadow: `0 0 6px ${stat.color}`,
                      }),
                    }}
                  />
                  <Typography
                    size="body"
                    weight="bold"
                    style={{ color: "#f9f9fb", fontSize: 14 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography size="caption" style={{ color: "#7d89b0", fontSize: 13 }}>
                    {stat.label}
                  </Typography>
                </View>
              ))}
            </View>

            {/* CTAs */}
            <View
              style={{
                flexDirection: isDesktop ? "row" : "column",
                gap: 14,
                marginTop: 8,
                width: isDesktop ? "auto" : "100%",
                maxWidth: isDesktop ? "auto" : 360,
                alignSelf: "center",
              }}
            >
              <Pressable
                onPress={handleGitHub}
                style={({ pressed }) => ({
                  paddingHorizontal: 32,
                  paddingVertical: 16,
                  borderRadius: 14,
                  backgroundColor: "#2f61f3",
                  opacity: pressed ? 0.9 : 1,
                  alignItems: "center",
                  width: isDesktop ? "auto" : "100%",
                  ...(Platform.OS === "web" && {
                    transition: "all 0.2s ease",
                    transform: pressed ? "scale(0.97)" : "scale(1)",
                    boxShadow: pressed
                      ? "0 2px 12px rgba(47, 97, 243, 0.3)"
                      : "0 4px 24px rgba(47, 97, 243, 0.4), 0 0 0 1px rgba(47, 97, 243, 0.3)",
                  }),
                })}
              >
                <Typography size="body" weight="semibold" style={{ color: "#fff", fontSize: 16 }}>
                  View on GitHub
                </Typography>
              </Pressable>

              <Pressable
                onPress={onExplorePress}
                style={({ pressed }) => ({
                  paddingHorizontal: 32,
                  paddingVertical: 16,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: "rgba(64, 73, 104, 0.5)",
                  backgroundColor: "rgba(17, 19, 34, 0.5)",
                  opacity: pressed ? 0.8 : 1,
                  alignItems: "center",
                  width: isDesktop ? "auto" : "100%",
                  ...(Platform.OS === "web" && {
                    transition: "all 0.2s ease",
                    transform: pressed ? "scale(0.97)" : "scale(1)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
                  }),
                })}
              >
                <Typography size="body" weight="semibold" style={{ color: "#f9f9fb", fontSize: 16 }}>
                  Explore Components
                </Typography>
              </Pressable>
            </View>

            {/* Trust badge */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                marginTop: 8,
              }}
            >
              <View style={{ flexDirection: "row", gap: -6 }}>
                {["#10b981", "#2f61f3", "#8b5cf6", "#f59e0b"].map((color, i) => (
                  <View
                    key={i}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      backgroundColor: color,
                      borderWidth: 2,
                      borderColor: "#0e101b",
                    }}
                  />
                ))}
              </View>
              <Typography size="caption" style={{ color: "#5d6b98", fontSize: 13 }}>
                Built for modern React Native apps
              </Typography>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
