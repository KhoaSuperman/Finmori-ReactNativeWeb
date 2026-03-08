import Svg, { Path } from "react-native-svg"

import type { IconProps } from "./types"

export function ArrowRightDownIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L11.5 10.7929L11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6V12C12.5 12.2761 12.2761 12.5 12 12.5L6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5L10.7929 11.5L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"
        fill={color}
      />
    </Svg>
  )
}
