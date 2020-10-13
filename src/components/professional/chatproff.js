import React, { Component } from "react";
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
  Modal
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import UserChat from "../../assets/images/user_chat.svg";
import Deleteusers from "../../assets/images/delete_users.svg";
import Blueicons from "../../assets/images/blue_cross.svg";
import UserChat2 from "../../assets/images/user_chat2.svg";
import UserChat3 from "../../assets/images/user_chat3.svg";
import UserChat4 from "../../assets/images/user_chat4.svg";
import UserChat5 from "../../assets/images/user_chat5.svg";
import ChatCross from "../../assets/images/chat_cross.svg";
import Warningnotification from "../../assets/images/notification_warning.svg";
import Fullscreen from "../../assets/images/full_screen.svg";
import Sounds from "../../assets/images/sound.svg";
import Dangers from "../../assets/images/danger.svg";
import Deletes from "../../assets/images/delete.svg";
import Questions from "../../assets/images/question.svg";
import Calls from "../../assets/images/calls.svg";
import Videos from "../../assets/images/videos.svg";
import Errors from "../../assets/images/errors.svg";
import Chatcross2 from "../../assets/images/chat_cross2.svg";
import Chatplus from "../../assets/images/user_plus.svg";
import Smileone from "../../assets/images/smile1.svg";
import Smilesad from "../../assets/images/smile_sad.svg";
import Smiletwo from "../../assets/images/smile2.svg";
import Smilethree from "../../assets/images/smile3.svg";
import Smilefour from "../../assets/images/smile4.svg";
import Smilefive from "../../assets/images/smile5.svg";
import Smilesix from "../../assets/images/smile6.svg";
import Smileeight from "../../assets/images/smile8.svg";
import Smilenine from "../../assets/images/smile9.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
// import Blueicons from "../../assets/images/blue_cross.svg";

import { getLocalStorage, setLocalStorage, showErrorToast, showErrorMessage } from "../../common/helpers/Utils";
import SocketIOClient from "socket.io-client";
import moment from "moment";
import socketClass from "../../common/utility/socketClass";
import getUserProfile from "../../common/utility/getUserProfile";
import RecentChat from "../ChatShared/RecentChat/RecentChat";
import ActiveUsers from "../ChatShared/ActiveUsers/ActiveUsers";
import BlockModal from "../modals/BlockModal";


// const SOCKET_IO_URL = "http://103.76.253.131:8282";
// const socket = SocketIOClient(SOCKET_IO_URL);
const socket = socketClass.getSocket();
class ChatProff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeListners: [],
      activeChatUsers: [],
      showVal: 4,
      allMessages: [],
      showChat: false,
      response: {},
      user_id: getLocalStorage("userInfoProff").u_id,
      userMeta: {},
      show6: false,
    };
    this.blockModal = React.createRef();
  }

  handleblockModal2 = () => {
    this.setState({ show6: true });
  };

  handleblockClose2 = () => {
    this.setState({ show6: false });
  };
  handlereportModal2 = () => {
    this.setState({ show7: true });
  };

  handlereportClose2 = () => {
    this.setState({ show7: false });
  };
  handleblockuserModal2 = () => {
    // alert("ASd")
    this.setState({ show8: true });
  };

  handlerblockuserClose2 = () => {
    this.setState({ show8: false });
  };
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.unmount);
    // this.unmount();
  }
  unmount = () => {
    if (socket) {
      // socket.disconnect();
      // console.log("DISCOnnected ================================================")
    }
  }
  componentDidMount() {
    if (this.state.user_id == this.props.match.params.id) {
      this.props.history.push('/');
    }
    if (!socket.connected) {
      // socket.connect();
    }
    window.addEventListener("beforeunload", this.unmount)
    this.setState({
      from_user_id: getLocalStorage("userInfoProff").u_id,
    });
    socket.on("connect", function () {
      console.log("COnnected ================================================")
    });
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
    socket.emit("chatHistory", JSON.stringify({
      from_user_id: getLocalStorage("userInfoProff").u_id,
      to_user_id: this.props.match.params.id,
      'page': 1,
      'pagination': 20
    }),
      (data) => {
        if (data.data && data.data.length > 0) {
          this.setState({ allMessages: data.data.reverse() })
        }
      }
    );
    socket.on("startTyping", (data) => this.setState({ response: data }));
    socket.on("stopTyping", (data) =>
      this.setState({ response: { message: "" } })
    );
    socket.on("sendMessage", (data) => {
      console.log("SEND_MESSAGE On", data);
      if (data.from_user_id == this.props.match.params.id) {
        this.updateChat(data);
      }
    });

    socket.emit(
      "onScreen",
      JSON.stringify({
        from_user_id: getLocalStorage("userInfoProff").u_id,
        to_user_id: this.props.match.params.id,
        status: 1,
      }),
      data => this.setState({ userMeta: data.userDetail })
    );
    socket.emit(
      "getRecentsChatedUsers",
      JSON.stringify({
        user_id: getLocalStorage("userInfoProff").u_id,
      }),
      function (d) {
        console.log("getRecentsChatedUsers", d);
        this.setState(
          {
            recentChatUsers: d.data,
          },
          () => {
            console.log(this.state.recentChatUsers);
          }
        );
      }.bind(this)
    );
    socket.on("newUserForActivityList", (data) => {
      if (this.state.activeChatUsers.findIndex(u => u.id === data.id) === -1) {
        this.setState(prev => ({
          activeChatUsers: [...prev.activeChatUsers, data]
        }))
      }
    });
    socket.emit(
      "getActiveListnersOrCustomers",
      JSON.stringify({
        user_type: getLocalStorage("userInfoProff").u_role_id,
        user_id: getLocalStorage("userInfoProff").u_id,
        pagination: "30",
        page: "1",
      }),
      function (d) {
        console.log("getActiveListnersOrCustomers", d);
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

  addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      this.handleSendMessage();
      this.setState({
        message: "",
      });
    }
  };
  handleSendMessage = (e) => {
    if (!this.state.message) return false;
    let message = this.state.message ? this.state.message.trim() : "";
    this.sendMessage(message);
    this.setState({ message: "" });
  };
  updateChat(data) {
    console.log("data", data);

    this.setState({ allMessages: [...this.state.allMessages, data] });
    console.log("AllMessages", this.state.allMessages);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      this.handleSendMessage();
      this.setState({
        message: "",
      });
    }
  };

  sendMessage(message, type) {
    let object = {
      message: message,
      from_user_id: getLocalStorage("userInfoProff").u_id,
      to_user_id: this.props.match.params.id,
      message_type: 1,
      date_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      user_type: this.state.userMeta.user_type
    };
    socket.emit("sendMessage", JSON.stringify(object), (data) => {
      if (data.success === 1) {
        this.updateChat(object);
      } else {
        showErrorMessage(data.msg);
      }
    });


  }

  startTyping() {
    socket.emit(
      "startTyping",
      JSON.stringify({
        to_user_id: this.props.match.params.id,
        user_type: getLocalStorage("userInfoProff").u_role_id,
        from_user_id: getLocalStorage("userInfoProff").u_id,
        user_type: this.state.userMeta.user_type
      }),
      (data) => this.setState({ response: data })
    );
  }

  stopTyping() {
    socket.emit(
      "stopTyping",
      JSON.stringify({
        to_user_id: this.props.match.params.id,
        user_type: getLocalStorage("userInfoProff").u_role_id,
        from_user_id: getLocalStorage("userInfoProff").u_id,
      }),
      (data) => this.setState({ response: data })
    );
  }
  changepath = (path) => {
    this.props.history.push(path);
  };
  changeChatpath = (id) => {
    this.props.history.replace(`/reload`);
    setTimeout(() => {
      this.props.history.push("/chatproff/" + id);
    });
  };
  handleRedirectRecentChat = (data) => () => {
    const { user_id } = this.state;
    const id = data.from_user_id == user_id ? data.to_user_id : data.from_user_id;
    this.changeChatpath(id);
  }
  handleRedirectActiveUsers = (data) => () => {
    this.changeChatpath(data.id);
  }
  initCall = (type) => () => {
    const { userMeta } = this.state;
    const { u_email, u_id, u_role_id } = getUserProfile();
    const payload = {
      "reciver_id": userMeta.id, "reciver_type": userMeta.user_type,
      "date": moment().format("YYYY-MM-DD"),
      "time": moment().format("HH:mm:ss"),
      "sender_id": u_id,
      "sender": {
        u_email, u_id, u_role_id
      }, type: type
    }
    socket.emit("makeVideoCall", payload, (data) => {
      if (data.success === 1) {
        this.props.history.push('/calling', { id: userMeta.id, mode: 'outgoing', type: type })
      } else {
        showErrorMessage(data.msg)
      }
    })
  }

  render() {
    const { userMeta = {} } = this.state;
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
                  <ActiveUsers onRedirect={this.handleRedirectActiveUsers} />
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

                  {/* <div className="inner_side">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      <span onClick={() => this.call()}>
                        Currently Active Listeners
                      </span>
                    </div>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Listener">
                        <div className="chat-border"></div>
                        {this.state.activeChatUsers &&
                          this.state.activeChatUsers.map((item, ind) => {
                            return ind < this.state.showVal ? (
                              <div className="d-flex m-3 border-bottom pointer"
                                onClick={() =>
                                  this.changeChatpath(item.id)
                                }>
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

                                  >
                                    {item.u_name}
                                  </div>
                                </div>
                              </div>
                            ) : (
                                ""
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

              <Col md={9}>
                <div className="chat_dashboard">
                  <div className="chat_top">
                    <Row>
                      <Col xs={3}>
                        <div className="mt-auto mb-auto">
                          <Image
                            src={userMeta.u_image || UserChat3}
                            alt={userMeta.u_username}
                            className="r50 pointer"
                          />
                          <span className="fs17 fw600 col18 pl-3">{userMeta.u_username}</span>
                        </div>
                      </Col>
                      <Col xs={9}>
                        <div className="mt-auto mb-auto text-right">
                          <Image
                            src={Warningnotification}
                            alt=""
                            className="pointer mr-2"
                          />
                          <Image
                            src={Fullscreen}
                            alt=""
                            className="pointer mr-2"
                          />
                          <Image src={Sounds} alt="" className="pointer mr-2" />
                          <Image
                            src={Dangers}
                            alt=""
                            onClick={() => this.blockModal.current.openModal()}
                            // onClick={this.handleblockuserModal2} 
                            className="pointer mr-2"
                          />
                          <Image
                            src={Deletes}
                            alt=""
                            onClick={this.handleblockModal2}
                            className="pointer mr-2"
                          />
                          <Image
                            src={Questions}
                            alt=""
                            onClick={this.handlereportModal2}
                            className="pointer mr-2"
                          />
                          <Image src={Calls} alt="" onClick={this.initCall('audio')} className="pointer mr-2" />
                          <Image src={Videos} alt="" className="pointer mr-2" onClick={this.initCall('video')} />
                          <Button className="btnTyp6 text-uppercase">
                            end chat
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div></div>
                  </div>

                  <div className="chat_middle">
                    <div className="p-3">
                      <div className="bg_gray mt-auto mb-auto d-flex align-items-center">
                        <Image src={Errors} alt="" className="mr-3" />
                        <span className="fs14 fw300 col1 pr-1">
                          For your own safety, do not share your personal
                          details, contact infoor social media handles.
                        </span>
                        <Image
                          src={Chatcross2}
                          alt=""
                          className="ml-auto pointer"
                        />
                      </div>

                      <div className="bg_gray mt-auto mb-auto d-flex align-items-center">
                        <span className="cirles">
                          <Image src={Chatplus} alt="" className="pointer" />
                        </span>
                        <span className="fs14 fw300 col1 ml-3 pr-1">
                          Click here to advice and crisis referral information.
                        </span>
                        <Image
                          src={Chatcross2}
                          alt=""
                          className="ml-auto pointer"
                        />
                      </div>
                    </div>

                    {this.state.allMessages.length > 0 ? (
                      <div className="mt-auto">
                        {this.state.allMessages.map((msg, index) => {
                          return msg.from_user_id ==
                            getLocalStorage("userInfoProff").u_id ? (
                              <div className="pl-3 pr-3 pb-3">
                                <div className="text-right">
                                  <div className="p-2 bg_gray d-inline-block fs15 fw500 col29">
                                    {msg.message}
                                  </div>
                                  <div className="fs10 fw300 col47">
                                    {moment(msg.date_time).format('hh:mm a')}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="pl-3 pr-3 pb-3">
                                <div className="d-flex">
                                  <div className="mt-auto mb-auto">
                                    <Image
                                      src={UserChat4}
                                      alt=""
                                      className="r50 mr-3"
                                    />
                                  </div>
                                  <div className="mt-auto mb-auto">
                                    <div className="p-2 bg_blue d-inline-block fs15 fw500 col29">
                                      {msg.message}
                                    </div>
                                    <div className="fs10 fw300 col47">
                                      {moment(msg.date_time).format('hh:mm a')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                        })}
                      </div>
                    ) : (
                        ""
                      )}
                  </div>
                  <div className="chat_bottom">
                    <div>
                      <Form.Group>
                        <div className="d-flex">
                          <Form.Control
                            type="text"
                            placeholder="Type your message here..."
                            className="inputTyp3"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}
                            onKeyDown={this.addMessage}
                            onKeyUp={this.startTyping.bind(this)}
                            name="message"
                          />
                          <Button
                            className="btnTyp7"
                            disabled={!this.state.message}
                            onClick={this.handleSendMessage}
                          >
                            Send
                          </Button>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                </div>
                <div className="emogy mt-4">
                  <div className="smile">
                    <Image src={Smileone} />
                    <Image src={Smilesad} />
                    <Image src={Smiletwo} />
                    <Image src={Smilethree} />
                    <Image src={Smilefour} />
                    <Image src={Smilefive} />
                    <Image src={Smilesix} />
                    <Image src={Smileeight} />
                    <Image src={Smilenine} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <BlockModal ref={this.blockModal}  userId={this.props.match.params.id} />
          {/* Block popup modal start */}
          {/* <Modal 
                        show={this.state.show6} 
                        // onHide={this.handleCloseConformation}
                        className="custom-popUp confirmation-box delete_modal block_modal" 
                        bsSize="small"
                    >
                        <Modal.Body>
                        <div className="col10 fw500 fs28 text-left">Block User</div>
                            <div className="delete_user mt-4">    
                                <Image src={Deleteusers} alt="" /> 
                                <Image src={Blueicons} alt="" className="close pointer" onClick={this.handleblockClose2} /> 
                                <div className="text-center fs24 mt-4 col64 mb-4">
                                Are you sure want to Block <br /> Melisa? </div> 

                                <div className="text-center mb-5"> 
                                    <Button
                                        className="btn btn-success text-uppercase ">
                                        Yes 
                                    </Button>  
                                    <Button 
                                        className="btn btn-default text-uppercase sm-btn">
                                        No 
                                   </Button>
                                </div>
                                
                            </div>
                        </Modal.Body>
                    </Modal> */}

          {/* Block popup modal end */}

          {/* Block Report User modal start */}
          <Modal
            show={this.state.show8}
            // onHide={this.handleCloseConformation}
            className="custom-popUp confirmation-box delete_modal block_modal"
            bsSize="small"
          >
            <Modal.Body>
              <div className="col10 fw500 fs28 text-left">Report/Block User</div>
              <div className="delete_user mt-4">
                <Image src={Blueicons} alt="" className="close pointer" onClick={this.handlerblockuserClose2} />

                <div className="text-center mt-5 mb-3">
                  <Button
                    className="text-uppercase w-auto btnTyp9 report mr-4">
                    REPORT
                                    </Button>
                  <Button
                    className="text-uppercase w-auto btnTyp9 blocks">
                    BLOCK
                                   </Button>
                </div>

              </div>
            </Modal.Body>
          </Modal>

          {/* Block Report User modal end */}

          {/* Report Listener popup modal start */}
          <Modal
            show={this.state.show7}
            // onHide={this.handleCloseConformation}
            className="custom-popUp confirmation-box delete_modal block_modal"
            bsSize="small"
          >
            <Modal.Body>
              <div className="col10 fw500 fs28 text-left">Report Listener</div>
              <div className="col14 fs20 fw400 text-left mt-2">Please select a problem to continue</div>
              <div className="delete_user mt-4">
                <Image src={Blueicons} alt="" className="close pointer" onClick={this.handlereportClose2} />

                <ul className="block_users">
                  <li>Requesting/Sharing personal contact information</li>
                  <li>Inappropriate/Sex chat</li>
                  <li>Harassing/Threatening Behaviour</li>
                  <li>Other</li>
                </ul>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="pb-2 mt-3 mb-4">
                  <Form.Control as="textarea" rows="3" className="inputTyp2 col28 fs20 fw400" placeholder="Comments" />
                </Form.Group>
                <div className="text-left">
                  <Button
                    className="btnTyp5 w-auto btn btn-success text-uppercase">
                    SUBMIT
                                    </Button>
                </div>

              </div>
            </Modal.Body>
          </Modal>

          {/* Report Listener modal end */}



        </div>
        <Footer />
      </div>
    );
  }
}
export default ChatProff;
