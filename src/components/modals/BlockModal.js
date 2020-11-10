import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import {
    Button,
    Image,
    Modal
} from "react-bootstrap";
import Blueicons from "../../assets/images/blue_cross.svg";
import BlockConfirmation from './BlockConfirmation'
import ReportUserModal from "./ReportUserModal";

const BlockModal = forwardRef(({ userId ,userName,chatUserName}, ref) => {

    const [isOpen, setIsOpen] = useState(false)
    const blockConfirmation = React.createRef();
    const reportUserModal = React.createRef();

    useImperativeHandle(
        ref,
        () => ({
            openModal() {
                setIsOpen(true)
            }
        }),
    )

    const openBlockConfirmationModal = () => {
        setIsOpen(false);
        blockConfirmation.current.openModal();
    }
    const openReportUserModal = () => {
        setIsOpen(false);
        reportUserModal.current.openModal();
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
                    <div className="col10 fw500 fs28 text-left">Report/Block User</div>
                    <div className="delete_user mt-4">
                        <Image src={Blueicons} alt="" className="close pointer"
                            onClick={() => setIsOpen(false)}
                        />

                        <div className="text-center mt-5 mb-3">
                            <Button
                                onClick={openReportUserModal}
                                className="text-uppercase w-auto btnTyp9 report mr-4">
                                REPORT
                        </Button>
                            <Button
                                onClick={openBlockConfirmationModal}
                                className="text-uppercase w-auto btnTyp9 blocks">
                                BLOCK
                        </Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
            <BlockConfirmation ref={blockConfirmation} userId={userId} userName={userName} chatUserName={chatUserName}/>
            <ReportUserModal ref={reportUserModal} userId={userId} />
        </>
    )
})

export default BlockModal
