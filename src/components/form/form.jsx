import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Label } from 'reactstrap';

export default function ContactUs() {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6g6ssl', 'template_joow3xo', form.current, 'user_Nv6WEeTowVFjmAASEGfpj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

    return(
        <div>
            <div className="container">
                <h1 className='row pt-5 mx-auto '>Get In Touch</h1>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-8 form-group mx-auto">
                            <p>Your Name</p>
                            <input type="text" className="form-control" placeholder="Full Name" name="name"/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                             <p>Company Name</p>
                            <input type="text" className="form-control" placeholder="Company Name" name="company-name"/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <p>Contact Number</p>
                            <input type="text" className="form-control" placeholder="Contact Number" name="tel"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p>Email Address</p>
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p>Your Message</p>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Tell us about your inquiry" name="message"></textarea>
                        </div>
                        <Label for="purpose" className='row pt-5 mx-auto' >Purpose:
                            <select name="purpose" id="purpose" style={{ color: 'black' }}>
                                <option value="business">Business</option>
                                <option value="Career">Careers</option>
                                <option value="information">Information</option>
                                <option value="other">Other</option>
                            </select>
                        </Label>
                        <Label for="budget" className='row pt-8 mx-auto'>Your Budget:
                            <select name="budget" id="budget" style={{ color: 'black' }}>
                                <option value="one">$10,000 to $50,000</option>
                                <option value="two">$50,000 to $100,000</option>
                                <option value="three">$100,000+</option>
                            </select>
                        </Label>
                        <p>Our Minimum Project Engagement starts at 10,000 USD</p>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}