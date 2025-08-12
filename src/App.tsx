// import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme'
import Resume from './components/resume'
import Sidebar from './components/sidebar'
import Projects from './components/projects'
import Contact from './components/contact'
import Skills from './components/skills'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col">
      <Sidebar/>
      <main className="flex-auto lg:ml-32 flex flex-col">
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
