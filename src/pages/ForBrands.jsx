import { PageHero, Section, SectionHeader, Cards, Steps, Cta } from '../components/ui'

export default function ForBrands() {
  return (
    <>
      <PageHero pill="For brands" title="Creators your audience already trusts." lead="We match your brand with vetted creators and manage the whole campaign." a="Start a campaign" b={['See services', '/services']} />
      <Section cls="section--after-hero">
        <SectionHeader eyebrow="Why NexVance" title="Less guesswork. Better partnerships." />
        <Cards items={[['Vetted creators', 'Every creator is reviewed before they join.'], ['Right-fit matches', 'Audience and content fit come first.'], ['Managed end to end', 'One team from brief to payout.']]} />
      </Section>
      <Section cls="section--tint">
        <SectionHeader eyebrow="How it works" title="From brief to results." />
        <Steps items={[['Share your brief', 'Tell us your goals and budget.'], ['Meet your creators', 'Review a shortlist that fits.'], ['Launch and learn', 'Go live and see the results.']]} />
      </Section>
      <Cta title="Ready to find your creators?" a="Start a campaign" b={['See services', '/services']} />
    </>
  )
}
