import React from "react";
import "./works.css";
import ChatApp from "../assets/ChatApp.png";
import WeatherApp from "../assets/WeatherApp.png";
import LoginForm from "../assets/LoginForm.png";
import { SeeMoreButton } from "../StyledComponents/styles";
import { primarycolor } from "../StyledComponents/theme";
import { data } from "../../data";

const Works = ({handleNavigate}) => {
  const workDesc =
    "I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skill and experience to  help bussiness achieve their goals and create a strong mind presence";
  const ProjectList = data.ProjectList.slice(0,3);

  
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>

      <div className="worksImgs">
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
      <div
        className="seemorebtn"
        onClick={()=>{handleNavigate('/projects')}
        }
      >
        <SeeMoreButton  text="See More Projects" />
      </div>
    </section>
  );
};

export default Works;
