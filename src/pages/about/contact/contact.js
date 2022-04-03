import React, { useRef } from "react";
import {Col, Container, Form, Row, Spinner} from "react-bootstrap";
import useFetchAPI from "../../../assets/hooks/useFetchAPI";
import './Contact.css'



const Contact = () => {
    const form = useRef(null);
    const {state, sendData} = useFetchAPI('https://mailsenderapi.herokuapp.com/send-mail')
    console.log(state)

    const handleSubmit = (e) => {
        const formData = new FormData(form.current);
        const message = {
            subject: formData.get('subject'),
            message: formData.get('message'),
            sender: formData.get('sender'),
            email: formData.get('email'),
        }

        sendData(message)
        if(!state.isLoading) {
            form.current.reset()
        }

        alert('Mensaje enviado')
        
    }

    return(
        <section id={'contact-me'}>
            <Container className={'contact-container'}>
                <Row>
                    <Col sm={12} xl={{span: 6, offset: 3}}>
                        <Form className={'form'} ref={form}>
                            <Form.Group>
                                <Form.Label>
                                    Email address
                                </Form.Label>
                                <Form.Control
                                    placeholder={'Enter your email address'}
                                    type={'email'}
                                    name={'email'}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    placeholder={'Enter your name'}
                                    type={'text'}
                                    name={'sender'}
                                    rows={5}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Subject
                                </Form.Label>
                                <Form.Control
                                    placeholder={'Enter your subject'}
                                    type={'text'}
                                    name={'subject'}
                                    rows={5}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Message
                                </Form.Label>
                                <Form.Control
                                    placeholder={'Enter your message'}
                                    name={'message'}
                                    as="textarea"
                                    size={50}
                                    className={'input-message'}
                                />
                            </Form.Group>
                            <div className="button-container">
                                <button
                                    className={'btn btn-primary send-button'}
                                    onClick={handleSubmit}
                                    type="button"
                                >
                                    Send
                                </button>
                                {state.isLoading && <Spinner animation="border" variant="primary" />}
                            </div> 
                        </Form>
                    </Col>
                    <Col md={6} sm={12}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact