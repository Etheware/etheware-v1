import React from 'react';
import { ContactUs, Navbar } from '../../components';
import { Blog, Footer, Info } from '../../containers';
import './contact.css';


const Contact = () => {
  return (
      <div className='contact'>   
        <Navbar />
        <Info />    
        {/* <div className='image'>
          <img src={EthewareLogo} alt='' />
        </div> */}
        <div className='header'>
          <ContactUs />
        </div>
        <Blog />
        <Footer />
      </div>
      
  );
}

export default Contact;