import React from 'react';
import {
    Button,
    Image,
    Modal,
} from "react-bootstrap";

const CustomModal = ({ customize, children, modalShow, modalHide, modalClasName, headerImage, bodyProps, bodyButtonDiv, bodyInfo, buttonProps }) => {
    console.log("CHECKS CUSTOM MODAL", { modalShow, modalHide, modalClasName, headerImage, bodyInfo, buttonProps }, typeof buttonProps);

    const customizer = (customize, children) => {
        switch (customize) {
            case 'body':
                return (
                    <>
                        <Modal.Header>
                            <Button type="button" onClick={modalHide} class="close">
                                <Image src={headerImage} alt="alert" className="alertCross" />
                            </Button>
                        </Modal.Header>
                        <Modal.Body>{children}</Modal.Body>
                    </>)
            default:
                return (children)
        }
    }

    if (customize) {
        return (
            <>
                <Modal
                    show={modalShow}
                    onHide={modalHide}
                    className={modalClasName}
                >
                    {customizer(customize, children)}
                </Modal>
            </>
        )
    }
    return (
        <>
            <Modal
                show={modalShow}
                onHide={modalHide}
                className={modalClasName}
            >
                <Modal.Header>
                    <Button type="button" onClick={modalHide} class="close">
                        <Image src={headerImage} alt="alert" className="alertCross" />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    {
                        bodyProps && bodyProps.length &&
                        bodyProps.map((bodyDetail) =>
                            <>
                                <div className={bodyDetail.divClassName || "mb-4"}>
                                    <Image src={bodyDetail.bodyImage} alt="alert" className={bodyDetail.className || ''} />
                                </div>
                                <div
                                    className={bodyDetail.imageInfoClassName || "fw600 fs28 mb-3"}
                                    dangerouslySetInnerHTML={{ __html: bodyDetail.bodyImageInfo }}
                                />
                            </>
                        )
                    }
                    <div className={bodyInfo.className || "col14 fs20 fw500 mb-4"} dangerouslySetInnerHTML={{ __html: bodyInfo.html }} />
                    <div className={bodyButtonDiv}>
                        {
                            buttonProps && buttonProps.length &&
                            buttonProps.map((buttonDetail) =>
                                <Button
                                    type={buttonDetail.type}
                                    className={buttonDetail.className}
                                    onClick={buttonDetail.handleClick}
                                >{buttonDetail.info}</Button>
                            )
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default CustomModal