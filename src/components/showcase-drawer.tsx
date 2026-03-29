import React, { useEffect, useRef } from "react"
import { Animated, Dimensions, Modal, Pressable, StyleSheet, View } from "react-native"

import { ShowcaseDrawerProvider } from "@/components/showcase-page"

interface ShowcaseDrawerProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
}

const DRAWER_WIDTH = Math.min(Dimensions.get("window").width, 480)
const ANIMATION_DURATION = 280

export function ShowcaseDrawer({ visible, onClose, children }: ShowcaseDrawerProps) {
  const translateX = useRef(new Animated.Value(DRAWER_WIDTH)).current
  const overlayOpacity = useRef(new Animated.Value(0)).current
  const [modalVisible, setModalVisible] = React.useState(false)

  useEffect(() => {
    if (visible) {
      setModalVisible(true)
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: DRAWER_WIDTH,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false)
      })
    }
  }, [visible])

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.root} pointerEvents="box-none">
        {/* Dim overlay */}
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.overlay, { opacity: overlayOpacity }]}
        >
          <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        </Animated.View>

        {/* Drawer panel */}
        <Animated.View
          style={[styles.drawer, { transform: [{ translateX }] }]}
        >
          <ShowcaseDrawerProvider onClose={onClose}>
            {children}
          </ShowcaseDrawerProvider>
        </Animated.View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    shadowColor: "#000",
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 24,
  },
})
