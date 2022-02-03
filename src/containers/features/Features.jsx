import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Social Networking',
    text: 'We help businesses to increase their visibility with online marketing, digital media solutions and SEO strategies.',
  },
  {
    title: 'Education & eLearning',
    text: 'A full spectrum of Learning Management Systems (LMS) and customized eLearning application development services.',
  },
  {
    title: 'Logistic & Inspection',
    text: 'We provide our customers with software systems as well as solutions for real-time online access and track and trace, which integrate with their existing systems.',
  },
  {
    title: 'Retail & Commerce',
    text: 'We provide solutions including designing, developing, supporting, hosting and maintaining E-commerce platforms.',
  },
  {
    title: 'Finance & Investments',
    text: 'Using innovative technological solutions, we help finance companies provide faster and more efficient services to their customers.',
  },
  
];

const Features = () => (
  <div className="features" id="capabilities">
    <div className="features-heading">
        <p>Implement Your Plans</p>
      <h1 className="gradient__text">The Future is Now For Those Who Realize It. No matter the industry, we provide the tools necessary for the visionaries of tommorow. Step into Future Today & Make it Happen. </h1>     
      <h2>Request early access to get started.</h2>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;