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
import getUserProfile from "../../common/utility/getUserProfile";
import moment from 'moment'

const socket = socketClass.getSocket();

const CallDisconnectConfirmation = forwardRef(({ history, disconnectPayload }, ref) => {

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
        const payload = {
            reciver_id: disconnectPayload.reciver_id,
            reciver_type: disconnectPayload.reciver_type,
            // "sender": {},
            type: disconnectPayload.type,
            sender_id: getUserProfile().u_id
        }
        // if (token) {
        socket.emit('endVideoCall', payload);
        let object = {
            message: disconnectPayload.type + ' call ended at',
            from_user_id: getUserProfile().u_id,
            to_user_id: disconnectPayload.reciver_id,
            // from_image:localStorage.getItem('chat_from_image'),  
            message_type: 2,
            date_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            // user_type: user.u_role_id,
            date: moment().format("YYYY-MM-DD"),
            time: moment().format("HH:mm:ss")
        };
        disconnectPayload.disconnect()
        socket.emit("sendMessage", JSON.stringify(object), (data) => {
            console.log(data)
            history.push(path)
        });
        // }


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
