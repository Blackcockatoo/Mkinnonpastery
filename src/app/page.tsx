import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { WaitlistForm } from '@/components/WaitlistForm';
import {
  accessPlans,
  audienceSignals,
  certifiedProgramPreview,
  consistencyExamples,
  consultingOffers,
  galleryItems,
  guestExperts,
  hero,
  heroStats,
  launchRoadmap,
  membershipFeatures,
  menuItems,
  memberOutcomes,
  methodSteps,
  positioning,
  positioningPanels,
  proofCta,
  siteNavigation,
  strategicPillars,
  waitlistBenefits
} from '@/content/siteContent';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <div className="header-brand">
            <a className="site-mark" href="#top">Mark McKinnon</a>
            <p className="site-submark">The McKinnon Collective</p>
          </div>
          <nav className="site-nav" aria-label="Primary">
            {siteNavigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="button button-secondary header-button" href="/login">Member sign in</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="lead">{hero.description}</p>
              <p className="lead-small">{hero.supportingText}</p>
              <div className="hero-highlights" aria-label="McKinnon membership highlights">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </article>
                ))}
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
                <a className="button button-secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </div>
            </div>
            <figure className="hero-media">
              <Image
                src={hero.image}
                alt={hero.alt}
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <figcaption>The public site teaches the philosophy. The membership delivers the repeatable bakery system.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section value-strip" aria-label="Who the collective serves">
          <div className="container">
            <div className="value-strip-grid">
              {audienceSignals.map((signal) => (
                <a key={signal.title} className="stat-card value-strip-item" href={signal.href}>
                  <h3>{signal.title}</h3>
                  <p>{signal.detail}</p>
                  <span>Explore section</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">{positioning.eyebrow}</p>
              <h2>{positioning.title}</h2>
            </div>
            <div className="split-layout">
              <div className="prose">
                {positioning.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="credential-stack">
                {positioningPanels.map((panel) => (
                  <article key={panel.title} className="info-panel">
                    <h3>{panel.title}</h3>
                    <ul className="detail-list">
                      {panel.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <div className="specialty-grid section-grid-top">
              {strategicPillars.map((pillar) => (
                <article key={pillar.title} className="specialty-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="membership">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Membership Experience</p>
              <h2>A serious bakery membership should improve the bench, the cabinet, and the business.</h2>
              <p className="section-copy">The offer is built around operating clarity: what to make, how to make it, how to hold it, and how to keep the numbers healthy.</p>
            </div>
            <div className="proof-grid">
              {membershipFeatures.map((feature) => (
                <article className="proof-card" key={feature.title}>
                  <p className="plan-label">{feature.cadence}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.detail}</p>
                </article>
              ))}
            </div>
            <div className="proof-cta">
              <p>{proofCta.supportingText}</p>
              <a className="button button-primary" href={proofCta.href}>{proofCta.label}</a>
            </div>
          </div>
        </section>

        <section className="section" id="menu">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Formula Menu</p>
              <h2>Signature products are still the proof. The difference is that each one now feeds a bigger learning system.</h2>
              <p className="section-copy">Public visitors can see how the range is approached. Members get the production detail underneath each product family.</p>
            </div>
            <div className="menu-grid">
              {menuItems.map((formula) => (
                <article key={formula.publicPreview.title} className="menu-card">
                  <Image
                    src={formula.publicPreview.image}
                    alt={formula.publicPreview.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="menu-card-body">
                    <p className="menu-tag">{formula.publicPreview.tag}</p>
                    <h3>{formula.publicPreview.title}</h3>
                    <p>{formula.publicPreview.description}</p>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} preview notes`}>
                      <h4>Public Preview</h4>
                      <p className="formula-outcome">{formula.publicPreview.outcome}</p>
                      <ul>
                        {formula.publicPreview.previewNotes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} production specs`}>
                      <h4>Members Production Notes</h4>
                      <dl className="formula-stat-grid">
                        <div><dt>Batch size</dt><dd>{formula.membersOnly.batchSize}</dd></div>
                        <div><dt>Yield</dt><dd>{formula.membersOnly.yield}</dd></div>
                      </dl>
                    </section>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} ingredient percentages`}>
                      <h4>Ingredient Percentages</h4>
                      <ul>
                        {formula.membersOnly.ingredientPercentages.map((ingredient) => (
                          <li key={ingredient.ingredient}>
                            <strong>{ingredient.ingredient}:</strong> {ingredient.percentage}
                            {ingredient.note ? ` (${ingredient.note})` : ''}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} process timeline`}>
                      <h4>Process Timeline</h4>
                      <ul>
                        {formula.membersOnly.processTimeline.map((step) => (
                          <li key={step.stage}>
                            <strong>{step.stage}</strong> ({step.timing}) - {step.target}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} hold and shelf notes`}>
                      <h4>Hold / Shelf Notes</h4>
                      <ul>
                        {formula.membersOnly.holdShelfNotes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} costing inputs`}>
                      <h4>Costing Inputs</h4>
                      <ul>
                        {formula.membersOnly.costingInputs.map((entry) => (
                          <li key={entry.label}>
                            <strong>{entry.label}:</strong> {entry.amount}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="formula-block" aria-label={`${formula.publicPreview.title} troubleshooting`}>
                      <h4>Troubleshooting</h4>
                      <ul>
                        {formula.membersOnly.troubleshooting.map((issue) => (
                          <li key={issue.symptom}>
                            <strong>{issue.symptom}:</strong> {issue.fix}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="method">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Method</p>
              <h2>The McKinnon method still leads with repeatability, because every premium membership promise falls apart without it.</h2>
            </div>
            <div className="timeline">
              {methodSteps.map((step) => (
                <article className="timeline-item" key={step.step}>
                  <div className="timeline-meta">
                    <p className="timeline-date">{step.step}</p>
                    <h3>{step.title}</h3>
                    <p className="timeline-place">{step.place}</p>
                  </div>
                  <ul className="timeline-points">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="selected-work">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Working Archive</p>
              <h2>Visual proof still matters. It just sits behind a stronger narrative now.</h2>
            </div>
            <Gallery items={galleryItems} />
          </div>
        </section>

        <section className="section section-contrast" id="results">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Member Outcomes</p>
              <h2>The best proof is measurable production improvement, not generic praise.</h2>
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
            <div className="proof-grid section-grid-top">
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

        <section className="section section-alt" id="certification">
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
            <div className="credibility-strip section-grid-top">
              {guestExperts.map((expert) => (
                <article className="expert-chip" key={expert.name}>
                  <p className="proof-name">{expert.name}</p>
                  <p className="expert-role">{expert.role}</p>
                  <p>{expert.contribution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Natural Next Steps</p>
              <h2>The site now leads naturally into the launch plan instead of leaving the strategy trapped in a document.</h2>
            </div>
            <div className="proof-grid">
              {launchRoadmap.map((stage) => (
                <article className="proof-card" key={stage.phase}>
                  <p className="plan-label">{stage.phase}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.detail}</p>
                  <ul className="detail-list">
                    {stage.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="proof-grid section-grid-top">
              {accessPlans.map((plan) => (
                <article className={plan.highlighted ? 'proof-card plan-card plan-card-highlight' : 'proof-card plan-card'} key={plan.title}>
                  <p className="plan-label">{plan.label}</p>
                  <h3>{plan.title}</h3>
                  <p className="plan-cadence">{plan.cadence}</p>
                  <p>{plan.detail}</p>
                  <ul className="detail-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className="button button-secondary" href={plan.href}>Enquire</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="waitlist">
          <div className="container waitlist-shell">
            <div className="section-intro">
              <p className="eyebrow">Founding Waitlist</p>
              <h2>Build demand before launch, qualify the right bakers, and reward early attention properly.</h2>
              <p className="section-copy">The waitlist is not just a signup form. It becomes the first research and trust-building layer of the business.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-copy">
                <article className="info-panel">
                  <h3>What waitlist members should expect</h3>
                  <ul className="detail-list check-list">
                    {waitlistBenefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <div className="contact-panel">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Contact</p>
              <h2>Use the direct enquiry path for consultancy, team training, partnerships, or certification interest.</h2>
              <p className="section-copy">Membership drives recurring value. Contact enquiries handle higher-touch work around bakery systems, subcontracting, and collaborations.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-copy">
                <div className="contact-actions">
                  <a className="button button-primary" href="tel:+61421960632">Call Mark</a>
                  <a className="button button-secondary" href="sms:+61421960632">Send SMS</a>
                </div>
                <ContactForm />
              </div>
              <div className="credential-stack">
                {consultingOffers.map((offer) => (
                  <article className="info-panel" key={offer.title}>
                    <h3>{offer.title}</h3>
                    <p>{offer.detail}</p>
                  </article>
                ))}
                <div className="contact-panel">
                  <dl className="contact-list">
                    <div><dt>Phone</dt><dd><a href="tel:+61421960632">0421 960 632</a></dd></div>
                    <div><dt>Location</dt><dd>Victoria, Australia</dd></div>
                    <div><dt>Focus</dt><dd>Membership launch, bakery systems, consultancy, certification, and training partnerships</dd></div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Mark McKinnon</p>
          <p>The McKinnon Collective | Bakery membership, certification, and consultancy</p>
        </div>
      </footer>
    </>
  );
}
