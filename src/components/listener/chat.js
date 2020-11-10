import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
  Modal,
  Tooltip,
  OverlayTrigger, 

} from "react-bootstrap"; 

import NavBar from "../core/nav";
import Footer from "../core/footer";
import UserChat from "../../assets/images/user_chat.svg";
import UserChat2 from "../../assets/images/user_chat2.svg";
import UserChat3 from "../../assets/images/user_chat.png";
import UserChat4 from "../../assets/images/user_chat.png";
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
import Livechatcomment from "../../assets/images/livechatcomment.svg";
import Starfillone from "../../assets/images/starfillone.svg";
import Starfillempty from "../../assets/images/staremptyone.svg";
import Checkgreentwo from "../../assets/images/checkgreen2.svg";

import { getLocalStorage, setLocalStorage, showErrorToast, showErrorMessage } from "../../common/helpers/Utils";
import SocketIOClient from "socket.io-client"; 
import moment from "moment"; 
import socketClass from "../../common/utility/socketClass";
import getUserProfile from "../../common/utility/getUserProfile";
import RecentChat from "../ChatShared/RecentChat/RecentChat";
import ActiveUsers from "../ChatShared/ActiveUsers/ActiveUsers";
import BlockModal from "../modals/BlockModal";
import SurveyModal from "../modals/SurveyModal";
import MessageCount from "../modals/MessageCount";
import DeleteConfirmation from "../modals/DeleteConfirmation";
import ELPRxApiService from "../../common/services/apiService"; 
import Crossbtn from "../../assets/images/blue_cross.svg"; 

// const SOCKET_IO_URL = "http://103.76.253.131:8282";
// const socket = SocketIOClient(SOCKET_IO_URL);
// socket.connect();

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Block User
  </Tooltip>
);
const renderTooltiptwo = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Delete Chat
  </Tooltip>
);
const renderTooltipthree = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Audio Call
  </Tooltip>
);
const renderTooltipfour = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Video Call
  </Tooltip>
);

const socket = socketClass.getSocket(); 

class Chat extends Component {
  

  constructor(props) {
    
    super(props);
    this.state = {
      isEmergencyInfo: false,
      show6: false,
      show7: false,
      activeListners: [],
      activeChatUsers: [],
      showVal: 4,
      allMessages: [],
      showChat: false,
      response: {},
      closeFlag: false,
      ans11: false,
      ans12: false,
      ans13: false,
      ans21: false,
      ans22: false,
      ans23: false,
      ans31: false,
      ans32: false,
      ans33: false,
      blockCallButton:false,
      typing: "",
      user_id: getLocalStorage("userInfo").u_id,
      userMeta: {},
      isMessageDisabled: false

    };

   
    this.messagesEnd = React.createRef();

    this.blockModal = React.createRef();
    this.surveyModal = React.createRef();

    this.deleteConfirmation = React.createRef();

    

  }


  scrollToBottom = () => {

    // if (this.messagesEnd && this.messagesEnd.current) {
    //   this.messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    // }

    var element = document.getElementById("message-container");
    if (element) {
      element.scrollTop = element.scrollHeight;
    }


  }


  handleEndchatModal = () => {
    this.setState({ show6: true });
  };
  handleEndchatClose = () => {
    this.setState({ show6: false });
  };

  handleRateusModal = () => {
    this.setState({ show7: true });
  };
  handleRateusClose = () => {
    this.setState({ show7: false });
  };

  chatinfoOpen = () => { 
    this.setState({ isEmergencyInfo: true });
  };
  chatinfoClose = () => { 
    this.setState({ isEmergencyInfo: false });
  };

  componentWillUnmount() {
    if (getLocalStorage("userInfo")) {  
      socket.emit(
        "onScreen",
        JSON.stringify({
          from_user_id: getLocalStorage("userInfo").u_id,
          to_user_id: this.props.match.params.id,
          status: 0,
        }), (data) => {
          console.log('onScreen called ===>>>', data, {
            from_user_id: getLocalStorage("userInfo").u_id,
            to_user_id: this.props.match.params.id,
            status: 0,
          })
        }
      );
    }

    window.removeEventListener("beforeunload", this.unmount);
    // this.unmount();
  }
  unmount = () => {
    if (socket) {
      //   socket.disconnect();
      //   console.log("DISCOnnected ================================================")
    }
  }
  componentDidMount() { 

    ELPRxApiService("getprofile").then(res => {
      console.log('res == .. image', res)

      this.setState({
        profileImage: res.data.data.profile_list.u_image,
      })

    }).catch(err => {
      console.log(err);
    })

    if (this.state.user_id == this.props.match.params.id) {
      this.props.history.push('/');
    }
    if (!socket.connected) {
      // socket.connect();
    }
    window.addEventListener("beforeunload", this.unmount)
    this.setState({
      from_user_id: getLocalStorage("userInfo").u_id,
    });
    setLocalStorage("onScreenIdList", this.props.match.params.id);

    socket.on("connect", function () {
      console.log("COnnected ================================================")
      socket.on("block-user", (data) => {
        console.log('block-user ====>', data)
        if (data.block == 1) {
          showErrorMessage("You have been blocked by " + data.name)
        }
      })
    }); 
    // socket.emit(
    //   "chat-login",
    //   JSON.stringify({
    //     user_id: getLocalStorage("userInfo").u_id,
    //     user_type: getLocalStorage("userInfo").u_role_id,
    //   }),
    //   function (data) {
    //     console.log(data, "authenticateSocket");
    //   }
    // );
    socket.emit("chatHistory", JSON.stringify({
      from_user_id: getLocalStorage("userInfo").u_id,
      to_user_id: this.props.match.params.id,
      'page': 1,
      'pagination': 20
    }),
      (data) => {
        if (data.data) { 
          this.setState({ allMessages: data.data.reverse() }, () => {
            this.scrollToBottom()
          })
        }
      }
    );

    socket.emit(
      "onScreen",
      JSON.stringify({
        from_user_id: getLocalStorage("userInfo").u_id,
        to_user_id: this.props.match.params.id,
        status: 1,
      }), data => {
        console.log('data ====?', data)
        this.setState({ userMeta: data.userDetail })
      }
    );
    socket.on("startTyping", (data) => {
      this.setState({ response: data });
      console.log(data);
    });
    socket.on("stopTyping", (data) =>
      this.setState({ response: { message: "" } })
    );

    socket.on("sendMessage", (data) => {
      console.log("getRecentsChatedUsers SEND_MESSAGE On", data);
      if (data.from_user_id == this.props.match.params.id) {
        // data.date_time = new Date();
        this.updateChat(data);
      }
    });
    socket.on("newUserForActivityList", (data) => {
      if (this.state.activeChatUsers.findIndex(u => u.id === data.id) === -1) {
        this.setState(prev => ({
          activeChatUsers: [...prev.activeChatUsers, data]
        }))
      }
    });
  }
  handleQue1(e, a1, a2) {
    let name = e.target.name;
    let checked = e.target.checked;

    console.log(name, checked);
    this.setState({
      [name]: checked,
      [a1]: false,
      [a2]: false,
    });
  }
  addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      this.handleSendMessage();
      this.setState({
        message: "",
      });
    }
  };
  handleSendMessage = () => {
    if (!this.state.message) return false;
    let message = this.state.message ? this.state.message.trim() : "";
    this.sendMessage(message);
    this.setState({ message: "" });
  };
  updateChat(data) {
    this.setState({ allMessages: [...this.state.allMessages, data] }, () => {
      this.scrollToBottom()
    });
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

  sendMessage(message, type = 1) {
    console.log('sss334', getLocalStorage("userInfo"))
    let object = {
      message: message,
      from_user_id: getLocalStorage("userInfo").u_id,
      to_user_id: this.props.match.params.id,
      message_type: type,
      date_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      user_type: this.state.userMeta.user_type,
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("HH:mm:ss"),
      from_image: this.state.profileImage,
    };
    socket.emit("sendMessage", JSON.stringify(object), (data) => {
      console.log(data, object);
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
        user_type: this.state.userMeta.user_type,
        from_user_id: getLocalStorage("userInfo").u_id,
      }),
      (data) => {
        this.setState({ response: data });
        console.log(data);
      }
    );
  }

  stopTyping() {
    socket.emit(
      "stopTyping",
      JSON.stringify({
        to_user_id: this.props.match.params.id,
        user_type: 3,
        from_user_id: getLocalStorage("userInfo").u_id,
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
      this.props.history.replace("/chat/" + id);
    });
  };

  handleClose2 = () => {
    this.setState({
      closeFlag: !this.state.closeFlag,
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
    if(!this.state.blockCallButton){
      this.setState({
        blockCallButton:true
      })
      this.sendMessage(`${type == 'audio' ? 'Audio' : 'Video'} call started at`, 2)
  
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
        setTimeout(()=>{
          this.setState({
            blockCallButton:false
          })
        },4000)
       
        if (data.success === 1) {
          this.props.history.push('/calling', { id: userMeta.id, mode: 'outgoing', type: type, to_id: this.props.match.params.id, from_id: getLocalStorage("userInfo").u_id })
        } else {
          this.sendMessage(`${type == 'audio' ? 'Audio' : 'Video'} call started at`, 2)
          showErrorMessage(data.msg);
        }
      })
    }
  
  }

  disableInputHandler = () => {
    this.setState({
      isMessageDisabled: true
    })
  }

  recallChatList = () => {
    socket.emit("chatHistory", JSON.stringify({
      from_user_id: getLocalStorage("userInfo").u_id,
      to_user_id: this.props.match.params.id,
      'page': 1,
      'pagination': 20
    }),
      (data) => {
        console.log(data)
        if (data.data) {
          this.setState({ allMessages: data.data.reverse() }, () => {
            this.scrollToBottom()
          })
        }
      }
    );
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
                  <div className="left_sidebar">
                    <RecentChat onRedirect={this.handleRedirectRecentChat} />
                    <ActiveUsers onRedirect={this.handleRedirectActiveUsers} />
                  </div>
                </div>
              </Col>

              <Col md={9}>
                <div className="chat_dashboard">
                  <div className="chat_top">
                    <Row>
                      <Col xs={3} md={3} sm={4}>
                        <div className="mt-auto mb-auto">
                          <Image
                            src={userMeta.u_image || UserChat3}
                            alt={userMeta.u_username}
                            className="r50 pointer"
                          />
                          <span className="fs17 fw600 col18 pl-3">{userMeta.u_username}</span>
                        </div>
                      </Col>
                      <Col xs={9} md={9} sm={8}>
                        <div className="mt-auto mb-auto text-right">
                          {/* <Image
                            src={Warningnotification}
                            alt=""
                            className="pointer mr-2"
                          />
                          <Image
                            src={Fullscreen}
                            alt=""
                            className="pointer mr-2"
                          />
                          <Image src={Sounds} alt="" className="pointer mr-2" /> */}


                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltip}
                          >
                            <Image
                              src={Dangers}
                              onClick={() => this.blockModal.current.openModal()}
                              alt=""
                              className="pointer mr-2"
                            />
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltiptwo}
                          >
                            <Image
                              src={Deletes}
                              alt=""
                              onClick={() => this.deleteConfirmation.current.openModal()}
                              className="pointer mr-2"
                            />
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltipthree}
                          >
                            <Image src={Calls} alt="" className="pointer mr-2" onClick={this.initCall('audio')} />
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltipfour}
                          >
                            <Image src={Videos} alt="" className="pointer mr-2" onClick={this.initCall('video')} />
                          </OverlayTrigger>

                          {/* <Image
                            src={Questions}
                            alt=""
                            className="pointer mr-2"
                          /> */}
                          {/* <Image src={Calls} alt="" className="pointer mr-2" onClick={this.initCall('audio')} />
                          <Image src={Videos} alt="" className="pointer mr-2" onClick={this.initCall('video')} /> */}
                          {
                            !this.state.isMessageDisabled ?
                              <Button
                                className="btnTyp6 text-uppercase"
                                onClick={() => this.surveyModal.current.openModal()}
                              >
                                end chat
                          </Button> : null
                          }



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
                          details, contact info or social media handles.
                        </span>
                        <Image
                          src={Chatcross2}
                          alt=""
                          className="ml-auto pointer"
                        />
                      </div>

                      <div className="bg_gray mt-auto mb-auto d-flex align-items-center">
                        <span className="cirles">  
                          <Image src={Chatplus} alt="" className="pointer" onClick={this.chatinfoOpen} />
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
                    {/* {console.log("+++++++++++==>",this.state.allMessages)} */}
                    {this.state.allMessages.length > 0 ? (
                      <div id="message-container" className="mt-auto">
                        {this.state.allMessages.map((msg, index) => {
                          return msg.message_type == 2 ?
                            <p style={{ textAlign: 'center' }}>{msg.message}  {moment(msg.date_time).format("hh:mm a")}</p>
                            : msg.from_user_id ==
                              getLocalStorage("userInfo").u_id ? (
                                <div className="pl-3 pr-3 pb-3">
                                  <div className="text-right">
                                    <div className="p-2 bg_gray d-inline-block fs15 fw500 col29">
                                      {msg.message}
                                    </div>
                                    <div className="fs10 fw300 col47">
                                      {moment(msg.date_time).format("hh:mm a")}
                                    </div>
                                  </div>
                                </div>
                              ) : (

                                <div className="pl-3 pr-3 pb-3">
                                  <div className="d-flex">
                                    <div className="mt-auto mb-auto">
                                      {console.log(msg)}
                                      <Image
                                        src={msg.from_image || UserChat4}
                                        alt=""
                                        className="r50 mr-3"
                                      />
                                    </div>
                                    <div className="mt-auto mb-auto">
                                      <div className="p-2 bg_blue d-inline-block fs15 fw500 col29">
                                        {msg.message}
                                      </div>
                                      <div className="fs10 fw300 col47">
                                        {moment(msg.date_time).format("hh:mm a")}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                        })}

                        <div style={{ float: "left", clear: "both" }}
                          ref={this.messagesEnd}>
                        </div>

                      </div>
                    ) : (
                        ""
                      )}
                    {/* <div className="pl-3 pr-3 pb-3">
                      <div className="d-flex">
                        <div className="mt-auto mb-auto">
                          <div className="fs10 fw300 col47">typing...</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="chat_bottom">
                    {/* <Form> */}
                    <Form.Group>
                      {
                        !this.state.isMessageDisabled ? <div className="d-flex">

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
                            type="button"
                            disabled={!this.state.message}
                            onClick={() => this.handleSendMessage()}
                          >
                            Send
                        </Button>
                        </div> : null
                      }

                      {/* <MessageCount userId={this.props.match.params.id} /> */}
                    </Form.Group>
                    {/* </Form> */}
                  </div>
                </div>
              </Col>
            </Row>

          </Container>
        </div>
        <Footer />

        <BlockModal ref={this.blockModal} userId={this.props.match.params.id}   userName={getUserProfile().u_username} chatUserName={userMeta.u_username}  />
        <SurveyModal ref={this.surveyModal} disableInputHandler={this.disableInputHandler} />
        <DeleteConfirmation ref={this.deleteConfirmation} userName={userMeta.u_username} userId={this.props.match.params.id} recallChatList={this.recallChatList} />



        {/* modal isEmergencyInfo start */}   
        <Modal show={this.state.isEmergencyInfo} className="emergency_info custom-popUp confirmation-box">   
                <Modal.Header>              
                    <Image src={Crossbtn} alt="" onClick={this.chatinfoClose} className="pointer" />  
                </Modal.Header>   
              <Modal.Body>
                  <div className="col14 fs15 fw400">
                      <p className="mb-2">If you're in need of an emergency or instant response service, please refer to the following
                      <br/>helplines :-  <br/>National Institute of Mental Health and Neurosciences</p> 
                      <p className="mb-2"><strong>(Available 24x7) :-</strong> 08046110007</p> 
                      <p>Vandrevala Foundation <br/> <strong>(Available 24x7) :-</strong> +91 7304599836 / +91 7304599837 / 18602662345 / 18002333330 </p>
                      <p>Fortis Stress Helpline <br/> <strong>(Available 24x7) :-</strong> +9183768 04102 </p> 
                      <p>Samaritans <br/> <strong>(Available 5pm-8pm everyday) :-</strong> +91 84229 84528 / +91 84229 84529 / +91 84229 84530 </p>
                       <p>MPower Minds <br/> <strong>(Available 24x7) :-</strong> 1800120820050 </p> 
                       <p>Kiran  <br/> <strong>(Available 24x7) :-</strong> 18005990019</p>
                  </div>
              </Modal.Body>
             
            </Modal>
        {/* modal isEmergencyInfo end */}



      </div>
    );
  }
}
export default Chat; 
