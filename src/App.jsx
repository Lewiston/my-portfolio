
import './App.css'
import About from './components/About/About'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>
      <Header />
      <div className="app">
        <Hero />
        <Clients />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  
  )
}

export default App
