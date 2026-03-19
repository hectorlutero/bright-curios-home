import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Framework from './components/Framework/Framework'
import Trap from './components/Trap/Trap'
import Carousel from './components/Carousel/Carousel'
import Blog from './components/Blog/Blog'
import Founders from './components/Founders/Founders'
import Security from './components/Security/Security'
import ROICalculator from './components/ROICalculator/ROICalculator'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

function AppContent() {
  return (
    <div className="app">
      <Background />
      <Header />
      <main>
        <Hero />
        <Framework />
        <Trap />
        <Carousel />
        <Blog />
        <Security />
        <ROICalculator />
        <Founders />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
