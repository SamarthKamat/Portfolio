import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import JourneySection from './components/sections/JourneySection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'
import PortfolioChatbot from './components/PortfolioChatbot'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="bg-[#FAFAF8] dark:bg-[#0D0D0D] text-[#141414] dark:text-[#F5F5F4] transition-colors duration-300 min-h-screen">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <PortfolioChatbot darkMode={darkMode} />
    </div>
  )
}
