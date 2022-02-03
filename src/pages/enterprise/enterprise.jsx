import React from 'react';
import { CTA, Hero, Navbar } from '../../components';
import { Features, Footer, Info } from '../../containers';
import './enterprise.css';


const Enterprise = () => {
  return (
      <div className='enterprise'>   
        <Navbar />
        <div className='page'>
            <Hero 
                topline={'Enterprise'}
                title={'Web Development'}
                subtitle={'&'}
                titleTwo={'Product Engineering'}
                body={'Explore our Application Development, Blockchain, AI, and DevOp Solutions best suited for Enterprises'}
                paragraph={"Etheware efficiently builds the solutions that are on forefront of tommorow. We turn plans into products. What's your plan?"}

            />
            {/* <h3>NEXT-GENERATION INTEGRATIONS</h3>
            <h1>You Dream It, Etheware builds it.</h1>
            <p>Design high-ranking professional websites, widgets, and databases to suit your business needs.</p> */} 
            <Info />     
            <CTA />
            <Features />
        </div>   
        <Footer />
      </div>
  );
}

export default Enterprise;