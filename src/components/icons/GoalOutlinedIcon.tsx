import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

import type { IconProps } from "./types"

export function GoalOutlinedIcon({ size = 24, color, ...props }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        fill="url(#a)"
        d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75Z"
      />
      <Path
        fill="url(#b)"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25Zm-.75 1.53a9.252 9.252 0 0 0-8.47 8.47H5a.75.75 0 0 1 0 1.5H2.78a9.252 9.252 0 0 0 8.47 8.47V19a.75.75 0 0 1 1.5 0v2.22a9.252 9.252 0 0 0 8.47-8.47H19a.75.75 0 0 1 0-1.5h2.22a9.252 9.252 0 0 0-8.47-8.47V5a.75.75 0 0 1-1.5 0V2.78Z"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient id="a" x1={1.25} x2={22.75} y1={1.25} y2={22.75} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F5F7FA" />
          <Stop offset={1} stopColor="#C3CFE2" />
        </LinearGradient>
        <LinearGradient id="b" x1={1.25} x2={22.75} y1={1.25} y2={22.75} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F5F7FA" />
          <Stop offset={1} stopColor="#C3CFE2" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
