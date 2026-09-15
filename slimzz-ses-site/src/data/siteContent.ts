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
    'Microsoft 365 solutions that remove manual work and make your business easier to run.',
  supportingText:
    'Slimzz Enterprise Solutions helps organizations fix broken workflows, clean up SharePoint, and build practical Power Apps and Power Automate solutions without unnecessary complexity.',
}

export const services: ServiceItem[] = [
  {
    title: 'Power Automate Rescue & Workflow Automation',
    description:
      'Fix failing flows, rebuild unreliable approvals, and automate repetitive business processes that are wasting your team\u2019s time.',
  },
  {
    title: 'SharePoint Cleanup & Governance',
    description:
      'Clean up confusing SharePoint environments, permissions, site structure, and document processes so your team can actually use Microsoft 365 effectively.',
  },
  {
    title: 'Power Apps & Business Process Solutions',
    description:
      'Replace spreadsheets, email chains, and manual processes with practical Power Apps and Microsoft 365 solutions built around how your business actually operates.',
  },
]

export const problemPoints: string[] = [
  'Power Automate flows that fail without warning or were built by someone no longer with the organization',
  'Approvals and repetitive tasks still running through email, chat, or manual follow-up',
  'SharePoint permissions and site structure that have become difficult to manage or explain',
  'Business processes held together by spreadsheets, disconnected tools, and tribal knowledge',
  'A Microsoft 365 environment that grew organically without governance or clear ownership',
]

export interface ProjectExample {
  title: string
  situation: string
  work: string
  outcome: string
}

export const projectExamples: ProjectExample[] = [
  {
    title: 'Workflow Reliability',
    situation:
      'A business-critical approval workflow had become difficult to troubleshoot and maintain. Failures were hard to trace, and no one on the team felt confident making changes.',
    work:
      'Analyzed the Power Automate logic end-to-end \u2014 approval routing, loops, conditions, ownership, and failure points \u2014 then restructured the flow for clarity and resilience.',
    outcome:
      'Simplified the process, improved reliability, and made the workflow easier for the organization to support without outside help.',
  },
  {
    title: 'Business Process Modernization',
    situation:
      'An operational process depended on a mix of SharePoint lists, email threads, spreadsheets, and manual handoffs. There was no single source of truth and no clear ownership.',
    work:
      'Evaluated the full process and designed a cleaner Microsoft 365 architecture using the appropriate combination of SharePoint, Power Apps, Power Automate, Dataverse, and reporting.',
    outcome:
      'Created a more structured, maintainable process with clearer ownership, better visibility, and far less manual coordination.',
  },
  {
    title: 'Access & Permissions Automation',
    situation:
      'User access to business systems and reporting required repetitive manual administration. Changes were slow, inconsistent, and dependent on specific individuals.',
    work:
      'Designed automation around Microsoft 365 permissions, team membership, APIs, environment configuration, and role-based access controls.',
    outcome:
      'Reduced manual administration and established a more repeatable, auditable access-management approach.',
  },
]

export const aboutContent = {
  consultant: 'Anthony Drake',
  summary:
    'U.S. Air Force veteran, Microsoft 365 consultant, and Power Platform developer with over 15 years of hands-on delivery across government, military, healthcare, and enterprise environments.',
  highlights: ['U.S. Air Force Veteran', 'Enterprise & Government Delivery', 'Documentation & Handoff Focus'],
}

export const engagementOptions: EngagementOption[] = [
  {
    title: 'Microsoft 365 Systems Review',
    summary:
      'A focused assessment for organizations that know something is inefficient or unreliable but aren\u2019t sure where to start. We evaluate SharePoint structure, permissions, Power Automate flow health, process bottlenecks, ownership risks, and governance gaps \u2014 then deliver a clear, prioritized action plan.',
    startingAt: 'Starting at $1,500',
  },
  {
    title: 'Workflow Rescue & Cleanup',
    summary:
      'Fix an existing Microsoft 365 process that is failing, difficult to maintain, or causing operational problems. This includes broken Power Automate flows, email-driven approvals, duplicate automation, SharePoint workflow issues, and manual steps that should be automated.',
    startingAt: 'Starting at $3,500',
  },
  {
    title: 'Business Process Solution',
    summary:
      'Design and build a complete Microsoft 365 solution around an actual business process \u2014 replacing disconnected spreadsheets, email chains, and manual work with a maintainable system using Power Apps, Power Automate, SharePoint, Dataverse, or Power BI.',
    startingAt: 'Starting at $6,000',
  },
]

export const contactContent = {
  heading: 'Let\u2019s look at what\u2019s slowing your business down.',
  text: 'The first conversation is about understanding your current environment and figuring out whether SLIMZZ Enterprise Solutions is the right fit. No commitment, no sales pitch \u2014 just a practical look at what\u2019s not working and what it would take to fix it.',
  email: 'slimzztv@outlook.com',
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
