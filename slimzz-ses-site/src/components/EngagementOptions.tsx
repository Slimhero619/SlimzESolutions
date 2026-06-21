import { engagementOptions } from '../data/siteContent'

function EngagementOptions() {
  return (
    <section className="ses-section" aria-labelledby="engagement-title">
      <div className="ses-container">
        <p className="ses-kicker">Engagement Options</p>
        <h2 id="engagement-title" className="ses-section-title">
          Start where the business pressure is highest
        </h2>

        <div className="ses-card-grid">
          {engagementOptions.map((option) => (
            <article key={option.title} className="ses-card ses-card-compact">
              <h3>{option.title}</h3>
              <p>{option.summary}</p>
              {option.startingAt ? <p className="ses-price">{option.startingAt}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngagementOptions
