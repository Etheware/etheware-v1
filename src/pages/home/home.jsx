import React from 'react';
import { Brand, CTA, Navbar } from '../../components';
import { Blog, Capabilities, Features, Footer, Header, Info } from '../../containers';
import './home.css';

const Home = () => {
  return (
      <div className='home'>
        <Navbar />
        <Header /> 
        <Brand />
        <Info />     
        <Features />
        <Capabilities />
        <CTA />
        <Blog />
        <Footer />
      </div>
  );
}

export default Home;
