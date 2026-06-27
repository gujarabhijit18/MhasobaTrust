import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BackToTop from './components/layout/BackToTop'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Events from './pages/Events/Events'
import Donation from './pages/Donation/Donation'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
