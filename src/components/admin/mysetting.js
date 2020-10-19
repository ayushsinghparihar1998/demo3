import React, { useEffect, useState } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Table } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import socketClass from "../../common/utility/socketClass";
import { getLocalStorage } from "../../common/helpers/Utils";

const socket = socketClass.getSocket();

const MySetting = (props) => {
    const [usersList, setUserList] = useState([])
    const [selfId, setSelfId] = useState(null);

    useEffect(() => {
        let id = null
        if (getLocalStorage('userInfo')) {
            id = getLocalStorage('userInfo').u_id
        } else if (getLocalStorage('customerInfo')) {
            id = getLocalStorage('customerInfo').u_id
        } else if (getLocalStorage('userInfoProff')) {
            id = getLocalStorage('userInfoProff').u_id
        }
        setSelfId(id)
    }, [])
    useEffect(() => {
        if (selfId) {
            _getBlockedUserListHandler()
        }
    }, [selfId])
    const _getBlockedUserListHandler = async () => {
        try {
            socket.emit("blocked-users", {
                user_id: selfId
            }, (data) => {
                console.log('=== blocked user list ====', data);
                if (data.data && typeof data.data !== 'string') {
                    setUserList([...data.data])
                }else{
                    setUserList([])
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    const _unblockUserHandler = (userId) => {
       
        socket.emit("block-user", {
            from_user_id: selfId,
            to_user_id: userId,
            block: 0
        }, (data) => {
            console.log('active data', data);
            // showSuccessToast(data.msg)
            _getBlockedUserListHandler()
        });
    }
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="profile_layout pt-4 pb-5">
                <Container>
                    <div className="mysetting">
                        <div className="search_listeners">
                            <Col md={9} lg={9} col={12} className="m-auto">
                                <Row>
                                    <Col lg={3} md={4}>
                                        <div className="col1 fw500 fs18 mt-2">Search Listeners</div>
                                    </Col>
                                    <Col lg={5} md={5}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Find Keywords" className="inputTyp2 input3" id="outlined-email" variant="outlined" name="screenName" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={3}>
                                        <Button className="btnTyp5 bTyp5">Search</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </div>

                        <Row>
                            <Col md={9} lg={9} col={12} className="m-auto">
                                <div className="table_paymentlayout">
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Listener</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                usersList.map(data => {
                                                    return (
                                                        <tr>
                                                            <td>{data.u_username}</td>
                                                            <td>
                                                                <Button onClick={() => _unblockUserHandler(data.id)} className="btnTyp9 unblock">Unblock</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }


                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );

}
export default MySetting; 