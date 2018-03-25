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

const DetailsLogo = styled.img`
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
  valign: center;
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
`;

const HomePageLogo = styled.img`
  cursor: pointer;
  width: '200';
`;

const homeStyle = {
  backgroundImage: 'url("./imgs/DiveInnCornHole.jpg")',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat, repeat'
};

const SlideBackground = {
  backgroundColor: 'rgba(183, 188, 192, 255)',
  marginTop:'0px'
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
    const goToRegister = changeFullpageSlide.bind(null, 3);
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
             
        <span onClick={goToRegister}>
          <button>Register</button>
        </span>        
      </TopNavStyle>
    );

    const verticalSlides = [
      <Slide style={homeStyle}>
        <Content>
          <H1>BAGS FOR THE CURE</H1>
          <H3>A funraising event benefiting The Leukemia and Lymphoma Society</H3>
          <H3>If you like fun and hate cancer, come join us!</H3>
          <H3>April 28, 2018 @ Dive Inn: 1380 S Broadway</H3>
          <input type="button" value="Details" /> <input type="button" value="Register" /><br />
          <a href="https://www.lls.org/" target="_blank" rel="noopener noreferrer">
            <HomePageLogo src="./imgs/LLSLogo.jpg" alt="LLS Logo" />
          </a>
          <a href="https://www.facebook.com/diveinndenver/" target="_blank" rel="noopener noreferrer">
            <HomePageLogo src="./imgs/DiveInnLogo.jpg" alt="Dive Inn Logo" />
          </a>
        </Content>
      </Slide>,
      <Slide style={SlideBackground}>
        <p>LLS Mission</p>
        <Document
          file="LLSMissionFacts.pdf"
        >
          <Page pageNumber="1" />
        </Document>
      </Slide>,
      <Slide style={SlideBackground}>
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
      <Slide style={SlideBackground}>
        <p>Register</p>
        <Content>
          <form action="mailto:bagsforthecure@gmail.com">
            <input type="submit" />
          </form>  
        </Content>
      </Slide>,
      <Slide style={SlideBackground}>
        <p>Details</p>
        <Content>
          <DetailsLogo src="./imgs/LLSMWLogo.jpg" />
          <ContentText>
            Come have some fun in the sun and join us for Bags for the Cure, a Corn-Hole Tournament benefiting The Leukemia & Lymphoma Society (LLS). What better way to help fund the cure for cancer then to come out then to show off your corn hole skills, and enjoy the drink & food specials during the event. Tournament participants will receive their first draft on the house and entry into our raffle for prizes. 
            <br /><br />
            <H3>What is this?</H3> 
            <span style={{position: 'relative', top: '-25px'}}>A feel good fundraising event benefiting LLS, corn-hole tournament style.</span>

            <H3>Tournament details:</H3>
            2 person teams, double elimination, starts promptly at 1pm!<br />
            Total of 24 teams, so sign up quick!<br />
            1st Prize: We're working on something awesome<br />
            2nd Prize: 2 x $50 gift cards to Argonaut<br />
            3rd Prize: 2 x $25 gift cards to the Dive Inn<br />

            How do I participate?
            To join the tournament and secure a spot for your 2-person team make a donation of $50 or more to:
            http://pages.mwoy.org/rm/denver18/cclarkston 
            Don't forget to also add your team name in the comment!

            What if I don't play corn hole?
            Come cheer on your friends and enjoy the food & drink specials. Each donation of $20 will get you an entry into our raffle!
            The Dive Inn will be a supervised-kids friendly venue to 6pm.

            If you like fun and hate cancer, come join us!
            If you like fun, hate cancer, but can't make it, please consider making a donation. Any amount helps us towards our goal
            http://pages.mwoy.org/rm/denver18/cclarkston 

            Hope to see you there!

            Any questions, please send a message to bagsforthecure@gmail.com

            Teams so far:
            Bags of Fury
            Mike & Dan          
          </ContentText>
        </Content>
      </Slide>,
      <Slide style={{backgroundColor: 'rgba(183, 188, 192, 255)'}}>
        <p>The Dive Inn</p>
        <Content>
          <H2>
            The Dive Inn:<br />Denver's #1 Neighborhood Bar. Come and see for yourself. BYOD (Bring your own Dramamine for the boat)
          </H2>    
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
