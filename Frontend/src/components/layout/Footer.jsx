import { socialLinks } from '../../data/socialLinks'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const socials = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-card">
          <p className="eyebrow">About Mhasoba Trust</p>
          <h3>Transforming hope into lasting impact</h3>
          <p>
            Dedicated to health, education, and sustainable community programs, our trust builds trust with
            transparent action and measurable results.
          </p>
        </div>

        <div className="footer-card">
          <p className="eyebrow">Quick Links</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Donation</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div className="footer-card">
          <p className="eyebrow">Contact</p>
          <p>123 Harmony Avenue, Pune</p>
          <p>+91 98765 43210</p>
          <p>info@mhasobatrust.org</p>
        </div>

        <div className="footer-card newsletter-card">
          <p className="eyebrow">Newsletter</p>
          <p>Get monthly updates on events and impact stories.</p>
          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Newsletter email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            {socialLinks.map((item) => {
              const Icon = socials[item.icon]
              return (
                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© 2026 Mhasoba Trust. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
