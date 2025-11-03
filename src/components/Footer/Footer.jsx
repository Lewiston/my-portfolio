import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container container'>
        <small>Designed and coded with love</small>
        <ul>
          <li className='address'>Buea - Cameroon</li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">Dribbble</a></li>
          <li><a href="mailto:m11lewiston#@gmail.com">Gmail</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer