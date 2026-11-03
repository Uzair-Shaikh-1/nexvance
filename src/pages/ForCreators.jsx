import { PageHero, Section, SectionHeader, Cards, Steps, Cta } from '../components/ui'

export default function ForCreators() {
  return (
    <>
      <PageHero pill="For creators" title="Brand deals worth your audience." lead="Get matched with brands that fit and get paid fairly, on time." a="Apply as a creator" b={['See services', '/services']} />
      <Section cls="section--after-hero">
        <SectionHeader eyebrow="Why NexVance" title="Grow without chasing brands." />
        <Cards items={[['Pre-vetted brands', 'Work only with brands we trust.'], ['Fair pay', 'Clear rates and on-time payment.'], ['Long-term deals', 'Build lasting partnerships.']]} />
      </Section>
      <Section cls="section--tint">
        <SectionHeader eyebrow="How it works" title="Three steps to your first deal." />
        <Steps items={[['Apply', 'Tell us about your audience.'], ['Get matched', 'We find brands that fit.'], ['Create and get paid', 'Deliver the work and get paid.']]} />
      </Section>
      <Cta title="Ready to land your next brand deal?" a="Apply as a creator" b={['See services', '/services']} />
    </>
  )
}
