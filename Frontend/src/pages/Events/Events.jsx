import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'
import Modal from '../../components/common/Modal'
import { events } from '../../data/events'

const filters = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'live', label: 'Live' },
  { id: 'completed', label: 'Completed' },
]

function EventCard({ event, onRegister }) {
  return (
    <motion.article className="event-card" whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <div className="event-thumb" style={{ backgroundImage: `url(${event.image})` }}>
        {event.status === 'live' && <span className="event-badge">Live</span>}
      </div>
      <div className="event-body">
        <span className="event-category">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className="event-details">
          <span>{event.date}</span>
          <span>{event.time}</span>
          <span>{event.venue}</span>
        </div>
        <div className="event-footer">
          <span>Organizer: {event.organizer}</span>
          {event.registrationRequired ? (
            <Button onClick={() => onRegister(event)}>Register Now</Button>
          ) : (
            <Button variant="secondary">View Details</Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function Events() {
  const [activeFilter, setActiveFilter] = useState('upcoming')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const filteredEvents = useMemo(
    () => events.filter((item) => item.status === activeFilter),
    [activeFilter],
  )

  const handleRegister = (event) => {
    setSelectedEvent(event)
    setFormSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main className="page page-events">
      <section className="section events-hero bg-soft">
        <div className="container">
          <SectionTitle eyebrow="Events" title="Discover our upcoming, live, and completed programs." />
          <p>Find the right engagement opportunity whether you want to join, support or learn more about our impact.</p>
        </div>
      </section>

      <section className="section container">
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="event-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onRegister={handleRegister} />
          ))}
        </div>
      </section>

      <Modal title={selectedEvent ? `Register for ${selectedEvent.title}` : 'Register'} open={Boolean(selectedEvent)} onClose={() => setSelectedEvent(null)}>
        {selectedEvent && (
          <div>
            <p className="modal-subtitle">Complete the form below to join our event.</p>
            <form className="form-grid" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input required type="text" placeholder="Your full name" />
              </label>
              <label>
                Email
                <input required type="email" placeholder="name@example.com" />
              </label>
              <label>
                Phone
                <input required type="tel" placeholder="+91 98765 43210" />
              </label>
              <label className="full-width">
                Message
                <textarea placeholder="Why would you like to join?" rows="4" />
              </label>
              <div className="modal-actions">
                <Button type="submit">Send Registration</Button>
                <Button type="button" variant="secondary" onClick={() => setSelectedEvent(null)}>
                  Close
                </Button>
              </div>
            </form>
            {formSubmitted && <p className="success-message">Thank you! Your registration request has been received.</p>}
          </div>
        )}
      </Modal>
    </main>
  )
}

export default Events
