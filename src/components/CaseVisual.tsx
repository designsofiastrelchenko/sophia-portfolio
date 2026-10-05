import { motion, useReducedMotion } from 'framer-motion'
import { ArrowIcon, InlineArrows } from './ArrowIcon'
import { withoutFinalPeriod } from '../data/caseContent'
import { CaseDiagram } from './CaseDiagram'
import { diagramModeFor } from '../data/caseDiagramModes'

export type VisualItem = { label: string; detail?: string; note?: string; branches?: { yes: string; no: string } }

export type CaseVisualSpec = {
  id: string
  group: string
  after: string
  title: string
  caption?: string
  kind: 'columns' | 'flow' | 'matrix' | 'comparison' | 'levels'
  numbered?: boolean
  columns?: string[]
  presentation?: 'results'
  items: VisualItem[]
}

const equivalentHeadings: Record<string, string> = {
  'wallet-context': 'Постоянный активный контекст',
  'wallet-errors': 'Предупреждение ошибок до подтверждения',
  'wallet-states': 'Статусы операций',
  'astoria-entry': 'Разные точки входа',
  'health-states': 'Системные состояния',
  'atlyx-statuses': 'Понятная модель статусов',
}

function repeatsHeading(title: string, heading: string, id: string) {
  const normalize = (text: string) => text.toLocaleLowerCase('ru').replace(/ё/g, 'е').replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
  return normalize(title) === normalize(heading) ||
    (Boolean(equivalentHeadings[id]) && normalize(equivalentHeadings[id]) === normalize(heading))
}

export function CaseVisual({ visual, precedingHeading = '' }: { visual: CaseVisualSpec; precedingHeading?: string }) {
  const reducedMotion = useReducedMotion()
  const showHeading = !repeatsHeading(visual.title, precedingHeading, visual.id)
  const diagramMode = diagramModeFor(visual.id)
  const isTable = visual.kind === 'columns' && visual.columns && !diagramMode

  return (
    <figure className={`case-visual case-visual--${visual.kind}${showHeading ? '' : ' case-visual--untitled'}`}
      aria-labelledby={showHeading ? `${visual.id}-title` : undefined}
      aria-label={showHeading ? undefined : visual.title}>
      <div className="case-visual-surface">
      {showHeading ? (
        <div className="case-visual-heading" data-reveal="text">
          <ArrowIcon direction="up-right" decorative className="case-visual-index" />
          <figcaption id={`${visual.id}-title`}><InlineArrows text={visual.title} /></figcaption>
        </div>
      ) : null}
      {isTable ? (
        <div className="case-visual-table-wrap" data-reveal="table">
          <table className="case-visual-table">
            <thead><tr>{visual.columns?.map((column) => <th scope="col" key={column}><InlineArrows text={column} /></th>)}</tr></thead>
            <tbody>{visual.items.map((item) => (
              <tr key={item.label}>
                <th scope="row" data-label={visual.columns?.[0]}><InlineArrows text={item.label} /></th>
                <td data-label={visual.columns?.[1]}>{item.detail && <InlineArrows text={item.detail} />}</td>
                <td data-label={visual.columns?.[2]}>{item.note && <InlineArrows text={item.note} />}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      ) : diagramMode ? (
        <CaseDiagram visual={visual} mode={diagramMode} />
      ) : visual.presentation === 'results' ? (
        <motion.ul className="case-visual-results case-metric-grid"
          initial={reducedMotion ? false : 'hidden'} whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -12% 0px' }}
          variants={{ show: { transition: { staggerChildren: reducedMotion ? 0 : 0.08 } } }}>
          {visual.items.map((item, index) => (
            <motion.li key={`${item.label}-${index}`}
              variants={{ hidden: { opacity: 0, transform: 'translateY(12px)' }, show: { opacity: 1, transform: 'translateY(0px)' } }}
              transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}>
              {item.detail && <strong><InlineArrows text={item.detail} /></strong>}
              <span><InlineArrows text={item.label} /></span>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <dl className="case-visual-plain">{visual.items.map((item) => <div key={item.label}>
          <dt><InlineArrows text={item.label} /></dt>
          <dd>{item.detail && <InlineArrows text={item.detail} />}</dd>
        </div>)}</dl>
      )}
      {visual.caption && <p className="case-visual-caption" data-reveal="text"><InlineArrows text={withoutFinalPeriod(visual.caption)} /></p>}
      </div>
    </figure>
  )
}
