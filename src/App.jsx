import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import FrequentlyQuestionsSection from "./components/FrequentlyQuestionsSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection"
import WorkflowSection from "./components/WorkflowSection"

import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        {/* Add padding-top to account for fixed navbar */}
        <div className="pt-24">
          <section id="home">
            <HeroSection />
          </section>
          <section id="features">
            <FeatureSection />
          </section>
          <section id="workflow">
            <WorkflowSection />
          </section>
          <section id="pricing">
            <PricingSection />
          </section>
          <section id="faq">
            <FrequentlyQuestionsSection />
          </section>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App