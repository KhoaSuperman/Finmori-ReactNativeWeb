import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Button } from "@/components/ui-kit/Button"
import { Typography } from "@/components/ui-kit/Typography"

function SectionTitle({ children }: { children: string }) {
  return (
    <Typography size="h3" weight="bold" className="px-1 text-primary">
      {children}
    </Typography>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-3">
      <Typography size="body-small" weight="semibold" className="px-1 text-tertiary">
        {title}
      </Typography>
      {children}
    </View>
  )
}

const PlaceholderIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 1.5,
      borderColor: color,
    }}
  />
)

export default function ButtonsShowcase() {
  return (
    <ShowcasePage
      title="Buttons"
      description="Interactive controls for triggering actions. Supports multiple variants, states, and icon configurations."
    >
      {/* ── Variants ── */}
      <View className="gap-4">
        <SectionTitle>Variants</SectionTitle>

        <SubSection title="Default State">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <Button variant="tertiary" label="Tertiary" />
          </View>
          <View className="flex-row flex-wrap items-center gap-3 pt-1">
            <Button variant="link-color" label="Link Color" />
            <Button variant="link-gray" label="Link Gray" />
          </View>
        </SubSection>
      </View>

      {/* ── States ── */}
      <View className="gap-4">
        <SectionTitle>States</SectionTitle>

        <SubSection title="Disabled">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="primary" label="Primary" disabled />
            <Button variant="secondary" label="Secondary" disabled />
            <Button variant="tertiary" label="Tertiary" disabled />
          </View>
          <View className="flex-row flex-wrap items-center gap-3 pt-1">
            <Button variant="link-color" label="Link Color" disabled />
            <Button variant="link-gray" label="Link Gray" disabled />
          </View>
        </SubSection>

        <SubSection title="Loading">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="primary" label="Action" loading />
            <Button variant="secondary" label="Action" loading />
            <Button variant="tertiary" label="Action" loading />
          </View>
          <View className="flex-row flex-wrap items-center gap-3 pt-1">
            <Button variant="link-color" label="Action" loading />
            <Button variant="link-gray" label="Action" loading />
          </View>
        </SubSection>
      </View>

      {/* ── Destructive ── */}
      <View className="gap-4">
        <SectionTitle>Destructive</SectionTitle>

        <SubSection title="All Variants">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="primary" label="Action" destructive />
            <Button variant="secondary" label="Button CTA" destructive />
            <Button variant="tertiary" label="Action" destructive />
          </View>
          <View className="flex-row flex-wrap items-center gap-3 pt-1">
            <Button variant="link-color" label="Action" destructive />
            <Button variant="link-gray" label="Action" destructive />
          </View>
        </SubSection>
      </View>

      {/* ── Icon Only ── */}
      <View className="gap-4">
        <SectionTitle>Icon Only</SectionTitle>

        <SubSection title="Default">
          <View className="flex-row flex-wrap gap-3">
            <Button
              variant="primary"
              size="iconOnly"
              icon={<PlaceholderIcon size={24} color="#f8faff" />}
            />
            <Button
              variant="secondary"
              size="iconOnly"
              icon={<PlaceholderIcon size={24} color="#ffffff" />}
            />
            <Button
              variant="tertiary"
              size="iconOnly"
              icon={<PlaceholderIcon size={24} color="#717bbc" />}
            />
          </View>
        </SubSection>

        <SubSection title="Disabled">
          <View className="flex-row flex-wrap gap-3">
            <Button
              variant="primary"
              size="iconOnly"
              disabled
              icon={<PlaceholderIcon size={24} color="#b3b8db" />}
            />
            <Button
              variant="secondary"
              size="iconOnly"
              disabled
              icon={<PlaceholderIcon size={24} color="#b3b8db" />}
            />
            <Button
              variant="tertiary"
              size="iconOnly"
              disabled
              icon={<PlaceholderIcon size={24} color="#b3b8db" />}
            />
          </View>
        </SubSection>

        <SubSection title="Loading">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="primary" size="iconOnly" loading />
            <Button variant="secondary" size="iconOnly" loading />
            <Button variant="tertiary" size="iconOnly" loading />
          </View>
        </SubSection>

        <SubSection title="Destructive">
          <View className="flex-row flex-wrap gap-3">
            <Button
              variant="primary"
              size="iconOnly"
              destructive
              icon={<PlaceholderIcon size={24} color="#ffffff" />}
            />
            <Button
              variant="secondary"
              size="iconOnly"
              destructive
              icon={<PlaceholderIcon size={24} color="#f04438" />}
            />
            <Button
              variant="tertiary"
              size="iconOnly"
              destructive
              icon={<PlaceholderIcon size={24} color="#f04438" />}
            />
          </View>
        </SubSection>
      </View>

      {/* ── With Icons ── */}
      <View className="gap-4">
        <SectionTitle>With Icons</SectionTitle>

        <SubSection title="Left & Right Icons">
          <View className="flex-row flex-wrap gap-3">
            <Button
              variant="primary"
              label="Action"
              iconLeft={<PlaceholderIcon size={20} color="#f8faff" />}
              iconRight={<PlaceholderIcon size={20} color="#f8faff" />}
            />
          </View>
          <View className="flex-row flex-wrap gap-3">
            <Button
              variant="secondary"
              label="Action"
              iconLeft={<PlaceholderIcon size={20} color="#ffffff" />}
              iconRight={<PlaceholderIcon size={20} color="#ffffff" />}
            />
          </View>
          <View className="flex-row flex-wrap gap-3">
            <Button
              variant="tertiary"
              label="Action"
              iconLeft={<PlaceholderIcon size={20} color="#717bbc" />}
              iconRight={<PlaceholderIcon size={20} color="#717bbc" />}
            />
          </View>
        </SubSection>

        <SubSection title="Link Variants with Icons">
          <View className="flex-row flex-wrap items-center gap-4">
            <Button
              variant="link-color"
              label="Action"
              iconLeft={<PlaceholderIcon size={16} color="#1a45e6" />}
              iconRight={<PlaceholderIcon size={16} color="#1a45e6" />}
            />
            <Button
              variant="link-gray"
              label="Action"
              iconLeft={<PlaceholderIcon size={16} color="#717bbc" />}
              iconRight={<PlaceholderIcon size={16} color="#717bbc" />}
            />
          </View>
        </SubSection>
      </View>

      {/* ── Full Width ── */}
      <View className="gap-4">
        <SectionTitle>Full Width</SectionTitle>
        <View className="gap-3">
          <Button variant="primary" label="Continue" className="w-full" />
          <Button variant="secondary" label="Get Started" className="w-full" />
          <Button variant="tertiary" label="Cancel" className="w-full" />
        </View>
      </View>
    </ShowcasePage>
  )
}
