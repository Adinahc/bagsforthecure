import React from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { Document, Page } from 'react-pdf/dist/entry.noworker';
import {Navbar, Nav, NavItem, Image, Grid, Row, Col} from 'react-bootstrap'
import { diveInnStyle, floatLeft, floatRight, fullWidth, gridCenterAlign, gridLeftAlign, hidden, homeStyle, navBar, prizesStyle , registerStyle, rowTopMargin, slideBackground, visible, DetailsContentText, H2, H3, Success } from './Slide.Styles';

require('./normalize.css');
require('./skeleton.css');
require('./App.css');

const { 
  changeFullpageSlide, 
} = Fullpage;

const pageNumber = 1;

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 0,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 300,
  hideScrollBars: true,
  enableArrowKeys: true
};

class App extends React.Component {
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

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
    this.setState({ 
      successMessageVisibility: visible,
      formVisibility: hidden
    }); 
    const payload = {
      teamName: this.state.name,
      email: this.state.email,
      phone: this.state.phoneNumber
    }
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );    
    changeFullpageSlide.bind(null, 5);
    console.log(data);
    fetch('/api/sendMail', {
      method: 'POST',
      body: data,
    }).then(function(response) {
    
    /*console.log(this);
      this.setState({ 
        successMessageVisibility: Visible,
        formVisibility: Hidden
        });*/
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
      },
      successMessageVisibility: hidden,
      formVisibility: visible     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const goToTop = changeFullpageSlide.bind(null, 0);
    const goToDetails = changeFullpageSlide.bind(null, 1);
    const goToPrizes= changeFullpageSlide.bind(null, 2);
    const goToLLSMission = changeFullpageSlide.bind(null, 3);
    const goToTheDiveInn = changeFullpageSlide.bind(null, 4);
    const goToRegister = changeFullpageSlide.bind(null, 5);

    const responsiveNavBar = (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onSelect={goToTop} eventKey={1}>
              Home
            </NavItem>
            <NavItem onSelect={goToDetails} eventKey={2}>
              Details
            </NavItem>
            <NavItem onSelect={goToPrizes} eventKey={3}>
              Prizes
            </NavItem>
            <NavItem onSelect={goToLLSMission} eventKey={4}>
              LLS Mission
            </NavItem>            
            <NavItem onSelect={goToTheDiveInn} eventKey={5}>
              Dive Inn
            </NavItem>
            <NavItem onSelect={goToRegister} eventKey={6}>
              Register
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ); 

    const ResponsiveSlides = [
      <Slide style={homeStyle}>
        <Grid>
          <Row>
            <Col xs={12} md={12} style={gridCenterAlign}>
              <Image responsive src="./imgs/BagsForTheCure-Logo.png" style={fullWidth} />
              <H3>A funraising event benefiting The Leukemia and Lymphoma Society</H3>
              <H3>If you like fun and hate cancer, come join us!</H3>
              <H3>April 28, 2018: 12:00PM<br/>@ Dive Inn: 1380 S Broadway</H3>
              <a href="https://www.lls.org/" target="_blank" rel="noopener noreferrer">
                <Image responsive src="./imgs/LLSLogo.jpg" style={floatLeft} alt="LLS Logo" />
              </a>
              <a href="https://www.facebook.com/diveinndenver/" target="_blank" rel="noopener noreferrer">
                <Image responsive src="./imgs/DiveInnLogo.jpg" style={floatRight} alt="Dive Inn Logo" />
              </a>
            </Col>
          </Row>
        </Grid>  
      </Slide>,
      <Slide style={slideBackground}>
        <Grid>
          <Row>
            <Col xs={12} md={12} style={gridLeftAlign}>
              <Image responsive src="./imgs/LLSMWLogo.jpg" style={floatRight} />
              Come have some fun in the sun and join us for Bags for the Cure, a Corn-Hole Tournament benefiting The Leukemia & Lymphoma Society (LLS). Tournament participants will receive their first draft on the house and entries into our raffle for prizes. 
              <br /><br />
              <H3>Tournament details:</H3>
              <DetailsContentText> 
                2 person teams, double elimination, starts promptly at 1pm!<br />
                Total of 24 teams, so sign up quick!<br />
                1st Prize: We're working on something awesome<br />
                2nd Prize: 2 x $50 gift cards to Argonaut<br />
                3rd Prize: 2 x $25 gift cards to the Dive Inn<br />
              </DetailsContentText>
              <H3>How do I participate?</H3>
              <DetailsContentText> 
                To join the tournament and secure a spot for your 2-person team, make a donation of $50 or more to 
                <a href="http://pages.mwoy.org/rm/denver18/cclarkston" target="_blank" rel="noopener noreferrer"> my donation page</a> and register via our <a onClick={goToRegister}>registration form</a>. 
              </DetailsContentText> 
              <H3>What if I don't play corn hole?</H3>
                <DetailsContentText> 
                  Come cheer on your friends and enjoy the food & drink specials. Each donation of $20 will get you an entry into our raffle!
                  <br />
                  If you can't make it, please consider making a donation on <a href="http://pages.mwoy.org/rm/denver18/cclarkston">my donation page</a>.  Any amount helps us towards our goal
                  <br />
                  Any questions, please send a message to bagsforthecure@gmail.com
                </DetailsContentText>
            </Col>
          </Row>
        </Grid>
      </Slide>,       
      <Slide style={prizesStyle}>
        <Grid>
          <Row>
            <Col xs={12} md={12} style={gridCenterAlign}>
              <H2>A big THANK YOU for our donors!</H2>
              <H3>What can I win from the raffle?</H3>
              <ul>
                <li>A gift card for Sobo 151</li>
                <li>A gift card to Snooze eatery</li>
                <li>A gift card to Oblio's Pizzeria</li>
                <li>A gift card to Ceramic in the City</li>
                <li>A gift card to Denver Escape Room</li>
                <li>A massage or facial from Hand & Stone Massage and Facial Spa</li>
                <li>A one month membership at the Uptown 9Round</li>
                <li>A pair of tickets to a Nuggets home game during the 2018-2019 season</li>
                <li>Check back as we add to this list!</li>
              </ul>
            </Col>
          </Row>
        </Grid>    
      </Slide>,
      <Slide style={slideBackground}>
        <Grid>
          <Row style={{rowTopMargin}}>
            <Col xs={12} md={12} style={gridLeftAlign}>
              The mission of The Leukemia & Lymphoma Society (LLS) is: Cure leukemia, lymphoma, Hodgkin's disease and myeloma, and improve the quality of life of patients and their families.
              <br />
              <a href="LLSMissionFacts.pdf" target="_blank">
                <Document
                    file="LLSMissionFacts.pdf"
                    onLoadSuccess={this.onDocumentLoad}
                >
                  <Page pageNumber={pageNumber} />
                </Document> 
              </a>
            </Col>
          </Row>
        </Grid>
      </Slide>,
      <Slide style={diveInnStyle}>
        <Grid>
          <Row style={{rowTopMargin}}>
            <Col xs={12} md={12} style={gridCenterAlign}>
              <H2>The Dive Inn</H2>
              <H3>Denver's #1 Neighborhood Bar. Come and see for yourself.</H3>
              <a href="./imgs/DiveInn365Specials2018.jpg" target="_blank">
                <Image src="./imgs/DiveInn365Specials2018ThumbNail.jpg" responsive style={floatLeft} />
              </a>
              <a href="./imgs/DiveInnMoscowMule2017.jpg" target="_blank">  
                <Image src="./imgs/DiveInnMoscowMule2017ThumbNail.jpg" responsive style={floatRight} />
              </a>
            </Col>
          </Row>
        </Grid>
      </Slide>,
      <Slide style={registerStyle}>
        <Grid>
          <Row>
            <Col xs={12} md={12} style={gridLeftAlign}>
              <H2>Register Your Team!</H2>  
              To register your 2-person team, please submit the form below and make a <b>Tax-Deductible</b> $50 donation to my <a href=''>official campainge donation page</a>. An email will be sent once your registration has been confirmed.<br />
              All donations go directly to The Leukemia & Lymphoma Society<br />
              Thank you!!!
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
              <button type="submit">Send</button>
            </form>
            </div>  
            <div style={this.state.successMessageVisibility}>
              <Success><br />Thank you for registering. Once your donation has been confirmed, we will send you a confirmation email!</Success>
            </div>  
            </Col>
          </Row>
        </Grid>
      </Slide>,
  ];

    fullPageOptions.slides = ResponsiveSlides;

    return (
        <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
          {responsiveNavBar}
        </Fullpage>

    );
  }
}

export default App;
