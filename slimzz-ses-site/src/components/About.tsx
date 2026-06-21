import { aboutContent } from '../data/siteContent'

function About() {
  return (
    <section id="about" className="ses-section" aria-labelledby="about-title">
      <div className="ses-container ses-about-layout">
        <div>
          <p className="ses-kicker">About</p>
          <h2 id="about-title" className="ses-section-title">
            Built for high-accountability environments
          </h2>
          <p className="ses-section-text">
            <strong>{aboutContent.consultant}</strong> is a {aboutContent.summary}
          </p>
        </div>

        <div className="ses-highlight-row" aria-label="Consulting highlights">
          {aboutContent.highlights.map((highlight) => (
            <p key={highlight} className="ses-highlight-pill">
              {highlight}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
