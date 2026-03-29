import Svg, { Path } from "react-native-svg"
import type { IconProps } from "./types"

export function CheckOutOutlinedIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path fill={color} d="M12 3.25a.75.75 0 0 0 0 1.5 7.25 7.25 0 1 1 0 14.5.75.75 0 0 0 0 1.5 8.75 8.75 0 1 0 0-17.5" />
      <Path fill={color} d="M10.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19z" />
    </Svg>
  )
}
