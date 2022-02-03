import React from 'react';
import capabilitiesImage from '../../assets/capabilities.png';
import { Boxes } from '../../components';
import './capabilities.css';

const Capabilities = () => (
  <div className="capabilities" id="capabilities">
    <div className="capabilities-image">
      <img src={capabilitiesImage} alt="capabilities" />
    </div>
    <div className="capabilities-content">
      <Boxes />
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Turn your concept into reality with our expert solutions and scale your brand. With Etheware, you can believe your plans will succeed.</p>
      <h3>Contact Etheware to Get Started</h3>
    </div>
  </div>
);

export default Capabilities;