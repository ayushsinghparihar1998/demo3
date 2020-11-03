import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import {
    Button,
    Image,
    Modal
} from "react-bootstrap";
import Blueicons from "../../assets/images/blue_cross.svg";
import Deleteusers from "../../assets/images/delete_users.svg";
import ELPRxApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";
import socketClass from "../../common/utility/socketClass";
import {
    showSuccessToast,
} from '../../common/helpers/Utils';

const socket = socketClass.getSocket();

const CallDisconnectConfirmation = forwardRef(({ history }, ref) => {

    const [isOpen, setIsOpen] = useState(false);
    const [path, setPath] = useState(null)

    useImperativeHandle(
        ref,
        () => ({
            openModal(redirectionPath) {
                setIsOpen(true)
                setPath(redirectionPath)
            }
        }),
    )

    useEffect(() => {


    }, [])

    const _navigate = () => {      
        history.push(path)
    }

    return (
        <Modal
            show={isOpen}
            // onHide={this.handleCloseConformation}
            className="custom-popUp confirmation-box delete_modal block_modal"
            bsSize="small"
        >
            <Modal.Body>

                <div className="delete_user mt-4">

                    <Image src={Blueicons} alt="" className="close pointer" onClick={() => setIsOpen(false)} />
                    <div className="text-center fs24 mt-4 col64 mb-4">
                        Are you sure want to leave call ? </div>

                    <div className="text-center mb-5">
                        <Button
                            onClick={_navigate}
                            className="btn btn-success text-uppercase ">
                            Yes
                        </Button>
                        <Button
                            onClick={() => setIsOpen(false)}
                            className="btn btn-default text-uppercase sm-btn">
                            No
                        </Button>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    )
})

export default CallDisconnectConfirmation
