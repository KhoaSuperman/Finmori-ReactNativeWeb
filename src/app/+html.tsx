import { ScrollViewStyleReset } from "expo-router/html"
import { type PropsWithChildren } from "react"

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Finmori — Smart Budget & Expense Tracker UI Kit</title>
        <meta
          name="description"
          content="A premium mobile-first fintech design system built with React Native Web, NativeWind, and Expo. 10+ screens, 50+ icons, 50+ UI components. MIT Licensed."
        />
        <meta
          name="keywords"
          content="finmori, react native, react native web, expo, design system, ui kit, nativewind, tailwindcss, fintech, budget tracker, expense tracker, mobile app"
        />
        <meta name="author" content="Khoa Do (Zoey DO)" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0e101b" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-icon-precomposed.png" />

        {/* Web App Manifest & MS Tiles */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0e101b" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Finmori — Smart Budget & Expense Tracker UI Kit" />
        <meta
          property="og:description"
          content="A premium mobile-first fintech design system built with React Native Web, NativeWind, and Expo. 10+ screens, 50+ icons, 50+ UI components."
        />
        <meta property="og:image" content="https://finmori-uikits.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:site_name" content="Finmori" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finmori — Smart Budget & Expense Tracker UI Kit" />
        <meta
          name="twitter:description"
          content="A premium mobile-first fintech design system built with React Native Web, NativeWind, and Expo. 10+ screens, 50+ icons, 50+ UI components."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  )
}
