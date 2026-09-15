import { problemPoints } from '../data/siteContent'

function ProblemSection() {
  return (
    <section className="ses-section" aria-labelledby="problem-title">
      <div className="ses-container ses-problem-layout">
        <div>
          <p className="ses-kicker">Sound Familiar?</p>
          <h2 id="problem-title" className="ses-section-title">
            You already have Microsoft 365. The problem is that it may not be working the way it should.
          </h2>
          <p className="ses-section-text">
            Most organizations don't need more tools. They need the tools they already own to actually work
            together reliably, with clear processes and someone accountable for keeping them running.
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
