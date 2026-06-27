import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function FAQAccordion({ items }) {
  const [active, setActive] = useState(items[0]?.id)

  return (
    <div className="faq-list">
      {items.map((item) => {
        const open = item.id === active
        return (
          <div key={item.id} className={`faq-item ${open ? 'open' : ''}`}>
            <button type="button" className="faq-question" onClick={() => setActive(open ? null : item.id)}>
              <span>{item.question}</span>
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {open && <p className="faq-answer">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion
