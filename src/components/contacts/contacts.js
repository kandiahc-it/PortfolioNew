import React, { useRef } from 'react';
import './contacts.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <section className='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' required />
          <input type='email' className='email' placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name='message' rows="5" placeholder='Your message' required></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
