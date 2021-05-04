import React , {useEffect, useState} from 'react';
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

const OrderHistory = (props) => {
    const [purchase , setPurchase] = useState([]);

    useEffect(() => {
        ELPViewApiService('getuser_orderhistory', { count: "10", offset: "1" })
            .then((response) => {
                if (response && response.data && response.data.status === "success") {
                    const data = response.data.data;
                    console.log("RESPONSE ", data);
                    setPurchase(data.user_purchase_listing);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...props} />
                </div>
                <div className="bg_lightBlue blueTwo"> 
                    <Container>
                        <Row>
                            <Col md={12}>    
                                <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">
                                    <div className="chatsearch w-100">
                                        <div className="myAssesstest">
                                            <div className="fs28 fw500 col8 mt-4 mb-4 pb-2 pl-4 text-center text-uppercase">Order History</div>
                                            <div className="mainTables">
                                                <Table bordered size="lg"> 
                                                    <thead>
                                                        <tr>
                                                            <th>Order Date</th> 
                                                            <th>Type</th>
                                                            <th>Name</th>
                                                            <th>Month</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>  
                                                        {
                                                            !!purchase?.length && 
                                                            purchase.map((item)=>
                                                            <tr>
                                                                <td>{join(Date.parse(item.trans_datetime), '-')}</td>
                                                                <td>{item.trans_type_text}</td>
                                                                <td>{item.u_name}</td>
                                                                <td>{item.trans_month}</td>
                                                                <td>{item.trans_amount}</td>
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

export default OrderHistory;
