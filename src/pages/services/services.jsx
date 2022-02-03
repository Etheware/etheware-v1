import React from 'react';
import {  CTA , Navbar } from '../../components';
import { Capabilities, Features, Footer, Info } from '../../containers';

const Services = () => {
  return (
      <div className='contact'>  
        <Navbar />
        <Info /> 
        <Features />
        <Capabilities />
        <CTA />
        <Footer />
      </div>
  );
}

export default Services;