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
                    </ContentCenter>
                </Col>
            </Row>
        </Grid>  
    </Prizes>
);
export default PrizesDiv;