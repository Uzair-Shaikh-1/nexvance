import { PageHero, Section, SectionHeader, Cards, Founder, Cta } from '../components/ui'

export default function About() {
  return (
    <>
      <PageHero pill="About" title="Built to make creator partnerships simple." lead="NexVance exists to make creator deals clear, fair and easy for everyone involved." />
      <Founder text="Muhammad Haseeb built NexVance after seeing good partnerships fall apart over unclear briefs and late payments." />
      <Section cls="section--tint">
        <SectionHeader eyebrow="Our approach" title="How we work." />
        <Cards items={[['Honest guidance', 'We tell you what will work.'], ['Clear process', 'Every step is simple and visible.'], ['Long-term relationships', 'We build for the next deal too.']]} />
      </Section>
      <Section>
        <SectionHeader eyebrow="Markets" title="Where we work." />
        <div className="markets">
          {['US', 'UK', 'Canada', 'EU'].map((m) => <div className="market" key={m}><span className="market-name">{m}</span></div>)}
        </div>
      </Section>
      <Cta title="Let’s work together." a="Contact us" b={['See services', '/services']} tint={false} />
    </>
  )
}
