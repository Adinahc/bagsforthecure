import React from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap'
import { ContentCenter, DiveInn, H2, H3 } from './Slide.Styles';

const DiveInnDiv = () => (
    <DiveInn>
        <Grid>
            <Row>
                <Col>
                    <ContentCenter>
                        <H2>The Dive Inn</H2>
                        <H3>Denver's #1 Neighborhood Bar. Come and see for yourself.</H3>
                        <Grid>
                            <Row>
                                <Col>
                                <a rel="noopener noreferrer" href="https://www.google.com/maps/place/Dive+Inn/@39.6914524,-104.989288,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7faceaa8651b:0xb6c001b6de5178f2!8m2!3d39.6914524!4d-104.9870993" target="_blank"><H2>1380 S Broadway</H2></a>
                                </Col>            
                            </Row>
                            <Row>
                                <Col xs={6} md={6} style={{textAlign: 'right'}}>
                                    <a href="./imgs/DiveInn365Specials2018.jpg" target="_blank">
                                        <Image src="./imgs/DiveInn365Specials2018ThumbNail.jpg" responsive  align="right" />
                                    </a>
                                    </Col>
                                    <Col xs={6} md={6} style={{textAlign: 'left'}}>
                                    <a href="./imgs/DiveInnMoscowMule2017.jpg" target="_blank">  
                                        <Image src="./imgs/DiveInnMoscowMule2017ThumbNail.jpg" responsive  align="left" />
                                    </a>
                                </Col>
                            </Row>
                        </Grid>       
                    </ContentCenter>
                </Col>
            </Row>
        </Grid>
    </DiveInn>
  )
  export default DiveInnDiv;