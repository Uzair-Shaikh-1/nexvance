import { PageHero, Section, SectionHeader, Cards, Steps, Cta } from '../components/ui'

export default function Services() {
  return (
    <>
      <PageHero pill="Services" title="Everything between the pitch and the payout." lead="Creator sourcing, deals, campaigns and reporting, all handled by one team." a="Start a campaign" b={['For brands', '/for-brands']} />
      <Section cls="section--after-hero">
        <Cards four items={[['Creator sourcing', 'We find and vet creators who fit your brand.'], ['Deal negotiation', 'Fair terms agreed with both sides.'], ['Campaign management', 'Briefs, content and timelines run for you.'], ['Reporting & payouts', 'Clear results and on-time creator pay.']]} />
      </Section>
      <Section cls="section--tint">
        <SectionHeader eyebrow="How it works" title="Simple from the first call." />
        <Steps items={[['Brief', 'Tell us your goals.'], ['Match', 'We shortlist creators.'], ['Launch', 'Content goes live.'], ['Report', 'See results and pay out.']]} />
      </Section>
      <Cta title="Let’s plan your next campaign." a="Contact us" b={['For creators', '/for-creators']} />
    </>
  )
}
