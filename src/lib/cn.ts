import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-tiny",
        "text-caption",
        "text-body-small",
        "text-body",
        "text-h3",
        "text-h2",
        "text-h1",
        "text-display",
        "text-display-xl",
      ],
      "font-family": [
        "font-display",
        "font-body",
        "font-number",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
