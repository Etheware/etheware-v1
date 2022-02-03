import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './header.css'
import People from '../../assets/people.png';
import AI from '../../assets/ai.png';
import './header.css';

function Header() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o6g6ssl', 'template_joow3xo', form.current, 'user_Nv6WEeTowVFjmAASEGfpj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
    return ( 
        <div className="header" id="home">
            <div className="header__content">
                <h1 className="gradient__text">
                    Let's build something amazing. You dream it, we build it.
                </h1>
                
                <p>Browse online and get Specialist help, free delivery and more. Save an extra 5% on Etheware services with an email access Card through Feb 31. Only at Etheware.
                Our passion for building great products reflects in everything we do - methodology we employ, development process we follow and every line of code we build. We believe in keeping things simple and maintaining transparency. </p>
                <h2>Etheware builds solutions that are on forefront of tommorow. We turn plans into industry leading products. What's your plan?</h2>
                <div className="header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button" name="email" onClick={sendEmail}>Get Started</button>
                </div>
                <div className="header-content__people">
                    <img src={People} alt='2,416 people'/>
                    <p>1,670 people have requested access in the last 48 hours</p>
                </div>
            </div>
            <div className="header__image">
                <img src={AI} alt='ai' />
            </div>
        </div>
    )
}

export default Header;
