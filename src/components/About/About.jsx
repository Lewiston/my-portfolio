import React from 'react';
import download_btn from '/assets/contact.png';
import './About.css'

const About = () => {
  return (
    <section className="about container">
      <div className="quote">
        <p className="quote-text">Libero consectetur enim iusto dolores veniam, deleniti assumenda harum iure fugit eum odit deserunt esse aliquid, recusandae officia eius animi quis qui!</p>
        <span>Jason Bourne, the movie</span>
      </div>

      <div className="about-me">
        <div className="my-journey">
          <h2 className='heading'>About My Journey</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, atque sed neque libero impedit aspernatur! Omnis iure distinctio quis nostrum id fugiat, reprehenderit blanditiis pariatur repellat, temporibus sint perferendis earum.
          Sapiente quas ab vero unde dignissimos ullam ipsa minima repudiandae eligendi voluptatibus, autem labore accusantium? Voluptates eveniet necessitatibus excepturi laborum. Animi possimus provident dignissimos tenetur. Voluptatum inventore distinctio id qui?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias quidem illum ab expedita suscipit rem placeat aut explicabo fuga nisi, quaerat porro sunt blanditiis facere ut ipsam corporis animi.</p>
        </div>
        <div className="my-journey">
          <h2 className='heading'>Where I am going</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, atque sed neque libero impedit aspernatur! Omnis iure distinctio quis nostrum id fugiat, reprehenderit blanditiis pariatur repellat, temporibus sint perferendis earum.
          Sapiente quas ab vero unde dignissimos ullam ipsa minima repudiandae eligendi voluptatibus, autem labore accusantium? Voluptates eveniet necessitatibus excepturi laborum. Animi possimus provident dignissimos tenetur. Voluptatum inventore distinctio id qui?</p>
        </div>
        <a href="#" className="cv">Download my CV</a>
      </div>
    </section>
  )
}

export default About