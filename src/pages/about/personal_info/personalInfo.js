import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import './personalInfo.css'
import Photo from '../../../assets/img/personal-photo2.jpg'
import aboutme from "../../../assets/js/aboutme";

const PersonalInfo = () => {

    const name = () => (<strong>{aboutme.name}</strong>)

    const description = () => aboutme.description.replace('%%%',`{${name()}}`)

    const description2 = aboutme.description.split('%%%')
    return (
        <div className="personal-info" id='about-me'>
            <Col xs={12 } md={10} className="info-container">
                <div className="info-container__title">
                    <div>About me</div>
                </div>
                <Container className='info-container__info'>
                    <Col lg={{span: 4, offset: 4}} className={'info-container__info--photo'}>
                        <Image fluid rounded src={Photo} alt={'personal'}/>
                    </Col>
                    <Container className={'info-container__info--item'}>
                        <Row>
                            <Col lg={{span: 10, offset: 1}} className={'info-container--description'}>
                                {description2[0]}{name()}{description2[1]}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{span: 5, offset: 1}} className={'info-container__info--item'}>
                                <strong>Birthdate: </strong> {aboutme.birthdate}
                            </Col>
                            <Col lg={{span: 5, offset: 0}} className={'info-container__info--item'}>
                                <strong>Age:</strong> 19

                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{span: 5, offset: 1}} className={'info-container__info--item'}>
                                <strong>Birth-city:</strong> {`${aboutme["city-from"]}, ${aboutme["country-from"]}`}
                            </Col>
                            <Col lg={{span: 5, offset: 0}} className={'info-container__info--item'}>
                                <strong>Actual-city:</strong> {`${aboutme["city-live"]}, ${aboutme["country-live"]}`}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{span: 5, offset: 1}} className={'info-container__info--item'}>
                                <strong>Mails:</strong> {aboutme.mails.map((mail, index) => `${mail}${index + 1 >= aboutme.mails.length ? '' : ','} `)}
                            </Col>
                            <Col lg={{span: 5, offset: 0}} className={'info-container__info--item'}>
                                <strong>Degree:</strong>  {aboutme.titles.map((titles, index) => `${titles}${index + 1 >= aboutme.titles.length ? '' : ','} `)}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{span: 5, offset: 1}} className={'info-container__info--item'}>
                                <strong>Interests:</strong> {aboutme.interests.map((interest, index) => `${interest}${index + 1 >= aboutme.interests.length ? '' : ','} `)}
                            </Col>
                            <Col lg={{span: 5, offset: 0}} className={'info-container__info--item'}>
                                <strong>Hobby interests:</strong> {aboutme["hobby-interests"].map((interest, index) => `${interest}${index + 1 >= aboutme["hobby-interests"].length ? '' : ','} `)}
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </Col>
        </div>
    );
}

export default PersonalInfo;