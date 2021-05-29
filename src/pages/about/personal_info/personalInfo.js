import React from 'react';
import { Col } from 'react-bootstrap';
import './personalInfo.css'

const PersonalInfo = () => {
    return (
        <div className="personal-info" id='about-me'>
            <Col xs={11} md={10} className="info-container">
                <div className="info-container__title">
                    About me
                </div>
            </Col>
        </div>
    );
}

export default PersonalInfo;