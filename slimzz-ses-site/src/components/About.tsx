import { aboutContent } from '../data/siteContent'

function About() {
  return (
    <section id="about" className="ses-section" aria-labelledby="about-title">
      <div className="ses-container ses-about-layout">
        <div>
          <p className="ses-kicker">About</p>
          <h2 id="about-title" className="ses-section-title">
            Built for High-Accountability Environments
          </h2>
          <div className="ses-about-text-content">
            <p className="ses-section-text">
              SLIMZZ Enterprise Solutions LLC helps organizations clean up, stabilize, and modernize Microsoft 365, SharePoint, and Power Platform environments without adding more confusion to the business.
            </p>
            <p className="ses-section-text">
              Led by <strong>Anthony Drake</strong>, a U.S. Air Force veteran and Microsoft 365 consultant with 15+ years of experience across government, healthcare, military, and enterprise teams, SES is built around one simple idea:
            </p>
            <blockquote className="ses-about-quote">
              Precision over noise. Simplicity over chaos.
            </blockquote>
            <p className="ses-section-text">
              We focus on the work that keeps operations moving: fixing broken processes, improving outdated systems, automating repeatable tasks, strengthening governance, and creating solutions teams can actually maintain after handoff.
            </p>
            <p className="ses-section-text">
              This is not “build it and disappear” consulting. The goal is to leave your environment cleaner, your team more confident, and your business less dependent on tribal knowledge.
            </p>
          </div>
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
