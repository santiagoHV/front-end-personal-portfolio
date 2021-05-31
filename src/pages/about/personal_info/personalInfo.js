import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './personalInfo.css'

const PersonalInfo = () => {
    return (
        <div className="personal-info" id='about-me'>
            <Col xs={11} md={10} className="info-container">
                <h2 className="info-container__title">
                    About me
                </h2>
                <Container className='info-container__info'>
                    ola
                </Container>
            </Col>
        </div>
    );
}

export default PersonalInfo;