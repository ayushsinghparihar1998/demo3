import React, { Component, useState, useEffect, useRef } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import { connect, createLocalTracks, createLocalVideoTrack } from 'twilio-video';
import {
  useParams,
  useHistory
} from "react-router-dom";
import moment from 'moment';
import NavBar from "../core/nav";
import Backicon from "../../assets/images/backicon.svg";
import Videouser from "../../assets/images/pro_img2.svg";
import Videousertwo from "../../assets/images/videousers.svg";
import Soundstwo from "../../assets/images/sounds.svg";
import Videomute from "../../assets/images/mute.svg";
import Videothree from "../../assets/images/video.svg";
import Videomuteov from "../../assets/images/mute_ov.svg";
import Videochat from "../../assets/images/chat.svg";
import Videodisconnect from "../../assets/images/dissconect.svg";
import Audioreceivecall from "../../assets/images/receive_call.svg";
import UserChat4 from "../../assets/images/user_chat4.svg";
import ChatCross from "../../assets/images/cross2s.svg";
import getUserProfile from "../../common/utility/getUserProfile";
import Axios from "axios";
import generateRoomId from "../../common/utility/generateRoomId";
import ChatInCall from "../VideoComponents/ChatInCall/ChatInCall";
import socketClass, { SOCKET_IO_URL } from "../../common/utility/socketClass";
import { showErrorMessage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";


const socket = socketClass.getSocket();
let tmp = 0;
const AudioCall = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [muteAudio, setMuteAudio] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [token, setToken] = useState();
  const [roomid, setRoomId] = useState("ELPLocalhost3000");
  const [streamTracks, setTracks] = useState({});
  const [timerStr, setTimerStr] = useState(null);
  const [remoteUserStatus, setRemoteUserStatus] = useState({ audio: false, video: false })
  const roomRef = useRef(null)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const callTimerRef = useRef(null);
  const toggleChat = () => {
    setShowChat(prev => !prev)
  }
  const openChatWindow = () =>{
    setShowChat(true)
  }
  const { caller, id: paramsid } = useParams();
  const history = useHistory();

  useEffect(() => {
    socket.on('endVideoCall', () => {
      // showErrorMessage("Call has been ended.")
      if(getUserProfile().u_role_id == CONSTANTS.ROLES.USER){
        history.push('/chatuser/'+paramsid)
      }else{
        history.push('/chat/'+paramsid)
      }
    });
    //get the token
    (async () => {
      const room = generateRoomId(getUserProfile().u_id, paramsid);
      const params = new window.URLSearchParams({ identity: 'user' + getUserProfile().u_id, room_id: room, type: 'video' });
      const token = await Axios.get(`${SOCKET_IO_URL}/getToken?${params}`).then(res => res.data.token);
      setRoomId(room);
      setToken(token);
      connectTwillio(token, room);
      getUserDetails(paramsid);
    })()
    return () => {
      if (callTimerRef.current) {
        clearInterval(callTimerRef.current);
      }
      disconnect();
    }
  }, [])
  const runTimer = () => {
    const curr = new Date().getTime();
    callTimerRef.current = setInterval(() => {
      const diff = Date.now() - curr;
      const time = moment.duration(diff);
      setTimerStr(`${time.hours()}h: ${time.minutes()}m: ${time.seconds()}s`)
    }, 1000)
  }
  const getUserDetails = (id) => {
    socket.emit('userDetail', { "user_id": id }, data => {
      // console.log("userDetail data", data);
      if (data.success === 1) {
        setUserDetails(data.userDetail);
      } else {
        // handle odd scenario
      }
    })
  }
  const disconnect = () => {
    if (roomRef.current != null) {
      setToken(null)
      // this.setState({ tracks: { counterparty: {}, local: [] }, disconnected: true });
      roomRef.current.disconnect();
      const payload = {
        reciver_id: paramsid,
        reciver_type: userDetails?.u_role_id,
        // "sender": {},
        type: "audio",
        sender_id: getUserProfile().u_id
      }
      if (token) {
        socket.emit('endVideoCall', payload);
      }
      if(getUserProfile().u_role_id == CONSTANTS.ROLES.USER){
        history.push('/chatuser/'+paramsid)
      }else{
        history.push('/chat/'+paramsid)
      }
    }
  }
  const connectTwillio = (token, room) => {
    console.log("roomroomroomroomroomroom", room)
    console.log(caller)
    // debugger;
    connect(token, {
      audio: true,
      name: room,
      video: false
    }).then(roomjoined);
  }
  const roomjoined = (room) => {
    roomRef.current = room;
    if (room.localParticipant) {
      attachParticipantTracks(room.localParticipant, localVideoRef.current, 'local');
    }

    var remoteContainer = remoteVideoRef.current;
    room.participants.forEach(participant => {
      setTimeout(() => {
        attachParticipantTracks(participant, remoteContainer, 'remote');
      }, 1000);
      console.log(`Participant 1234"${participant.identity}" is connected to the Room`, participant);
      return false;
    });
    room.once('participantConnected', participant => {
      console.log(`Participant === "${participant.identity}" connected`);
      setTimeout(() => {
        attachParticipantTracks(participant, remoteContainer, 'remote');
      }, 1000);
      participant.on('trackSubscribed', track => {
        remoteContainer.appendChild(track.attach());
      });
    });
  }

  const attachParticipantTracks = (participant, container, type) => {
    console.log('part', participant);
    var tracks = Array.from(participant.tracks.values()).filter(function (publication) {
      if (publication.isSubscribed) {
        console.log('track', publication.track.attach());
      }
      return publication.track;
    }).map(function (publication) {
      console.log('track', publication.track);
      return publication.track;
    });
    // debugger;
    // console.log(tracks, container, type);
    attachTracks(tracks, container, type);
  }
  const attachTracks = (tracks, container, type) => {
    console.log('tracks', tracks);
    if (type == 'local') {
      setTracks(prev => ({ ...prev, local: tracks }))
    } else {
      setTracks(prev => ({ ...prev, remote: tracks }))
      if (remoteVideoRef.current && remoteVideoRef.current.querySelector('video')) {
        return false;
      }
      if (!callTimerRef.current) {
        runTimer();
      }
    }
    tracks.forEach(track => {
      container.appendChild(track.attach());
    });
  }
  // console.log(props, getUserProfile, token)
  const editTrack = (type1, type2, todo) => {
    if (type1 == 'local') {
      streamTracks.local.forEach((track) => {
        if (track.kind == type2) {
          switch (todo) {
            case 'enable':
              track.enable();
              setMuteAudio(false)
              break;
            case 'disable':
              track.disable();
              setMuteAudio(true)
              break;
            case 'enablev':
              track.enable();
              setMuteVideo(false)
              break;
            case 'disablev':
              track.disable();
              setMuteVideo(true)
              break;
            default:
              break;
          }
        }
      })
    }
  }

  return (
    <div className="page__wrapper innerpage">
      <div className="main_baner">
        <NavBar {...props} />
      </div>
      <div className="audiochat">
        <Container>
          <div className="w-100 audiocontrol">
            {!!userDetails &&
              <div className="mb-5">
                <Image src={Videousertwo} alt="" className="mw-150" />
                <div className="fs20 col18 fw500 mt-3">{userDetails.u_name}</div>
                <div className="fs16 col18 fw300">{timerStr ? timerStr : 'Connecting...'}</div>
              </div>
            }

            <div className="audiocontrolicon text-center">
              {/* <Image src={Soundstwo} className="mr-3 pointer" /> */}
              {
                (muteAudio == false) ?
                  <button onClick={() => editTrack('local', 'audio', 'disable')} className="btn btn-primary">
                    <Image src={Videomute} alt="" />
                  </button> :
                  <button onClick={() => editTrack('local', 'audio', 'enable')} className="btn btn-primary">
                    <Image src={Videomuteov} alt="" />
                  </button>
              }

              {/* <Image src={Videomute} className="mr-3 pointer" />
              <Image src={Videothree} className="mr-3 pointer" /> */}
              <Image src={Videochat} className="mr-3 pointer" onClick={toggleChat} />
              <Image src={Videodisconnect} className="pointer" onClick={disconnect} />
            </div>
          </div>
          <div ref={remoteVideoRef} className="remoteMedia"></div>
          <div ref={localVideoRef} className="localMedia"></div>

        </Container>
        {/* {showChat && } */}
        {userDetails &&
          <ChatInCall show={showChat} toggle={toggleChat} openChatWindow={openChatWindow} user={userDetails} />
        }
      </div>
    </div>
  );
}
export default AudioCall; 
