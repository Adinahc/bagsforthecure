import React from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { Document, Page } from 'react-pdf/dist/entry.noworker';
import styled from 'styled-components';
require('./normalize.css');
require('./skeleton.css');

const { 
  changeFullpageSlide, 
} = Fullpage;

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const TopNavStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  position: fixed;
  text-align: right;
  top: 0px;
  width: 100%;
  z-index: 10;
`;

const H1 = styled.h1`
  color: #000000;
`; 

const H2 = styled.h2`
  color: #000000;
`; 

const Content = styled.div`
  bottom: 0px;
  color: #ffffff;
  height: 400px;
  left: 0;
  margin: auto;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  valign: ceneter;
  width: 800px;
`;

const ContentText = styled.div`
  color: #000000;
  text-align: left
`;

const H3 = styled.h3` 
  color: #000000;
  font-size: 24px;
  font-weight: bolder;
`
const pStyle1 = {
  backgroundImage: 'url("./imgs/DiveInnCornHole.jpg")',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat, repeat',
};

const slides = [
  <Slide> Slide 1 </Slide>,
  <Slide> Slide 3 </Slide>
];
fullPageOptions.slides = slides;
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
      }
    };
  }

  render() {
    const goToTop = changeFullpageSlide.bind(null, 0);
    const goToTraining = changeFullpageSlide.bind(null, 1);
    const goToExperience = changeFullpageSlide.bind(null, 2);
    const goToContact = changeFullpageSlide.bind(null, 3);
    const goToDetails = changeFullpageSlide.bind(null, 4);
    const goToTheDiveInn = changeFullpageSlide.bind(null, 5);

    const topNav = (
      <TopNavStyle>
        <span onClick={goToTop}>
          <button>Home</button>
        </span>
        <span onClick={goToDetails}>
          <button>Details</button>
        </span>  
        <span onClick={goToTraining}>
          <button>LLS Mission</button>
        </span>
        <span onClick={goToExperience}>
          <button>Prizes</button>
        </span>
        <span onClick={goToTheDiveInn}>
          <button>Dive Inn</button>
        </span>    
             
        <span onClick={goToContact}>
          <button>Contact</button>
        </span>        
      </TopNavStyle>
    );

    const verticalSlides = [
      <Slide style={pStyle1}>
        <Content>
          <H1>BAGS FOR THE CURE</H1>
          <H3>A funraising event benefiting The Leukemia and Lymphoma Society</H3>
          <H3>If you like fun and hate cancer, come join us!</H3>
          <H3>April 28, 2018 @ Dive Inn: 1380 S Broadway</H3>
          <input type="button" value="Details" /> <input type="button" value="Register" />
          {/*<ContentText>
          Come have some fun in the sun and join us for Bags for the Cure, a Corn-Hole Tournament benefiting The Leukemia & Lymphoma Society (LLS). What better way to help fund the cure for cancer then to come out then to show off your corn hole skills, and enjoy the drink & food specials during the event. Tournament participants will receive their first draft on the house and entry into our raffle for prizes. 
          </ContentText> */}
        </Content>
      </Slide>,
      <Slide style={{backgroundColor: '#7d8084'}}>
        <p>LLS Mission</p>
        <Document
          file="LLSMissionFacts.pdf"
        >
          <Page pageNumber="1" />
        </Document>
      </Slide>,
      <Slide style={{backgroundColor: '#7d8084'}}>
        <p>Raffle Prizes</p>
        <Content>
          <h2>A big THANK YOU for our donors!</h2>
          <h3>What can I win from the raffle?</h3>
          <ContentText>
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
          </ContentText>
        </Content>       
      </Slide>,
      <Slide style={{backgroundColor: '#7d8084'}}>
        <p>CONTACT</p>
        <Content>
          <form action="mailto:bagsforthecure@gmail.com">
            <input type="submit" />
          </form>  
        </Content>
      </Slide>,
      <Slide style={{backgroundColor: '#7d8084'}}>
        <p>About</p>
        <Content>
        </Content>
      </Slide>,
      <Slide style={{backgroundColor: '#7d8084'}}>
        <p>Drinks</p>
        <Content>
        </Content>
    </Slide>
    ];

    fullPageOptions.slides = verticalSlides;

    return (
      <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
        {topNav}
      </Fullpage>
    );
  }
}

export default App;
