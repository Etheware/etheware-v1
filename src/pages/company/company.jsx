import React from 'react';
import { CTA, Navbar } from '../../components';
import { Blog, Features, Footer } from '../../containers';
import Textbox from '../../components/textBox/textBox';


const Company = () => {
  return (
      <div className='contact'>  
        <Navbar />
        <Textbox  
            title={"Who Are We?"}
            text={"Etheware was founded in 2021 with a mission to create a fundamentally unique software company that not only delivers the best products, but is always ahead in learning and utilizing the latest technology. Our passion for building great products reflects in everything we do - the methodology we employ, the development process we follow and every line of code we build. We believe in keeping things simple and maintaining transparency. At Etheware, we advocate a client-centric approach and take full ownership of each project. What sets us apart as an organization is our dedication to quality by applying Agile approach and showing integrity with full accountability."}
        />
        <CTA />
        <Features />
        <Blog />
        <Footer />
      </div>
  );
}

export default Company;