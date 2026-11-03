
import {
  Section,
  SectionHeader,
  Cards,
  Founder,
  Faq,
  Cta,
  Creators,
} from "../components/ui";

const Panel = ({ cls, tag, title, text, list, cta }) => (
  <div className={`panel panel--${cls}`}>
    <span className="panel-tag">{tag}</span>

    <h2 className="t-panel">{title}</h2>

    <p className="panel-text">{text}</p>

    <ul className="panel-list">
      {list.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>

    <a href="/contact" className="btn btn--light">
      {cta}
    </a>
  </div>
);

export default function Home() {
  const creatorImages = [
    "creator-01.jpeg",
    "creator-02.jpeg",
    "creator-03.jpeg",
    "creator-04.jpeg",
    "creator-05.jpeg",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-home">
        <div className="container">
          <div className="hero-headline">
            <span className="pill">
              Creator partnerships, made simple
            </span>

            <h1 className="t-hero-home">
              Where premium creators meet global brands.
            </h1>

            <p className="t-lead">
              NexVance connects vetted creators with brands worldwide
              and manages every deal from pitch to payout.
            </p>
          </div>

          <div className="panel-grid">
            <Panel
              cls="brand"
              tag="For brands"
              title="I'm a Brand"
              text="Find creators your audience already trusts."
              list={[
                "• Vetted creators only",
                "• Managed end to end",
                "• Clear reporting",
              ]}
              cta="Find creators"
            />

            <Panel
              cls="creator"
              tag="For creators"
              title="I'm a Creator"
              text="Land brand deals worth your audience."
              list={[
                "• Pre-vetted brands",
                "• Fair, on-time pay",
                "• Long-term partnerships",
              ]}
              cta="Apply as a creator"
            />
          </div>
        </div>
      </section>

      {/* CREATOR SHOWCASE SECTION */}
      <section className="proof">
        <div className="container">
          <p className="proof-label">
            Meet the creators on NexVance
          </p>

       <div className="logo-row">
  {creatorImages.map((photo) => (
    <div className="logo-box" key={photo}>
      <img
        src={`/images/creators/${photo}`}
        alt="NexVance creator"
      />
    </div>
  ))}
</div>

          <div className="testimonial">
            <p className="t-quote">
              "NexVance makes it easier for creators to connect with
              brands, secure fair deals, and build long-term
              partnerships."
            </p>

            <p className="t-small">
              The NexVance Creator Community
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="One partner for the whole deal."
          sub="From the first brief to the final payout, we handle it all."
        />

        <Cards
          items={[
            [
              "Match",
              "We pair your brand with creators who fit your audience and goals.",
            ],
            [
              "Organize",
              "Briefs, contracts and timelines are managed in one place.",
            ],
            [
              "Deliver",
              "Content goes live on schedule and creators are paid on time.",
            ],
          ]}
        />
      </Section>


      {/* FOUNDER */}
      <Founder
        text="I started NexVance to take the guesswork out of creator partnerships. Brands get creators who fit. Creators get fair deals."
      />

      {/* FAQ */}
      <Section>
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered."
          sub="Quick answers to what brands and creators ask us most."
        />

        <Faq />
      </Section>

      {/* CTA */}
      <Cta
        title="Ready to build your next partnership?"
        a="Contact us"
        b={["See services", "/services"]}
        tint={false}
      />
    </>
  );
}
