import React from 'react'
import './Study.css'
import {Col, Container, Row} from "react-bootstrap";
import TimeLine from "../../../components/timeline/TimeLine";

const Study = () => {
    return (
        <section id={'study'}>
            <Container className={'study-container'}>
                <Row className={'study-container'}>
                    <Col
                        md={4}
                        className={'container__study-title'}
                    >
                        <div className={'study-title'}>
                            <h2>STUDY</h2>
                        </div>

                    </Col>
                    <Col
                        md={8}
                        className={'timeline-container'}
                    >
                        <TimeLine />
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Study