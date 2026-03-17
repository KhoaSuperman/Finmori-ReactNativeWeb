import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

import type { IconProps } from "./types"

export function TooltipArrowLeftIcon({ size = 12, color = "#293056", ...props }: IconProps) {
  return (
    <Svg width={size * 0.5} height={size} viewBox="0 0 6 12" fill="none" {...props}>
      <G clipPath="url(#tooltip_arrow_left_clip)">
        <Path
          d="M5.65674 0L11.3136 5.65685L5.65674 11.3137L1.4141 7.07107C0.633049 6.29002 0.633049 5.02369 1.4141 4.24264L5.65674 0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="tooltip_arrow_left_clip">
          <Rect width="5.655" height="11.3137" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
