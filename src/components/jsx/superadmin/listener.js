import React, { Component } from "react";
import { connect } from "react-redux";
import {
    actionGetListnerListing,
    actionGetUserListing,
    actionGetProfessionalListing
} from "../../../common/redux/actions";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../../core/nav";
import Footer from "../../core/footer";
import Requestuser from "../../../assets/images/pro_img.svg";
import Requestusertwo from "../../../assets/images/pro_img2.svg";
import Requestuserthree from "../../../assets/images/pro_img3.svg";
import Menuicon from "../../../assets/images/menu_icon.svg";
import Menuiconblue from "../../../assets/images/menu_icon_blue.svg";
import Deleteicon from "../../../assets/images/delete_icon.svg";

class Adminlistener extends Component {        
    constructor(props) {
        super(props);
        this.state = {
            activeProfile: 'listner',
            profileListing: [],
        };
    }
    componentDidMount() {
        this.getProfileListing('', "listner"); 
    }

    getListnerListing = (e, activaClass) => {
        let data = { "count": 10, "offset": 1 }
        this.props.actionGetListnerListing(data).then((result) => { 
            if (result && result.status === 200) {
                let profileListing = result && result.data && result.data.data ? result.data.data : [];
                this.setState({ profileListing: profileListing, activeProfile: activaClass });
            } 
        });
    }
    // getProfessionalListing = (e, activaClass) => {
    //     let data = { "count": 10, "offset": 1 }
    //     this.props.actionGetProfessionalListing(data).then((result) => {            
    //         if (result && result.status === 200) {
    //             let profileListing = result && result.data && result.data.data ? result.data.data : [];
    //             this.setState({ profileListing: profileListing, activeProfile: activaClass });
    //         }
    //     });
    // }
    // getCustomerListing = (e, activaClass) => {
    //     let data = { "count": 10, "offset": 1 }
    //     this.props.actionGetUserListing(data).then((result) => {            
    //         if (result && result.status === 200) {
    //             let profileListing = result && result.data && result.data.data ? result.data.data : [];
    //             this.setState({ profileListing: profileListing, activeProfile: activaClass });
    //         }
    //     });
    // }
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
                                                <div className="fs14 col28 fw500"> USER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom" onCl>
                                            <div className={professnalActveClass} onClick={(e) => { this.getProfessionalListing(e, "professional") }}>
                                                <div className="fs14 col28 fw500"> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className={listnerActveClass} onClick={(e) => { this.getListnerListing(e, "listner") }}>
                                                <div className="fs14 col23 fw500"> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom"> 
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> CATEGORY</div> 
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
                                                                <div className="col1 fw500 fs18 pb-1">{item.u_name ? item.u_name : ''}</div>
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
                                                                        id="custom-switch5"
                                                                        label=""
                                                                        checked={item.u_status ? true : false}
                                                                    />
                                                                </span>
                                                                <span><Image src={Deleteicon} alt="" /></span>
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
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(null, { 
    actionGetListnerListing,
    actionGetUserListing,
    actionGetProfessionalListing
})(Adminlistener);
