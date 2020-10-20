import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import community from '../../assets/images/community.svg';
import freechat from '../../assets/images/free-chat.svg';
import therapy from '../../assets/images/therapy.svg';
import women from '../../assets/images/women.svg';
import user from '../../assets/images/user.svg';
import usercomment from '../../assets/images/user-comment.svg';
import usersend from '../../assets/images/user-send.svg';

class Banner extends Component { 
    render() {
        return (
            <Container>
                <div className="fs40 pt-120 col1 fw700">Need someone to talk to?</div>
                <div className="fw300 col2 fs20 mb-5">Time to get out of that imaginary confined space.<br />
Our trained CoCos are ready to extend their helping hand.</div>
                <Row>
                    <Col md={3}>
                        <div className="baner1 bannerset">
                            <Image src={community} alt="" className="pt-2" />
                            <div className="fs18 fw600 col5 pt-2">Community / CSR</div>
                            <div className="col14 fs13 fw300 pt-1 pl-4 pr-4">Your employees are at the core of your success. Increase productivity and create positive work environment by our EAP (Employee Assistance Program).</div> 
                            <Image src={user} alt="" className="pt-3 mt-3 pointer user_set" />

                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="baner2 bannerset">
                            <Image src={freechat} alt="" className="pt-2" />
                            <div className="fs18 fw600 col6 pt-2">Free Chat</div>
                            <div className="col16 fs13 fw300 pt-1 pl-4 pr-4">Need someone to talk to you? Build your self-confidence by venting to non-judgemental and supportive CoCos.</div>
                            <Image src={usercomment} alt="" className="pt-3 pointer user_set" />
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="baner3 bannerset">
                            <Image src={therapy} alt="" className="pt-2" />
                            <div className="fs18 fw600 col7 pt-2">Online Coaching</div> 
                            <div className="col14 fs13 fw300 pt-1 pl-4 pr-4">Trusted advice, counselling and guidance for weight loss and management, relationship issues and mental health, it is relatively inexpensive compared to traditional therapy.</div>
                            <Image src={usersend} alt="" className="pt-3 mt-3 pointer user_set" />
                        </div>
                    </Col>
                    <Col md={3}>
                        <Image src={women} alt="" className="w-100" />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Banner;
