import React from 'react'
import Photo from '../../../assets/img/personal-photo.jpg'
import GithubLogo from '../../../assets/img/github.png'
import FaceboookLogo from '../../../assets/img/facebook.png'
import InstagramLogo from '../../../assets/img/instagram.png'
import './header.css'
import {Col, Container, Image, Row} from 'react-bootstrap' 
import Particles from 'react-particles-js'

const HeaderAbout = () => {
    return (
        <div id='header'>
            
            <Col xs={11} md={6} className='center-box'>
                <div className="center-box__background"></div>
                <Container fluid className="center-box__content">
                    <Row>
                        <Col xs={10} sm={8} lg={7} xl={4} className="m-auto photo_container">
                            <Image src={Photo} fluid roundedCircle className='photo'/>
                        </Col>
                    </Row>
                    <Row className="center-box--text">
                        <Col xs={12} md={10} className="m-auto">
                            <h2>DEVELOPER IN DEVELOPMENT</h2>
                        </Col>
                    </Row>
                    <Row>
                        <div className='logo-container'>
                            <img src={FaceboookLogo} className='net-logos'/>
                            <img src={InstagramLogo} className='net-logos'/>
                            <img src={GithubLogo} className='net-logos'/>
                        </div>
                        
                    </Row>
                </Container>
            </Col> 

            <Particles
                params={{
                "particles": {
                    "number": {
                        "value": 200
                    },
                    "size": {
                        "value": 3
                    },
                    "stroke":{
                        "color":"rgb(239, 160, 11)",
                        "width": 6,
                    },
                    "lineLinked":{
                        "color":"rgba(239, 160, 11,1)"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                },
                "polygon":{
                    "draw":{
                    "stroke":{
                        "color": "rgba(0,0,0,1)",
                        "width": 5,
        
                    }
                    },
                },
            }}
            className="particles-js"
            />
        </div>
    )
}

export default HeaderAbout
