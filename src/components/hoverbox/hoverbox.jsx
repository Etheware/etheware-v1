import './hoverbox.css'
import React from 'react'
import Icon1 from '../../assets/icon1.svg';
import Icon2 from '../../assets/icon2.svg';
import Icon3 from '../../assets/icon3.svg';
import Icon4 from '../../assets/icon4.svg';
import Icon5 from '../../assets/icon5.svg';
import Icon6 from '../../assets/icon6.svg';



function Boxes() {
    return (
        <div className='box__container' id='services'>
                <div className='box__wrapper'>
                    <div className='boxCard'>
                        <img
                            src={Icon1}
                            alt='product-engineering'
                        />
                            <h2>{'Product Engineering'}</h2>
                            <p>{"Turn your plans into world renowned products with our end-to-end product development services."}</p>
                        </div>
                        
                        <div className='boxCard'>
                            <img
                                src={Icon4}
                                alt='mobile-apps'
                            />
                            <h2>{'Mobile App Development'}</h2>
                            <p>{'Launch yourself into the mobile app industry and lead the trends changing the world. Learn how our solutions can advance your enterprise.'}</p>
                        </div>
                        
                        <div className='boxCard'>
                            <img
                                src={Icon3}
                                alt='web-development'
                            />
                            <h2>{'Web Development'}</h2>
                            <p>{'Choose from our high-end and exquisitely robust website development services that are custom tailored to your specific enterprise needs.'}</p>
                        </div>
                        <div className='boxCard'>
                            <img
                                src={Icon2}
                                alt='blockchain'
                            />
                            <h2>{'Blockchain Technology'}</h2>
                            <p>{'Innovate with enterprise-class solutions that help you explore, develop and implement Blockchain services in your business.'}</p>
                        </div>
                        <div className='boxCard'>
                            <img
                                src={Icon5}
                                alt='dev-ops'
                            />
                            <h2>{'DevOps'}</h2>
                            <p>{'Launch your own private service for your enterprise using our DevOps solutions. Prioritize successful teamwork, transparent communication, and privacy.'}</p>
                        </div>
                        <div className='boxCard'>
                            <img
                                src={Icon6}
                                alt='artificial-intelligence'
                            />
                            <h2>{'Artificial Intelligence'}</h2>
                            <p>{'Accelerate your business with AI solutions to help you reduce costs, leverage algorithms, and boost productivity.'}</p>
                        </div> 
                </div>
        </div>
    )
}

export default Boxes
