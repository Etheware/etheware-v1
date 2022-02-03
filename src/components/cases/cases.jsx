import React from 'react';
import Image1 from '../../assets/rome.png';
import Image2 from '../../assets/bands.png'
import Image3 from '../../assets/gac.png';
import './cases.css'

const Cases = () => {
  return (
      <div className='cases__container'>
            <div className='image'>
                <img src={Image1} alt='rome' />
                <img src={Image2} alt='b-and-s' />
                <img src={Image3} alt='g-and-c' />
            </div>
        </div>

  );
}

export default Cases;
