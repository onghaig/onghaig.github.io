import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme'
import Resume from './components/resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Blog/>
    </>
  )
}

export default App
