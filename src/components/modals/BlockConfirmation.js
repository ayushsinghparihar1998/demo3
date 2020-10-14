import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import {
    Button,
    Image,
    Modal
} from "react-bootstrap";
import Blueicons from "../../assets/images/blue_cross.svg";
import Deleteusers from "../../assets/images/delete_users.svg";
import ELPRxApiService from "../../common/services/apiService";

const BlockConfirmation = forwardRef(({userId}, ref) => {

    const [isOpen, setIsOpen] = useState(false)
    useImperativeHandle(
        ref,
        () => ({
            openModal() {
                setIsOpen(true)
            }
        }),
    )

    const _blockChatHandler = async () => {
        try {      
            let response = await ELPRxApiService("blockChat", {
                userid:userId,
                status: '3'
            })
            console.log(response)
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
                        Are you sure want to Block <br /> Melisa? </div>

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
