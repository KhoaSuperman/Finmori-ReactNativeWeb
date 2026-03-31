import { Platform } from "react-native"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function track(eventName: string, params?: Record<string, string | number | boolean>) {
  if (Platform.OS !== "web") return
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", eventName, params)
}

// ─── CTA Events ──────────────────────────────────────────────────────────────

export function trackCtaClick(params: { label: string; location: "hero" | "cta_section" }) {
  track("cta_click", {
    cta_label: params.label,
    cta_location: params.location,
  })
}

// ─── Navigation Events ────────────────────────────────────────────────────────

export function trackNavClick(section: "features" | "screens" | "uikits" | "design_credit" | "github") {
  track("nav_click", { nav_section: section })
}

// ─── UIKit / Component Events ─────────────────────────────────────────────────

export function trackComponentView(params: { title: string; category: string; route: string }) {
  track("component_view", {
    component_title: params.title,
    component_category: params.category,
    component_route: params.route,
  })
}

// ─── Screen Events ────────────────────────────────────────────────────────────

export function trackScreenView(params: { title: string; route: string }) {
  track("screen_preview_click", {
    screen_title: params.title,
    screen_route: params.route,
  })
}

// ─── Drawer Events ────────────────────────────────────────────────────────────

export function trackDrawerOpen(params: { title: string; category: string; route: string }) {
  track("drawer_open", {
    component_title: params.title,
    component_category: params.category,
    component_route: params.route,
  })
}

export function trackDrawerClose() {
  track("drawer_close")
}
