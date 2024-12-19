import React from 'react'
import './Eduskills.css';
import SchoolIcon from '@mui/icons-material/School';
import { primarycolor } from '../StyledComponents/theme';
const Eduskills = () => {
  const SkillDescription="For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.";

  const SkillsInTechnologies=[
    {name:"HTML",percentage:"90%"},
    {name:"React",percentage:"85%"},
    {name:"Angular",percentage:"25%"},
    {name:"Node Js",percentage:"45%"},
  ];

  const educationDetails=[
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
  ];
  return (
    <section id='Eduskills'>
        <span className='eduskillsTitle'><SchoolIcon sx={{height:"3rem",width:"3rem"}}/>Education & Skills</span>
        <div className='edufoot'> 
        <div className='eduskillsLeft' data-aos='fade-up'  data-aos-duration="1500">
        
            <div className='line'></div>  
            {educationDetails.map((item,index)=>(
              <div key={index} className='educontainer' data-aos-delay='50' data-aos='fade-up'>
                <div className='circle'></div>
                <div className='eduContaninerItems'>
                  <div className=''>{item.name}</div>
                  <div className=''>{item.degree} - {item.domain}</div>
                  <div className='Yearedu'>{item.year}</div>
                </div>
            </div>
           ))}
          
        </div>
        <div className='eduskillsRight' data-aos='fade-up'  data-aos-duration="1500">
        <div className='Describe'>Skills</div>
        <div className='PercentList'>
          {SkillsInTechnologies.map((item,index)=>(
            <div key={index} className='InerBox' data-aos='fade-up'  data-aos-duration="1500">
              <div className='skillName' >{item.name}</div>
              <div className='containerbg'><div className='containerIn' style={{background:`${primarycolor}`,width:item.percentage}}></div></div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  )
}

export default Eduskills