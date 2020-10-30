import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import {
    Button,
    Image,
    Modal,
    Container,
} from "react-bootstrap";

import Crossbtn from "../../assets/images/blue_cross.svg";
import Livechatcomment from "../../assets/images/livechatcomment.svg";
import RateUsModal from './RateUsModal'

const UserEndChatModal = forwardRef(({ userId, disableInputHandler }, ref) => {

    const [isOpen, setIsOpen] = useState(false)
    const rateUsModal = React.createRef();


    useImperativeHandle(
        ref,
        () => ({
            openModal() {
                setIsOpen(true)
            }
        }),
    )

    const openRateUsModal = () => {
        rateUsModal.current.openModal()
        setIsOpen(false)
    }


    return (
        <>
            <Modal show={isOpen} className="CreateAccount Payment">
                <Modal.Header>
                    <Button onClick={() => setIsOpen(false)}>
                        <Image src={Crossbtn} alt="" />
                    </Button>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <div className="layout_box text-center mt-3 mb-4">
                            <div className="col10 fs30 fw600 mt-4 pb-2 mb-4">Live Chat Session Completed</div>
                            <Image src={Livechatcomment} alt="Livechatcomments" className="mb-4" />
                            <div className="fs300 fs20 col14 mb-4 pb-2">
                                We hope you had a great conversation <br /> & are feeling better
                          </div>
                            <Button className="btnTyp12 btnT12 h-rem fs18 mr-5" onClick={() => {
                                setIsOpen(false)
                                disableInputHandler()
                            }}>OKAY</Button>
                            <Button className="btnTyp12 fs18 h-rem btnT12" onClick={openRateUsModal} >RATE US</Button>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
            <RateUsModal ref={rateUsModal} userId={userId} disableInputHandler={disableInputHandler} />
        </>
    )
})

export default UserEndChatModal
