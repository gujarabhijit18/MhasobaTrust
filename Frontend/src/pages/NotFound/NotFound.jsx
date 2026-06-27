import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'

function NotFound() {
  return (
    <main className="page page-notfound">
      <section className="section container notfound-card">
        <SectionTitle eyebrow="Page not found" title="We couldn't find the page you're looking for." />
        <p>Please return to the home page and explore our events, donation opportunities, and community stories.</p>
        <Button as={Link} to="/">Return Home</Button>
      </section>
    </main>
  )
}

export default NotFound
