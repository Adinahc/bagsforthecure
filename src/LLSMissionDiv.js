import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap'
import { Content, H3 } from './Slide.Styles';

const LLSMissioinDiv = () => (
    <Grid>
        <Row>
            <Col>
                <Content>
                The mission of The Leukemia & Lymphoma Society (LLS) is: Cure leukemia, lymphoma, Hodgkin's disease and myeloma, and improve the quality of life of patients and their families.
                <br />
                <H3>Research</H3>
                As there are no means of preventing or early screening for most blood cancers, the LLS research agenda is focused on finding cures. LLS drives research in areas of unmet medical need, and helps to bridge the gap between academic discovery and drug development. LLS identifies and funds the most promising blood cancer research projects and forges partnerships with academic institutions, biotechnology and pharmaceutical companies to accelerate the development of new therapies.
                <br /><br />
                <a href="LLSMissionFacts.pdf" target="_blank">
                    Click here to read LLS Mission facts.
                </a>
                </Content>
            </Col>
        </Row>
    </Grid>
);
export default LLSMissioinDiv;