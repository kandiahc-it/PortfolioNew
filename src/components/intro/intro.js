import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../assets/hireme.png";
import bg from "../assets/Frame 1.png";
import frame from "../assets/frameCircle.png";
import frame2 from "../assets/frameCircle2.png";
import Typewriter from "typewriter-effect";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import styled from "styled-components";
import { primarycolor } from "../StyledComponents/theme";
import { yellow } from "@mui/material/colors";
import { Tooltip } from "@mui/material";
import { data } from "../../data";

const Intro = () => {
  const name = data.name;
  const skillDesc = data.skillDesc;
   const socialLinks = data.socialLinksHero;
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">{name}</span>
          <br />
        </span>

        <span className="introDesc">
          <Typewriter
            options={{
              strings: data.TechKnown,
              autoStart: true,
              loop: true,
            }}
          />
          <br />
        </span>
        <p className="introPara">{skillDesc}</p>
        <Link smooth={true} to="contactPage">
          <button className="btn" style={{ cursor: "pointer" }}>
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <div className="hero">
        <div className="heroimgcontaine">
          <div className="downloadicon">
            <a href={data.Resume} target="_blank" rel="noopener noreferrer">
              <DownloadRoundedIcon
                className="downloadiconin"
                style={{ fill: "black" }}
              />
              <h2>CV</h2>
            </a>
          </div>
          {/* <img src={frame} alt="" className="bgcicle" /> */}
          <img src={bg} alt="photo" className="bg" />
          <div className ='glow-circle'></div>
          {/* <img src={frame2} alt="" className="bgcircle2" /> */}
        </div>
        <div className="heroIcons">
          {socialLinks.map((item, index) => (
            <div key={index} className="iconBox">
              <Tooltip title={item.head} placement="right-start">
                <a href={item.link} target="_blank">
                  <item.icon sx={{ fill: `${primarycolor}` }} />
                </a>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
