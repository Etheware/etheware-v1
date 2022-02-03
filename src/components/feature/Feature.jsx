import React from 'react';
import './Feature.css'

const Feature = ({ title , text }) => {
  return ( 
      <div className="feature__container">
          <div className="feature-container__title">
              <div />
              <h1>{title}</h1>
          </div>
          <div className="feature-container__text">
              <p>{text}</p>
          </div>
      </div>
  )
}

export default Feature;
