import React from 'react'
import './skills.css';
import UIDesign from '../assets/ui-design.png';
import webDesign from '../assets/web-designer.png';
import AppDesign from '../assets/app-design.png';
const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled in web design and interactive UI design, with expertise in creating visually appealing, user-centric websites and interfaces. Additionally, I have strong proficiency in HTML, CSS, React, and frontend development, allowing me to build seamless and responsive web applications.</span>
        <div className='skillBars'><div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
        
        <div className='skillBarText'>
            <h2>UI/UX design</h2>
            <p>Design intuitive user interfaces with Figma, delivering user-friendly designs that enhance the overall user experience.</p>
        </div></div>
        <div className='skillBar'>
            <img src={webDesign} alt='WebDesign' className='skillBarImg'/>
        
        <div className='skillBarText'>
            <h2>Web Developer</h2>
            <p>Build responsive and dynamic web applications using React, HTML, and CSS, leveraging frontend development skills to create seamless and engaging user experiences.</p>
        </div></div>
        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
        
        <div className='skillBarText'>
            <h2>App Design</h2>
            <p>Design intuitive and visually engaging mobile applications, specializing in creating user-friendly interfaces and seamless user experiences.</p>
        </div></div>
        </div>
    </section>
  )
}

export default skills