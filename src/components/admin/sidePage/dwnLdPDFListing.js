import React, { useEffect, useState } from 'react';
import { Col, Table, Image } from 'react-bootstrap';
import ELPViewApiService from '../../../common/services/apiService';
import ArrowDownload from "../../../assets/images/arrow_download.png";
const DownLoadPDFListing = () => {
    const [subscriberListing, setSubscriberListing] = useState([]);
    useEffect(() => {
        if (true)
            ELPViewApiService("superadminget_subscriberlist", { count: 10, offset: 1 })
                .then((result) => {
                    console.log("RESULT DOWNLOAD PDF ", result)
                    const data = result.data.data.subscriber_listing;
                    console.log("DATA LOADED ", data)
                    setSubscriberListing(data);
                })
                .catch((err) => console.log("error Occured", err));
    }, []);

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
                                            subscriberListing.map((subscribers) =>
                                                <tr>
                                                    <td>{subscribers?.s_email}</td>
                                                    <td>
                                                        <span><Image src={ArrowDownload} className="pointer" /></span>
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
        </>
    )
}
export default DownLoadPDFListing;