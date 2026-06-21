export interface NavItem {
  label: string
  href: '#services' | '#about' | '#contact'
}

export interface ServiceItem {
  title: string
  description: string
}

export interface EngagementOption {
  title: string
  summary: string
  startingAt?: string
}

export const companyName = 'SLIMZZ Enterprise Solutions'

export const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  headline:
    'Microsoft 365 consulting for teams that need cleaner systems, better automation, and practical execution.',
  supportingText:
    'We help organizations stabilize SharePoint, modernize workflows, and build reliable Power Platform solutions with clear ownership and sustainable handoff.',
}

export const services: ServiceItem[] = [
  {
    title: 'SharePoint Cleanup & Governance',
    description:
      'Untangle site architecture, tighten permissions, and establish governance standards that teams can actually maintain.',
  },
  {
    title: 'Power Automate Repair & Automation',
    description:
      'Audit fragile flows, remove failure points, and rebuild critical automations so your process stays dependable over time.',
  },
  {
    title: 'Power Apps & Business Process Solutions',
    description:
      'Design practical apps and process layers that replace spreadsheet-driven operations with cleaner execution.',
  },
]

export const problemPoints: string[] = [
  'Unclear permissions and inconsistent access control',
  'Fragile flows that break whenever ownership changes',
  'Manual work buried in spreadsheets and disconnected steps',
  'No governance model for long-term reliability',
]

export const aboutContent = {
  consultant: 'Anthony Drake',
  summary:
    'Veteran Microsoft 365, SharePoint, and Power Platform consultant with 15+ years of delivery experience across government, healthcare, military, and enterprise environments.',
  highlights: ['15+ years experience', 'Enterprise-grade cleanup', 'Sustainable handoff focus'],
}

export const engagementOptions: EngagementOption[] = [
  {
    title: 'M365 Systems Review',
    summary: 'Focused assessment of SharePoint structure, permissions, and workflow risk.',
    startingAt: 'Starting at $1,500',
  },
  {
    title: 'SharePoint / Flow Cleanup',
    summary: 'Repair unstable architecture and automation so teams can run with confidence.',
    startingAt: 'Starting at $3,500',
  },
  {
    title: 'Business Process Buildout',
    summary:
      'Build practical Power Apps and Power Automate solutions around your operational reality.',
    startingAt: 'Starting at $6,000',
  },
]

export const contactContent = {
  heading: 'Ready to clean up your Microsoft 365 environment?',
  text: 'Book a systems review and get a clear, practical execution plan.',
  email: 'hello@slimzzesolutions.com',
}

export const footerKeywords = [
  'Microsoft 365',
  'SharePoint Online',
  'Power Platform',
  'Power Apps',
  'Power Automate',
  'Power BI',
  'Governance',
  'Workflow Automation',
]
