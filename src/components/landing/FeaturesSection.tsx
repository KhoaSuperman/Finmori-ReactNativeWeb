import { Platform, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

function CrossPlatformIcon() {
  return (
    <View style={{ width: 24, height: 24, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: "#6895f8",
          backgroundColor: "transparent",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 16,
          height: 16,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: "#2f61f3",
          backgroundColor: "rgba(47, 97, 243, 0.2)",
        }}
      />
    </View>
  )
}

function TypeScriptIcon() {
  return (
    <Typography
      size="body"
      weight="bold"
      style={{ color: "#6895f8", fontSize: 16, letterSpacing: -1 }}
    >
      {"</>"}
    </Typography>
  )
}

function ProductionIcon() {
  return (
    <View style={{ width: 22, height: 24, alignItems: "center" }}>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#10b981",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 8,
            height: 5,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderColor: "#10b981",
            transform: [{ rotate: "-45deg" }],
            marginTop: -2,
          }}
        />
      </View>
    </View>
  )
}

function NativeWindIcon() {
  return (
    <View style={{ width: 24, height: 18, justifyContent: "center", gap: 3 }}>
      {[16, 20, 14].map((w, i) => (
        <View
          key={i}
          style={{
            width: w,
            height: 2,
            borderRadius: 1,
            backgroundColor: i === 1 ? "#8b5cf6" : "rgba(139, 92, 246, 0.5)",
          }}
        />
      ))}
    </View>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accentColor: string
  accentBg: string
}

function FeatureCard({ icon, title, description, accentColor, accentBg }: FeatureCardProps) {
  return (
    <View
      style={{
        flex: 1,
        minWidth: Platform.OS === "web" ? 260 : "100%",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(64, 73, 104, 0.3)",
        padding: 24,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgba(17, 19, 34, 0.6)",
        ...(Platform.OS === "web" && {
          transition: "all 0.25s ease",
        }),
      }}
    >
      {/* Subtle accent gradient in top-right corner */}
      {Platform.OS === "web" && (
        <View
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 120,
            height: 120,
            borderRadius: 60,
            opacity: 0.08,
            backgroundColor: accentColor,
            ...(Platform.OS === "web" && {
              filter: "blur(40px)",
            }),
          }}
        />
      )}

      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          backgroundColor: accentBg,
          borderWidth: 1,
          borderColor: `${accentColor}30`,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {icon}
      </View>

      <Typography
        size="h3"
        weight="semibold"
        style={{ color: "#f9f9fb", marginBottom: 8 }}
      >
        {title}
      </Typography>

      <Typography
        size="body-small"
        style={{ color: "#7d89b0", lineHeight: 22 }}
      >
        {description}
      </Typography>
    </View>
  )
}

const FEATURES: Omit<FeatureCardProps, "icon"> & { iconKey: string }[] = [
  {
    iconKey: "cross-platform",
    title: "Cross-Platform",
    description:
      "One codebase for iOS, Android, and Web. Native performance with React Native Web.",
    accentColor: "#2f61f3",
    accentBg: "rgba(47, 97, 243, 0.12)",
  },
  {
    iconKey: "typescript",
    title: "TypeScript First",
    description:
      "Full type safety out of the box. Autocomplete and type checking for all components.",
    accentColor: "#6895f8",
    accentBg: "rgba(104, 149, 248, 0.12)",
  },
  {
    iconKey: "production",
    title: "Production Ready",
    description:
      "Built for real apps with accessibility, dark mode, and responsive design included.",
    accentColor: "#10b981",
    accentBg: "rgba(16, 185, 129, 0.12)",
  },
  {
    iconKey: "nativewind",
    title: "NativeWind v4",
    description:
      "Style with Tailwind CSS utilities. Familiar syntax, powerful theming system.",
    accentColor: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.12)",
  },
]

const ICON_MAP: Record<string, React.ReactNode> = {
  "cross-platform": <CrossPlatformIcon />,
  typescript: <TypeScriptIcon />,
  production: <ProductionIcon />,
  nativewind: <NativeWindIcon />,
}

export function FeaturesSection() {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768

  return (
    <View style={{ width: "100%", paddingVertical: isDesktop ? 80 : 56, paddingHorizontal: 24 }}>
      {/* Section label */}
      <View style={{ alignItems: "center", marginBottom: 48, gap: 16 }}>
        <View
          style={{
            paddingHorizontal: 14,
            paddingVertical: 5,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(47, 97, 243, 0.3)",
            backgroundColor: "rgba(47, 97, 243, 0.08)",
          }}
        >
          <Typography
            size="caption"
            weight="semibold"
            style={{ color: "#6895f8", fontSize: 12, letterSpacing: 0.5 }}
          >
            FEATURES
          </Typography>
        </View>

        <Typography
          size="h2"
          weight="bold"
          className="text-center"
          style={{ color: "#f9f9fb", fontSize: isDesktop ? 36 : 28 }}
        >
          Why Finmori?
        </Typography>

        <Typography
          size="body"
          className="text-center"
          style={{ color: "#7d89b0", maxWidth: 480 }}
        >
          Everything you need to build a modern finance app interface
        </Typography>
      </View>

      {/* 2×2 Bento grid on desktop, stacked on mobile */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "center",
          maxWidth: 720,
          alignSelf: "center",
          width: "100%",
        }}
      >
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={ICON_MAP[feature.iconKey]}
            title={feature.title}
            description={feature.description}
            accentColor={feature.accentColor}
            accentBg={feature.accentBg}
          />
        ))}
      </View>
    </View>
  )
}
