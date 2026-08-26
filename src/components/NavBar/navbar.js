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
        <div className="navBtnContainer">
          <a href="https://github.com/kandiahc-it/Portfolio-in-React" target="_blank" rel="noopener noreferrer" className="desktopGitHubStarLink">
            <button className="desktopGitHubStarBtn">
              <svg className="starSymbolIcon" viewBox="0 0 16 16" width="14" height="14" style={{ fill: 'currentColor' }}>
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 11.234l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.274a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
              </svg>
              <span>Star</span>
              <svg className="githubStarIcon" viewBox="0 0 16 16" width="16" height="16" style={{ fill: 'currentColor' }}>
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.64.01 1.13.01 1.29 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
              </svg>
            </button>
          </a>
          <Link smooth={true} to='contactPage'>
            <button className="desktopMenubtn" >
                <img src={contactImg} alt="" className='desktopImg'/>
                <p>Contact Me</p>
            </button>
          </Link>
        </div>


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