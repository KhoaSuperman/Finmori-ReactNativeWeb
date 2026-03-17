import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

import type { IconProps } from "./types"

export function TooltipArrowRightIcon({ size = 12, color = "#293056", ...props }: IconProps) {
  return (
    <Svg width={size * 0.5} height={size} viewBox="0 0 6 12" fill="none" {...props}>
      <G clipPath="url(#tooltip_arrow_right_clip)">
        <Path
          d="M-0.00195312 0L4.24069 4.24264C5.02174 5.02369 5.02174 6.29002 4.24069 7.07107L-0.00195312 11.3137L-5.65881 5.65685L-0.00195312 0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="tooltip_arrow_right_clip">
          <Rect width="5.655" height="11.3137" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
