import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function AltArrowDownIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.95369 5.67461C3.1334 5.46495 3.44905 5.44067 3.65872 5.62038L7.99999 9.34147L12.3413 5.62038C12.5509 5.44067 12.8666 5.46495 13.0463 5.67461C13.226 5.88428 13.2017 6.19993 12.9921 6.37964L8.32538 10.3796C8.13814 10.5401 7.86184 10.5401 7.67459 10.3796L3.00793 6.37964C2.79826 6.19993 2.77398 5.88428 2.95369 5.67461Z"
        fill={color}
      />
    </Svg>
  )
}
