import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function MenuIcon({ size = 24, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 6h18M3 12h18M3 18h18"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
