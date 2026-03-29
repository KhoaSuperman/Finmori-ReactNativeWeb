import Svg, { Path } from "react-native-svg"
import type { IconProps } from "./types"

export function SwitchHorizontalOutlinedIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path fill={color} d="M7.858 12.434a.68.68 0 0 1 .97 0 .697.697 0 0 1 0 .979l-2.487 2.51h12.973a.69.69 0 0 1 .686.692.69.69 0 0 1-.686.693H6.341l2.487 2.51a.697.697 0 0 1 0 .98.68.68 0 0 1-.97 0l-3.657-3.693a.697.697 0 0 1 0-.98zm7.314-9.231a.68.68 0 0 1 .97 0l3.657 3.692a.697.697 0 0 1 0 .98l-3.657 3.691a.68.68 0 0 1-.97 0 .697.697 0 0 1 0-.979l2.487-2.51H4.686A.69.69 0 0 1 4 7.385c0-.383.307-.693.686-.693h12.973l-2.487-2.51a.697.697 0 0 1 0-.98" />
    </Svg>
  )
}
