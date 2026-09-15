import { aboutContent } from '../data/siteContent'
import aboutVisual from '../assets/Images/slimzz-profileFiller-photo.png'

function About() {
  return (
    <section id="about" className="ses-section" aria-labelledby="about-title">
      <div className="ses-container ses-about-grid">
        <div className="ses-about-content">
          <p className="ses-kicker">About</p>
          <h2 id="about-title" className="ses-section-title">
            Enterprise Experience. Practical Execution.
          </h2>
          <div className="ses-about-text-content">
            <p className="ses-section-text">
              SLIMZZ Enterprise Solutions was founded to help organizations get real, lasting value out of Microsoft 365 — not just licenses and logins, but working systems that people actually rely on.
            </p>
            <p className="ses-section-text">
              The company is led by <strong>Anthony Drake</strong>, a U.S. Air Force veteran and Microsoft 365 consultant with over 15 years of experience delivering SharePoint, Power Platform, and business process solutions across government, military, healthcare, and enterprise environments.
            </p>
            <blockquote className="ses-about-quote">
              Build it right. Document it clearly. Hand it off so it runs without you.
            </blockquote>
            <p className="ses-section-text">
              That background means SES brings more than technical skills — it brings the discipline to communicate with leadership, scope work realistically, and deliver solutions that hold up after the engagement ends. From SharePoint governance and Power Automate workflows to Power Apps, Dataverse, Power BI, and Microsoft Graph integrations, the focus is always on building solutions your team can own and maintain.
            </p>
            <p className="ses-section-text">
              Every engagement includes clear documentation, defined ownership, and a practical handoff plan — because a solution only works if your team can run it without calling the person who built it.
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

        <div className="ses-about-visual-wrap">
          <img
            src={aboutVisual}
            alt="Microsoft 365 Operational Foundation diagram: SharePoint Cleanup, Workflow Automation, Governance & Control, and Sustainable Handoff"
            className="ses-about-visual"
          />
        </div>
      </div>
    </section>
  )
}

export default About
