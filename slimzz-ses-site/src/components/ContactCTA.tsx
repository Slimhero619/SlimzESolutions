import { contactContent } from '../data/siteContent'

function ContactCTA() {
  return (
    <section id="contact" className="ses-section ses-contact" aria-labelledby="contact-title">
      <div className="ses-container ses-contact-inner">
        <div>
          <p className="ses-kicker">Next Step</p>
          <h2 id="contact-title" className="ses-section-title">
            {contactContent.heading}
          </h2>
          <p className="ses-section-text">{contactContent.text}</p>
        </div>

        <div className="ses-contact-actions">
          <a className="ses-button ses-button-primary" href={`mailto:${contactContent.email}`}>
            Email {contactContent.email}
          </a>
          <a className="ses-button ses-button-secondary" href="#contact">
            Scheduling Link Placeholder
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
