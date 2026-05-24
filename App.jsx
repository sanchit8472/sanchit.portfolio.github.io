import { useEffect } from 'react'
import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // Re-run on route changes / dynamic content
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#04070d] min-h-screen relative">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Interests />
        <Divider />
        <Education />
        <Divider />
        <Certifications />
        <Divider />
        <Leadership />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
