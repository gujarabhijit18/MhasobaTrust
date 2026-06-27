import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../components/common/SectionTitle'
import { galleryItems } from '../../data/gallery'
import { FaTimes } from 'react-icons/fa'

const categories = ['All', 'Events', 'Community', 'Celebration', 'Education', 'Women', 'Food']

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="page page-gallery">
      <section className="section gallery-hero bg-soft">
        <div className="container">
          <SectionTitle eyebrow="Gallery" title="A visual archive of our community work and celebrations." />
          <p>Browse images from our events, initiatives and shared community moments.</p>
        </div>
      </section>

      <section className="section container">
        <div className="filter-row wrap">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <motion.article
              key={item.id}
              className="gallery-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="gallery-overlay">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="lightbox-backdrop" onClick={() => setSelectedItem(null)}>
          <motion.div
            className="lightbox-panel"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <button type="button" className="lightbox-close" onClick={() => setSelectedItem(null)}>
              <FaTimes />
            </button>
            <div className="lightbox-image" style={{ backgroundImage: `url(${selectedItem.image})` }} />
            <div className="lightbox-content">
              <span className="eyebrow">{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <p>Explore the visual story behind this event and our shared celebration.</p>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}

export default Gallery
