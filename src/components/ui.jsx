import { useState } from 'react'
import { Link } from 'react-router-dom'

const num = (i) => String(i + 1).padStart(2, '0')

export const Btn = ({ to, v = 'primary', children }) => (
  <Link className={`btn btn--${v}`} to={to}>{children}</Link>
)

export const SectionHeader = ({ eyebrow, title, sub }) => (
  <div className="section-header">
    <span className="t-eyebrow">{eyebrow}</span>
    <h2 className="t-section">{title}</h2>
    {sub && <p className="t-sub">{sub}</p>}
  </div>
)

export const Section = ({ cls = '', children }) => (
  <section className={`section ${cls}`.trim()}><div className="container">{children}</div></section>
)

export const Cards = ({ items, four }) => (
  <div className={`cards${four ? ' cards--4' : ''}`}>
    {items.map(([title, body], i) => (
      <div className="card" key={title}>
        <span className="icon-badge">{num(i)}</span>
        <h3 className="t-card-title">{title}</h3>
        <p className="t-body">{body}</p>
      </div>
    ))}
  </div>
)

export const Steps = ({ items }) => (
  <div className="steps" style={{ '--cols': items.length }}>
    {items.map(([title, body], i) => (
      <div className="step" key={title}>
        <span className="t-step-num">{num(i)}</span>
        <div className="step-body">
          <h3 className="t-card-title">{title}</h3>
          <p className="t-body">{body}</p>
        </div>
      </div>
    ))}
  </div>
)

export const PageHero = ({ pill, title, lead, a, b }) => (
  <section className="page-hero">
    <div className="container">
      <span className="pill">{pill}</span>
      <h1 className="t-hero">{title}</h1>
      <p className="t-lead">{lead}</p>
      {a && (
        <div className="btn-row">
          <Btn to="/contact">{a}</Btn>
          <Btn to={b[1]} v="outline">{b[0]}</Btn>
        </div>
      )}
    </div>
  </section>
)

export const Cta = ({ title, a, b, tint = true }) => (
  <section className={`cta${tint ? ' cta--after-tint' : ''}`}>
    <div className="container">
      <div className="cta-card">
        <h2 className="t-cta">{title}</h2>
        <div className="btn-row">
          <Btn to="/contact" v="light">{a}</Btn>
          <Btn to={b[1]} v="dark">{b[0]}</Btn>
        </div>
      </div>
    </div>
  </section>
)

export const Founder = ({ text }) => (
  <section className="founder">
    <div className="container">
      <div className="founder-photo" style={{ display: 'grid', placeItems: 'center', color: 'var(--muted)', fontSize: 14 }}>Founder photo</div>
      <div className="founder-text">
        <span className="t-eyebrow">Meet the founder</span>
        <h2 className="t-founder">Muhammad Haseeb</h2>
        <span className="t-founder-role">Founder, NexVance</span>
        <p className="t-founder-text">{text}</p>
        <Btn to="/contact">Get in touch</Btn>
      </div>
    </div>
  </section>
)

const FAQS = [
  ['How does NexVance work?', 'You share a brief, we match you with vetted creators, then manage the campaign and the payout from start to finish.'],
  ['What does it cost?', 'Pricing depends on the scope of the campaign. Contact us and we will send a clear quote.'],
  ['Which markets do you cover?', 'We work across the US, UK, Canada and the EU.'],
  ['How do creators get paid?', 'Creators are paid on time through NexVance once the agreed work is delivered.'],
  ['How are creators vetted?', 'Every creator is reviewed for audience quality, content fit and reliability before joining.'],
  ['How fast can we launch?', 'Most campaigns are ready to launch within a few weeks of the first call.'],
]

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {FAQS.map(([q, a], i) => (
        <div className="faq-item" key={q}>
          <div className="faq-q" role="button" tabIndex={0} aria-expanded={open === i} style={{ cursor: 'pointer' }}
            onClick={() => setOpen(open === i ? -1 : i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(open === i ? -1 : i) } }}>
            <span>{q}</span>
            <span className="faq-toggle">{open === i ? '\u2212' : '+'}</span>
          </div>
          {open === i && <p className="faq-a">{a}</p>}
        </div>
      ))}
    </div>
  )
}

const CREATORS = [1, 2, 3, 4, 5].map((n) => `/images/creators/creator-0${n}.jpeg`)

export const Creators = () => (
  <Section cls="section--tint">
    <SectionHeader eyebrow="Our creators" title="Meet some of our creators." sub="The kind of creators we match with global brands." />
    <div className="creators-grid">
      {CREATORS.map((src, i) => (
        <img key={src} className="creator-photo" src={src} alt={`Creator ${i + 1}`} loading="lazy" />
      ))}
    </div>
  </Section>
)
