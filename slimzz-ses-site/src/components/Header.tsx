import { navItems } from '../data/siteContent'
import headerLogo from '../assets/Images/slimzz-logo-header-400.png'

function Header() {
  return (
    <header className="ses-header">
      <div className="ses-container ses-header-inner">
        <a className="ses-brand" href="#" aria-label="SLIMZZ Enterprise Solutions home">
          <div className="ses-brand-icon-wrap">
            <img 
              src={headerLogo} 
              alt="" 
              className="ses-brand-icon-img" 
            />
          </div>
          <span className="ses-brand-text">
            SLimzz Enterprise Solutions
          </span>
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
          Schedule a Consultation
        </a>
      </div>
    </header>
  )
}

export default Header
