import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ProblemSection from './components/ProblemSection'
import About from './components/About'
import EngagementOptions from './components/EngagementOptions'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="ses-page">
      <Header />
      <main>
        <Hero />
        <Services />
        <ProblemSection />
        <About />
        <EngagementOptions />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
