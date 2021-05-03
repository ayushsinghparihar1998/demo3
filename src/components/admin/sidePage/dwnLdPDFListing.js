import React, { useEffect, useState } from 'react';
import { Col, Table, Image, Modal, Button } from 'react-bootstrap';
import ELPViewApiService from '../../../common/services/apiService';
import Deleteicon from "../../../assets/images/delete_icon.svg";
import { showSuccessToast } from '../../../common/helpers/Utils';
import Alerts from "../../../assets/images/alerts.png";
import CrossTwo from "../../../assets/images/crosstwo.png";


const DownLoadPDFListing = () => {

    const [subscriberListing, setSubscriberListing] = useState([]);
    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);

    useEffect(() => {
        ELPViewApiService("superadminget_subscriberlist", { count: 10, offset: 1 })
            .then((result) => {
                const data = result.data.data.subscriber_listing;
                setSubscriberListing(data);
            })
            .catch((err) => console.log("error Occured", err));
    }, [modal]);

    const deleteDownload = () => {
        ELPViewApiService('superadmindelete_subscriberlist', { s_id: modal, s_status: 3 })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    showSuccessToast(response.data.message);
                    setModal(false);
                }
            })
            .catch((err) => new Error(`Error is ${err}`));
    }

    return (
        <>
            <Col md={9} className="pl-1">
                <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">
                    <div className="chatsearch w-100">
                        <div className="myAssesstest">
                            <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">Downloaded PDF</div>
                            <div className="mainTables">
                                <Table bordered size="lg">
                                    <thead>
                                        <tr>
                                            <th>User’s Email ID</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            subscriberListing.filter(subscribers => subscribers.s_status !== '3').map((subscribers) =>
                                                <tr>
                                                    <td>{subscribers?.s_email}</td>
                                                    <td>
                                                        <span>
                                                            <Image
                                                                src={Deleteicon}
                                                                onClick={() => { setModal(subscribers?.s_id) }} className="pointer"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>

                        </div>

                    </div>

                </div>
            </Col>

            <Modal
                show={modal}
                onHide={closeModal}
                className="CreateAccount alertShow"
            >
                <Modal.Header>
                    <Button type="button" onClick={closeModal} class="close">
                        <Image src={CrossTwo} alt="alert" className="alertCross" />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-4">
                        <Image src={Alerts} alt="alert" className="" />
                    </div>
                    <div className="fw600 fs28 mb-3">Alert!</div>
                    <div className="col14 fs20 fw500 mb-4">
                        Do You Want to Delete ?
            </div>
                    <Button
                        type="button"
                        className="btnTyp5"
                        onClick={closeModal}
                    >
                        NO
            </Button>
                    <Button
                        type="button"
                        className="btnTyp5"
                        onClick={deleteDownload}
                    >
                        Yes
            </Button>
                </Modal.Body>
            </Modal>

        </>
    )
}
export default DownLoadPDFListing;