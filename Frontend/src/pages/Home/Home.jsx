import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'
import StatsCard from '../../components/common/StatsCard'
import { events } from '../../data/events'
import { testimonials } from '../../data/testimonials'
import { recognitions } from '../../data/recognition'
import { partners } from '../../data/partners'
import { stats } from '../../data/stats'
import { templeSchedule, templeScheduleLabels } from '../../data/schedule'

function Home() {
  const { language } = useLanguage()
  const featured = events.slice(0, 2)

  const labels = templeScheduleLabels[language]

  const getScheduleText = (schedule) => {
    return schedule.map((item) => {
      const activity = language === 'en' ? item.activity : item.activityMr
      return `${item.time} ${activity}`
    }).join(' • ')
  }

  const heroText = {
    en: {
      eyebrow: 'Temple Schedule',
      title: 'Sacred rituals, daily worship, and community service.',
      description: 'Join our temple ceremonies, Aarti, Naivedya and Maha Puja programs throughout the year.',
    },
    mr: {
      eyebrow: 'मंदिराचे वेळापत्रक',
      title: 'श्रद्धेने सांभाळलेले मंदिर, दिनचर्या पूजन आणि समुदाय सेवा.',
      description: 'महालक्ष्मी मंदिरासाठी चालणारा मेला, आरती, नैवेद्य आणि महापूजांच्या कार्यक्रमांसाठी येथे माहिती मिळवा.',
    },
  }

  return (
    <main className="page page-home">
      <section className="home-hero section-hero home-hero-temple" style={{ backgroundImage: 'url(https://shreemhasobadevasthan.org/wp-content/uploads/2023/04/Home-hero.jpg)' }}>
        <div className="hero-copy container">
          <p className="eyebrow">{heroText[language].eyebrow}</p>
          <h1>{heroText[language].title}</h1>
          <p className="hero-description">
            {heroText[language].description}
          </p>
          <div className="hero-actions">
            <Button as={Link} to="/contact">{language === 'en' ? 'Book a Visit' : 'भेट बुक करा'}</Button>
            <Button variant="secondary" as={Link} to="/events">{language === 'en' ? 'View Temple Events' : 'मंदिर कार्यक्रम पहा'}</Button>
          </div>
        </div>
      </section>

      {/* <section className="section container">
        <div className="grid-2 gap-40 about-grid">
          <div>
            <SectionTitle
              eyebrow="About the Trust"
              title="A community-first NGO that delivers compassionate programs with dignity."
              description="We design scalable outreach solutions focused on health, education and long-term empowerment across rural and urban communities."
            />
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <FaHandsHelping className="icon-large" />
              <h3>Mission</h3>
              <p>To create equitable access to education, healthcare and livelihood opportunities for underserved families.</p>
            </article>
            <article className="info-card">
              <FaHeart className="icon-large" />
              <h3>Vision</h3>
              <p>Healthy, empowered communities where every individual can grow, learn, and belong.</p>
            </article>
            <article className="info-card">
              <FaCalendarAlt className="icon-large" />
              <h3>Objectives</h3>
              <p>Develop trusted partnerships, support grassroots programs, and deliver high-impact events every quarter.</p>
            </article>
            <article className="info-card">
              <FaAward className="icon-large" />
              <h3>Values</h3>
              <p>Transparency, empathy, inclusivity, and measurable outcomes guide every initiative.</p>
            </article>
          </div>
        </div>
      </section> */}

      <section className="section section-highlight bg-soft">
        <div className="container grid-2 gap-40 align-center">
          <div>
            <SectionTitle eyebrow="Featured Events" title="Upcoming programs making immediate impact." />
            {featured.map((event) => (
              <motion.article
                key={event.id}
                className="event-feature"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="event-content">
                  <span className="event-pill">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-meta">
                    <span>{event.date}</span>
                    <span>{event.venue}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="trust-highlight-card">
            <p className="eyebrow">{language === 'en' ? 'Temple Daily Rituals' : 'मंदिर दैनिक पूजन'}</p>
            <h3>{language === 'en' ? 'Sacred ceremonies throughout the day and special celebrations.' : 'संपूर्ण दिवसभर पवित्र समारोह व विशेष उत्सव.'}</h3>
            <p>{labels.description}</p>
            <div className="schedule-block">
              <div className="schedule-item">
                <span>{labels.daily}</span>
                <p>{getScheduleText(templeSchedule.daily)}</p>
              </div>
              <div className="schedule-item">
                <span>{labels.paurnima}</span>
                <p>{getScheduleText(templeSchedule.paurnima)}</p>
              </div>
              <div className="schedule-item">
                <span>{labels.annual}</span>
                <p>{getScheduleText(templeSchedule.annual)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Impact in Numbers" title="Real progress across every initiative." />
        <div className="stats-grid">
          {stats.map((item) => (
            <StatsCard key={item.id} value={item.value} label={item.label} />
          ))}
        </div>
      </section>

      <section className="section section-testimonials bg-soft">
        <div className="container">
          <SectionTitle eyebrow="Testimonials" title="What our volunteers and beneficiaries say." />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <motion.article
                key={item.id}
                className="testimonial-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <p>“{item.quote}”</p>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Recognition" title="Awards, partnerships, and community credibility." />
        <div className="recognition-grid">
          {recognitions.map((item) => (
            <article key={item.id} className="recognition-card">
              <p>{item.title}</p>
              <span>{item.year}</span>
            </article>
          ))}
        </div>

        <div className="partners-block">
          <p className="eyebrow">Partners</p>
          <div className="partner-list">
            {partners.map((partner) => (
              <span key={partner.id} className="partner-pill">{partner.name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Get involved with our next outreach program.</h2>
            <p>Join as a volunteer, sponsor an event or donate to create stronger community outcomes.</p>
          </div>
          <Button as={Link} to="/contact">Contact Us</Button>
        </div>
      </section>
    </main>
  )
}

export default Home
