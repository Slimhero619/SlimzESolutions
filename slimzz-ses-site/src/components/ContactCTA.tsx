import { contactContent } from '../data/siteContent'

function ContactCTA() {
  const cards = [
    {
      title: 'Need clarity?',
      body: 'Start with a focused systems review to identify SharePoint structure issues, permission risk, workflow gaps, and governance concerns.',
      cta: 'Book a Systems Review',
      href: `mailto:${contactContent.email}?subject=Book%20a%20Systems%20Review&body=Hello%20SLIMZZ%20Enterprise%20Solutions%2C%0A%0AI%20would%20like%20to%20start%20with%20a%20systems%20review.%0A%0AHere%20is%20a%20brief%20summary%20of%20what%20we%20need%3A`
    },
    {
      title: 'Need cleanup?',
      body: 'Get help repairing unstable SharePoint architecture, fragile Power Automate flows, broken ownership, and manual process bottlenecks.',
      cta: 'Discuss Cleanup Support',
      href: `mailto:${contactContent.email}?subject=Discuss%20Cleanup%20Support&body=Hello%20SLIMZZ%20Enterprise%20Solutions%2C%0A%0AI%20would%20like%20to%20discuss%20cleanup%20support.%0A%0AHere%20is%20a%20brief%20summary%20of%20what%20we%20need%3A`
    },
    {
      title: 'Need a buildout?',
      body: 'Plan a practical Power Apps, Power Automate, or SharePoint solution around the way your team actually works.',
      cta: 'Talk Through a Buildout',
      href: `mailto:${contactContent.email}?subject=Talk%20Through%20a%20Buildout&body=Hello%20SLIMZZ%20Enterprise%20Solutions%2C%0A%0AI%20would%20like%20to%20talk%20through%20a%20buildout.%0A%0AHere%20is%20a%20brief%20summary%20of%20what%20we%20need%3A`
    }
  ]

  return (
    <section id="contact" className="ses-section ses-contact" aria-labelledby="contact-title">
      <div className="ses-container">
        {/* Header Block */}
        <div className="ses-contact-header">
          <p className="ses-kicker">NEXT STEP</p>
          <h2 id="contact-title" className="ses-section-title">
            Start where the pressure is highest
          </h2>
          <p className="ses-contact-supporting">
            Choose the path that matches your current Microsoft 365 challenge. SES will help clarify the problem, define the next move, and create a practical execution plan.
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="ses-cta-grid">
          {cards.map((card, i) => (
            <article key={i} className="ses-card ses-cta-card">
              <div>
                <h3 className="ses-cta-card-title">{card.title}</h3>
                <p className="ses-cta-card-body">{card.body}</p>
              </div>
              <a href={card.href} className="ses-button ses-button-secondary ses-cta-card-btn">
                {card.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Bottom Contact Strip */}
        <div className="ses-contact-strip">
          <div className="ses-contact-strip-left">
            <p className="ses-contact-strip-label">Prefer to start by email?</p>
            <a href={`mailto:${contactContent.email}`} className="ses-contact-strip-email">
              {contactContent.email}
            </a>
          </div>
          <div className="ses-contact-strip-actions">
            <a 
              href={`mailto:${contactContent.email}?subject=General%20Inquiry%20-%20SLIMZZ%20Enterprise%20Solutions&body=Hello%20SLIMZZ%20Enterprise%20Solutions%2C%0A%0AI%20would%20like%20to%20connect%20about%20Microsoft%20365%2C%20SharePoint%2C%20or%20Power%20Platform%20support.%0A%0AHere%20is%20a%20brief%20summary%20of%20what%20we%20need%3A`} 
              className="ses-button ses-button-primary"
            >
              Email SES
            </a>
            <a href="#contact" className="ses-button ses-button-secondary">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA

