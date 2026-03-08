import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function AltArrowRightIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.67461 2.95388C5.88428 2.77417 6.19993 2.79845 6.37964 3.00811L10.3796 7.67478C10.5401 7.86202 10.5401 8.13832 10.3796 8.32557L6.37964 12.9922C6.19993 13.2019 5.88428 13.2262 5.67461 13.0465C5.46495 12.8668 5.44067 12.5511 5.62038 12.3414L9.34147 8.00017L5.62038 3.6589C5.44067 3.44924 5.46495 3.13359 5.67461 2.95388Z"
        fill={color}
      />
    </Svg>
  )
}
