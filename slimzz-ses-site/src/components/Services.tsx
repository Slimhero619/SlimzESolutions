import { services } from '../data/siteContent'

function Services() {
  return (
    <section id="services" className="ses-section" aria-labelledby="services-title">
      <div className="ses-container">
        <p className="ses-kicker">Core Services</p>
        <h2 id="services-title" className="ses-section-title">
          Focused execution across the Microsoft 365 stack
        </h2>

        <div className="ses-card-grid">
          {services.map((service) => (
            <article key={service.title} className="ses-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
