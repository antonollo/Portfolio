export type SectionAnchor =
  | '#intro'
  | '#case-studies'
  | '#sobre-mim'
  | '#ferramentas'
  | '#contatos'

export type NavbarAnchor =
  | '#intro'
  | '#case-studies'
  | '#ferramentas'
  | '#contatos'

export type TechKey =
  | 'python'
  | 'ollama'
  | 'scikit-learn'
  | 'react'
  | 'typescript'
  | 'tailwindcss'
  | 'tensorflow'
  | 'pandas'
  | 'pytorch'
  | 'docker'
  | 'git'
  | 'nodejs'
  | 'postgresql'
  | 'github'
  | 'linkedin'

export interface NavItem {
  label: string
  href: NavbarAnchor
}

export interface ProfileLinks {
  brand: string
  githubUrl: string
  githubLabel: string
  linkedinUrl: string
  linkedinLabel: string
  cvUrl: string
  cvLabel: string
}

export interface TextSegment {
  text: string
  bold?: boolean
}

export interface HeroContent {
  badge: string
  titleLead: string
  titleAccent: string
  description: TextSegment[]
  primaryCta: {
    label: string
    href: '#case-studies'
  }
  secondaryCta: {
    label: string
    href: '#sobre-mim'
  }
  stackIcons: {
    key: TechKey
    label: string
  }[]
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  logoSrc?: string
  logoAlt: string
  fallbackBadge?: string
  fallbackHeadline?: string
  fallbackSubline?: string
  tags: string[]
  stackIcons: {
    key: TechKey
    label: string
  }[]
  ctaLabel: string
  href: string
}

export interface AboutParagraph {
  id: string
  variant: 'body' | 'callout' | 'placeholder'
  segments: TextSegment[]
}

export interface AboutContent {
  title: string
  paragraphs: AboutParagraph[]
  portraitAlt: string
}

export interface ToolItem {
  id: string
  name: string
  icon: TechKey
  category: string
}

export interface FooterContent {
  heading: string
  copyrightLeft: string
  copyrightRight: string
}
