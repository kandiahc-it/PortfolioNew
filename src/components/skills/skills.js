import React from "react";
import "./skills.css";
import UIDesign from "../assets/ui-design.png";
import webDesign from "../assets/web-designer.png";
import AppDesign from "../assets/app-design.png";
import { primarycolor } from "../StyledComponents/theme";
import { data } from "../../data";
const skills = () => {
    const skillDescAbove=" I am skilled in web design and interactive UI design, with expertise in creating visually appealing, user-centric websites and interfaces. Additionally, I have strong proficiency in HTML, CSS, React, and frontend development, allowing me to build seamless and responsive web applications.";
    const skillList = data.skillList;
  
  
  
    return (
    <section id="skills">
      <span className="skillTitle">What I do..</span>
      
      <div className="skillBars">
       {skillList.map((item,index)=>(
        <div className="skillBar" key={index}>
            <div className="skillBarimgContainer">
                <img src={item.img} className="skillBarImg" loading="lazy"/>
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
