import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
  Modal,
} from 'react-bootstrap';
import {
  actionGetRecentJoin,
  actionGetProfesionalDashBoard,
} from '../../common/redux/actions';
import NavBar from '../core/nav';
import Footer from '../core/footer';
import UserChat from '../../assets/images/user_chat.svg';
import UserChat2 from '../../assets/images/user_chat2.svg';
import UserChat3 from '../../assets/images/user_chat3.svg';
import UserChat4 from '../../assets/images/user_chat4.svg';
import UserChat5 from '../../assets/images/user_chat5.svg';
import ChatCross from '../../assets/images/chat_cross.svg';
import Heartfive from '../../assets/images/heart5.svg';
import Skill from '../../assets/images/skills.svg';
import Skill2 from '../../assets/images/skills2.svg';
import Skill3 from '../../assets/images/skills3.svg';
import Copys from '../../assets/images/copy_icon.svg';
import Warningtwo from '../../assets/images/w_signal.svg';
import Progresss from '../../assets/images/progress_bar.svg';
import Stars from '../../assets/images/stars.svg';
import Hearttwo from '../../assets/images/heart2.svg';
import Medals from '../../assets/images/medals.svg';
import Rflag from '../../assets/images/r_flag.svg';
import SocketIOClient from 'socket.io-client';
import { getLocalStorage } from '../../common/helpers/Utils';
import socketClass from '../../common/utility/socketClass';
import RecentChat from '../ChatShared/RecentChat/RecentChat';
import ActiveUsers from '../ChatShared/ActiveUsers/ActiveUsers';
// const SOCKET_IO_URL = 'http://103.76.253.131:8282';
// const socket = SocketIOClient(SOCKET_IO_URL);
const socket = socketClass.getSocket();
class ProfessionalDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeListners: [],
      activeChatUsers: [],
      showVal: 4,
      recentJoin: [], dashboardData: [],
      user_id: getLocalStorage("userInfoProff").u_id
    };
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.unmount);
    this.unmount();
  }
  unmount = () => {
    if (socket) {
      // socket.disconnect();
    }
  }
  componentDidMount() {
    if (!socket.connected) {
      // socket.connect();
    }
    window.addEventListener("beforeunload", this.unmount);
    this.getRecentJoinUsers();
    this.getProfesionalDashBoard();
    let result = getLocalStorage('result');
    console.log('getLocalStorage', getLocalStorage('result'));
    if (getLocalStorage('result') >= 60) {
      this.setState({
        sucess: true,
        result: true,
        message: 'your score is ' + result + '%',
      });
    } else {
      this.setState({
        sucess: true,
        result: false,
        message: 'your score is ' + result + '%',
      });
    }

    socket.on("connect", function () {
      // socket.emit(
      //   "chat-login",
      //   JSON.stringify({
      //     user_id: getLocalStorage("userInfoProff").u_id,
      //     user_type: getLocalStorage("userInfoProff").u_role_id,
      //   }),
      //   function (data) {
      //     console.log(data, "authenticateSocket");
      //   }
      // );
    });
    socket.on("newUserForActivityList", (data) => {
      if (this.state.activeChatUsers.findIndex(u => u.id === data.id) === -1) {
        this.setState(prev => ({
          activeChatUsers: [...prev.activeChatUsers, data]
        }))
      }
    });

    socket.emit(
      'getRecentsChatedUsers',
      JSON.stringify({
        user_id: getLocalStorage('userInfoProff').u_id,
      }),
      (d) => {
        console.log("getRecentsChatedUsers", d);
        this.setState(
          {
            recentChatUsers: d.data,
          });
      }
    );

    socket.emit(
      'getActiveListnersOrCustomers',
      JSON.stringify({
        user_type: getLocalStorage('u_role_id'),
        user_id: getLocalStorage('u_id'),
        pagination: '10',
        page: '1',
      }),
      function (d) {
        console.log('getActiveListnersOrCustomers', d);
        this.setState(
          {
            activeChatUsers: d.data,
          },
          () => {
            console.log(this.state.activeChatUsers);
          }
        );
      }.bind(this)
    );
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      sucess: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      sucess: false,
    });
  };
  changepath = (path) => {
    this.props.history.push(path);
  };

  getRecentJoinUsers() {
    let userInfo = getLocalStorage('userInfo');
    this.props.actionGetRecentJoin({}).then((result) => {
      console.log('vvvvvv', result);
      if (result && result.status === 200) {
        // let res = result.data.data.u_mem_list;
        //this.setState({ recentJoin: res })
      }
    });
  }
  getProfesionalDashBoard() {
    let userInfo = getLocalStorage('userInfo');
    this.props.actionGetProfesionalDashBoard({}).then((result) => {
      if (result && result.status === 200) {
        let res = result.data.data && result.data.data.dashboard_list;
        this.setState({ dashboardData: res });
      }
    });
  }
  copyReferUrl = () => {
    var copyText = document.getElementById('referURL');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // alert("Copied the text: " + copyText.value);
  }
  // "/chatproff/" + item.id
  handleRedirectRecentChat = (data) => () => {
    const { user_id } = this.state;
    const id = data.from_user_id == user_id ? data.to_user_id : data.from_user_id;
    this.props.history.push('/chatproff/' + id);
  }
  handleRedirectActiveUsers = (data) => () => {
    this.props.history.push('/chatproff/' + data.id);
  }
  render() {
    let recentJoin = this.state.recentJoin;
    let dashboardData = this.state.dashboardData;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="userdashboards pt-4 pb-5">
          <Container>
            <Row>
              <Col md={3}>
                <div className="left_sidebar">
                  <RecentChat onRedirect={this.handleRedirectRecentChat} />
                  {/* <div className="inner_side">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Chat
                    </div>

                    {this.state.recentChatUsers &&
                      this.state.recentChatUsers.map((item) => {
                        return (
                          <div className="d-flex m-3 border-bottom pointer" onClick={this.handleRedirectRecentChat(item)}>
                            <div className="position-relative">
                              <Image
                                src={
                                  item.from_image ? item.from_image : UserChat
                                }
                                alt=""
                                className="r50 pt-1"
                              />
                              <span className={(item.from_user_id ==
                                getLocalStorage("userInfoProff").u_id
                                ? item.to_user_online
                                : item.from_user_online) == "1" ? 'online' : ''}></span>
                            </div>
                            <div className="position-relative pl-3">
                              <div className="fs15 col23 fw500 pr-2">
                                {item.from_user_id ==
                                  getLocalStorage("userInfoProff").u_id
                                  ? item.to_user_name
                                  : item.from_user_name}
                              </div>
                              <div className="col27 fs13 fw500">
                                {item.message}
                              </div>
                              <Image
                                src={ChatCross}
                                alt=""
                                className="pointer cross_btn"
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div> */}
                  <ActiveUsers onRedirect={this.handleRedirectActiveUsers} />
                  {/* <div className="inner_side">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      <span
                      >
                        Currently Active Listeners
                      </span>
                    </div>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Listener">
                        <div className="chat-border"></div>
                        {this.state.activeChatUsers &&
                          this.state.activeChatUsers.map((item, ind) => {
                            return ind < this.state.showVal ? (
                              <div className="d-flex m-3 border-bottom pointer">
                                <div className="position-relative">
                                  <Image
                                    src={item.u_image ? item.u_image : UserChat}
                                    alt=""
                                    className="r50 pt-1"
                                  />
                                </div>
                                <div className="position-relative pl-3 mt-auto mb-auto">
                                  <div
                                    className="fs14 col14 fw500"
                                    onClick={() =>
                                      this.changepath('/chatproff/' + item.id)
                                    }
                                  >
                                    {item.u_name}
                                  </div>
                                </div>
                              </div>
                            ) : (
                                ''
                              );
                          })}
                      </Tab>
                    </Tabs>
                    {this.state.showVal == 4 ? (
                      <div
                        className="fs15 fw600 col23 p-3 pointer show-more"
                        onClick={() => {
                          this.setState({
                            showVal: this.state.activeChatUsers.length,
                          });
                        }}
                      >
                        Show More
                      </div>
                    ) : (
                        <div
                          className="fs15 fw600 col23 p-3 pointer show-more"
                          onClick={() => {
                            this.setState({
                              showVal: 4,
                            });
                          }}
                        >
                          Show Less
                        </div>
                      )}
                  </div> */}
                </div>
              </Col>

              <Col md={6}>
                <div className="user_body">
                  <div className="inner_body mb-3">
                    <div className="d-flex justify-content-between border_yellow">
                      <div className="border-gray">
                        <label className="fs18 col23 fw600 mb-0">
                          What's your goal?
                        </label>
                        <Form.Control
                          type="text"
                          className="inputTyp5 fs16 col27 fw400"
                          placeholder="take a general request"
                        />
                      </div>
                      <div className="border-gray">
                        <label className="fs18 col23 fw600 mb-0">
                          What's your motivation?
                        </label>
                        <Form.Control
                          type="text"
                          className="inputTyp5 fs16 col27 fw400"
                          placeholder="help someone new"
                        />
                        {/* <div className="fs18 col23 fw600">What's your motivation?</div>
                                                <div className="fs16 col27 fw400">help someone new</div> */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="inner_body userbg-white mb-3">
                    <div className="text-center p-4">
                      <Image src={Heartfive} alt="" className="pt-2" />
                      <div className="fs22 fw600 col14 pt-4 pb-4">
                        Heart 5 commentsin a group support room.
                      </div>
                      <Button className="btnTyp5 mb-3">Start Exerciees</Button>
                    </div>
                  </div> */}

                  <div className="inner_body userbg-white mb-3">
                    <div className="text-center p-4">
                      <div className="col14 fw600 fs22 border-gray pb-3 mb-5">
                        Activity this week
                      </div>
                      <Row className="justify-content-center">
                        <Col md={4}>
                          <Image src={Skill} alt="" />
                          <div className="fs14 col29 fw500 pt-4 pb-4">
                            Supportive Conversations
                          </div>
                        </Col>
                        <Col md={4}>
                          <Image src={Skill2} alt="" />
                          <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                            General Request Response Rate
                          </div>
                        </Col>
                        <Col md={4}>
                          <Image src={Skill3} alt="" />
                          <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                            Your Personal Request Response Rate
                          </div>
                        </Col>
                        <Col md={4}>
                          <Image src={Skill3} alt="" />
                          <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                            People Referred to Eat Luv N Pray
                          </div>
                        </Col>
                        <Col md={4}>
                          <Image src={Skill3} alt="" />
                          <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                            Your Personal Request Response Rate
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="right_sidebar">
                  <div className="right_inner_side">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Account Summary
                    </div>
                    <div className="m-3 pb-3 bg-grays">
                      <div className="d-flex mb-2">
                        <span className="fs16 fw400 col14 pr-3">Novicew 1</span>
                        <Image src={Warningtwo} alt="" />
                      </div>
                      <Image src={Progresss} alt="" />
                    </div>
                    <div className="m-3 pb-3 bg-grays">
                      <div className="d-flex mb-2">
                        <Image src={Stars} alt="" className="pointer" />
                        <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                          <strong className="fs18">
                            {dashboardData.u_cheers
                              ? dashboardData.u_cheers
                              : '0'}{' '}
                          </strong>
                          Cheers
                        </span>
                      </div>
                    </div>
                    <div className="m-3 pb-3 bg-grays">
                      <div className="d-flex mb-2">
                        <Image src={Hearttwo} alt="" className="pointer" />
                        <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                          <strong className="fs18">
                            {dashboardData.u_compassion_count
                              ? dashboardData.u_compassion_count
                              : '0'}{' '}
                          </strong>
                          Compassion Hearts
                        </span>
                      </div>
                    </div>
                    <div className="m-3 pb-3 bg-grays">
                      <div className="d-flex mb-2">
                        <Image src={Medals} alt="" className="pointer" />
                        <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                          <strong className="fs18">
                            {dashboardData.u_badge_count
                              ? dashboardData.u_badge_count
                              : '0'}{' '}
                          </strong>
                          Badges Earned
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="right_inner_side">
                    <div className="chat-pink fs600 fs17 col18 pl-3 pointer">
                      <Image src={Rflag} alt="" className="mr-2" /> Discover
                      Subcomunities
                    </div>
                  </div>

                  <div className="right_inner_side">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      My Personal Link
                    </div>
                    <div className="p-3">
                      <div className="fs14 col14 fw400">
                        Share your link to earn rewards & help us to support
                        more people
                      </div>
                      <Form.Group className="d-flex mt-4">
                        {/* <label>{dashboardData.refer_url ? dashboardData.refer_url : ''}</label> */}
                        <Form.Control
                          id="referURL"
                          type="text"
                          readOnly
                          className="inputTyp4"
                          value={
                            dashboardData.refer_url
                              ? dashboardData.refer_url
                              : ''
                          }
                        />
                        <Button className="btnTyp8" onClick={this.copyReferUrl}>
                          <Image src={Copys} alt="" className="" />
                        </Button>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="right_inner_side">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Recent join
                    </div>

                    {recentJoin &&
                      recentJoin.map((data, index) => {
                        return (
                          <div className="d-flex m-3 border-bottom">
                            <div className="position-relative">
                              <Image
                                src={data.u_image ? data.u_image : ''}
                                alt=""
                                className="r50 pt-1"
                              />
                            </div>
                            <div className="mt-auto mb-auto pl-3">
                              <div className="fs15 col14 fw500">
                                {data.u_username ? data.u_username : ''}
                              </div>
                              <div className="col27 fs13 fw500">
                                {data.u_role_txt ? data.u_role_txt : ''}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* <div className="d-flex m-3 border-bottom">
                      <div className="position-relative">
                        <Image src={UserChat2} alt="" className="r50 pt-1" />
                      </div>
                      <div className="mt-auto mb-auto pl-3">
                        <div className="fs15 col14 fw500">Scott Smith</div>
                        <div className="col27 fs13 fw500">Listeners</div>
                      </div>
                    </div> */}
                  </div>
                </div>
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
  actionGetRecentJoin,
  actionGetProfesionalDashBoard,
})(ProfessionalDashboard);
