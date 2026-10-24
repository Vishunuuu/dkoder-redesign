import BackgroundFX from './components/BackgroundFX'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Features from './components/Features'
import PracticeLab from './components/PracticeLab'
import ExamPrep from './components/ExamPrep'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <BackgroundFX />
      <Loader />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Stats />
          <Features />
          <PracticeLab />
          <ExamPrep />
          <Pricing />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  )
}
