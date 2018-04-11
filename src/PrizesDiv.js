import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { ContentCenter, H2, H3, Prizes } from './Slide.Styles';

const PrizesDiv = () => (
    <Prizes>
        <Grid>
            <Row>
                <Col>
                    <ContentCenter>
                    <H2>A big THANK YOU for our donors!</H2>
                    <H3>What can I win from the raffle?</H3>
                    <ul>
                        <li>An Arborne gift basket</li>
                        <li>Wines from The Olathe Winery</li>
                        <li>A $50 gift card for Bar Louie in DTC</li>
                        <li>A $25 gift card for Sobo 151</li>
                        <li>A $25 gift card to Snooze eatery</li>
                        <li>A $50 gift card to Oblio's Pizzeria</li>
                        <li>A $20 gift card to Ceramic in the City</li>
                        <li>A gift card to Denver Escape Room</li>
                        <li>A consult and first adjustment for a family of 4 from Pearl Street Chiropractic</li>
                        <li>A massage or facial from Hand & Stone Massage and Facial Spa</li>
                        <li>A one month membership at the Uptown 9Round</li>
                        <li>A one month membership to Fit36</li>
                        <li>A pair of lower section tickets to a Nuggets game during the 2018-2019 season</li>
                    </ul>
                    </ContentCenter>
                </Col>
            </Row>
        </Grid>  
    </Prizes>
);
export default PrizesDiv;