import React, { useEffect, useState } from 'react';
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { Col, Container, Row, Table } from 'react-bootstrap';
import ELPViewApiService from '../../common/services/apiService';

function join(t, s) {
    let a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
    function format(m) {
        let f = new Intl.DateTimeFormat('en', m);
        return f.format(t);
    }
    return a.map(format).join(s);
}

const CouponHistory = (props) => {

    const [ couponInfo , setCouponInfo ] = useState([]);

    useEffect(()=>{
        ELPViewApiService('getuser_kitscouponlist', { count: 10, offset: 1 })
        .then((response) => {
            if (response && response.data && response.data.status === "success") {
                const data = response.data.data;
                setCouponInfo(data.kits_listing);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    return (
        <>
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...props} />
                </div>
                <div className="bg_lightBlue">
                    <Container>
                        <Row>
                            <Col md={9} className="pl-1">
                                <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">
                                    <div className="chatsearch w-100">
                                        <div className="myAssesstest">
                                            <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">Order History</div>
                                            <div className="mainTables">
                                                <Table bordered size="lg">
                                                    <thead>
                                                        <tr>
                                                            <th>Coupon ID</th>
                                                            <th>Date</th>
                                                            <th>User Name</th>
                                                            <th>Email ID</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            !!couponInfo?.length && 
                                                            couponInfo.map((item)=>
                                                            <tr>
                                                                <td>{item.kt_gift_code}</td>
                                                                <td>{join(Date.parse(item.kt_expiry_date),'-')}</td>
                                                                <td>{item.u_name}</td>
                                                                <td>{item?.email || 'No Email Found'}</td>
                                                                <td>{Date.parse(item.kt_expiry_date) < Date.now() ? 'Expired' : 'Active'}</td>
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
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default CouponHistory;

// <tr>
//                                                             <td>28 Jan, 2021</td>
//                                                             <td>John Doe</td>
//                                                             <td>Eat: Smart Plan</td>
//                                                             <td>Expried</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>28 Jan, 2021</td>
//                                                             <td>John Doe</td>
//                                                             <td>Eat: Smart Plan</td>
//                                                             <td>Active</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>28 Jan, 2021</td>
//                                                             <td>John Doe</td>
//                                                             <td>Eat: Smart Plan</td>
//                                                             <td>Expried</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>28 Jan, 2021</td>
//                                                             <td>John Doe</td>
//                                                             <td>Eat: Smart Plan</td>
//                                                             <td>Expried</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>28 Jan, 2021</td>
//                                                             <td>John Doe</td>
//                                                             <td>Eat: Smart Plan</td>
//                                                             <td>Expried</td>
//                                                         </tr>