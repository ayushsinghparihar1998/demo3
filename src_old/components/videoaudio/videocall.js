import React, { Component, useState, useEffect, useRef } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import { connect, createLocalTracks, createLocalVideoTrack } from 'twilio-video';
import {
  useParams,
  useHistory
} from "react-router-dom";


import NavBar from "../core/nav";
import Backicon from "../../assets/images/backicon.svg";
import Videouser from "../../assets/images/pro_img2.svg";
import Videousertwo from "../../assets/images/videousers.svg";
import Soundstwo from "../../assets/images/sounds.svg";
import Videomute from "../../assets/images/mute.svg";
import Videothree from "../../assets/images/video.svg";
import Videoov from "../../assets/images/video_ov.svg";
import Videochat from "../../assets/images/chat.svg";
import Videodisconnect from "../../assets/images/dissconect.svg";
import UserChat4 from "../../assets/images/user_chat4.svg";

import Videomuteov from "../../assets/images/mute_ov.svg";

import ChatCross from "../../assets/images/cross2s.svg";
import getUserProfile from "../../common/utility/getUserProfile";

// import Videomute from "../../assets/images/mute.svg"; 
// import Videomuteov from "../../assets/images/mute_ov.svg";  


import Axios from "axios";
import generateRoomId from "../../common/utility/generateRoomId";
import ChatInCall from "../VideoComponents/ChatInCall/ChatInCall";
import socketClass, { SOCKET_IO_URL } from "../../common/utility/socketClass";
import { showErrorMessage } from "../../common/helpers/Utils";
const socket = socketClass.getSocket();
const Videocall = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [muteAudio, setMuteAudio] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [token, setToken] = useState();
  const [roomid, setRoomId] = useState("ELPLocalhost3000");
  const [streamTracks, setTracks] = useState({});
  const roomRef = useRef(null)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const toggleChat = () => {
    setShowChat(prev => !prev)
  }
  const { caller, id: paramsid } = useParams();
  const history = useHistory();

  useEffect(() => {
    //get the token
    (async () => {
      const room = generateRoomId(getUserProfile().u_id, paramsid);
      const params = new window.URLSearchParams({ identity: 'user' + getUserProfile().u_id, room_id: room, type: 'video' });
      const token = await Axios.get(`${SOCKET_IO_URL}/getToken?${params}`).then(res => res.data.token);
      setRoomId(room);
      setToken(token);
      connectTwillio(token, room);
      getUserDetails(paramsid);

    })();
    socket.on('endVideoCall', data => {
      // showErrorMessage("Call has been ended.")
      setTimeout(() => {
        history.push('/')
      }, 2000);
    })
    return () => {
      if (roomRef.current != null) {
        setToken(null)
        // this.setState({ tracks: { counterparty: {}, local: [] }, disconnected: true });
        roomRef.current.disconnect();
        // debugger;
        // roomRef.current.localParticipant.tracks.forEach(track => {
        //   debugger;
        //   track.track.stop()
        // });
      }
    }
  }, [])
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
      // debugger;
      // roomRef.current.localParticipant.tracks.forEach(track => {
      //   debugger;
      //   track.track.stop()
      // });
      const payload = {
        reciver_id: paramsid,
        reciver_type: userDetails?.u_role_id,
        // "sender": {},
        type: "video",
        sender_id: getUserProfile().u_id
      }
      if (token) {
        socket.emit('endVideoCall', payload, data => {
          console.log(data)
        });
      }

      history.push('/')
    }
  }
  const connectTwillio = (token, room) => {
    console.log("roomroomroomroomroomroom", room)
    console.log(caller)
    // debugger;
    connect(token, {
      audio: true,
      name: room,
      // video: false
      video: { width: 640 }
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
      participant.tracks.forEach(publication => {
        console.log("publication", publication)
        // if (publication.isSubscribed) {
        //   handleTrackDisabled(publication.track);
        // }
        // publication.on('subscribed', handleTrackDisabled); 
        if (publication.track) {
          remoteContainer.appendChild(publication.track.attach());
        }



        publication.on('unsubscribed', () => {
          console.log("unsubscribed", publication)
        });
        //   participant.tracks.forEach(publication => {
        //     publication.on('subscribed', () => {
        //       console.log("subscribed");
        //     });
        //  });
      });

      participant.on('trackSubscribed', track => {
        remoteContainer.appendChild(track.attach());
      });
    });
    room.once('participantConnected', participant => {
      console.log(`Participant === "${participant.identity}" connected`);
      setTimeout(() => {
        attachParticipantTracks(participant, remoteContainer, 'remote');
      }, 1000);
      // participant.tracks.forEach(publication => {
      //   if (publication.isSubscribed) {
      //     const track = publication.track;
      //     remoteContainer.appendChild(track.attach());
      //   }
      // });

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
      if (remoteVideoRef.current.querySelector('video')) {
        return false;
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
      <div className="main_baner header-fixed">
        <NavBar {...props} />
      </div>
      <div className="videochat">
        <Container>
          <div className="userdetail pt-5">
            <span><Image src={Backicon} alt="" className="pointer" /></span>
            <span><Image src={Videouser} alt="" className="r50" /></span>
            <span className="online_user"></span>
            <span className="fs20 fw600 col60">{userDetails?.u_name}</span>
          </div>
          <div ref={remoteVideoRef} className="remoteMedia"></div>
          <div className="w-100 videocontrol">
            <div className="text-right mb-5">
              <div ref={localVideoRef} className="localMedia"></div>
              {/* <Image src={Videousertwo} alt="" className="mw-250" /> */}
            </div>
            <div className="videocontrolicon text-center">
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
              {
                (muteVideo == false) ?
                  <button onClick={() => editTrack('local', 'video', 'disablev')} className="btn btn-primary">
                    <Image src={Videothree} alt="" /> </button> :
                  <button onClick={() => editTrack('local', 'video', 'enablev')} className="btn btn-primary">
                    <Image src={Videoov} alt="" />
                  </button>
              }
              {/* <Image src={Videomute} className="mr-3 pointer" />
              <Image src={Videothree} className="mr-3 pointer" /> */}
              <Image src={Videochat} className="mr-3 pointer" onClick={toggleChat} />
              <Image src={Videodisconnect} className="pointer" onClick={disconnect} />
            </div>
          </div>
        </Container>
        {userDetails &&
          <ChatInCall show={showChat} toggle={toggleChat} user={userDetails} />}
          }
      </div>
    </div>
  );
}
export default Videocall; 
