import './textBox.css'
import React from 'react'

const Textbox = ({ title, text, image }) => {
    return (
        <div className='info__container'>
            <div className='info'>
                <h2>{title}</h2>
                <h1>{text}</h1>
                <h1>{image}</h1>
            </div>
            
        </div>
    )
}

export default Textbox;
