// import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme'
import Resume from './components/resume'
import Sidebar from './components/sidebar'
import Projects from './components/projects'
import Contact from './components/contact'
import Blog from './components/blog'
import Skills from './components/skills'
import MyFace from './components/myface'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <Sidebar/>
      <main className="flex-auto">
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Blog/>
      </main>
    </div>
  )
}

export default App
