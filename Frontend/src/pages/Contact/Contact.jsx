import { useState } from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import FAQAccordion from '../../components/common/FAQAccordion'
import Button from '../../components/common/Button'
import { faqItems } from '../../data/faq'
import { socialLinks } from '../../data/socialLinks'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const socialIcons = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page page-contact">
      <section className="section contact-hero bg-soft">
        <div className="container">
          <SectionTitle eyebrow="Contact" title="Reach out to join, support or learn more about our work." />
          <p>We are happy to help you take the next step as a donor, partner, volunteer, or supporter.</p>
        </div>
      </section>

      <section className="section container grid-2 gap-40 contact-grid">
        <div>
          <SectionTitle eyebrow="Contact Information" title="Get in touch with our trust office." />
          <div className="contact-card">
            <div className="contact-info-item">
              <FaMapMarkerAlt />
              <div>
                <strong>Address</strong>
                <p>म्हसोबाची वाडी आरडी, म्हसोबाची वाडी, खरवडे, महाराष्ट्र ४१२११५</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt />
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaEnvelope />
              <div>
                <strong>Email</strong>
                <p>info@mhasobatrust.org</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div>
                <strong>Office Hours</strong>
                <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="social-row">
              <span>Follow us</span>
              <div className="social-icons">
                {socialLinks.map((item) => {
                  const Icon = socialIcons[item.icon] || FaEnvelope
                  return (
                    <a key={item.id} href={item.url} target="_blank" rel="noreferrer" aria-label={item.label}>
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <SectionTitle eyebrow="Send a Message" title="We will reply within 24 hours." />
          <form className="form-grid" onSubmit={handleSubmit}>
            <label>
              Name
              <input required type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input required type="email" placeholder="name@example.com" />
            </label>
            <label>
              Phone
              <input required type="tel" placeholder="+91 98765 43210" />
            </label>
            <label>
              Subject
              <input required type="text" placeholder="Reason for contacting" />
            </label>
            <label className="full-width">
              Message
              <textarea required placeholder="Your message" rows="5" />
            </label>
            <Button type="submit">Send Message</Button>
            {submitted && <p className="success-message">Your message has been sent successfully.</p>}
          </form>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Location" title="Visit us or see our office location." />
        <div className="map-card">
          <iframe
            title="Mhasoba Trust Office"
            src="https://maps.google.com/maps?q=pune%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Frequently Asked Questions" title="Answers to the questions we hear most." />
        <FAQAccordion items={faqItems} />
      </section>
    </main>
  )
}

export default Contact
