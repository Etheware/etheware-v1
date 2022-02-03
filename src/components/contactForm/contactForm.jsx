import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


class ContactForm extends Component {

  render() {
    return (
        <Form style={{ margin: '2rem', width: '90%', height: '750px',
        padding: '12px', backgroundColor:' #0259', alignItems: 'center'
        }}>
            <FormGroup style={{ color:'black' ,flexDirection: 'column', padding: '12px', display: 'flex'}}>
                <Label for="name">Full Name:
                    <Input 
                        type="text" 
                        name='name'
                        onChange={this.handleChange}
                        placeholder="Type your full name"
                    />
                </Label>
                <Label for="company"> Your Company Name:
                    <Input 
                        type="text" 
                        name='company'
                        onChange={this.handleChange}
                        placeholder="Company Name"
                    />
                </Label>
                <Label for="email">Contact Email:
                    <Input 
                        type="email" 
                        name='email'
                        onChange={this.handleChange}
                        placeholder="company@gmail.com"
                    />
                </Label>
                <Label for="phone">Contact Number:
                    <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        onChange={this.handleChange}
                        placeholder="Ex. 000.000.0000"
                    />
                </Label>

                <Label for="location">Your Current Location:
                    <Input 
                        type="location" 
                        name='location'
                        onChange={this.handleChange}
                        placeholder="Ex. San Diego, CA"
                    />
                </Label>

                <Label for="message">Message:
                    <Input 
                        type="textarea" 
                        name='message'
                        onChange={this.handleChange}
                        placeholder="Tell us about your inquiry"
                    />
                </Label>

                <Label for="files">Select a file:
                    <Input 
                        type="file" 
                        id="file"
                        name='file'
                        onChange={this.handleChange}
                    />
                </Label>

                <Label for="purpose" >Purpose:
                    <select name="purpose" id="purpose" style={{ color: 'black' }}>
                        <option value="business">Business</option>
                        <option value="Career">Careers</option>
                        <option value="information">Information</option>
                        <option value="other">Other</option>
                    </select>
                </Label>
                <Label for="budget">Your Budget:
                    <select name="budget" id="budget" style={{ color: 'black' }}>
                        <option value="one">$10,000 to $50,000</option>
                        <option value="two">$50,000 to $100,000</option>
                        <option value="three">$100,000+</option>
                    </select>
                </Label>
                    <p>Our Minimum Project Engagement starts at 10,000 USD</p>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    )

  }
}
export default ContactForm;