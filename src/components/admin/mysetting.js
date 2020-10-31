import React, { useEffect, useState } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Table } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import socketClass from "../../common/utility/socketClass";
import { getLocalStorage } from "../../common/helpers/Utils";
import Blockuser from "../user/blockuser";

const socket = socketClass.getSocket();

const MySetting = (props) => {
    const [usersList, setUserList] = useState([])
    const [selfId, setSelfId] = useState(null);

    useEffect(() => {
        let id = null
        if (getLocalStorage('userInfo')) {
            id = getLocalStorage('userInfo').u_id;
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
            console.log("selfId ==============>", selfId)
            socket.emit("blocked-users", {
                user_id: selfId
            }, (data) => {
                console.log('=== blocked user list ====', data);
                if (data.data && typeof data.data !== 'string') {
                    setUserList([...data.data])
                } else {
                    setUserList([])
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    const _unblockUserHandler = (userId) => {
        console.log({
            from_user_id: selfId,
            to_user_id: userId,
            block: 0
        })
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
                    {
                        usersList.length == 0 ?
                            <Blockuser /> :
                            <Row>
                                <Col xss={12}>
                                    <div className="myprofile mysetting">

                                        <div className="text-center user_tab v_hode">
                                            <br />
                                            <div className="col10 fw600 fs32">Blocked Users</div>
                                            <Tabs defaultActiveKey="blocked_users">
                                                <Tab eventKey="blocked_users" title="Blocked Users" className="v_hide">
                                                    <div className="search_listeners2">
                                                        <Col xss={12} className="m-auto">
                                                            <Row>
                                                                {/* <Col lg={3} md={4}>
                                                            <div className="col1 fw500 fs18 mt-2">Search Users</div>
                                                        </Col>
                                                        <Col lg={5} md={5}>
                                                            <Form.Group>
                                                                <Form.Control type="text" placeholder="Find Keywords" className="inputTyp2 input3" id="outlined-email" variant="outlined" name="screenName" />
                                                            </Form.Group>
                                                        </Col> */}
                                                                {/* <Col lg={3} md={3}>
                                                            <Button className="btnTyp5 bTyp5">Search</Button>
                                                        </Col> */}
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

<<<<<<< HEAD
                                            <Row>
                                                <Col md={9} lg={9} col={12} className="m-auto">
                                                    <div className="table_paymentlayout">
                                                        <Table bordered>
                                                            <thead>
                                                                <tr>
                                                                    <th>User</th>  
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
=======

                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    }
>>>>>>> fbbbc04522fb5872361df3a532f3ef60507039e4


                </Container>
            </div>
            <Footer />
        </div>
    );

}
export default MySetting; 
