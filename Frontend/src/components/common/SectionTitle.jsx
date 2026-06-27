function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  )
}

export default SectionTitle
