import React, { useState } from 'react';
import { Modal, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabInset } from '@/constants/theme';

type ColorToken = {
  name: string;
  lightHex: string;
  darkHex: string;
  lightAlias: string;
  darkAlias: string;
  usage: string;
};

type ColorCategory = {
  title: string;
  description: string;
  tokens: ColorToken[];
};

function formatAlias(raw: string): string {
  return raw.replace(/^Colors\//, '');
}

const COLOR_DATA: ColorCategory[] = [
  {
    title: 'Text color',
    description:
      'Use text color variables to manage all text fill colors in your designs across light and dark modes.',
    tokens: [
      { name: 'text-primary', lightHex: '#101323', darkHex: '#F9F9FB', lightAlias: 'Colors/Gray (light mode)/900', darkAlias: 'Colors/Gray (dark mode)/50', usage: 'Primary text such as page headings.' },
      { name: 'text-primary_on-brand', lightHex: '#FFFFFF', darkHex: '#F9F9FB', lightAlias: 'Colors/Base/white', darkAlias: 'Colors/Gray (dark mode)/50', usage: 'Primary text on solid brand color backgrounds.' },
      { name: 'text-secondary', lightHex: '#363F72', darkHex: '#B9C0D4', lightAlias: 'Colors/Gray (light mode)/700', darkAlias: 'Colors/Gray (dark mode)/300', usage: 'Secondary text such as labels and section headings.' },
      { name: 'text-secondary_hover', lightHex: '#293056', darkHex: '#DCDFEA', lightAlias: 'Colors/Gray (light mode)/800', darkAlias: 'Colors/Gray (dark mode)/200', usage: 'Secondary text when in hover state.' },
      { name: 'text-secondary_on-brand', lightHex: '#B7CDFC', darkHex: '#B9C0D4', lightAlias: 'Colors/Brand/200', darkAlias: 'Colors/Gray (dark mode)/300', usage: 'Secondary text on solid brand backgrounds.' },
      { name: 'text-tertiary', lightHex: '#3E4784', darkHex: '#7D89B0', lightAlias: 'Colors/Gray (light mode)/600', darkAlias: 'Colors/Gray (dark mode)/400', usage: 'Tertiary text such as supporting and paragraph text.' },
      { name: 'text-tertiary_hover', lightHex: '#363F72', darkHex: '#B9C0D4', lightAlias: 'Colors/Gray (light mode)/700', darkAlias: 'Colors/Gray (dark mode)/300', usage: 'Tertiary text when in hover state.' },
      { name: 'text-tertiary_on-brand', lightHex: '#B7CDFC', darkHex: '#7D89B0', lightAlias: 'Colors/Brand/200', darkAlias: 'Colors/Gray (dark mode)/400', usage: 'Tertiary text on solid brand backgrounds.' },
      { name: 'text-quaternary', lightHex: '#4E5BA6', darkHex: '#7D89B0', lightAlias: 'Colors/Gray (light mode)/500', darkAlias: 'Colors/Gray (dark mode)/400', usage: 'Quaternary text for subtle and lower-contrast text.' },
      { name: 'text-quaternary_on-brand', lightHex: '#88AEFB', darkHex: '#7D89B0', lightAlias: 'Colors/Brand/300', darkAlias: 'Colors/Gray (dark mode)/400', usage: 'Quaternary text on solid brand backgrounds.' },
      { name: 'text-white', lightHex: '#FFFFFF', darkHex: '#101323', lightAlias: 'Colors/Base/white', darkAlias: 'Colors/Gray (light mode)/900', usage: 'White text on dark backgrounds.' },
      { name: 'text-white_subtle', lightHex: '#FFFFFF', darkHex: '#FFFFFF', lightAlias: 'Colors/Gray (dark mode alpha)/300', darkAlias: 'Colors/Gray (dark mode alpha)/300', usage: 'Subtle white text with reduced opacity.' },
      { name: 'text-disabled', lightHex: '#7D89B0', darkHex: '#5D6B98', lightAlias: 'Colors/Gray (dark mode)/400', darkAlias: 'Colors/Gray (dark mode)/500', usage: 'Text for disabled states.' },
      { name: 'text-placeholder', lightHex: '#7D89B0', darkHex: '#5D6B98', lightAlias: 'Colors/Gray (dark mode)/400', darkAlias: 'Colors/Gray (dark mode)/500', usage: 'Placeholder text in inputs.' },
      { name: 'text-placeholder_subtle', lightHex: '#7D89B0', darkHex: '#404968', lightAlias: 'Colors/Gray (dark mode)/400', darkAlias: 'Colors/Gray (dark mode)/700', usage: 'Subtle placeholder text.' },
      { name: 'text-brand-primary', lightHex: '#1A297D', darkHex: '#F9F9FB', lightAlias: 'Colors/Brand/900', darkAlias: 'Colors/Gray (dark mode)/50', usage: 'Brand primary text color.' },
      { name: 'text-brand-secondary', lightHex: '#1234D1', darkHex: '#B9C0D4', lightAlias: 'Colors/Brand/700', darkAlias: 'Colors/Gray (dark mode)/300', usage: 'Brand secondary text color.' },
      { name: 'text-brand-tertiary', lightHex: '#1A45E6', darkHex: '#7D89B0', lightAlias: 'Colors/Brand/600', darkAlias: 'Colors/Gray (dark mode)/400', usage: 'Brand tertiary text color.' },
      { name: 'text-brand-tertiary_alt', lightHex: '#1A45E6', darkHex: '#F9F9FB', lightAlias: 'Colors/Brand/600', darkAlias: 'Colors/Gray (dark mode)/50', usage: 'Alternate brand tertiary text.' },
      { name: 'text-error-primary', lightHex: '#D92D20', darkHex: '#F97066', lightAlias: 'Colors/Error/600', darkAlias: 'Colors/Error/400', usage: 'Error text for validation messages.' },
      { name: 'text-error-primary_hover', lightHex: '#B42318', darkHex: '#FDA29B', lightAlias: 'Colors/Error/700', darkAlias: 'Colors/Error/300', usage: 'Error text when in hover state.' },
      { name: 'text-warning-primary', lightHex: '#DC6803', darkHex: '#FDB022', lightAlias: 'Colors/Warning/600', darkAlias: 'Colors/Warning/400', usage: 'Warning text color.' },
      { name: 'text-success-primary', lightHex: '#079455', darkHex: '#47CD89', lightAlias: 'Colors/Success/600', darkAlias: 'Colors/Success/400', usage: 'Success text color.' },
    ],
  },
  {
    title: 'Border color',
    description:
      'Use border color variables to manage all stroke and border colors across light and dark modes.',
    tokens: [
      { name: 'border-primary', lightHex: '#B3B8DB', darkHex: '#404968', lightAlias: 'Colors/Gray (light mode)/300', darkAlias: 'Colors/Gray (dark mode)/700', usage: 'Primary border for inputs and cards.' },
      { name: 'border-secondary', lightHex: '#D5D9EB', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/200', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Secondary border for dividers and separators.' },
      { name: 'border-secondary_alt', lightHex: '#000000', darkHex: '#30374F', lightAlias: '', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Alternate secondary border.' },
      { name: 'border-tertiary', lightHex: '#EAECF5', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/100', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Tertiary border for very subtle dividers.' },
      { name: 'border-disabled', lightHex: '#B3B8DB', darkHex: '#404968', lightAlias: 'Colors/Gray (light mode)/300', darkAlias: 'Colors/Gray (dark mode)/700', usage: 'Border for disabled elements.' },
      { name: 'border-disabled_subtle', lightHex: '#D5D9EB', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/200', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Subtle border for disabled elements.' },
      { name: 'border-brand', lightHex: '#2F61F3', darkHex: '#6895F8', lightAlias: 'Colors/Brand/500', darkAlias: 'Colors/Brand/400', usage: 'Brand-colored border for focused inputs.' },
      { name: 'border-brand_alt', lightHex: '#1A45E6', darkHex: '#404968', lightAlias: 'Colors/Brand/600', darkAlias: 'Colors/Gray (dark mode)/700', usage: 'Alternate brand border.' },
      { name: 'border-error', lightHex: '#F04438', darkHex: '#F97066', lightAlias: 'Colors/Error/500', darkAlias: 'Colors/Error/400', usage: 'Error border for invalid inputs.' },
      { name: 'border-error_subtle', lightHex: '#FDA29B', darkHex: '#F04438', lightAlias: 'Colors/Error/300', darkAlias: 'Colors/Error/500', usage: 'Subtle error border.' },
    ],
  },
  {
    title: 'Foreground color',
    description:
      'Use foreground color variables for icons, indicators, and other non-text foreground elements.',
    tokens: [
      { name: 'fg-primary', lightHex: '#101323', darkHex: '#FFFFFF', lightAlias: 'Colors/Gray (light mode)/900', darkAlias: 'Colors/Base/white', usage: 'Primary foreground for icons and indicators.' },
      { name: 'fg-secondary', lightHex: '#363F72', darkHex: '#B9C0D4', lightAlias: 'Colors/Gray (light mode)/700', darkAlias: 'Colors/Gray (dark mode)/300', usage: 'Secondary foreground for less prominent icons.' },
      { name: 'fg-secondary_hover', lightHex: '#293056', darkHex: '#DCDFEA', lightAlias: 'Colors/Gray (light mode)/800', darkAlias: 'Colors/Gray (dark mode)/200', usage: 'Secondary foreground hover state.' },
      { name: 'fg-tertiary', lightHex: '#3E4784', darkHex: '#7D89B0', lightAlias: 'Colors/Gray (light mode)/600', darkAlias: 'Colors/Gray (dark mode)/400', usage: 'Tertiary foreground for decorative elements.' },
      { name: 'fg-tertiary_hover', lightHex: '#363F72', darkHex: '#B9C0D4', lightAlias: 'Colors/Gray (light mode)/700', darkAlias: 'Colors/Gray (dark mode)/300', usage: 'Tertiary foreground hover state.' },
      { name: 'fg-quaternary', lightHex: '#717BBC', darkHex: '#4A5578', lightAlias: 'Colors/Gray (light mode)/400', darkAlias: 'Colors/Gray (dark mode)/600', usage: 'Quaternary foreground for the most subtle elements.' },
      { name: 'fg-quaternary_hover', lightHex: '#4E5BA6', darkHex: '#5D6B98', lightAlias: 'Colors/Gray (light mode)/500', darkAlias: 'Colors/Gray (dark mode)/500', usage: 'Quaternary foreground hover state.' },
      { name: 'fg-white', lightHex: '#FFFFFF', darkHex: '#FFFFFF', lightAlias: 'Colors/Base/white', darkAlias: 'Colors/Base/white', usage: 'White foreground on dark or brand backgrounds.' },
      { name: 'fg-disabled', lightHex: '#717BBC', darkHex: '#5D6B98', lightAlias: 'Colors/Gray (light mode)/400', darkAlias: 'Colors/Gray (dark mode)/500', usage: 'Foreground for disabled states.' },
      { name: 'fg-disabled_subtle', lightHex: '#B3B8DB', darkHex: '#4A5578', lightAlias: 'Colors/Gray (light mode)/300', darkAlias: 'Colors/Gray (dark mode)/600', usage: 'Subtle foreground for disabled states.' },
      { name: 'fg-brand-primary', lightHex: '#1A45E6', darkHex: '#2F61F3', lightAlias: 'Colors/Brand/600', darkAlias: 'Colors/Brand/500', usage: 'Primary brand foreground.' },
      { name: 'fg-brand-secondary', lightHex: '#2F61F3', darkHex: '#6895F8', lightAlias: 'Colors/Brand/500', darkAlias: 'Colors/Brand/400', usage: 'Secondary brand foreground.' },
      { name: 'fg-brand-secondary_subtle', lightHex: '#6895F8', darkHex: '#88AEFB', lightAlias: 'Colors/Brand/400', darkAlias: 'Colors/Brand/300', usage: 'Subtle secondary brand foreground.' },
      { name: 'fg-error-primary', lightHex: '#D92D20', darkHex: '#F04438', lightAlias: 'Colors/Error/600', darkAlias: 'Colors/Error/500', usage: 'Error foreground.' },
      { name: 'fg-error-secondary', lightHex: '#F04438', darkHex: '#F97066', lightAlias: 'Colors/Error/500', darkAlias: 'Colors/Error/400', usage: 'Secondary error foreground.' },
      { name: 'fg-warning-primary', lightHex: '#DC6803', darkHex: '#F79009', lightAlias: 'Colors/Warning/600', darkAlias: 'Colors/Warning/500', usage: 'Warning foreground.' },
      { name: 'fg-warning-secondary', lightHex: '#F79009', darkHex: '#FDB022', lightAlias: 'Colors/Warning/500', darkAlias: 'Colors/Warning/400', usage: 'Secondary warning foreground.' },
      { name: 'fg-success-primary', lightHex: '#079455', darkHex: '#17B26A', lightAlias: 'Colors/Success/600', darkAlias: 'Colors/Success/500', usage: 'Success foreground.' },
      { name: 'fg-success-secondary', lightHex: '#17B26A', darkHex: '#47CD89', lightAlias: 'Colors/Success/500', darkAlias: 'Colors/Success/400', usage: 'Secondary success foreground.' },
    ],
  },
  {
    title: 'Background color',
    description:
      'Use background color variables to manage all background fills across light and dark modes.',
    tokens: [
      { name: 'bg-primary', lightHex: '#FFFFFF', darkHex: '#0E101B', lightAlias: 'Colors/Base/white', darkAlias: 'Colors/Gray (dark mode)/950', usage: 'Primary background for pages and cards.' },
      { name: 'bg-primary_alt', lightHex: '#FFFFFF', darkHex: '', lightAlias: 'Colors/Base/white', darkAlias: '', usage: 'Alternate primary background.' },
      { name: 'bg-primary_hover', lightHex: '#F8F9FC', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/50', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Primary background hover state.' },
      { name: 'bg-primary-solid', lightHex: '#293056', darkHex: '#FFFFFF', lightAlias: 'Colors/Gray (light mode)/800', darkAlias: 'Colors/Gray (dark mode alpha)/25', usage: 'Solid primary background for strong emphasis.' },
      { name: 'bg-secondary', lightHex: '#F8F9FC', darkHex: '#111322', lightAlias: 'Colors/Gray (light mode)/50', darkAlias: 'Colors/Gray (dark mode)/900', usage: 'Secondary background for sections and panels.' },
      { name: 'bg-secondary_alt', lightHex: '#F8F9FC', darkHex: '', lightAlias: 'Colors/Gray (light mode)/50', darkAlias: '', usage: 'Alternate secondary background.' },
      { name: 'bg-secondary_hover', lightHex: '#EAECF5', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/100', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Secondary background hover state.' },
      { name: 'bg-secondary_subtle', lightHex: '#FCFCFD', darkHex: '#111322', lightAlias: 'Colors/Gray (light mode)/25', darkAlias: 'Colors/Gray (dark mode)/900', usage: 'Subtle secondary background.' },
      { name: 'bg-secondary-solid', lightHex: '#2F61F3', darkHex: '#2F61F3', lightAlias: 'Colors/Brand/500', darkAlias: 'Colors/Brand/500', usage: 'Secondary solid background.' },
      { name: 'bg-tertiary', lightHex: '#EAECF5', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/100', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Tertiary background.' },
      { name: 'bg-quaternary', lightHex: '#D5D9EB', darkHex: '#404968', lightAlias: 'Colors/Gray (light mode)/200', darkAlias: 'Colors/Gray (dark mode)/700', usage: 'Quaternary background.' },
      { name: 'bg-active', lightHex: '#F8F9FC', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/50', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Background for active/selected items.' },
      { name: 'bg-disabled', lightHex: '#EAECF5', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/100', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Background for disabled elements.' },
      { name: 'bg-disabled_subtle', lightHex: '#F8F9FC', darkHex: '#111322', lightAlias: 'Colors/Gray (light mode)/50', darkAlias: 'Colors/Gray (dark mode)/900', usage: 'Subtle disabled background.' },
      { name: 'bg-overlay', lightHex: '#0D0F1C', darkHex: '#30374F', lightAlias: 'Colors/Gray (light mode)/950', darkAlias: 'Colors/Gray (dark mode)/800', usage: 'Semi-transparent overlay background.' },
      { name: 'bg-brand-primary', lightHex: '#EDF2FF', darkHex: '#2F61F3', lightAlias: 'Colors/Brand/50', darkAlias: 'Colors/Brand/500', usage: 'Light brand background.' },
      { name: 'bg-brand-primary_alt', lightHex: '#EDF2FF', darkHex: '', lightAlias: 'Colors/Brand/50', darkAlias: '', usage: 'Alternate brand primary background.' },
      { name: 'bg-brand-secondary', lightHex: '#6895F8', darkHex: '#88AEFB', lightAlias: 'Colors/Brand/400', darkAlias: 'Colors/Brand/300', usage: 'Secondary brand background.' },
      { name: 'bg-brand-solid', lightHex: '#1A45E6', darkHex: '#1A45E6', lightAlias: 'Colors/Brand/600', darkAlias: 'Colors/Brand/600', usage: 'Solid brand background for buttons and CTAs.' },
      { name: 'bg-brand-solid_hover', lightHex: '#1234D1', darkHex: '#2F61F3', lightAlias: 'Colors/Brand/700', darkAlias: 'Colors/Brand/500', usage: 'Brand solid background hover state.' },
      { name: 'bg-brand-section', lightHex: '#182CA3', darkHex: '#182CA3', lightAlias: 'Colors/Brand/800', darkAlias: 'Colors/Brand/800', usage: 'Brand section background.' },
      { name: 'bg-brand-section_subtle', lightHex: '#1234D1', darkHex: '#1234D1', lightAlias: 'Colors/Brand/700', darkAlias: 'Colors/Brand/700', usage: 'Subtle brand section background.' },
      { name: 'bg-error-primary', lightHex: '#FEF3F2', darkHex: '#55160C', lightAlias: 'Colors/Error/50', darkAlias: 'Colors/Error/950', usage: 'Light error background for alerts.' },
      { name: 'bg-error-secondary', lightHex: '#FEE4E2', darkHex: '#D92D20', lightAlias: 'Colors/Error/100', darkAlias: 'Colors/Error/600', usage: 'Secondary error background.' },
      { name: 'bg-error-solid', lightHex: '#D92D20', darkHex: '#D92D20', lightAlias: 'Colors/Error/600', darkAlias: 'Colors/Error/600', usage: 'Solid error background.' },
      { name: 'bg-error-solid_hover', lightHex: '#B42318', darkHex: '#F04438', lightAlias: 'Colors/Error/700', darkAlias: 'Colors/Error/500', usage: 'Error solid background hover state.' },
      { name: 'bg-warning-primary', lightHex: '#FFFAEB', darkHex: '#4E1D09', lightAlias: 'Colors/Warning/50', darkAlias: 'Colors/Warning/950', usage: 'Light warning background.' },
      { name: 'bg-warning-secondary', lightHex: '#FEF0C7', darkHex: '#DC6803', lightAlias: 'Colors/Warning/100', darkAlias: 'Colors/Warning/600', usage: 'Secondary warning background.' },
      { name: 'bg-warning-solid', lightHex: '#DC6803', darkHex: '#DC6803', lightAlias: 'Colors/Warning/600', darkAlias: 'Colors/Warning/600', usage: 'Solid warning background.' },
      { name: 'bg-success-primary', lightHex: '#ECFDF3', darkHex: '#053321', lightAlias: 'Colors/Success/50', darkAlias: 'Colors/Success/950', usage: 'Light success background.' },
      { name: 'bg-success-secondary', lightHex: '#DCFAE6', darkHex: '#079455', lightAlias: 'Colors/Success/100', darkAlias: 'Colors/Success/600', usage: 'Secondary success background.' },
      { name: 'bg-success-solid', lightHex: '#079455', darkHex: '#079455', lightAlias: 'Colors/Success/600', darkAlias: 'Colors/Success/600', usage: 'Solid success background.' },
    ],
  },
];

function ColorPill({ hex, label, onPress }: { hex: string; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} className="active:opacity-70">
      <View className="flex-row items-center gap-1.5 rounded-lg border border-border-tertiary bg-bg-primary px-2 py-1.5">
        <View
          className="h-5 w-5 rounded border border-border-tertiary flex items-center justify-center"
          
        >
          <View className="h-4 w-4 rounded border border-border-tertiary"
          style={{ backgroundColor: hex }}
           />
        </View>


        <Text className="text-xs text-text-secondary" numberOfLines={1}>{label}</Text>
      </View>
    </Pressable>
  );
}

function HexTooltip({ visible, hex, onClose }: { visible: boolean; hex: string; onClose: () => void }) {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <Pressable onPress={onClose} className="flex-1 items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <View className="flex-row items-center gap-3 rounded-2xl bg-bg-primary px-5 py-4 border border-border-secondary">
          <View className="h-10 w-10 rounded-lg" style={{ backgroundColor: hex }} />
          <View>
            <Text className="text-xs text-text-tertiary mb-0.5">Hex value</Text>
            <Text className="font-mono text-lg font-semibold text-text-primary">{hex}</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

function TokenCard({ token }: { token: ColorToken }) {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const lightLabel = token.lightAlias ? formatAlias(token.lightAlias) : token.lightHex;
  const darkLabel = token.darkAlias ? formatAlias(token.darkAlias) : (token.darkHex || '—');

  return (
    <View className="border-b border-border-tertiary py-4 px-3">
      <HexTooltip visible={!!tooltip} hex={tooltip ?? ''} onClose={() => setTooltip(null)} />

      <View className="mb-2">
        <Text className="text-sm font-semibold text-text-primary">{token.name}</Text>
      </View>

      <View className="flex-row flex-wrap gap-2 mb-2">
        <View className="gap-1">
          <Text className="text-[10px] font-medium text-text-quaternary uppercase tracking-wider">
            Light
          </Text>
          <ColorPill hex={token.lightHex} label={lightLabel} onPress={() => setTooltip(token.lightHex)} />
        </View>
        {token.darkHex ? (
          <View className="gap-1">
            <Text className="text-[10px] font-medium text-text-quaternary uppercase tracking-wider">
              Dark
            </Text>
            <ColorPill hex={token.darkHex} label={darkLabel} onPress={() => setTooltip(token.darkHex)} />
          </View>
        ) : null}
      </View>

      <Text className="text-xs leading-4 text-text-tertiary">{token.usage}</Text>
    </View>
  );
}

function CategorySection({ category }: { category: ColorCategory }) {
  return (
    <View className="mb-8">
      <View className="flex-row items-center gap-2 mb-1.5">
        <Text className="text-lg font-semibold text-text-primary">{category.title}</Text>
        <View className="rounded-full bg-bg-brand-primary px-2 py-0.5">
          <Text className="text-[10px] font-medium text-fg-brand-primary">Variables</Text>
        </View>
      </View>
      <Text className="text-sm text-text-tertiary mb-3 leading-5">{category.description}</Text>

      <View className="rounded-xl border border-border-tertiary overflow-hidden bg-bg-primary">
        {category.tokens.map((token) => (
          <TokenCard key={token.name} token={token} />
        ))}
      </View>
    </View>
  );
}

function LiveSwatch({ cssVar, name }: { cssVar: string; name: string }) {
  return (
    <View className="items-center gap-1">
      <View
        className="h-10 w-10 rounded-lg border border-border-secondary"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <Text className="text-[10px] text-text-tertiary text-center" numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
}

function LivePreviewGrid() {
  const groups = [
    {
      label: 'Text',
      items: [
        { var: '--color-text-primary', name: 'primary' },
        { var: '--color-text-secondary', name: 'secondary' },
        { var: '--color-text-tertiary', name: 'tertiary' },
        { var: '--color-text-quaternary', name: 'quaternary' },
        { var: '--color-text-disabled', name: 'disabled' },
        { var: '--color-text-brand-primary', name: 'brand' },
        { var: '--color-text-error-primary', name: 'error' },
        { var: '--color-text-warning-primary', name: 'warning' },
        { var: '--color-text-success-primary', name: 'success' },
      ],
    },
    {
      label: 'Background',
      items: [
        { var: '--color-bg-primary', name: 'primary' },
        { var: '--color-bg-secondary', name: 'secondary' },
        { var: '--color-bg-tertiary', name: 'tertiary' },
        { var: '--color-bg-quaternary', name: 'quaternary' },
        { var: '--color-bg-brand-primary', name: 'brand' },
        { var: '--color-bg-brand-solid', name: 'brand-solid' },
        { var: '--color-bg-error-primary', name: 'error' },
        { var: '--color-bg-warning-primary', name: 'warning' },
        { var: '--color-bg-success-primary', name: 'success' },
      ],
    },
    {
      label: 'Border',
      items: [
        { var: '--color-border-primary', name: 'primary' },
        { var: '--color-border-secondary', name: 'secondary' },
        { var: '--color-border-tertiary', name: 'tertiary' },
        { var: '--color-border-brand', name: 'brand' },
        { var: '--color-border-error', name: 'error' },
      ],
    },
    {
      label: 'Foreground',
      items: [
        { var: '--color-fg-primary', name: 'primary' },
        { var: '--color-fg-secondary', name: 'secondary' },
        { var: '--color-fg-tertiary', name: 'tertiary' },
        { var: '--color-fg-brand-primary', name: 'brand' },
        { var: '--color-fg-error-primary', name: 'error' },
        { var: '--color-fg-warning-primary', name: 'warning' },
        { var: '--color-fg-success-primary', name: 'success' },
      ],
    },
  ];

  return (
    <View className="mb-8">
      <Text className="text-lg font-semibold text-text-primary mb-1">Live preview</Text>
      <Text className="text-sm text-text-tertiary mb-3">
        Swatches respond to your current color mode.
      </Text>
      {groups.map((group) => (
        <View key={group.label} className="mb-3">
          <Text className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
            {group.label}
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {group.items.map((item) => (
              <LiveSwatch key={item.var} cssVar={item.var} name={item.name} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

export default function ColorsScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + 16,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: 64,
      paddingBottom: 24,
    },
  });

  return (
    <ScrollView
      className="flex-1 bg-bg-primary"
      contentInset={insets}
      contentContainerStyle={[
        { alignItems: 'center' },
        contentPlatformStyle,
      ]}>
      <View style={{ maxWidth: 800, width: '100%' }} className="px-4">
        <View className="py-8">
          <Text className="text-3xl font-bold text-text-primary mb-2">Color variables</Text>
          <Text className="text-sm text-text-tertiary leading-5">
            Color variables (Figma's version of design tokens) store reusable values that can be
            applied to all kinds of design properties including fill and stroke colors. They act as a
            "single source of truth" while allowing designers to create multiple color modes.
          </Text>
        </View>

        <LivePreviewGrid />

        {COLOR_DATA.map((category) => (
          <CategorySection key={category.title} category={category} />
        ))}
      </View>
    </ScrollView>
  );
}
