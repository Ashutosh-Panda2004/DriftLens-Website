import { AnimIn } from './AnimIn'

interface Props { eyebrow: string; title: React.ReactNode; sub: string }

export function SectionHeader({ eyebrow, title, sub }: Props) {
  return (
    <AnimIn>
      <div className="section__header">
        <p className="section__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{sub}</p>
      </div>
    </AnimIn>
  )
}