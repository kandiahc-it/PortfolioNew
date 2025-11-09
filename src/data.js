import { GitHub, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import ChatApp from "./components/assets/ChatApp.png";
// import WeatherApp from "./components/assets/WeatherApp.png";
// import LoginForm from "./components/assets/LoginForm.png";
// import RestaurantDesign from "./components/assets/RestaurantDesign.png";
// import Calculator from "./components/assets/Calculator.png";
// import UIDesign from "./components/assets/ui-design.png";
// import webDesign from "./components/assets/web-designer.png";
// import AppDesign from "./components/assets/app-design.png";
// import pdfquerychatbot from "./components/assets/PDF_query_chatbot.png"
// import bookRecky from "./components/assets/BookRecky.png"
export const data = {
    name : "Kandiah",
    TechKnown : ["Web Designer", "Web Developer","App Developer"],
    Resume :"https://drive.google.com/file/d/1E5rIubeovefoTTVxhwCN174e7uojr02L/view?usp=sharing",
    skillDesc :
    " I specialize in full-stack web development with a strong focus on modern, interactive, and responsive UI design. I excel in frontend technologies such as HTML, CSS, JavaScript, and React, and am highly proficient in backend development using the MERN stack (MongoDB, Express, React, Node.js). Alongside web development, I’m expanding my expertise into mobile app development with React Native and Flutter, enabling me to craft cross-platform experiences. I’m also exploring the exciting fields of AI and machine learning to integrate intelligent features into my projects. Continuously learning and evolving, I’m passionate about building seamless digital experiences across web, mobile, and intelligent systems.",
      socialLinksHero :[
    {
      head: "Instagram",
      icon: InstagramIcon,
      link: "https://instagram.com/kandiah_ck_01",
    },
    {
      head: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://linkedin.com/in/kandiah-c-609328290/",
    },
    {
      head: "GitHub",
      icon: GitHubIcon,
      link: "https://github.com/kandiahc-it",
    },
    {
      head: "Mail",
      icon: MailOutlineIcon,
      link: 'mailto:"kandiahc2006@gmail.com"',
    },
    {
      head: "Phone",
      icon: LocalPhoneIcon,
      link: "tel:9342283409",
    },
  ],
    educationDetails : [
    {
      name: "Rosemary School,Palayamkottai", // Name of the University/School
      year: "2019 - 2021", // Year pursued
      degree: "SSLC", // Enter the Degree Master/Diploma/Bachelor
      domain: "Computer Science", // Which Stream You studied
    },
    {
      name: "Rosemary School,Palaymkottai", // Name of the University/School
      year: "2021 - 2023", // Year pursued
      degree: "HSC", // Enter the Degree Master/Diploma/Bachelor
      domain: "Computer Science", // Which Stream You studied
    },
    {
      name: "Chennai Institute of Technology", // Name of the University/School
      year: "2023 - 2027", // Year pursued
      degree: "Bachelor of Technology", // Enter the Degree Master/Diploma/Bachelor
      domain: "Information Technology", // Which Stream You studied
    },
  ],
  SkillsInTechnologies : [
    {name:"HTML",percentage:"90%"},
    {name:"React",percentage:"85%"},
    {name:"Express",percentage:"25%"},
    {name:"Node Js",percentage:"45%"},
    {name:"CSS",percentage:"85%"},
    {name:"React Native",percentage:"35%"},
  ],
  socialLinks : [
      {
        title:"Instagram",
        img:Instagram,
        text:"kandiah_ck_01",
        link:"https://instagram.com/kandiah_ck_01"
      },
      {
        title:"Github",
        img:GitHub,
        text:"kandiah-it",
        link:"https://github.com/kandiahc-it"
      },
      {
        title:"LinkedIn",
        img:LinkedIn,
        text:"kandiahc",
        link:"https://linkedin.com/in/kandiah-c-609328290/"
      },
      {
        title:"Phone",
        img:Phone,
        text:"9342283409",
        link:"tel:9342283409"
      },
      {
        title:"Mail",
        img:Mail,
        text:"kandiahc2006@gmail.com",
        link:"mailto:'kandiahc2006@gmail.com'"
      },
    ],
    skillList : [
      {
        img: require("./components/assets/ui-design.png") ,
        heading: "UI/UX Design",
        para: "Design intuitive user interfaces with Figma, delivering user-friendly designs that enhance the overall user experience.",
      },
      {
        img:  require("./components/assets/web-designer.png") ,
        heading: "Web Developer",
        para: "Build responsive and dynamic web applications using React, HTML,and CSS, leveraging frontend development skills to create seamless and engaging user experiences.",
      },
      {
        img: require("./components/assets/app-design.png") ,
        heading: "App Development",
        para: "Design and Develop Intuitive, visually engaging mobile applications with user-friendly interfaces and seamless experiences.",
      },
    ],
    ProjectList : [
        {
          head:"BookRecky",
          img:require("./components/assets/BookRecky.png"),
          desc:"BOOKRECKY is a cross-platform React Native app combining book recommendations with social features. Users share book photos, explore picks, and build reading lists. With Zustand for state and secure auth, plus cron jobs to keep servers active, it delivers modern UI/UX and strong performance.",
          link:"https://github.com/kandiahc-it/BookReckyApp"
        },
        {
          head:"RAG Application",
          img:require("./components/assets/PDF_query_chatbot.png"),
          desc:"A RAG-based PDF chatbot that extracts and stores content in a vector database, enabling LLM-powered, context-aware answers with support for multiple PDF uploads",
          link:"https://github.com/kandiahc-it/Pdf_Querying_ChatBot"
        },
        {
          head:"ChatApp",
          img:require("./components/assets/ChatApp.png"),
          desc:"This Chat Application is a full-stack project built using the MERN stack. It enables real-time messaging with secure user authentication, clean UI, and message synchronization. The app demonstrates seamless performance, responsiveness, and a modern user experience. Perfect for showcasing skills in React, Node.js, MongoDB, and Express.",
          link:"https://github.com/kandiahc-it/mern_chat_application-onChat-"
        },
        {
          head:"Weather App",
          img:require("./components/assets/WeatherApp.png"),
          desc:"This Weather Application is a responsive web app built using React and the OpenWeather API. It provides real-time weather updates, including temperature, humidity, and weather conditions, for any location. With a clean and intuitive user interface, this app ensures an enhanced user experience while showcasing skills in API integration, React, and responsive design.",
          link:"https://github.com/kandiahc-it/Weather-App"
        },
        {
          head:"Login Form",
          img:require("./components/assets/LoginForm.png"),
          desc:"A responsive Login and Signup Form built with React, featuring Formik for form handling, Yup for validation, and Toastify for user-friendly notifications. It ensures clean UI and real-time validation for a smooth user experience.",
          link:"https://github.com/kandiahc-it/Login-Signup-Page-formik-yup-react"
        },
        {
          head:"Restaurant App Design",
          img:require("./components/assets/RestaurantDesign.png"),
          desc:"A modern restaurant app design featuring a personalized profile page, stunning dish showcases, and an easy-to-use cart for smooth ordering.",
          link:"https://github.com/kandiahc-it/Codsoft/blob/main/restaruant%20interface.fig"
        },
        {
          head:"Simple Calculator",
          img:require("./components/assets/Calculator.png"),
          desc:"A clean and modern calculator UI featuring dynamic buttons and a responsive display for real-time calculation updates. Built with fundamental HTML, CSS, and JavaScript, the design ensures smooth functionality and an intuitive user experience, making it a sleek and practical tool for quick computations.",
          link:"https://github.com/kandiahc-it/calculator-project"
        }
      ],
}

