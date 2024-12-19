import React, { useRef } from 'react';
import './contacts.css';
import emailjs from '@emailjs/browser';
import { GitHub, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material';
import { primarycolor } from '../StyledComponents/theme';
import { SeeMoreButton } from '../StyledComponents/styles';
import PersonIcon from '@mui/icons-material/Person';
const Contact = () => {
  const socialLinks=[
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
  ]



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_787hz3g',  // Your service ID
      'template_igiixqh', // Your template ID (make sure this is correct)
      form.current,
      'geQsi1WNvWziOkfei' // Your public key
    )
    .then((result) => {
        console.log('SUCCESS!');
        e.target.reset();
        alert("Email sent !");
    },
    (error) => {
        console.log('FAILED...', error.text);
        alert("Failed to send email.");
    });
  };

  return (
    <section id='contactPage'>
      <div className='contact'>
        <h1 className='contactPageTitle'><PersonIcon sx={{height:"3rem",width:"3rem",marginTop:"25px"}}/> Contact Me</h1>
        <span className='contactDesc'>Please fill out the form to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' required />
          <input type='email' className='email' placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name='message' rows="5" placeholder='Your message' required></textarea>
          <button type='submit' value='Send' className='submitBtn'><SeeMoreButton text="Submit"/></button>
        </form>
      </div>
      <div className='contactright'>
        <div className='contactrightText'>Contact Details</div>
            {socialLinks.map((item,index)=>(
              <a href={item.link} target='_blank' key={index} className='full'>
                <div className='icon'>
                  <item.img sx={{fill:`${primarycolor}`}}/>
                </div>
                <div className='contactininfor'>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </a>
            ))}
      </div>
    </section>
  )
}

export default Contact;
