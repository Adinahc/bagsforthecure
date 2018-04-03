import { floatLeft, floatRight } from "./Slide.Styles";

    const verticalSlides = [
      <Slide style={homeStyle}>
        <Content>
        <p className="App-intro">{this.state.response}</p>
          <img className=".img-fluid" src="./imgs/BagsForTheCure-Logo.png" />
          <H3>A funraising event benefiting The Leukemia and Lymphoma Society</H3>
          <H3>If you like fun and hate cancer, come join us!</H3>
          <H3>April 28, 2018 @ Dive Inn: 1380 S Broadway</H3>
          <input type="button" value="Details" /> <input type="button" value="Register" /><br />
          <a href="https://www.lls.org/" target="_blank" rel="noopener noreferrer">
            <HomePageLogo src="./imgs/LLSLogo.jpg" style={floatLeft} alt="LLS Logo" />
          </a>
          <a href="https://www.facebook.com/diveinndenver/" target="_blank" rel="noopener noreferrer">
            <HomePageLogo src="./imgs/DiveInnLogo.jpg" style={floatRight} alt="Dive Inn Logo" />
          </a>
        </Content>
      </Slide>,
      <Slide style={SlideBackground}>
        <Content>
          <a href="LLSMissionFacts.pdf" target="_blank">
          <Document
            file="LLSMissionFacts.pdf"
            onLoadSuccess={this.onDocumentLoad}
          >
            <Page pageNumber={pageNumber} />
          </Document> 
          </a>
        </Content>       
      </Slide>,
      <Slide style={prizesStyle}>
        <Content>
          <H2>A big THANK YOU for our donors!</H2>
          <H3>What can I win from the raffle?</H3>
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
      <Slide style={registerStyle }>
        <Content>      
          <ContentText>   
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
          </ContentText>
        </Content>
      </Slide>,
      <Slide style={SlideBackground}>
        <Content>
        <div>
          <ContentText>
            <DetailsLogo src="./imgs/LLSMWLogo.jpg" />
            Come have some fun in the sun and join us for Bags for the Cure, a Corn-Hole Tournament benefiting The Leukemia & Lymphoma Society (LLS). What better way to help fund the cure for cancer then to come out then to show off your corn hole skills, and enjoy the drink & food specials during the event. Tournament participants will receive their first draft on the house and entry into our raffle for prizes. 
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
            To join the tournament and secure a spot for your 2-person team make a donation of $50 or more to 
            <a href="http://pages.mwoy.org/rm/denver18/cclarkston" target="_blank"> my donation page</a> and register via our <a href="#" onClick={goToRegister}>registration page</a>. 
             An email will be sent when you have been registered.
            </DetailsContentText> 
            <H3>What if I don't play corn hole?</H3>
            <DetailsContentText> 
            Come cheer on your friends and enjoy the food & drink specials. Each donation of $20 will get you an entry into our raffle!
            <br />
            If you can't make it, please consider making a donation on <a href="http://pages.mwoy.org/rm/denver18/cclarkston">my donation page</a>.  Any amount helps us towards our goal
            <br />
            Any questions, please send a message to bagsforthecure@gmail.com
            </DetailsContentText>      
          </ContentText>
          </div>
        </Content>
      </Slide>,
      <Slide style={diveInnStyle}>
        <Content>
          <H2>The Dive Inn</H2>
          <H3>Denver's #1 Neighborhood Bar. Come and see for yourself.</H3>
            <a href="./imgs/DiveInn365Specials2018.jpg" target="_blank">
            <img src="./imgs/DiveInn365Specials2018ThumbNail.jpg" style={{paddingRight: 5}} />
            </a>
            <a href="./imgs/DiveInnMoscowMule2017.jpg" target="_blank">  
            <img src="./imgs/DiveInnMoscowMule2017ThumbNail.jpg" style={{paddingLeft: 5}} />
            </a>
        </Content>
    </Slide>
    ];