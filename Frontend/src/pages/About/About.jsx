import SectionTitle from '../../components/common/SectionTitle'
import { teamMembers } from '../../data/team'
import { recognitions } from '../../data/recognition'
import { motion } from 'framer-motion'

function About() {
  return (
    <main className="page page-about">
      <section className="section about-hero bg-soft">
        <div className="container grid-2 gap-40 align-center">
          <div>
            <SectionTitle eyebrow="About Us" title="A legacy of trust, transparency, and inclusive impact." />
            <p>
              Founded to bridge gaps in education, healthcare and livelihoods, Mhasoba Trust operates with the
              conviction that every family deserves access to dignity, guidance and sustainable support.
            </p>
          </div>
          <div className="about-hero-card">
            <p className="eyebrow">Founder Story</p>
            <h3>From a small village beginning to a regional support network.</h3>
            <p>
              Our founder started with one health camp and a few volunteers. Today, the trust reaches thousands
              through programs that are built around local needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="grid-2 gap-40 core-grid">
          <div>
            <SectionTitle eyebrow="Core Values" title="What guides every program we deliver." />
            <ul className="feature-list">
              <li>Community-led solutions with dignity and respect.</li>
              <li>Transparent reporting and progress measurement.</li>
              <li>Inclusive events designed for women, children, elders and families.</li>
              <li>Partnerships that amplify resources and reach.</li>
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Future Plans" title="Expanding local programs into a stronger regional network." />
            <p>
              In the coming years we will scale our education centers, launch mobile medical vans, and build
              vocational training hubs for youth and women.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <span>2024</span>
                <p>Started two new education outreach sites.</p>
              </div>
              <div className="timeline-item">
                <span>2025</span>
                <p>Expanded health camp support across three districts.</p>
              </div>
              <div className="timeline-item">
                <span>2026</span>
                <p>Launch of the women empowerment leadership academy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-team bg-soft">
        <div className="container">
          <SectionTitle eyebrow="Team" title="The people driving our trust forward." />
          <div className="team-grid">
            {teamMembers.map((member) => (
              <motion.article
                key={member.id}
                className="team-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="team-image" style={{ backgroundImage: `url(${member.image})` }} />
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="subtle">{member.title}</p>
                  <p>{member.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Achievements" title="Recognition for strong results and lasting partnerships." />
        <div className="achievement-grid">
          {recognitions.map((item) => (
            <article key={item.id} className="achievement-card">
              <p>{item.title}</p>
              <span>{item.year}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
