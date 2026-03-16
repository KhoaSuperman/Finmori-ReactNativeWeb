import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function SortOutlineIcon({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9583 5.8335C18.9583 6.17867 18.6784 6.4585 18.3333 6.4585L1.66659 6.4585C1.32141 6.4585 1.04159 6.17867 1.04159 5.8335C1.04159 5.48832 1.32141 5.2085 1.66659 5.2085L18.3333 5.2085C18.6784 5.2085 18.9583 5.48832 18.9583 5.8335Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4583 10C16.4583 10.3452 16.1784 10.625 15.8333 10.625L4.16658 10.625C3.82141 10.625 3.54158 10.3452 3.54158 10C3.54158 9.65482 3.82141 9.375 4.16658 9.375L15.8333 9.375C16.1784 9.375 16.4583 9.65482 16.4583 10Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9583 14.1665C13.9583 14.5117 13.6784 14.7915 13.3333 14.7915L6.66659 14.7915C6.32141 14.7915 6.04159 14.5117 6.04159 14.1665C6.04159 13.8213 6.32141 13.5415 6.66659 13.5415H13.3333C13.6784 13.5415 13.9583 13.8213 13.9583 14.1665Z"
        fill={color}
      />
    </Svg>
  )
}
