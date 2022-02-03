import React from "react";
import { Feature } from "../../components";
import './info.css';

const Info = () => {
    return ( 
        <div className="info" id='services'>
            <div className="feature">
                <Feature title="Etheware brings the future." />
            </div>
            <div className="heading">
                <h1 className="gradient-text">With Etheware, the possibilities are beyond your imagination</h1>  
            </div>
            <p>Explore More Technologies</p>
            <div className="container">     
                <Feature title='Product Engineering' text="Turn your plans into world renowned products with our end-to-end product development services and consultation in every phase."/>
                <Feature title='Mobile App Development' text='Launch your enterprise in the mobile app industry and be the leader of the trends changing the world. Learn how our solutions can advance your plans.'/>
                <Feature title='Web Development' text='Choose from our high-end and exquisitely robust website development services that are custom tailored to your specific enterprise needs.' />
            </div>
        </div>
    )
}

export default Info;
