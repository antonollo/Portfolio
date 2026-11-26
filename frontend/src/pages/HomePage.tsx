import { AboutSection } from '../components/common/AboutSection'
import { CaseStudiesSection } from '../components/common/CaseStudiesSection'
import { HeroSection } from '../components/common/HeroSection'
import { SectionDivider } from '../components/common/SectionDivider'
import { ToolsSection } from '../components/common/ToolsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="surface-to-brand" />
      <CaseStudiesSection />
      <SectionDivider variant="brand-to-surface" />
      <AboutSection />
      <ToolsSection />
      <SectionDivider variant="surface-to-brand" />
    </>
  )
}
