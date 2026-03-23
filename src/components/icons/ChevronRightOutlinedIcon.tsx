import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function ChevronRightOutlinedIcon({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.09327 3.69198C7.35535 3.46734 7.74991 3.49769 7.97455 3.75977L12.9745 9.5931C13.1752 9.82716 13.1752 10.1725 12.9745 10.4066L7.97455 16.2399C7.74991 16.502 7.35535 16.5324 7.09327 16.3077C6.83119 16.0831 6.80084 15.6885 7.02548 15.4264L11.6768 9.99985L7.02548 4.57326C6.80084 4.31118 6.83119 3.91662 7.09327 3.69198Z"
        fill={color}
      />
    </Svg>
  )
}
