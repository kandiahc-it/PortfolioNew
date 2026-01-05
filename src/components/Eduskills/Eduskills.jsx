import React from "react";
import "./Eduskills.css";
import SchoolIcon from "@mui/icons-material/School";
import { primarycolor } from "../StyledComponents/theme";
import { data } from "../../data";
const Eduskills = () => {
  const SkillDescription =
    "For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.";

  const SkillsInTechnologies = data.SkillsInTechnologies;

  const educationDetails = data.educationDetails;
  return (
    <section id="Eduskills">
      <span className="eduskillsTitle">
        <SchoolIcon sx={{ height: "3rem", width: "3rem" }} />
        Education & Skills
      </span>
      <div className="edufoot">
        <div
          className="eduskillsLeft"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="line"></div>
          {educationDetails.map((item, index) => (
            <div
              key={index}
              className="educontainer"
              data-aos-delay="50"
              data-aos="fade-up"
            >
              <div className="circle"></div>
              <div className="eduContaninerItems">
                <div className="">{item.name}</div>
                <div className="">
                  {item.degree} - {item.domain}
                </div>
                <div className="Yearedu">{item.year}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="eduskillsRight" data-aos="fade-up" data-aos-duration="1500">

          <div className="SkillsContainer">
            {SkillsInTechnologies.map((category, index) => (
              <div key={index} className="skillCategory" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="categoryTitle">{category.title}</h3>
                <div className="skillGrid">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skillWrapper">
                      <div className="skillBox">
                        <div className="skillIcon" style={{ color: "black" }}>{skill.icon}</div>
                      </div>
                      <span className="skillName">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Eduskills;
