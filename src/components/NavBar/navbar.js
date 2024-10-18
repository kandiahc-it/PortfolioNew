import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import contactImg from '../assets/contact.png';
import menu from '../assets/menu.png';

const NavBar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
        <img src={Logo} alt="" className="logo"/>
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
          <Link activeClass='active' to='' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Services</Link>
          
        </div>
        <button className="desktopMenubtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView();
        }}>
            <img src={contactImg} alt="" className='desktopImg'/>Contact Me
        </button>



        <img src={menu} alt="" className="mobMenu" onClick={()=> setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={()=> setShowMenu(false)}>Services</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={()=> setShowMenu(false)}>Contact</Link>
          
        </div>
    
    </nav>
  )
}

export default NavBar