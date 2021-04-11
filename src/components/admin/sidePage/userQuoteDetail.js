import React, { useEffect, useState } from 'react';
import ELPViewApiService from '../../../common/services/apiService';
import { Col, Table } from 'react-bootstrap';

const UserQuoteDetail = () => {
    const [quoteListing, setQuoteListing] = useState();
    useEffect(() => {
        ELPViewApiService('superadminget_quoteuserlist', { "count": 10, "offset": 1 })
            .then((response) => {
                console.log("RESPONSE ", response)
                if (response.data.status === "success") {
                    const data = response.data.data;
                    console.log("DATA " , data )
                    setQuoteListing(data.quote_listing);
                }
            })
            .catch(err => new Error(`Error while Fetching qoute user list ${err}`))
    }, []);

    return (
        <>
            <Col md={9} className="pl-1">
                <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">
                    <div className="chatsearch w-100">
                        <div className="myAssesstest">
                            <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">USER QUOTE DETAILS</div>
                            <div className="mainTables">
                                <Table bordered size="lg">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Email ID </th>
                                            <th>Phone No. </th>
                                            <th>Company Name</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            quoteListing && quoteListing.map((users) =>
                                                <tr>
                                                    <td>{users.qu_name}</td>
                                                    <td>{users.qu_email}</td>
                                                    <td>{users.qu_phone_number}</td>
                                                    <td>{users.qu_company_name}</td>
                                                    <td>{users.qu_country}</td>
                                                    {/* <td>
                                                        <span><Image src={''} className="pointer" /></span>
                                                    </td> */}
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

export default UserQuoteDetail