import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import Profileimg from "../../assets/images/placeholder_user.png";
import Usaflag from "../../assets/images/india_flag.svg";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetProfile, actionGetProfileById } from '../../common/redux/actions';
import * as moment from 'moment';
import Menuicon from "../../assets/images/menu_icon.svg";
class Userprofiledetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: [],
            userId: this.props.location && this.props.location.state && this.props.location.state.userId ?
                this.props.location.state.userId : '',
        };
    }
    componentDidMount() { 
        this.getProfile();
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            userId: nextProps.location && nextProps.location.state && nextProps.location.state.userId ?
                nextProps.location.state.userId : '',
        })
    }
    getProfile() {
        let userId = this.state.userId
        if (userId) {
            this.props.actionGetProfileById({ userid: userId }).then((result) => {
                if (result && result.status === 200) {
                    let res = result.data.data &&
                        result.data.data[0] ? result.data.data[0] : {};
                        
                    this.setState({ userData: res })
                }
            })
        } else {
            this.props.actionGetProfile({}).then((result) => {

                if (result && result.status === 200) {
                    let res = result.data.data.profile_list &&
                        result.data.data.profile_list[0] ? result.data.data.profile_list[0] : {};
                    this.setState({ userData: res })
                }
            })
        }

    }
    render() {
        let userData = this.state.userData ? this.state.userData : {};
        return (
            <div >
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            {/* <Col md={4} lg={3}  className="pr-1">
                                <div className="adminsidebar">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div>
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" />
                                                    <Link to={`/adminlistener`}> USER LISTING</Link>

                                                </div> 
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col> */}
                            <Col md={12} lg={12} className="pl-1">  
                                <div className="myprofile w-100">
                                    <div className="text-center profile_top melisa">
                                        <Image src={userData.u_image ? userData.u_image : Profileimg} alt="" className="r50 border_profile" />
                                        <Image src={Usaflag} alt="" className="r50 flags" />
                                    </div>
                                    <div className="text-center mt-4 mb-4 pb-2">
                                        <div className="col1 fs18 fw600 pb-1">{userData.u_name}
                                        </div>
                                    </div>
                                    <div className="text-center user_tab">
                                        <div className="">
                                            <div className="layout mt-5">
                                                <div className="d-flex m-auto w40 border2">
                                                    <div className="fs16 col23 fw400 text-left w60">Name:</div>
                                                    <div className="fs15 col14 fw400 text-left w40">{userData.u_name}</div>
                                                </div>
                                            </div>
                                            <div className="layout">
                                                <div className="d-flex m-auto w40 border2">
                                                    <div className="fs16 col23 fw400 text-left w60">Email:</div>
                                                    <div className="fs15 col14 fw400 text-left w40">{userData.email}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="layout">
                                                <div className="d-flex m-auto w40 border2">
                                                    <div className="fs16 col23 fw400 text-left w60">Date of Birth:</div>
                                                    <div className="fs15 col14 fw400 text-left w40">{userData.u_birthdate ? moment(userData.u_birthdate, 'DD/MM/YYYY').format('D MMM yyyy') : ''}</div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
export default connect(
    null,
    { actionGetProfile, actionGetProfileById }
)(Userprofiledetail); 
