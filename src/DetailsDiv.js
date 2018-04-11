import React from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap'
import { floatRight, Content, H3 } from './Slide.Styles';

const DetailsDiv = () => (
    <Grid>
        <Row>
            <Col>
                <Content>
                    <Image responsive src="./imgs/LLSMWLogo.jpg" style={floatRight} />
                    Come have some fun in the sun and join us for Bags for the Cure, a Corn-Hole Tournament benefiting The Leukemia & Lymphoma Society (LLS). Tournament participants will receive their first draft on the house and entries into our raffle for prizes. 
                    <br /><br />
                    <H3>Tournament details:</H3>
                    2 person teams, double elimination, starts promptly at 1pm!<br />
                    Total of 24 teams, so sign up quick!<br />
                    1st Prize: $150 cash!<br />
                    2nd Prize: 2 x $50 gift cards to Argonaut<br />
                    3rd Prize: 2 x $25 gift cards to the Dive Inn<br />
                    <H3>How do I participate?</H3>
                    To join the tournament and secure a spot for your 2-person team, make a donation of $50 or more to 
                    <a href="http://pages.mwoy.org/rm/denver18/cclarkston" target="_blank" rel="noopener noreferrer"> my donation page</a> and register via our <a href='/Register'>registration form</a>. 
                    <H3>What if I don't play corn hole?</H3>
                    Come cheer on your friends and enjoy the food & drink specials. Each donation of $20 will get you an entry into our raffle!
                    <br />
                    If you can't make it, please consider making a donation on <a href="http://pages.mwoy.org/rm/denver18/cclarkston">my donation page</a>.  Any amount helps us towards our goal
                    <br />
                    Any questions, please send a message to bagsforthecure@gmail.com
                </Content>
            </Col>
        </Row>
    </Grid>
  );

  export default DetailsDiv;