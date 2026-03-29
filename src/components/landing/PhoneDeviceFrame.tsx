import React, { ReactNode } from "react"
import { View } from "react-native"

interface PhoneDeviceFrameProps {
  children: ReactNode
}

/**
 * Phone device frame component that renders content inside an iPhone-style frame.
 * Used in the ScreensGallery desktop view to showcase actual screen components.
 */
export function PhoneDeviceFrame({ children }: PhoneDeviceFrameProps) {
  return (
    <View
      style={{
        width: 393,
        height: 852,
        borderRadius: 54,
        backgroundColor: "#1a1a1a",
        padding: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 32 },
        shadowOpacity: 0.6,
        shadowRadius: 64,
        elevation: 20,
      }}
    >
      {/* Dynamic Island */}
      <View
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          marginLeft: -60,
          width: 120,
          height: 36,
          borderRadius: 20,
          backgroundColor: "#000",
          zIndex: 10,
        }}
      />

      {/* Screen area */}
      <View
        style={{
          flex: 1,
          borderRadius: 44,
          overflow: "hidden",
          backgroundColor: "#0f172a",
        }}
      >
        {children}
      </View>

      {/* Home indicator */}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          marginLeft: -67,
          width: 134,
          height: 5,
          borderRadius: 3,
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />
    </View>
  )
}
