import React from 'react'
import './moreprojects.css'
import { SeeMoreButton } from '../StyledComponents/styles'
import { primarycolor } from '../StyledComponents/theme'
import ChatApp from '../assets/ChatApp.png'
import WeatherApp from '../assets/WeatherApp.png'
import LoginForm from '../assets/LoginForm.png'
import RestaurantDesign from '../assets/RestaurantDesign.png'
import Calculator from '../assets/Calculator.png'
import {  Tooltip } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom'

const MoreProjects = () => {
    const ProjectList=[
        {
          head:"ChatApp",
          img:ChatApp,
          desc:"This Chat Application is a full-stack project built using the MERN stack. It enables real-time messaging with secure user authentication, clean UI, and message synchronization. The app demonstrates seamless performance, responsiveness, and a modern user experience. Perfect for showcasing skills in React, Node.js, MongoDB, and Express.",
          link:"https://github.com/kandiahc-it/mern_chat_application-onChat-"
        },
        {
          head:"Weather App",
          img:WeatherApp,
          desc:"This Weather Application is a responsive web app built using React and the OpenWeather API. It provides real-time weather updates, including temperature, humidity, and weather conditions, for any location. With a clean and intuitive user interface, this app ensures an enhanced user experience while showcasing skills in API integration, React, and responsive design.",
          link:"https://github.com/kandiahc-it/Weather-App"
        },
        {
          head:"Login Form",
          img:LoginForm,
          desc:"A responsive Login and Signup Form built with React, featuring Formik for form handling, Yup for validation, and Toastify for user-friendly notifications. It ensures clean UI and real-time validation for a smooth user experience.",
          link:"https://github.com/kandiahc-it/Login-Signup-Page-formik-yup-react"
        },
        {
          head:"Restaurant App Design",
          img:RestaurantDesign,
          desc:"A modern restaurant app design featuring a personalized profile page, stunning dish showcases, and an easy-to-use cart for smooth ordering.",
          link:"https://github.com/kandiahc-it/Codsoft/blob/main/restaruant%20interface.fig"
        },
        {
          head:"Simple Calculator",
          img:Calculator,
          desc:"A clean and modern calculator UI featuring dynamic buttons and a responsive display for real-time calculation updates. Built with fundamental HTML, CSS, and JavaScript, the design ensures smooth functionality and an intuitive user experience, making it a sleek and practical tool for quick computations.",
          link:"https://github.com/kandiahc-it/calculator-project"
        }
      ];


      const navigate=useNavigate();
  return (
    <section id="moreprojects">
      <div className="moreprojectnav">
        <Tooltip title="Back" arrow onClick={()=>{navigate('/')}} style={{cursor:"pointer"}}> 
          <ArrowBackIosNewIcon  />
        </Tooltip>
        <h2 className="worksTitle">My Projects</h2>
      </div>

      <div className="worksImgsporj">
        {ProjectList.map((item, index) => (
          <div
            className={index%2===0?"worksContainer":"worksContainerRight"}
            key={index}
            
          >
            <div className="ImgBox">
              <a href={item.link} target='_blank'  rel="noopener noreferrer">
                {" "}
                <img src={item.img} className="img" />{" "}
              </a>
            </div>
            <div className="worksRight">
              <h2 style={{ color: `${primarycolor}` }}>{item.head}</h2>
              <p>{item.desc}</p>
              <SeeMoreButton link={item.link} text="Explore" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoreProjects