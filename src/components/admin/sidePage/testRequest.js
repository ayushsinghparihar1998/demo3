import React, { useEffect, useState } from 'react';
import ELPViewApiService from '../../../common/services/apiService';
import { Col, Form, Table } from 'react-bootstrap';
import { showSuccessToast } from '../../../common/helpers/Utils';

const TestRequest = () => {
    const [listnerResult, setListnerResult] = useState([]);
    const [testStatus , setTestStatus] = useState(false);

    useEffect(() => {
        ELPViewApiService('superadminget_listnerresult', { count: 10, offset: 1 })
            .then((response) => {
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    setListnerResult(data.listner_result_listing);
                }
            })
            .catch((err) => new Error(`New Error Occured ${err}`));
    }, [testStatus]);

    function join(t, a, s) {
        function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
        }
        return a.map(format).join(s);
    }

    let a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];

    const changeUserStatus = (userid , listnerTest) => {
        ELPViewApiService('superadminchange_listnerteststatus',{ userid: userid, u_listner_test: listnerTest })
        .then((response) => {
            console.log("RESPONSE", response);
            if (response.data.status === 'success') {
                showSuccessToast(response.data.message);
                setTestStatus(!testStatus);
            }
        })
        .catch((err) => new Error(` Error ocured ${err}`))
    }

    return (
        <Col md={9} className="pl-1">
            <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">
                <div className="chatsearch w-100">
                    <div className="myAssesstest">
                        <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">USER PURCHASING HISTORY</div>
                        <div className="mainTables">
                            <Table bordered size="lg">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>User Name</th>
                                        <th>Test Name</th>
                                        <th>Correct / Total Questions</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listnerResult && listnerResult.map((users) =>
                                            <tr key={users.id}>
                                                <td>{join(Date.parse(users.lr_datetime), a, '-')}</td>
                                                <td>{users.u_name}</td>
                                                <td>{users.lr_test_name || 'no Name'}</td>
                                                <td>{users.lr_correct_ans}/ {users.lr_no_que}</td>
                                                <td>
                                                    <span className="pr-3">
                                                        <Form.Check
                                                            id={"custom-switch".concat(users.id)}
                                                            type="switch"
                                                            name="status"
                                                            checked={users.u_listner_test === "2"}
                                                            label={users.u_listner_test === "1" ? "In Active" : "Active"}
                                                            onChange={() => {
                                                                changeUserStatus(users.lr_u_id, users.u_listner_test === '1' ? '2' : '1')
                                                            }}
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
    )
}

export default TestRequest;
