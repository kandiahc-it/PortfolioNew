import React from "react";
import "./moreprojects.css";
import { SeeMoreButton } from "../StyledComponents/styles";
import { primarycolor } from "../StyledComponents/theme";
import ChatApp from "../assets/ChatApp.png";
import WeatherApp from "../assets/WeatherApp.png";
import LoginForm from "../assets/LoginForm.png";
import RestaurantDesign from "../assets/RestaurantDesign.png";
import Calculator from "../assets/Calculator.png";
import { Tooltip } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

import { data } from "../../data.js";
const MoreProjects = () => {
  const ProjectList = data.ProjectList;

  const navigate = useNavigate();
  return (
    <section id="moreprojects">
      <div className="moreprojectnav">
        <Tooltip
          title="Back"
          arrow
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <ArrowBackIosNewIcon />
        </Tooltip>
        <h2 className="worksTitle">My Projects</h2>
      </div>

      <div className="worksImgsporj">
        {ProjectList.map((item, index) => (
          <div
            className={
              index % 2 === 0 ? "worksContainer" : "worksContainerRight"
            }
            key={index}
          >
            <div className="ImgBox">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={item.img} className="img" loading="lazy"/>{" "}
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
};

export default MoreProjects;
