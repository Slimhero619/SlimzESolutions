import { heroContent } from '../data/siteContent'

function Hero() {
  return (
    <section className="ses-hero" aria-labelledby="hero-title">
      <div className="ses-container ses-hero-grid">
        <div>
          <p className="ses-kicker">Microsoft 365 Consulting</p>
          <h1 id="hero-title" className="ses-hero-title">
            {heroContent.headline}
          </h1>
          <p className="ses-hero-text">{heroContent.supportingText}</p>

          <div className="ses-hero-actions">
            <a className="ses-button ses-button-primary" href="#contact">
              Book a Systems Review
            </a>
            <a className="ses-button ses-button-secondary" href="#services">
              View Services
            </a>
          </div>
        </div>

        <div className="ses-hero-visual" role="img" aria-label="Founder or brand visual placeholder">
          {/* Replace this panel with a real founder photo or branded visual asset. */}
          <p className="ses-hero-visual-label">Founder / Brand Visual Placeholder</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
