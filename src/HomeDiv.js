import React from 'react';
import { Button, Col, Grid, Image, Row } from 'react-bootstrap'
import { ContentCenter, H3, Home } from './Slide.Styles';

const HomeDiv = () => (
    <Home>
        <Grid>
            <Row>
                <Col>
                    <ContentCenter>
                        <Image responsive src="./imgs/BagsForTheCure-Logo.png" style={{margin: '0 auto'}} />
                        <H3>A funraising event benefiting The Leukemia and Lymphoma Society</H3>
                        <H3>If you like fun and hate cancer, come join us!</H3>
                        <H3>April 28, 2018: 12:00PM<br/>@ <a rel="noopener noreferrer" href="https://www.google.com/maps/place/Dive+Inn/@39.6914524,-104.989288,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7faceaa8651b:0xb6c001b6de5178f2!8m2!3d39.6914524!4d-104.9870993" target="_blank">Dive Inn: 1380 S Broadway</a></H3>
                        <Grid>
                            <Row>
                                <Col xs={4} md={4} style={{textAlign: 'right', paddingTop: '10px', paddingBottom: '10px'}}>
                                    <Button style={{width: '100px'}} href="/Register">Register</Button>
                                </Col>
                                <Col xs={4} md={4} style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                                    <Button style={{width: '100px'}} href="Details">Details</Button>
                                </Col>
                                <Col xs={4} md={4} style={{textAlign: 'left', paddingTop: '10px', paddingBottom: '10px'}}>
                                    <Button style={{width: '100px'}} target="_blank" rel="noopener noreferrer" href="http://pages.mwoy.org/rm/denver18/cclarkston">Donate</Button>
                                </Col>
                            </Row>                
                            <Row>
                                <Col xs={6} md={6} style={{textAlign: 'right'}}>
                                    <a href="https://www.lls.org/" target="_blank" rel="noopener noreferrer">
                                        <Image responsive src="./imgs/LLSLogo.jpg" align="right" alt="LLS Logo" />
                                    </a>
                                </Col>
                                <Col xs={6} md={6} style={{textAlign: 'left'}}>
                                    <a href="https://www.facebook.com/diveinndenver/" target="_blank" rel="noopener noreferrer">
                                        <Image responsive src="./imgs/DiveInnLogo.jpg" alt="Dive Inn Logo" />
                                    </a>
                                </Col>
                            </Row>
                        </Grid>  
                    </ContentCenter>
                </Col>
            </Row>
        </Grid>  
    </Home>
);

export default HomeDiv