import { contactContent } from '../data/siteContent'

function ContactCTA() {
  return (
    <section id="contact" className="ses-section ses-contact" aria-labelledby="contact-title">
      <div className="ses-container">
        <div className="ses-contact-header">
          <p className="ses-kicker">Next Step</p>
          <h2 id="contact-title" className="ses-section-title">
            {contactContent.heading}
          </h2>
          <p className="ses-contact-supporting">
            {contactContent.text}
          </p>
        </div>

        <div className="ses-contact-strip">
          <div className="ses-contact-strip-actions">
            <a
              href={`mailto:${contactContent.email}?subject=Consultation%20Request%20-%20SLIMZZ%20Enterprise%20Solutions&body=Hello%20SLIMZZ%20Enterprise%20Solutions%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation.%0A%0AHere%20is%20a%20brief%20summary%20of%20what%20we%20need%3A`}
              className="ses-button ses-button-primary"
            >
              Schedule a Consultation
            </a>
          </div>
          <div className="ses-contact-strip-left">
            <p className="ses-contact-strip-label">Or reach out directly:</p>
            <a href={`mailto:${contactContent.email}`} className="ses-contact-strip-email">
              {contactContent.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
