import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import bg from '/assets/image.png'
import btnImg from '/assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='intoText'>I'm a <span className='introName'>Lewiston</span> <br />product designer & <br /> web developer</span>
            <p className="introPara">I am a skilled product designer & web developer with experience in creating <br /> visually appealing and user friendly digital products</p>
            <Link><button className="btn"><img className='btnImg' src={btnImg} alt="Hire me" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile image" className="bg" />
    </section>
  )
}

export default Intro