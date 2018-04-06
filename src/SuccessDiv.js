import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap'
import { ContentCenter, Success } from './Slide.Styles';

const SuccessDiv = () => (
    <Grid>
        <Row>
            <Col>
                <ContentCenter>
                    <Success>Thank you for registering. Once your donation has been made on my <a href="http://pages.mwoy.org/rm/denver18/cclarkston" target="_blank" rel="noopener noreferrer">official campainge donation page</a>, we will send you a confirmation email!</Success>
                </ContentCenter>    
            </Col>
        </Row>
    </Grid>
);

export default SuccessDiv;