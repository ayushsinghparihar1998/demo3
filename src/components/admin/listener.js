import React, { Component } from "react";
import { connect } from "react-redux";
import {
    actionGetListnerListing, actionGetCustomerListing,
    actionGetProfessionalListing, actionadminUserDelete, actionAdminChangeUserStatus,
} from "../../common/redux/actions";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Menuicon from "../../assets/images/menu_icon.svg";
import Menuiconblue from "../../assets/images/menu_icon_blue.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import { stubFalse } from "lodash";

class Adminlistener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProfile: 'listner',
            profileListing: [],
            deleteConformationModal: false,
            profileId: ''
        };
    }
    componentDidMount() {
        this.getListnerListing('', "listner");
    }

    getListnerListing = (e, activaClass) => {
        let chkUserProfile = this.state.activeProfile;
        this.setState({ activeProfile: activaClass });
        let profileListing = [];
        let data = { "count": 10, "offset": 1 }
        this.props.actionGetListnerListing(data).then((result) => {
            if (result && result.status === 200) {
                profileListing = result && result.data && result.data.data ? result.data.data : [];
                this.setState({ profileListing: profileListing });
            }
        });
    }
    getProfessionalListing = (e, activaClass) => {
        let chkUserProfile = this.state.activeProfile;
        this.setState({ activeProfile: activaClass });
        let profileListing = [];
        let data = { "count": 10, "offset": 1 }
        this.props.actionGetProfessionalListing(data).then((result) => {
            if (result && result.status === 200) {
                profileListing = result && result.data && result.data.data ? result.data.data : [];
                this.setState({ profileListing: profileListing });
            }
        });
    }
    getCustomerListing = (e, activaClass) => {
        this.setState({ activeProfile: activaClass });
        let profileListing = [];
        let data = { "count": 10, "offset": 1 }
        this.props.actionGetCustomerListing(data).then((result) => {
            if (result && result.status === 200) {
                profileListing = result && result.data && result.data.data ? result.data.data : [];
                this.setState({ profileListing: profileListing });
            }
        });
    }

    adminChangeUserStatus = (e, uid, status) => {
        let userStatus = status ? 0 : 1;
        let chkUserProfile = this.state.activeProfile;
        let data = { "userid": uid, "u_status": userStatus }
        this.props.actionAdminChangeUserStatus(data).then((result) => {
            if (result && result.status === 200) {
                if (chkUserProfile === 'user') {
                    this.getCustomerListing(e, 'user');
                } else if (chkUserProfile === 'professional') {
                    this.getProfessionalListing(e, 'professional');
                } else if (chkUserProfile === 'listner') {
                    this.getListnerListing(e, 'listner');
                }
            }
        });
    }

    adminUserDelete = (e, uid, status) => {
        let chkUserProfile = this.state.activeProfile;
        let data = { "userid": uid, "u_status": status }
        this.props.actionadminUserDelete(data).then((result) => {
            this.setState({ deleteConformationModal: false })
            if (result && result.status === 200) {
                if (chkUserProfile === 'user') {
                    this.getCustomerListing(e, 'user');
                } else if (chkUserProfile === 'professional') {
                    this.getProfessionalListing(e, 'professional');
                } else if (chkUserProfile === 'listner') {
                    this.getListnerListing(e, 'listner');
                }
            }
        });
    }

    userProfile = (e, uid) => {
        this.props.history.push({
            pathname: '/myprofile',
            state: { userId: uid }
        });
    }


    adminUserDeleteConfirm = (e, uid) => {
        this.setState({
            deleteConformationModal: true,
            profileId: uid,
        })
    }

    handleCloseConformation = () => {
        this.setState({
            deleteConformationModal: false,
            profileId: '',
        })
    }


    render() {
        let userActveClass = this.state.activeProfile == 'user' ? "position-relative active" : "position-relative";
        let professnalActveClass = this.state.activeProfile == 'professional' ? "position-relative active" : "position-relative";
        let listnerActveClass = this.state.activeProfile == 'listner' ? "position-relative active" : "position-relative";
        let profileListing = this.state.profileListing;
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            <Col md={3} className="pr-1">
                                <div className="adminsidebar">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className={userActveClass} onClick={(e) => { this.getCustomerListing(e, "user") }}>
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" /> USER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom" onCl>
                                            <div className={professnalActveClass} onClick={(e) => { this.getProfessionalListing(e, "professional") }}>
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" /> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className={listnerActveClass} onClick={(e) => { this.getListnerListing(e, "listner") }}>
                                                <div className="fs14 col23 fw500"><Image src={Menuiconblue} alt="" className="mr-1" /> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" /> LISTENER Q&A</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9} className="pl-1">
                                {profileListing && profileListing.length > 0 &&
                                    profileListing.map((item, index) => {
                                        let categryLen = item.uc_cat_name ? item.uc_cat_name.length : 0;
                                        return (
                                            <div className="adminlistener p-4 mb-3">
                                                <div className="d-flex text-left">
                                                    <div className="mr-2 pt-1">
                                                        <Image src={item.u_image ? item.u_image : Requestuser} alt="" className="r50" />
                                                    </div>
                                                    <div className="pl-2 w-100">
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <div
                                                                    onClick={(e) => { this.userProfile(e, item.id) }}
                                                                    className="col1 fw500 fs18 pb-1">{item.u_name ? item.u_name : ''}</div>
                                                                <div className="col40 fs15 fw400 pb-1">
                                                                    Category:  {item.uc_cat_name && item.uc_cat_name.map((cat, idx) => {
                                                                    return (
                                                                        <span> {categryLen - 1 > idx ? cat + ", " : cat}</span>
                                                                    )
                                                                })}
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">{item.email ? item.email : ''}</div>
                                                            </div>
                                                            <div className="mt-auto mb-auto d-flex">
                                                                <span className="pr-3 fs14 col47 fw400">{item.u_status ? "Active" : 'Inactive'}</span>
                                                                <span className="pr-3 disabled">
                                                                    <Form.Check
                                                                        type="switch"
                                                                        id={"custom-switch" + index}
                                                                        name={"status" + index}
                                                                        label=""
                                                                        onClick={(e) => { this.adminChangeUserStatus(e, item.id, item.u_status) }}
                                                                        checked={item.u_status ? true : false}
                                                                    />
                                                                </span>
                                                                <span onClick={(e) => { this.adminUserDeleteConfirm(e, item.id) }}><Image src={Deleteicon} alt="" /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </Col>
                        </Row>
                    </Container>

                    <Modal
                        show={this.state.deleteConformationModal}
                        onHide={this.handleCloseConformation}
                        className="custom-popUp confirmation-box"
                        bsSize="small"
                    >
                        <Modal.Body>
                            <div className="">
                                <h5 className="text-center">
                                    Are you sure you want to delete this?
                    </h5>
                                <div className="text-center">
                                    <button
                                        className="btn btn-default text-uppercase sm-btn"
                                        onClick={event =>
                                            this.adminUserDelete(event, this.state.profileId, 2)
                                        }
                                    >
                                        OK
                        </button>
                                    <button
                                        className="btn btn-success text-uppercase"
                                        onClick={this.handleCloseConformation}
                                    >
                                        Cancel
                        </button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(null, {
    actionGetListnerListing, actionGetCustomerListing,
    actionGetProfessionalListing, actionadminUserDelete, actionAdminChangeUserStatus,
})(Adminlistener);
