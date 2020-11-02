import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/india_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import { connect } from 'react-redux';
import { actionGetProfile } from '../../common/redux/actions';
import * as moment from 'moment';
import UserProfile from "../editprofile/userprofiledetail";
import { getLocalStorage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import Axios from "axios";
import constant from "../../constant"

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
    async getProfile() {
        try {
            console.log(window.location.search)
            let response = await Axios.get(constant.SERVER_URL + 'elp/userdashboard' + window.location.search)
            console.log('response =========>', response)
            this.setState({ userData: response.data.data.profile_list[0] })
        } catch (err) {
            console.log(err);
        }
    }
    handleEdit = () => {
        this.props.history.push({
            pathname: "editprofile",
        });
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
                                    <Image src={userData.u_cover_image} alt="" className="w-100" />
                                    <div className="text-center profile_top">
                                        <Image src={userData.u_image} alt="" className="r50 border_profile" />
                                        <Image src={userData.u_flag ? userData.u_flag : Usaflag}
                                            alt="" width='50px' className="r50 flags" />
                                        {/* <Button onClick={this.handleEdit} className="btnTyp9 fs15 fw500 btn_set">edit profile</Button> */}
                                    </div>
                                    <div className="text-center mt-4 mb-4 pb-2">
                                        <div className="fs18 fw600 col1 pb-1">{userData.u_name}</div>
                                        <div className="col23 fs16 fw500 pb-1">{userData.u_role_id == CONSTANTS.ROLES.LISTNER ? 'Listener' : 'Member'}
                                            {/* <Image src={warningS} alt="" className="ml-2" /> */}
                                        </div>
                                        <div className="col27 fw400 fs14">{userData.u_bio}</div>
                                        <div className="border_bottoms mt-3"></div>
                                    </div>
                                    <div className="text-center user_tab">
                                        {/* <Tabs defaultActiveKey="home">
                      <Tab eventKey="home" title="Home"> */}
                                        {/* <div className="layout mt-5">
                          <div className="d-flex m-auto w35 border2">
                            <div className="fs16 col23 fw400 text-left w60">Number of Ratings:</div>
                            <div className="fs16 col14 fw400 text-left w40">{userData.u_rating}</div>
                          </div>
                        </div> */}
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Email:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.email || '-'}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Mobile Number:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_mobile || '-'}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Country:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_country || '-'}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Date of Birth:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_birthdate || '-'}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">BIO:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_bio || '-'}</div>
                                            </div>
                                        </div>
                                        {/* <div className="layout">
                          <div className="d-flex m-auto w35 border2">
                            <div className="fs16 col23 fw400 text-left w60">Listens to:</div>
                            <div className="fs16 col14 fw400 text-left w40">{userData.listento}</div>
                          </div>
                        </div>{console.log("userDatauserData", userData)} */}
                                        {/* <div className="layout">
                          <div className="d-flex m-auto w35 border2">
                            <div className="fs16 col23 fw400 text-left w60">Languages:</div>
                            <div className="fs16 col14 fw400 text-left w40">{userData.language ? userData.language : ''}</div>
                          </div>
                        </div> */}

                                        {
                                            userData.u_role_id == CONSTANTS.ROLES.LISTNER ?
                                                (
                                                    <div className="layout">
                                                        <div className="d-flex m-auto w35 border2">
                                                            <div className="fs16 col23 fw400 text-left w60">Listener Since:</div>
                                                            <div className="fs16 col14 fw400 text-left w40">{userData.listnersince ? moment(userData.listnersince).format('DD/MM/YYYY') : '-'}</div>
                                                        </div>
                                                    </div>
                                                ) : userData.u_role_id == CONSTANTS.ROLES.USER ?
                                                    (
                                                        <div className="layout">
                                                            <div className="d-flex m-auto w35 border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Member Since:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">{userData.listnersince ? moment(userData.listnersince).format('DD/MM/YYYY') : '-'}</div>
                                                            </div>
                                                        </div>
                                                    ) : null

                                        }




                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Last Active:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.lastactive ? moment(userData.lastactive).format('DD/MM/YYYY') : ''}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Gender:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_gender || '-'}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Chats:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_listener_chat || '-'}</div>
                                            </div>
                                        </div>
                                        {/* </Tab> */}
                                        {/* <Tab eventKey="videos" title="videos">
                        videos 23
                                        </Tab>
                      <Tab eventKey="badgesawards" title="Badges & Awards">
                        Badges & Awards
                                        </Tab>
                      <Tab eventKey="Categories" title="Categories">
                        Categoriesasd
                                        </Tab> */}
                                        {/* </Tabs> */}
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

