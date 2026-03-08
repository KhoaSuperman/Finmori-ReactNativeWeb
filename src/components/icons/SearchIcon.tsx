import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

import type { IconProps } from "./types"

export function SearchIcon({ size = 16, color = "currentColor", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <G clipPath="url(#search_clip)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.66658 1.8335C4.44492 1.8335 1.83325 4.44517 1.83325 7.66683C1.83325 10.8885 4.44492 13.5002 7.66658 13.5002C10.8882 13.5002 13.4999 10.8885 13.4999 7.66683C13.4999 4.44517 10.8882 1.8335 7.66658 1.8335ZM0.833252 7.66683C0.833252 3.89288 3.89264 0.833496 7.66658 0.833496C11.4405 0.833496 14.4999 3.89288 14.4999 7.66683C14.4999 11.4408 11.4405 14.5002 7.66658 14.5002C3.89264 14.5002 0.833252 11.4408 0.833252 7.66683ZM12.9797 12.9799C13.175 12.7847 13.4915 12.7847 13.6868 12.9799L15.0201 14.3133C15.2154 14.5085 15.2154 14.8251 15.0201 15.0204C14.8249 15.2156 14.5083 15.2156 14.313 15.0204L12.9797 13.687C12.7844 13.4918 12.7844 13.1752 12.9797 12.9799Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="search_clip">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
