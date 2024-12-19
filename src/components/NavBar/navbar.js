import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import contactImg from '../assets/contact.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { primarycolor } from '../StyledComponents/theme';
const NavBar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
        <img src={Logo} alt="" className="logo" onClick={()=>{document.getElementById('intro').scrollIntoView()}}/>
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Services</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
          <Link activeClass='active' to='Eduskills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Skills</Link>
          
        </div>
        <Link smooth={true} to='contactPage'>
        <button className="desktopMenubtn" >
            <img src={contactImg} alt="" className='desktopImg'/>
            <p>Contact Me</p>
        </button>
</Link>


        <div className="mobMenu" onClick={()=> setShowMenu(!showMenu)}><MenuRoundedIcon sx={{fill:`${primarycolor}`}}/></div>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>Services</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='Eduskills' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={()=> setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={()=> setShowMenu(false)}>Contact</Link>
          
        </div>
    
    </nav>
  )
}

export default NavBar