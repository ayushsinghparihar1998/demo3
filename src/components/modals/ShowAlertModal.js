import React from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import Alerts from "../../assets/images/alerts.png";
import CrossTwo from "../../assets/images/crosstwo.png";

const ShowAlertModal = ({ show, close, message, cancelButton , buttonMessage }) => {
    return (
        <Modal
            show={show}
            onHide={close}
            className="CreateAccount alertShow"
        >
            <Modal.Header>
                <Button type="button" onClick={close} class="close">
                    <Image src={CrossTwo} alt="alert" className="alertCross" />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-4">
                    <Image src={Alerts} alt="alert" className="" />
                </div>
                <div className="fw600 fs28 mb-3">Alert!</div>
                <div className="col14 fs20 fw500 mb-4">
                    {message}
                </div>
                {
                    cancelButton ?
                        <Button
                            type="button"
                            className="btnTyp5"
                            onClick={close}
                        >
                            Cancel
                        </Button>
                        : null
                }
                <Button
                    type="button"
                    className="btnTyp5"
                    onClick={close}
                >
                    {buttonMessage}
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ShowAlertModal;