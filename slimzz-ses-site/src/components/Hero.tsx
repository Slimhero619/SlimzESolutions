import { heroContent } from '../data/siteContent'
import slimzzHeroLogo from '../assets/Images/slimzz-hero-logo.png'

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
              Schedule a Consultation
            </a>
            <a className="ses-button ses-button-secondary" href="#services">
              View Services
            </a>
          </div>
        </div>

        <div className="ses-hero-visual">
          <img 
            src={slimzzHeroLogo} 
            alt="Slimzz Enterprise Solutions Logo" 
            className="ses-hero-visual-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

