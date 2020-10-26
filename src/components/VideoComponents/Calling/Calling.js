import React, { useState } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../../core/nav";
import Videousertwo from "../../../assets/images/placeholder_user.png";

import Videothree from "../../../assets/images/video.svg";
import Videodisconnect from "../../../assets/images/dissconect.svg";
import Audioreceivecall from "../../../assets/images/receive_call.svg";
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from "react";
import socketClass from "../../../common/utility/socketClass";
import { showErrorMessage } from "../../../common/helpers/Utils";
const socket = socketClass.getSocket();
const Calling = (props) => {
  const { id, mode, type } = props;
  const history = useHistory();
  const [userDetails, setUserDetails] = useState(null);
  const notAnswered = (_id, _ud) => {
    if (mode !== "incoming") {
      const payload = {
        reciver_id: _id,
        reciver_type: _ud?.u_role_id,
        sender: {},
        type: 'auto'
      }
      setTimeout(() => {
        if (history.location.pathname === "/calling") {
          socket.emit("cancelCall", payload);
          history.goBack();
        }
      }, 1000 * 30);
    }
  }
  // console.log("props", props)
  const cancelCall = () => {
    if (mode === "incoming") {
      props.handleAction('decline');
    } else {
      //send reciever to call rejected by user
      const payload = {
        reciver_id: id,
        reciver_type: userDetails?.u_role_id,
        sender: {}
      }
      socket.emit("cancelCall", payload, data => {
        console.log("Call Cancelled", data)
      })
      history.goBack();
    }
  }
  useEffect(() => {
    socket.emit('userDetail', { "user_id": id }, data => {
      if (data.success === 1) {
        console.log('====> DATA ===>>',data)
        setUserDetails(data.userDetail);
        notAnswered(id, data.userDetail);
      } else {
        // handle odd scenario
      }
    })
  }, [id])
  return (
    <div className="page__wrapper innerpage">
      <div className="main_baner">
        <NavBar {...props} />
      </div>
      <div className="audiochat">
        <Container>
          {!!userDetails ?
            <div className="w-100 audiocontrol">
              <div className="mb-5">
                <Image src={userDetails.u_image|| Videousertwo} alt="" className="mw-150" />
                <div className="fs20 col18 fw500 mt-3">{userDetails.u_name} </div>
                <div className="fs16 col18 fw300">{type} Calling...</div>
              </div>
              <div className="audiocontrolicon text-center">
                {mode === "incoming" && props.handleAction ?
                  <>
                    {type === "video" &&
                      <Image src={Audioreceivecall} className="mr-3 pointer" onClick={() => props.handleAction('accept')} />
                    }
                    {type === "audio" &&
                      <Image src={Audioreceivecall} className="mr-3 pointer"
                        onClick={() => props.handleAction('accept')} />
                    }
                  </> : null
                }
                {/* change this to green icon call recieve */}
                <Image src={Videodisconnect} className="pointer" onClick={cancelCall} />
              </div>
            </div> : null
          }</Container>
      </div>

    </div>
  );
}
export default Calling; 
