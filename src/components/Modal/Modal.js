import Modal from 'react-bootstrap/Modal'
import React from "react";
import './Modal.css'
import {Image} from "react-bootstrap";

const CustomModal = (props) => {
    return (
        <Modal
            size="lg"
            show={props.isOpen}
            onHide={props.onClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header>
                <Modal.Title
                    id="example-modal-sizes-title-lg"
                >
                    <div className={'header-modal'}>
                        <Image
                            src={props.image} roundedCircle
                            height={50}
                            className={'img-modal'}
                        />
                        <h2 className={'m-1'}>{props.title}</h2>
                        <button className={'btn-close btn-close-white m-1'}
                                onClick={props.onClose}/>
                    </div>

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    )
}

export default CustomModal