import React from 'react'
import './Skill.css'
import UIDesign from '/assets/ui-design.png'
import webDesign from '/assets/website-design.png'
import AppDesign from '/assets/app-design.png'

const Skill = () => {
  return (
    <section id="skill">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolores iusto expedita enim. Laborum error eveniet neque, quam odit perferendis cupiditate sint beatae sequi quibusdam quas illo perspiciatis voluptatem eius.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="ui-design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quae praesentium pariatur asperiores error distinctio ipsam odit optio iusto sapiente modi, recusandae nam assumenda sed libero blanditiis consequatur? Quidem, voluptate.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDesign} alt="web-design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quia, ad explicabo itaque neque, voluptatem nemo exercitationem accusantium, esse nostrum voluptate adipisci nisi architecto atque nobis possimus! Libero, doloribus quibusdam?</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="app design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex deleniti quis, tenetur maiores rerum voluptates magnam autem natus, dolore aliquam quo minima doloribus consequuntur ut ipsa ad ab nam eveniet.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill