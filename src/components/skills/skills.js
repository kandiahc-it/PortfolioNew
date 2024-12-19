import React from "react";
import "./skills.css";
import UIDesign from "../assets/ui-design.png";
import webDesign from "../assets/web-designer.png";
import AppDesign from "../assets/app-design.png";
import { primarycolor } from "../StyledComponents/theme";
const skills = () => {
    const skillDescAbove=" I am skilled in web design and interactive UI design, with expertise in creating visually appealing, user-centric websites and interfaces. Additionally, I have strong proficiency in HTML, CSS, React, and frontend development, allowing me to build seamless and responsive web applications.";
    const skillList = [
      {
        img: UIDesign ,
        heading: "UI/UX Design",
        para: "Design intuitive user interfaces with Figma, delivering user-friendly designs that enhance the overall user experience.",
      },
      {
        img:  webDesign ,
        heading: "Web Developer",
        para: "Build responsive and dynamic web applications using React, HTML,and CSS, leveraging frontend development skills to create seamless and engaging user experiences.",
      },
      {
        img: AppDesign ,
        heading: "App Design",
        para: "Design intuitive and visually engaging mobile applications,specializing in creating user-friendly interfaces and seamless user experiences.",
      },
    ];
  
  
  
    return (
    <section id="skills">
      <span className="skillTitle">What I do..</span>
      
      <div className="skillBars">
       {skillList.map((item,index)=>(
        <div className="skillBar" key={index}>
            <div className="skillBarimgContainer">
                <img src={item.img} className="skillBarImg"/>
            </div>    
            <div className="skillBarText">
                <h2>{item.heading}</h2>
                <p>{item.para}</p>
            </div>
            </div>
       ))} 
       
      </div>
    </section>
  );
};

export default skills;
