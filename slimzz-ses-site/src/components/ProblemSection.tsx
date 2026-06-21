import { problemPoints } from '../data/siteContent'

function ProblemSection() {
  return (
    <section className="ses-section" aria-labelledby="problem-title">
      <div className="ses-container ses-problem-layout">
        <div>
          <p className="ses-kicker">Why This Matters</p>
          <h2 id="problem-title" className="ses-section-title">
            Most teams already have Microsoft 365. The systems behind it are often the problem.
          </h2>
          <p className="ses-section-text">
            We step in when collaboration platforms exist but operations are unstable, unclear, or too manual
            to scale.
          </p>
        </div>

        <ul className="ses-problem-list">
          {problemPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProblemSection
