import React from 'react'
import './hero.css'
import Video from '../../assets/earth.mp4'

function Hero({ topline, title, subtitle, titleTwo, body, paragraph }) {
    return (
        <div className='hero__container'> 
            <div className='hero'>
                <video className='videoTag' autoPlay loop muted>
                    <source src={Video} type='video/mp4' id='home'/>
                </video>
            </div>
            <div className='hero__content'>
                <h3>{topline}</h3>
                <h1>{title}</h1>
                <h2>{subtitle} </h2>
                <h1>{titleTwo}</h1>
                <h2>{body}</h2>
                <p>{paragraph}</p>
            </div>
            
        </div>
    )
}

export default Hero
