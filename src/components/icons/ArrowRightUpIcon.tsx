import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function ArrowRightUpIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4.5C5.72386 4.5 5.5 4.27614 5.5 4C5.5 3.72386 5.72386 3.5 6 3.5H12C12.2761 3.5 12.5 3.72386 12.5 4V10C12.5 10.2761 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.2761 11.5 10V5.20711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L10.7929 4.5H6Z"
        fill={color}
      />
    </Svg>
  )
}
