import { companyName, footerKeywords } from '../data/siteContent'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="ses-footer">
      <div className="ses-container ses-footer-inner">
        <p className="ses-footer-name">{companyName}</p>
        <p className="ses-footer-keywords">{footerKeywords.join(' • ')}</p>
        <p className="ses-footer-meta">Tampa, FL / Remote</p>
        <p className="ses-footer-meta">© {currentYear} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
