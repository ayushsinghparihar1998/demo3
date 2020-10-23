import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Blueicons from "../../assets/images/blue_cross.svg";
import {
    Button,
    Image,
    Form,
    Modal
} from "react-bootstrap";
import ELPRxApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";

const ReportUserModal = forwardRef(({ userId }, ref) => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTittle] = useState(null)
    const [selfId, setSelfId] = useState(null)
    const [selectedReason, setSelectedReason] = useState(null)
    const [comment, setComment] = useState(null)
    const [reasons, setReasons] = useState([
        "Requesting/Sharing personal contact information",
        "Inappropriate/Sex chat",
        "Harassing/Threatening Behaviour",
        "other"
    ])

    useImperativeHandle(ref, () => ({
        openModal() {
            setIsOpen(true)
        }
    }))

    useEffect(() => {
        let title = 'Report '
        let id = null
        if (getLocalStorage('userInfo')) {
            title = title + 'user'
            id = getLocalStorage('userInfo').u_id
        } else if (getLocalStorage('customerInfo')) {
            title = title + 'listener'
            id = getLocalStorage('customerInfo').u_id
        } else if (getLocalStorage('userInfoProff')) {
            title = title + 'listener'
            id = getLocalStorage('userInfoProff').u_id
        }
        setModalTittle(title)
        setSelfId(id)
    }, [])

    const _submitReportHandler = async () => {
        try {
            let response = await ELPRxApiService("reportUser", {
                br_reason: selectedReason,
                br_comment: comment,
                br_from_id: selfId,
                br_to_id: userId
            })
            console.log(response.data.success)
            if (response.data.success != 'error') {
                setIsOpen(false)
            }
            // 
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>

            <Modal
                show={isOpen}
                // onHide={this.handleCloseConformation}
                className="custom-popUp confirmation-box delete_modal block_modal"
                bsSize="small"
            >
                <Modal.Body>
                    <div className="col10 fw500 fs28 text-left"> {modalTitle}</div>
                    <div className="col14 fs20 fw400 text-left mt-2">Please select a problem to continue</div>
                    <div className="delete_user mt-4">
                        <Image src={Blueicons} alt="" className="close pointer" onClick={() => setIsOpen(false)} />

                        <ul className="block_users">
                            {
                                reasons.map(element => <li style={selectedReason == element ? { color: 'white', backgroundColor: '#8ad1e7' } : {}} onClick={() => setSelectedReason(element)}>{element}</li>)
                            }
                        </ul>
                        {
                            selectedReason == 'other' ?
                                <Form.Group controlId="exampleForm.ControlTextarea1" className="pb-2 mt-3 mb-4">
                                    <Form.Control onChange={(e) => setComment(e.target.value)} as="textarea" rows="3" className="inputTyp2 col28 fs20 fw400" placeholder="Comments" />
                                </Form.Group> : null
                        }


                        <div className="text-left">
                            <Button
                                onClick={_submitReportHandler}
                                className="btnTyp5 w-auto btn btn-success text-uppercase">
                                SUBMIT
                            </Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
})

export default ReportUserModal
