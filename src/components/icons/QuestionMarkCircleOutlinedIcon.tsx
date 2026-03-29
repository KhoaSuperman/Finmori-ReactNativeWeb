import Svg, { Path } from "react-native-svg"
import type { IconProps } from "./types"

export function QuestionMarkCircleOutlinedIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path fill={color} d="M12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 6.25a2.625 2.625 0 0 1 1.335 4.886c-.197.116-.36.243-.465.368-.102.12-.12.2-.12.246V13a.75.75 0 0 1-1.5 0v-1.25c0-.506.222-.916.477-1.217.252-.297.566-.524.844-.688a1.125 1.125 0 1 0-1.696-.97.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 12 6.25" />
      <Path fill={color} fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </Svg>
  )
}
