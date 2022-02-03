import React from 'react';
import Logo from './.././../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Step forward into the future, today.</h1>
    </div>

    <div className="gpt3__footer-btn">
    <p><a href="/contact">Start Your Project</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="gpt3_logo" />
        <p>Etheware LLC, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href="/careers">Careers</a></p>
        <p><a href="/brand-builder">Build Your Brand</a></p>
        <p><a href="/social-media">Social Media</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p><a href="/terms-and-conditions">Terms & Conditions</a></p>
        <p><a href="/privacy-polic">Privacy Policy</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get In Touch</h4>
        <p></p>
        <p>619-872-3038</p>
        <p>solutions@etheware.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Etheware.com. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;