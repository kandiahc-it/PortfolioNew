import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from'../assets/hireme.png';
import bg from '../assets/Frame 1.png';
const Intro = () => {
  return (
    <section id="intro">
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Kandiah</span><br/>Website Designer</span>
        <p className='introPara'>I am a skilled web designer and an interactive UI designer</p>
        <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire Me</button></Link>
    </div>
    <img src={bg} alt='photo' className='bg'/>
    </section>
  )
}

export default Intro