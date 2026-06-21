import { companyName, navItems } from '../data/siteContent'

function Header() {
  return (
    <header className="ses-header">
      <div className="ses-container ses-header-inner">
        <a className="ses-brand" href="#" aria-label="SLIMZZ Enterprise Solutions home">
          <span className="ses-brand-mark" aria-hidden="true">
            SES
          </span>
          <span>{companyName}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="ses-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="ses-nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="ses-button ses-button-primary" href="#contact">
          Book a Systems Review
        </a>
      </div>
    </header>
  )
}

export default Header
