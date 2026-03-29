import { ComponentType } from "react"

/**
 * Dynamic imports for screen components used in the ScreensGallery device frame preview.
 * Each screen is lazy-loaded to avoid bundling all screens in the initial load.
 */
export const SCREEN_COMPONENTS: Record<string, () => Promise<ComponentType>> = {
  "/screens/home": async () => {
    const module = await import("@/app/screens/home")
    return module.default
  },
  "/screens/profile_settings": async () => {
    const module = await import("@/app/screens/profile_settings")
    return module.default
  },
  "/screens/goals": async () => {
    const module = await import("@/app/screens/goals")
    return module.default
  },
  "/screens/goals_details": async () => {
    const module = await import("@/app/screens/goals_details")
    return module.default
  },
  "/screens/analytics_overview": async () => {
    const module = await import("@/app/screens/analytics_overview")
    return module.default
  },
  "/screens/analytics_breakdown": async () => {
    const module = await import("@/app/screens/analytics_breakdown")
    return module.default
  },
  "/screens/transaction_history": async () => {
    const module = await import("@/app/screens/transaction_history")
    return module.default
  },
  "/screens/add_transaction": async () => {
    const module = await import("@/app/screens/add_transaction")
    return module.default
  },
}
