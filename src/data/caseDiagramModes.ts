export type DiagramMode = 'service-map' | 'filters' | 'route' | 'branch' | 'architecture' | 'convergence' | 'transformation' | 'contrast' | 'status-branch' | 'status-pairs' | 'state-map' | 'entity-map' | 'risk-map' | 'change-list'

// Modes reflect relationships stated in the case, not the number of data items.
const routes = new Set([
  'portal-commission', 'wallet-onboarding', 'wallet-send', 'wallet-receive',
  'wallet-seed', 'wallet-handoff', 'wallet-context', 'astoria-readiness', 'astoria-main-flow',
  'health-blueprint', 'health-design-first', 'health-funnel', 'health-consultation', 'health-tool',
  'health-learning', 'atlyx-lifecycle', 'atlyx-cycles', 'atlyx-place-flow',
  'atlyx-flight-fallback', 'atlyx-disclosure', 'atlyx-loop', 'astoria-system',
])
const branches = new Set(['portal-flow', 'astoria-price', 'atlyx-flight-flow'])
export const diagramHubs: Record<string, string> = {
  'portal-map': 'Рабочий кабинет',
  'portal-components': 'Компоненты кабинета',
  'wallet-architecture': 'MVP SkyWallet',
  'wallet-components': 'Дизайн-система SkyWallet',
  'astoria-widget': 'Внешний виджет',
  'astoria-cms': 'CMS',
  'health-architecture': 'Продукт',
  'health-hub': 'Личный кабинет',
  'health-system': 'Компоненты платформы',
  'atlyx-ecosystem': 'Поездка',
}
export const stateCenters: Record<string, string> = {
  'portal-states': 'Дашборд',
  'astoria-states': 'Выбор и оформление тура',
  'health-states': 'Сценарий пользователя',
  'atlyx-states': 'Сценарии поездки',
}
const transformations = new Set([
  'portal-orders-before-after', 'portal-disclosure', 'wallet-send-design',
  'atlyx-architecture',
])
const contrasts = new Set([
  'portal-hierarchy', 'portal-diagnostics', 'wallet-ecosystem', 'wallet-contours',
  'astoria-card-depth', 'health-problem', 'health-jobs', 'health-mvp',
])

export function diagramModeFor(id: string): DiagramMode | null {
  if (id === 'astoria-map') return 'service-map'
  if (id === 'astoria-filters') return 'filters'
  if (id === 'wallet-states') return 'status-branch'
  if (id === 'atlyx-statuses') return 'status-pairs'
  if (id === 'wallet-entities') return 'entity-map'
  if (id === 'wallet-risks') return 'risk-map'
  if (id === 'health-outcomes') return 'change-list'
  if (id in stateCenters) return 'state-map'
  if (['astoria-entry', 'astoria-intents', 'portal-support', 'astoria-problem'].includes(id)) return 'convergence'
  if (branches.has(id)) return 'branch'
  if (routes.has(id)) return 'route'
  if (id in diagramHubs) return 'architecture'
  if (transformations.has(id)) return 'transformation'
  if (contrasts.has(id)) return 'contrast'
  return null
}
