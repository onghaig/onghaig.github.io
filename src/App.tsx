// import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme'
import Resume from './components/resume'
import Sidebar from './components/sidebar'
import Projects from './components/projects'
import Contact from './components/contact'
import Skills from './components/skills'
import SkipToMain from './components/SkipToMain'
import BackToTop from './components/BackToTop'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  // Sync dark class with theme state
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    const root = document.documentElement
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light'
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    setTheme(newTheme)
  }

  return (
    <div className={`flex flex-col ${theme}`}>
      <SkipToMain />
      <Sidebar onThemeToggle={toggleTheme} theme={theme} />
      <main id="main-content" className="flex-auto lg:ml-32 flex flex-col" role="main" aria-label="Main content">
        <AboutMe />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}

export default App
