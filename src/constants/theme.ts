import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#101323',
    textSecondary: '#363F72',
    textTertiary: '#3E4784',
    textDisabled: '#7D89B0',
    textBrandPrimary: '#1A45E6',

    background: '#FFFFFF',
    backgroundElement: '#F8F9FC',
    backgroundSelected: '#EAECF5',
    backgroundTertiary: '#EAECF5',

    foreground: '#101323',
    foregroundSecondary: '#363F72',

    border: '#B3B8DB',
    borderSecondary: '#D5D9EB',

    brandSolid: '#1A45E6',
    brandPrimary: '#EDF2FF',

    errorPrimary: '#D92D20',
    warningPrimary: '#DC6803',
    successPrimary: '#079455',
  },
  dark: {
    text: '#F9F9FB',
    textSecondary: '#B9C0D4',
    textTertiary: '#7D89B0',
    textDisabled: '#5D6B98',
    textBrandPrimary: '#2F61F3',

    background: '#0E101B',
    backgroundElement: '#111322',
    backgroundSelected: '#30374F',
    backgroundTertiary: '#30374F',

    foreground: '#FFFFFF',
    foregroundSecondary: '#B9C0D4',

    border: '#404968',
    borderSecondary: '#30374F',

    brandSolid: '#1A45E6',
    brandPrimary: '#2F61F3',

    errorPrimary: '#F97066',
    warningPrimary: '#FDB022',
    successPrimary: '#47CD89',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
