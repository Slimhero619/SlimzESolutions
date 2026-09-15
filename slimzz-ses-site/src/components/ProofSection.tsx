import { projectExamples } from '../data/siteContent'

function ProofSection() {
  return (
    <section className="ses-section" aria-labelledby="proof-title">
      <div className="ses-container">
        <p className="ses-kicker">Real-World Experience</p>
        <h2 id="proof-title" className="ses-section-title">
          Problems We've Solved
        </h2>
        <p className="ses-section-text">
          Anonymized examples from past Microsoft 365 and Power Platform engagements across government, enterprise, and mid-size organizations.
        </p>

        <div className="ses-card-grid">
          {projectExamples.map((example) => (
            <article key={example.title} className="ses-card ses-proof-card">
              <h3>{example.title}</h3>
              <div className="ses-proof-detail">
                <p className="ses-proof-label">Situation</p>
                <p>{example.situation}</p>
              </div>
              <div className="ses-proof-detail">
                <p className="ses-proof-label">What We Did</p>
                <p>{example.work}</p>
              </div>
              <div className="ses-proof-detail">
                <p className="ses-proof-label">Outcome</p>
                <p>{example.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofSection
