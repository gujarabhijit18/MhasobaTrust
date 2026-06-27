import { useState } from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'
import { donationOptions } from '../../data/donations'

function DonationCard({ item }) {
  return (
    <article className="donation-card">
      <div className="donation-thumb" style={{ backgroundImage: `url(${item.image})` }} />
      <div className="donation-content">
        <span className="eyebrow">{item.title}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

function Donation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page page-donation">
      <section className="section section-hero donation-hero bg-soft">
        <div className="container grid-2 gap-40 align-center">
          <div>
            <SectionTitle eyebrow="Donation" title="Support the causes that matter most to your community." />
            <p>
              Our campaigns are structured for transparency and impact. Choose a program and donate with confidence.
            </p>
            <div className="hero-values">
              <div>
                <strong>Direct impact</strong>
                <p>Every rupee supports people in need within 30 days.</p>
              </div>
              <div>
                <strong>Trusted governance</strong>
                <p>Progress is shared through regular updates and stories.</p>
              </div>
            </div>
          </div>
          <div className="donation-hero-card">
            <p className="eyebrow">Why Donate?</p>
            <h3>Help us deliver meals, books, and medical care to families and students.</h3>
            <ul className="feature-list">
              <li>Flexible support for education, health, women and senior care.</li>
              <li>Secure donation process with demo confirmation.</li>
              <li>Transparent fund allocation and follow-up stories.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Donation Categories" title="Choose a cause you want to uplift." />
        <div className="donation-grid">
          {donationOptions.map((item) => (
            <DonationCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container grid-2 gap-40 align-center">
          <div>
            <SectionTitle eyebrow="Donate Now" title="Complete the donation form to send support." />
            <p>Fill out your details and we will follow up with a secure donation confirmation.</p>
          </div>
          <div className="donation-form-card">
            <form className="form-grid" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input required type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input required type="email" placeholder="name@example.com" />
              </label>
              <label>
                Mobile Number
                <input required type="tel" placeholder="+91 98765 43210" />
              </label>
              <label>
                Contribution
                <input required type="number" min="1" placeholder="Enter contribution" />
              </label>
              <label>
                Donation Purpose
                <select required>
                  <option value="">Select Purpose</option>
                  <option value="education">Education</option>
                  <option value="medical">Medical Help</option>
                  <option value="food">Food Distribution</option>
                  <option value="general">General Donation</option>
                </select>
              </label>
              <label className="full-width">
                Message
                <textarea placeholder="Any note for our team" rows="4" />
              </label>
              <Button type="submit">Donate Now</Button>
              {submitted && <p className="success-message">Donation request submitted successfully.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Donation
