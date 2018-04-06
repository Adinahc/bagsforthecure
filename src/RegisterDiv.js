import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { RingLoader } from 'react-spinners';
import { hidden, visible, Content, H2, Register } from './Slide.Styles';

class RegisterDiv extends React.Component {
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePhoneNumberChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }
    
  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }  
    
  handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true, formVisibility: hidden});
    axios.post('https://mailsendnode.azurewebsites.net/api/sendMail?' + 
      'name=' + this.state.name + '&' +
      'email=' + this.state.email + '&' + 
      'phone=' + this.state.phoneNumber)
      .then(res => {
        window.location = '/Success';
      }
    )
  }
      
  constructor(props) {
    super(props);  
    this.state = {
      email: '',
      formVisibility: visible,
      loading: false,
      name: '', 
      phone: '',     
    };
    this.handleSubmit = this.handleSubmit.bind(this); 
  }     
  
    render() {  
      return (
        <Register>
          <Grid>
            <Row>
              <Col>
                <Content>
                  <H2>Register Your Team!</H2>  
                  To register your 2-person team, please submit the form below and make a <b>Tax-Deductible</b> $50 donation to my <a href="http://pages.mwoy.org/rm/denver18/cclarkston" target="_blank" rel="noopener noreferrer">official campainge donation page</a>. An email will be sent once your registration has been confirmed.<br />
                  All donations go directly to The Leukemia & Lymphoma Society<br />
                  Thank you!!!<br /><br />
                  <RingLoader color={'#123abc'} loading={this.state.loading} />
                  <div style={this.state.formVisibility}>
                  <form className="contact-form" onSubmit={this.handleSubmit}>
                      <div className="form-field">
                          <label htmlFor="name">
                          <div className="label-content">Team Name:</div>
                          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
                          </label>
                      </div>
                      <div className="form-field">
                          <label htmlFor="email">
                          <div className="label-content">Email:</div>
                          <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} required />
                          </label>
                      </div>
                      <div className="form-field">
                          <label htmlFor="phonenumber">
                          <div className="label-content">Phone number:</div>
                          <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} required />
                          </label>
                      </div>
                      <Button type="submit">Send</Button>
                      </form>
                  </div>  
                </Content>
              </Col>
            </Row>
          </Grid>            
        </Register>

      );
    }
}
export default RegisterDiv;