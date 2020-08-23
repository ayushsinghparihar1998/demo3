import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import { connect } from 'react-redux';
import { actionGetProfile, actionGetProfileById } from '../../common/redux/actions';
import * as moment from 'moment';
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
                        <Row>{console.log("userData234234", userData)}
                            <div className="myprofile mt-3 w-100">
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
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Name:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_name}</div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Email:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layout">
                                            <div className="d-flex m-auto w35 border2">
                                                <div className="fs16 col23 fw400 text-left w60">Date of Birth:</div>
                                                <div className="fs16 col14 fw400 text-left w40">{userData.u_birthdate ? moment(userData.u_birthdate, 'DD/MM/YYYY').format('d MMM yyyy') : ''}</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
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
