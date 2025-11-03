import React from 'react'
import './Clients.css'
import logo1 from '/assets/logo.png'

const Clients = () => {
  return (
    <section className="clients container">
      <h2 className='heading'>Clients I Have Worked With</h2>
      <div className="slider-container">
        <div className="logo-slider">
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
        {/* Duplicates */}
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
          <img src={logo1} alt="" className="logo" />
        </div>
      </div>
        
    </section>
  )
}

export default Clients