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

const Intro = () => {
  const name = "Kandiah";
  const skillDesc =
    " I specialize in web design and interactive UI development, with expertise in HTML, CSS, React, and frontend technologies. Currently, I’m enhancing my skills by learning the MERN stack. This allows me to build seamless, responsive applications with both frontend and backend integration.";
  const socialLinks = [
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
  ];

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
              strings: ["Web Designer", "Web Developer"],
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
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              <DownloadRoundedIcon
                className="downloadiconin"
                style={{ fill: "black" }}
              />
              <h2>CV</h2>
            </a>
          </div>
          <img src={frame} alt="" className="bgcicle" />
          <img src={bg} alt="photo" className="bg" />
          <img src={frame2} alt="" className="bgcircle2" />
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
