import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import { connect } from 'react-redux';
import { actionGetProfile } from '../../common/redux/actions';
import * as moment from 'moment';
import UserProfile from "./userprofiledetail";
import { getLocalStorage } from "../../common/helpers/Utils";
class Myprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: []
        };
    }
    componentDidMount() {
        this.getProfile();
    }
    getProfile() {
        this.props.actionGetProfile({}).then((result) => {
            if (result && result.status === 200) {
                let res = result.data.data.profile_list &&
                    result.data.data.profile_list[0] ? result.data.data.profile_list[0] : {};
                this.setState({ userData: res })
            }
        })
    }
    render() {
        let userData = this.state.userData ? this.state.userData : {};
        console.log("qweqweqweqwe", this.state.userData)
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                {getLocalStorage('isAdmin') ? <UserProfile {...this.props} /> :
                    <div className="profile_layout pt-4 pb-5">
                        <Container>
                            <Row>
                                <div className="myprofile">    
                                    <Image src={Profileban} alt="" className="w-100" />
                                    <div className="text-center profile_top">
                                        <Image src={Profileimg} alt="" className="r50 border_profile" />
                                        <Image src={Usaflag} alt="" className="r50 flags" />
                                        <Button className="btnTyp9 fs15 fw500 btn_set">edit profile</Button>
                                    </div>
                                    <div className="text-center mt-4 mb-4 pb-2">
                                        <div className="fs18 fw600 col1 pb-1">{userData.u_name}</div>
                                        <div className="col23 fs16 fw500 pb-1">Listener - Novice
                                        <Image src={warningS} alt="" className="ml-2" />
                                        </div>
                                        <div className="col27 fw400 fs14">Finding myself....</div>
                                        <div className="border_bottoms mt-3"></div>
                                    </div>
                                    <div className="text-center user_tab">
                                        <Tabs defaultActiveKey="home">
                                            <Tab eventKey="home" title="Home">
                                                <div className="layout mt-5">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Number of Ratings:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">{userData.u_rating}</div>
                                                    </div>
                                                </div>
                                                <div className="layout">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Listens to:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">Over 18</div>
                                                    </div>
                                                </div>
                                                <div className="layout">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Languages:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">English</div>
                                                    </div>
                                                </div>
                                                <div className="layout">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Listener Since:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">{userData.listnersince ? moment(userData.listnersince).format('DD/MM/YYYY') : ''}</div>
                                                    </div>
                                                </div>
                                                <div className="layout">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Last Active:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">{userData.lastactive ? moment(userData.lastactive).format('DD/MM/YYYY') : ''}</div>
                                                    </div>
                                                </div>
                                                <div className="layout">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Gender:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">Female</div>
                                                    </div>
                                                </div>
                                                <div className="layout">
                                                    <div className="d-flex m-auto w35 border2">
                                                        <div className="fs16 col23 fw400 text-left w60">Chats:</div>
                                                        <div className="fs16 col14 fw400 text-left w40">{userData.chats}</div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="videos" title="videos">
                                                videos 23
                                        </Tab>
                                            <Tab eventKey="badgesawards" title="Badges & Awards">
                                                Badges & Awards
                                        </Tab>
                                            <Tab eventKey="Categories" title="Categories">
                                                Categoriesasd
                                        </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                }
                <Footer />
            </div>
        );
    }
}
export default connect(
    null,
    { actionGetProfile }
)(Myprofile); 
