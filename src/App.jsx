
import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Skill from './components/Skill/Skill'
import Works from './components/Works/Works'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  
  )
}

export default App
