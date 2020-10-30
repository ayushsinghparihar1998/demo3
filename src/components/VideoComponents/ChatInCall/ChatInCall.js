import React, { useEffect, useState } from 'react'
import moment from 'moment'
import ChatCross from "../../../assets/images/cross2s.svg";
import UserChat4 from "../../../assets/images/placeholder_user.png";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import socketClass from '../../../common/utility/socketClass';
import getUserProfile from '../../../common/utility/getUserProfile';
const socket = socketClass.getSocket();
function ChatInCall({ show, toggle, user, openChatWindow }) {
  const [allMsg, setAllMsg] = useState([]);
  let messagesEnd = React.createRef()
  const [msgInput, setMsgInput] = useState("");

  useEffect(() => {
    const payload = JSON.stringify({
      from_user_id: getUserProfile().u_id,
      to_user_id: user.id,
      'page': 1,
      'pagination': 20
    })
    console.log(payload);
    socket.emit("chatHistory", payload,
      (data) => {
        console.log(data)
        if (data.data && data.data.length > 0) {
          setAllMsg(data.data.reverse());
          
        }
      }
    );
    socket.on("sendMessage", (data) => {
      // console.log("SEND_MESSAGE On", data);
      if (data.from_user_id == user.id) {
        openChatWindow()
        setAllMsg(prev => [...prev, data]);
        setTimeout(()=>{
          scrollToBottom()
        },2000)
      }
    });
  }, [])
  const scrollToBottom = () => {
    console.log(messagesEnd)
    if(messagesEnd && messagesEnd.current){      
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
    

  }
  useEffect(() => {
    
      scrollToBottom()   

  }, [allMsg,show])



  const addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    if (!msgInput) return false;
    let message = msgInput ? msgInput.trim() : "";
    let object = {
      message: message,
      from_user_id: getUserProfile().u_id,
      to_user_id: user.id,
      to_image:user.u_image,  
      message_type: 1,
      date_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      user_type: user.u_role_id,
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("HH:mm:ss")
    };
    socket.emit("sendMessage", JSON.stringify(object), (data) => {
      console.log(data)
      setAllMsg(prev => [...prev, object]);
    });
    setMsgInput("")
  };

  if (!show || !user) return false;
  return (
    <div>
      <div className="chat_dashboard">
        <div className="chat_top">
          <Row>
            <Col xs={6}>
              <div className="mt-auto mb-auto">
                <span className="fs17 fw600 col18">{user.u_name}</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="mt-auto mb-auto text-right">
                <Image src={ChatCross} alt="" className="pointer cross_btn" onClick={toggle} />
              </div>
            </Col>
          </Row>
          <div></div>
        </div>
        <div className="chat_middle">
          <div className="mt-auto">
            <div className="pl-3 pr-3 pb-3">
              <div className="d-flex">
                {/* <div className="mt-auto mb-auto">
                  <Image src={UserChat4} alt="" className="r50 mr-3" />
                </div> */}


                <div className="mt-auto" >
                  {allMsg.map((msg, index) => {
                    return msg.from_user_id ==
                      getUserProfile().u_id ? (
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
                                src={msg.to_image ||UserChat4}
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

                  <div style={{ float: "left", clear: "both" }}
                    ref={messagesEnd}>
                  </div>
                </div>






                {/* <div className="mt-auto mb-auto">
                  <div className="p-2 bg_blue d-inline-block fs15 fw500 col29">Hi</div>
                  <div className="fs10 fw300 col47">Thu Apr 30, 2020 1.12 pm</div>
                </div> */}
              </div>
            </div>
            {/* <div className="pl-3 pr-3 pb-3">
              <div className="text-right">
                <div className="p-2 bg_gray d-inline-block fs15 fw500 col29">Hi, how are you?</div>
                <div className="fs10 fw300 col47">Thu Apr 30, 2020 1.12 pm</div>
              </div>
            </div> */}
          </div>
        </div>


        <div className="chat_bottom">
          <div>
            <Form.Group className="mb-0">
              <div className="d-flex">
                <Form.Control type="text"
                  placeholder="Type your message here..."
                  className="inputTyp3"
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                  onKeyDown={addMessage}
                  name="message"
                />
                <Button className="btnTyp7"
                  disabled={!msgInput}
                  onClick={handleSendMessage}
                >Send</Button>
              </div>
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInCall
