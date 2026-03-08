import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg"

import type { IconProps } from "./types"

export function AddCircleBoldIcon({ size = 48, color, ...props }: IconProps) {
  const useGradient = !color
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM25.5 18C25.5 17.1716 24.8284 16.5 24 16.5C23.1716 16.5 22.5 17.1716 22.5 18L22.5 22.5H18C17.1716 22.5 16.5 23.1716 16.5 24C16.5 24.8285 17.1716 25.5 18 25.5H22.5V30C22.5 30.8284 23.1716 31.5 24 31.5C24.8284 31.5 25.5 30.8284 25.5 30L25.5 25.5H30C30.8284 25.5 31.5 24.8285 31.5 24C31.5 23.1716 30.8284 22.5 30 22.5H25.5V18Z"
        fill={useGradient ? "url(#add_circle_grad)" : color}
      />
      {useGradient && (
        <Defs>
          <LinearGradient id="add_circle_grad" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#A6C0FE" />
            <Stop offset="1" stopColor="#FFEAF6" />
          </LinearGradient>
        </Defs>
      )}
    </Svg>
  )
}
