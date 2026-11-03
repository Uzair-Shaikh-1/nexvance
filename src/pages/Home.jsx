import { Btn, Section, SectionHeader, Cards, Founder, Faq, Cta, Creators } from '../components/ui'

const Panel = ({ cls, tag, title, text, list, cta }) => (
  <div className={`panel panel--${cls}`}>
    <span className="panel-tag">{tag}</span>
    <h2 className="t-panel">{title}</h2>
    <p className="panel-text">{text}</p>
    <ul className="panel-list">{list.map((x) => <li key={x}>{x}</li>)}</ul>
    <Btn to="/contact" v="light">{cta}</Btn>
  </div>
)

export default function Home() {
  return (
    <>
      <section className="hero-home">
        <div className="container">
          <div className="hero-headline">
            <span className="pill">Creator partnerships, made simple</span>
            <h1 className="t-hero-home">Where premium creators meet global brands.</h1>
            <p className="t-lead">NexVance connects vetted creators with brands worldwide and manages every deal from pitch to payout.</p>
          </div>
          <div className="panel-grid">
            <Panel cls="brand" tag="For brands" title="I’m a Brand" text="Find creators your audience already trusts." list={['Vetted creators only', 'Managed end to end', 'Clear reporting']} cta="Find creators" />
            <Panel cls="creator" tag="For creators" title="I’m a Creator" text="Land brand deals worth your audience." list={['Pre-vetted brands', 'Fair, on-time pay', 'Long-term partnerships']} cta="Apply as a creator" />
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="container">
          <p className="proof-label">Trusted by brands and creators across four markets</p>
          <div className="logo-row">{[1, 2, 3, 4, 5, 6].map((n) => <div className="logo-box" key={n}>BRAND 0{n}</div>)}</div>
          <div className="testimonial">
            <p className="t-quote">“NexVance made our creator campaign simple. One partner, one brief, and everything delivered.”</p>
            <p className="t-small">Marketing lead, Brand 01</p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="What we do" title="One partner for the whole deal." sub="From the first brief to the final payout, we handle it all." />
        <Cards items={[['Match', 'We pair your brand with creators who fit your audience and goals.'], ['Organize', 'Briefs, contracts and timelines are managed in one place.'], ['Deliver', 'Content goes live on schedule and creators are paid on time.']]} />
      </Section>

      <Creators />
      <Founder text="I started NexVance to take the guesswork out of creator partnerships. Brands get creators who fit. Creators get fair deals." />

      <Section>
        <SectionHeader eyebrow="FAQ" title="Questions, answered." sub="Quick answers to what brands and creators ask us most." />
        <Faq />
      </Section>

      <Cta title="Ready to build your next partnership?" a="Contact us" b={['See services', '/services']} tint={false} />
    </>
  )
}
