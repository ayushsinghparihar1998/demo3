import React, { useEffect, useState } from 'react';
import ELPViewApiService from '../../../common/services/apiService';
import { Col, Table } from 'react-bootstrap';

const UserCouponDetail = () => {
    const [kitObj, setKitObj] = useState();
    useEffect(() => {
        ELPViewApiService('superadminget_usercouponlist', { "count": 10, "offset": 1 })
            .then((response) => {
                console.log("RESPONSE ", response)
                if (response.data.status === "success") {
                    const data = response.data.data;
                    console.log("DATA ", data)
                    setKitObj(data.kits_listing)
                }
            })
            .catch(err => new Error(`Error while Fetching qoute user list ${err}`))
    }, []);
    function join(t, a, s) {
        function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
        }
        return a.map(format).join(s);
    }

    let a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];

    return (
        <Col md={9} className="pl-1">
            <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">
                <div className="chatsearch w-100">
                    <div className="myAssesstest">
                        <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">USER COUPON HISTORY</div>
                        <div className="mainTables">
                            <Table bordered size="lg">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>User Name</th>
                                        <th>Coupon Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        kitObj && kitObj.map((users) =>
                                            <tr>
                                                <td>{join(Date.parse(users.kt_expiry_date),a,'-')}</td>
                                                <td>{users.u_name}</td>
                                                <td>{users.kt_name}</td>
                                                <td>{Date.parse(users.kt_expiry_date) < Date.now() ? 'Expired' : 'Active'}</td>
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
    )
}

export default UserCouponDetail;