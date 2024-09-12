import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Qualification from './Components/Qualification/Qualification'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Nav from './Components/NavBar/Nav'

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App