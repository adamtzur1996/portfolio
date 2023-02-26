import './contact.scss'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Calendar  from './images/Calendar.jpg'

function ContactMe() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

      function handleFormChange(event) {
        const { name, value } = event.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
      }

      function handleFormSubmit(event) {
        event.preventDefault();
        emailjs.send('service_3wgmm1e', 'template_rmqaugo', formState, 'user_1iahbWu9AjapFuphOgVXp')
          .then(() => {
            alert('Your message has been sent successfully!');
            setFormState({
              name: '',
              email: '',
              message: ''
            });
          }, () => {
            alert('There was an error sending your message. Please try again later.');
          });
      }

      
    return(
    <section className='contact-me-section' id='contact-section'>

         <div className='contact-header'>
            <h1>Let's Meet</h1>
            <img  src={Calendar} width="150px" />
            <p>Fill out the form below and I'll answer all your questions!</p>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formState.name} onChange={handleFormChange} required />
            </div>
            <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formState.email} onChange={handleFormChange} required />
            </div>
            <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formState.message} onChange={handleFormChange} required></textarea>
            </div>
            <button className='sbt-btn' type="submit">Send Message</button>
      </form>
    </section>

    )
}

export default ContactMe