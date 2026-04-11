import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Gallery } from '@/components/Gallery';
import {
  certifiedProgramPreview,
  consistencyExamples,
  galleryItems,
  guestExperts,
  hero,
  heroStats,
  memberOutcomes,
  menuItems,
  proofCta
} from '@/content/siteContent';

const methodSteps = [
  {
    step: 'Step 01',
    title: 'Build strong bases first',
    place: 'Doughs, batters, shells, and cheesecake mixes',
    points: [
      'Lamination, choux paste, short crusts, and sponge or muffin batters need correct mix development before any finishing happens.',
      'Scaling, resting, and tray setup decide whether the product can be repeated across a full bakery run.',
      'If the base is weak, no garnish or glaze can recover the final result.'
    ]
  },
  {
    step: 'Step 02',
    title: 'Balance fillings and set',
    place: 'Frangipane, creams, curds, glaze, and baked centres',
    points: [
      'Fillings must deliver flavour, hold shape, and sit cleanly inside the product or cabinet display.',
      'Moisture control matters as much as flavour because the wrong balance shortens holding time.',
      'Consistent fill weights make the product eat the same from the first tray to the last.'
    ]
  },
  {
    step: 'Step 03',
    title: 'Finish for display and repeatability',
    place: 'Colour, garnish placement, sugar, glaze, and slicing',
    points: [
      'The final appearance is part of the product specification, not an afterthought.',
      'Good production notes make the finish achievable by the whole bakery team, not only one baker.',
      'The best products look strong early in the morning and still eat well later in the day.'
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="site-mark" href="#top">Mark McKinnon</a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#menu">Formula Menu</a>
            <a href="#method">Method</a>
            <a href="#selected-work">Gallery</a>
            <a href="#waitlist">Waitlist</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Bakery Formula Menu | Tested Pastry Methods | Victoria, Australia</p>
              <h1>A bakery menu that shows how the products are made.</h1>
              <p className="lead">Instead of listing finished items for purchase, this page turns Mark McKinnon&apos;s bakery range into a working menu of tried-and-tested products.</p>
              <div className="hero-highlights" aria-label="Bakery menu highlights">
                {heroStats.map((stat) => (
                  <article key={stat.value} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </article>
                ))}
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#menu">View formula menu</a>
                <a className="button button-secondary" href="#contact">Discuss recipe development</a>
              </div>
            </div>
            <figure className="hero-media">
              <Image
                src={hero.image}
                alt={hero.alt}
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <figcaption>Commercial bakery work focused on products that can be repeated with confidence.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">About The Range</p>
              <h2>These bakery items are presented as a make-it menu, not a buy-it list.</h2>
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="menu">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Formula Menu</p>
              <h2>Signature bakery items broken down by how to make them well.</h2>
            </div>
            <div className="menu-grid">
              {menuItems.map((item) => (
                <article key={item.title} className="menu-card">
                  <Image src={item.image} alt={item.alt} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="menu-card-body">
                    <p className="menu-tag">{item.tag}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <dl className="menu-meta">
                      <div><dt>How to make it</dt><dd>{item.howTo}</dd></div>
                      <div><dt>What to watch</dt><dd>{item.watch}</dd></div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="method">
          <div className="container">
            <div className="section-intro"><p className="eyebrow">Method</p><h2>How the bakery range is built for repeatable production.</h2></div>
            <div className="timeline">
              {methodSteps.map((step) => (
                <article className="timeline-item" key={step.step}>
                  <div className="timeline-meta">
                    <p className="timeline-date">{step.step}</p><h3>{step.title}</h3><p className="timeline-place">{step.place}</p>
                  </div>
                  <ul className="timeline-points">{step.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="selected-work">
          <div className="container">
            <div className="section-intro"><p className="eyebrow">Gallery</p><h2>Additional bakery products from the working archive.</h2></div>
            <Gallery items={galleryItems} />
          </div>
        </section>

        <section className="section section-contrast" id="member-outcomes">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Member Outcomes</p>
              <h2>Testimonials focused on measurable production wins.</h2>
            </div>
            <div className="proof-grid">
              {memberOutcomes.map((testimonial) => (
                <article className="proof-card" key={testimonial.member}>
                  <p className="proof-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="proof-name">{testimonial.member}</p>
                  <p className="proof-outcome">{testimonial.outcome}</p>
                </article>
              ))}
            </div>
            <div className="proof-cta">
              <p>{proofCta.supportingText}</p>
              <a className="button button-primary" href={proofCta.href}>{proofCta.label}</a>
            </div>
          </div>
        </section>

        <section className="section" id="consistency-examples">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Before / After Consistency</p>
              <h2>Production examples showing how repeatability improves.</h2>
            </div>
            <div className="proof-grid">
              {consistencyExamples.map((example) => (
                <article className="proof-card" key={example.product}>
                  <h3>{example.product}</h3>
                  <dl className="proof-detail">
                    <div><dt>Before</dt><dd>{example.before}</dd></div>
                    <div><dt>After</dt><dd>{example.after}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
            <div className="proof-cta">
              <p>{proofCta.supportingText}</p>
              <a className="button button-primary" href={proofCta.href}>{proofCta.label}</a>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="certified-preview">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Certification</p>
              <h2>{certifiedProgramPreview.title}</h2>
              <p className="section-copy">{certifiedProgramPreview.description}</p>
            </div>
            <div className="proof-grid">
              {certifiedProgramPreview.points.map((point) => (
                <article className="proof-card" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.detail}</p>
                </article>
              ))}
            </div>
            <div className="proof-cta">
              <p>{proofCta.supportingText}</p>
              <a className="button button-primary" href={proofCta.href}>{proofCta.label}</a>
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="guest-experts">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Guest Expert Strip</p>
              <h2>Credibility from specialist contributors behind the training standard.</h2>
            </div>
            <div className="credibility-strip">
              {guestExperts.map((expert) => (
                <article className="expert-chip" key={expert.name}>
                  <p className="proof-name">{expert.name}</p>
                  <p className="expert-role">{expert.role}</p>
                  <p>{expert.contribution}</p>
                </article>
              ))}
            </div>
            <div className="proof-cta">
              <p>{proofCta.supportingText}</p>
              <a className="button button-primary" href={proofCta.href}>{proofCta.label}</a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Recipe development and bakery production enquiries welcome.</h2>
              <p className="lead-small">Mark is available to discuss pastry production, subcontract bakery work, recipe refinement, and repeatable menu lines.</p>
              <div className="contact-actions">
                <a className="button button-primary" href="tel:+61421960632">Call Mark</a>
                <a className="button button-secondary" href="sms:+61421960632">Send SMS</a>
              </div>
              <ContactForm />
            </div>
            <div className="contact-panel">
              <dl className="contact-list">
                <div><dt>Phone</dt><dd><a href="tel:+61421960632">0421 960 632</a></dd></div>
                <div><dt>Location</dt><dd>Victoria, Australia</dd></div>
                <div><dt>Focus</dt><dd>Recipe development, commercial pastry production, bakery-ready product builds</dd></div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner"><p>Mark McKinnon</p><p>Bakery formula menu | Victoria, Australia</p></div>
      </footer>
    </>
  );
}
