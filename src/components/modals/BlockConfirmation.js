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

const BlockConfirmation = forwardRef(({ userId, userName }, ref) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selfId, setSelfId] = useState(null);
    const [selfName, setSelfName] = useState(null);

    useImperativeHandle(
        ref,
        () => ({
            openModal() {
                setIsOpen(true)
            }
        }),
    )

    useEffect(() => {
        let name = null
        let id = null
        if (getLocalStorage('userInfo')) {

            id = getLocalStorage('userInfo').u_id
            name = getLocalStorage('userInfo').u_email
        } else if (getLocalStorage('customerInfo')) {
            name = getLocalStorage('customerInfo').u_email
            id = getLocalStorage('customerInfo').u_id
        } else if (getLocalStorage('userInfoProff')) {
            name = getLocalStorage('userInfoProff').u_email
            id = getLocalStorage('userInfoProff').u_id
        }
        setSelfId(id)
        setSelfName(name)
    }, [])

    const _blockChatHandler = async () => {
        try {
            console.log({
                from_user_id: selfId,
                to_user_id: userId,
                block: 1
            })
            socket.emit("block-user", {
                from_user_id: selfId,
                to_user_id: userId,
                block: 1,
                name: userName
            }, (data) => {
                console.log('active data', data);
                showSuccessToast(data.msg)
                setIsOpen(false)
            });
            // let response = await ELPRxApiService("blockChat", {
            //     from_user_id: selfId,
            //     to_user_id: userId
            // })
            // console.log(response)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Modal
            show={isOpen}
            // onHide={this.handleCloseConformation}
            className="custom-popUp confirmation-box delete_modal block_modal"
            bsSize="small"
        >
            <Modal.Body>
                <div className="col10 fw500 fs28 text-left">Block User</div>
                <div className="delete_user mt-4">
                    <Image src={Deleteusers} alt="" />
                    <Image src={Blueicons} alt="" className="close pointer" onClick={() => setIsOpen(false)} />
                    <div className="text-center fs24 mt-4 col64 mb-4">
                        Are you sure want to Block <br /> {userName} ? </div>

                    <div className="text-center mb-5">
                        <Button
                            onClick={_blockChatHandler}
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

export default BlockConfirmation
