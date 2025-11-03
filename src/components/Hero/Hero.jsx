import React from 'react'
import './Hero.css'
import heroImage from '/assets/image.png'

const Hero = () => {
  return (
    <section className="hero container">
      <h2 className="hero-text">
        <span>Hi, I'm Lewiston</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error libero eligendi dolorem ab, qui incidunt, sequi, accusamus perspiciatis enim itaque placeat aliquid.
      </h2>
      <img src={heroImage} alt="" className='hero-image'/>
    </section>
  )
}

export default Hero