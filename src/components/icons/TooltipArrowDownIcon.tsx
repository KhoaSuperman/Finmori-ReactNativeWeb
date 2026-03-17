import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

import type { IconProps } from "./types"

export function TooltipArrowDownIcon({ size = 12, color = "#293056", ...props }: IconProps) {
  return (
    <Svg width={size} height={size * 0.5} viewBox="0 0 12 6" fill="none" {...props}>
      <G clipPath="url(#tooltip_arrow_down_clip)">
        <Path
          d="M5.65674 -5.65918L11.3136 -0.00232553L7.07095 4.24032C6.2899 5.02136 5.02357 5.02136 4.24252 4.24032L-0.000115871 -0.00232553L5.65674 -5.65918Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="tooltip_arrow_down_clip">
          <Rect width="11.3137" height="5.655" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
