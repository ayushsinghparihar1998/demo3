import React, { useEffect, useState } from 'react';
import ELPViewApiService from '../../../common/services/apiService';
import { Col, Table } from 'react-bootstrap';

const AssTestPurchHist = () => {
    const [assObj, setAssObj] = useState();
    useEffect(() => {
        ELPViewApiService('superadminget_assessmenttesthistory', { "count": 10, "offset": 1 })
            .then((response) => {
                console.log("RESPONSE ", response)
                if (response.data.status === "success") {
                    const data = response.data.data;
                    console.log("DATA ", data)
                    setAssObj(data.assessment_purchase_listing)
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
                                        <th>Member Name</th>
                                        <th>Test Name</th>
                                        <th>No. of Questions</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        assObj && assObj.map((users) =>
                                            <tr>
                                                <td>{join(Date.parse(users.ah_datetime), a, '-')}</td>
                                                <td>{users.u_name}</td>
                                                <td>{users.ah_name || 'no Name'}</td>
                                                <td>{users.as_no_question}</td>
                                                <td>
                                                    <div className="d-flex elpCategory">
                                                        {
                                                            users.assessment_category.length === 3 ?
                                                                <span className="holistic">Holistic</span>
                                                                :
                                                                users.assessment_category.map((cat) => {
                                                                    if (cat.as_test_cat_name === 'Eat') {
                                                                        return (<span className='eat'>Eat</span>)
                                                                    }
                                                                    else if (cat.as_test_cat_name === 'Pray') {
                                                                        return (<span className='pray'>Pray</span>)
                                                                    }
                                                                    else {
                                                                        return (<span className='luv'>Luv</span>)
                                                                    }
                                                                })
                                                        }

                                                    </div>
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
    )
}
export default AssTestPurchHist;