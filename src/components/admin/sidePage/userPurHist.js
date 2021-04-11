import React, { useEffect, useState } from 'react';
import ELPViewApiService from '../../../common/services/apiService';
import { Col, Table } from 'react-bootstrap';

const UserPurchaseHistory = () => {
    const [userObj, setUserObj] = useState();
    useEffect(() => {
        ELPViewApiService('superadminget_userpurchasehistory', { "count": 10, "offset": 1 })
            .then((response) => {
                console.log("RESPONSE ", response)
                if (response.data.status === "success") {
                    const data = response.data.data;
                    console.log("DATA ", data)
                    setUserObj(data.user_purchase_listing)
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
                        <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">USER QUOTE HISTORY</div>
                        <div className="mainTables">
                            <Table bordered size="lg">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Email ID</th>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th>Months</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userObj && userObj.map((users) =>
                                            <tr>
                                                <td>{join(Date.parse(users.trans_datetime), a, '-')}</td>
                                                <td>{users.email}</td>
                                                <td>{users.trans_type_text || 'no Name'}</td>
                                                <td>{users.u_name}</td>
                                                <td>{users.trans_month}</td>
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
export default UserPurchaseHistory;