// Prototype copy, years, and destinations. Replace with verified content before launch.
export const profile = {
  name: 'Sophia',
  role: 'Product Designer',
  email: 'mailto:sophia@example.com',
  telegram: 'https://example.com/telegram',
  cv: 'https://example.com/cv',
}

export const professionalProfiles = [
  { label: 'LinkedIn', href: 'https://example.com/linkedin' },
  { label: 'HH', href: 'https://example.com/hh' },
]

export type Project = {
  id: string
  title: string
  category: string
  year: string
  tone: 'stone' | 'silver' | 'sand'
  presentation: 'lead' | 'inset' | 'wide'
}

export const projects: Project[] = [
  { id: 'fintech-platform', title: 'Fintech Platform', category: 'Financial services / Product design', year: '2026', tone: 'stone', presentation: 'lead' },
  { id: 'b2b-saas', title: 'B2B SaaS', category: 'Business tools / Product design', year: '2025', tone: 'silver', presentation: 'inset' },
  { id: 'digital-commerce', title: 'Digital Commerce', category: 'Commerce / Digital experience', year: '2024', tone: 'sand', presentation: 'wide' },
]
