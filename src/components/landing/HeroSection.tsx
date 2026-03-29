import { Image, Linking, Platform, Pressable, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

interface StatBadgeProps {
  value: string
  label: string
  dotColor: string
  delay: number
  position: { top?: number; left?: number; right?: number; bottom?: number }
}

function StatBadge({ value, label, dotColor, delay, position }: StatBadgeProps) {
  const animName = delay === 0 ? "float-a" : delay === 1.5 ? "float-b" : "float-c"

  return (
    <View
      style={{
        position: "absolute",
        ...position,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "rgba(17, 19, 34, 0.7)",
        borderRadius: 14,
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "rgba(64, 73, 104, 0.35)",
        ...(Platform.OS === "web" && {
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          animationName: animName,
          animationDuration: "6s",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out",
          animationDelay: `${delay}s`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.03)`,
        }),
      }}
    >
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: dotColor,
          ...(Platform.OS === "web" && {
            boxShadow: `0 0 8px ${dotColor}`,
          }),
        }}
      />
      <View>
        <Typography size="body" weight="bold" style={{ color: "#f9f9fb", fontSize: 16, lineHeight: 20 }}>
          {value}
        </Typography>
        <Typography size="caption" style={{ color: "#7d89b0", fontSize: 11, lineHeight: 14, marginTop: 1 }}>
          {label}
        </Typography>
      </View>
    </View>
  )
}

function StatPill({ value, label, dotColor }: { value: string; label: string; dotColor: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: "rgba(17, 19, 34, 0.6)",
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "rgba(64, 73, 104, 0.3)",
      }}
    >
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: dotColor,
        }}
      />
      <Typography size="caption" weight="bold" style={{ color: "#f9f9fb", fontSize: 13 }}>
        {value}
      </Typography>
      <Typography size="caption" style={{ color: "#7d89b0", fontSize: 12 }}>
        {label}
      </Typography>
    </View>
  )
}

interface HeroSectionProps {
  onExplorePress: () => void
}

export function HeroSection({ onExplorePress }: HeroSectionProps) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768

  const handleGitHub = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori-ReactNativeWeb")
  }

  return (
    <View
      style={{
        width: "100%",
        minHeight: isDesktop ? 640 : 560,
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
          backgroundColor: "#0e101b",
          ...(Platform.OS === "web" && {
            background: `
              radial-gradient(ellipse at 20% 40%, rgba(47, 97, 243, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 60%, rgba(47, 97, 243, 0.06) 0%, transparent 40%),
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
            opacity: 0.04,
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

      {/* Bottom fade to bg-primary */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          ...(Platform.OS === "web"
            ? { background: "linear-gradient(to top, #0e101b 0%, transparent 100%)" }
            : { backgroundColor: "rgba(14, 16, 27, 0.5)" }),
        }}
      />

      {/* Content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: isDesktop ? 48 : 24,
          paddingTop: isDesktop ? 100 : 88,
          paddingBottom: 60,
        }}
      >
        {/* Floating Stats Badges — Desktop */}
        {isDesktop && (
          <>
            <StatBadge
              value="12+"
              label="Full Screens"
              dotColor="#10b981"
              delay={0}
              position={{ top: 140, left: 60 }}
            />
            <StatBadge
              value="40+"
              label="Components"
              dotColor="#2f61f3"
              delay={1.5}
              position={{ top: 200, right: 80 }}
            />
            <StatBadge
              value="100+"
              label="Design Tokens"
              dotColor="#8b5cf6"
              delay={3}
              position={{ bottom: 160, left: 100 }}
            />
          </>
        )}

        {/* Main Content */}
        <View style={{ alignItems: "center", gap: 24, maxWidth: 680 }}>
          {/* Logo */}
          <View
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundColor: "rgba(47, 97, 243, 0.12)",
              borderWidth: 1,
              borderColor: "rgba(47, 97, 243, 0.3)",
              alignItems: "center",
              justifyContent: "center",
              ...(Platform.OS === "web" && {
                boxShadow: "0 0 40px rgba(47, 97, 243, 0.2)",
              }),
            }}
          >
            <Image
              source={require("@/assets/images/logo-glow.png")}
              style={{ width: 48, height: 48 }}
              resizeMode="contain"
            />
          </View>

          {/* Headline */}
          <View style={{ alignItems: "center", gap: 16 }}>
            <View
              style={
                Platform.OS === "web"
                  ? {
                      // @ts-ignore — web-only gradient text
                      backgroundImage: "linear-gradient(135deg, #f9f9fb 0%, #b9c0d4 50%, #6895f8 100%)",
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
                className="text-center"
                style={{
                  color: "#f9f9fb",
                  fontSize: isDesktop ? 56 : 40,
                  lineHeight: isDesktop ? 64 : 48,
                  letterSpacing: -1,
                }}
              >
                Finmori React Native
              </Typography>
            </View>

            <Typography
              size="body"
              style={{
                textAlign: "center",
                color: "#b9c0d4",
                fontSize: isDesktop ? 18 : 16,
                lineHeight: isDesktop ? 28 : 24,
                maxWidth: 500,
              }}
            >
              A complete design system for React Native Web. Open source, production-ready components built with Expo
              and NativeWind.
            </Typography>
          </View>

          {/* Stats Pills — Mobile */}
          {!isDesktop && (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <StatPill value="12+" label="Screens" dotColor="#10b981" />
              <StatPill value="40+" label="Components" dotColor="#2f61f3" />
              <StatPill value="100+" label="Tokens" dotColor="#8b5cf6" />
            </View>
          )}

          {/* CTAs */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginTop: 4,
            }}
          >
            <Pressable
              onPress={handleGitHub}
              style={({ pressed }) => ({
                paddingHorizontal: 28,
                paddingVertical: 14,
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
              onPress={onExplorePress}
              style={({ pressed }) => ({
                paddingHorizontal: 28,
                paddingVertical: 14,
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
                Explore Components
              </Typography>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Inject keyframe animations */}
      {Platform.OS === "web" &&
        typeof document !== "undefined" &&
        (() => {
          const styleId = "hero-animations"
          if (!document.getElementById(styleId)) {
            const style = document.createElement("style")
            style.id = styleId
            style.textContent = `
            @keyframes float-a {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-6px); }
            }
            @keyframes float-b {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes float-c {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
            }
          `
            document.head.appendChild(style)
          }
          return null
        })()}
    </View>
  )
}
