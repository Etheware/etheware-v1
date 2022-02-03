import React from 'react';
import { Hero, Navbar } from '../../components';
import { Features, Footer, Info } from '../../containers';
import Textbox from '../../components/textBox/textBox';


const CapabilitiesPage = () => {
  return (
      <div className='contact'>  

        <Navbar />
        <Textbox  
            title={"The Power of The Mind"}
            text={`"When you are truly clear about what you want, the whole universe stands on tiptoe waiting to assist you in miraculous and amazing ways to manifest your dream or intention." - Constance Arnold`}
        />
        <Features />        
        <Hero
            src={'../../assets/earth.mp4'}
            topline={'Etheware Solution'}
            title={'Application Development, Blockchain Development, AI, and DevOp Solutions'}
            body={'The Future is Now. '}
            paragraph={"No matter the level of expertise the solution needs, Etheware will guide you from start to finish in the creation. Contact Etheware to begin your project. "}
        />
        <Info />    
        <Footer />
      </div>
  );
}

export default CapabilitiesPage;