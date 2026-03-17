import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

import type { IconProps } from "./types"

export function TooltipArrowUpIcon({ size = 12, color = "#293056", ...props }: IconProps) {
  return (
    <Svg width={size} height={size * 0.5} viewBox="0 0 12 6" fill="none" {...props}>
      <G clipPath="url(#tooltip_arrow_up_clip)">
        <Path
          d="M4.24252 1.41421C5.02357 0.633165 6.2899 0.633165 7.07095 1.41421L11.3136 5.65685L5.65674 11.3137L-0.000115871 5.65685L4.24252 1.41421Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="tooltip_arrow_up_clip">
          <Rect width="11.3137" height="5.655" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
