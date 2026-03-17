import Svg, { Circle } from "react-native-svg"

import type { IconProps } from "./types"

export function IndicatorDotActiveIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Circle cx="8" cy="8" r="8" fill={color} opacity={0.3} />
      <Circle cx="8" cy="8" r="6" fill={color} />
    </Svg>
  )
}
