function StatsCard({ value, label }) {
  return (
    <div className="stats-card">
      <p className="stats-value">{value.toLocaleString()}</p>
      <p className="stats-label">{label}</p>
    </div>
  )
}

export default StatsCard
