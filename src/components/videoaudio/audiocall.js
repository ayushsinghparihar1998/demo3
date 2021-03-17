import React, { useState, useEffect, useRef } from "react";
import {  Container,Image } from "react-bootstrap";
import { connect} from 'twilio-video';
import {
  useParams,
  useHistory
} from "react-router-dom";
import moment from 'moment';
import NavBar from "../core/nav";
import Videousertwo from "../../assets/images/placeholder_user.png";
import Videomute from "../../assets/images/mute.svg";
import Videomuteov from "../../assets/images/mute_ov.svg";
import Videochat from "../../assets/images/chat.svg";
import Videodisconnect from "../../assets/images/dissconect.svg";
import VideomuteInverse from "../../assets/images/mute-inverse.svg";
import getUserProfile from "../../common/utility/getUserProfile";
import Axios from "axios";
import generateRoomId from "../../common/utility/generateRoomId";
import ChatInCall from "../VideoComponents/ChatInCall/ChatInCall";
import socketClass, { SOCKET_IO_URL } from "../../common/utility/socketClass";
import { showErrorMessage , showSuccessToast } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import {
  getLocalStorage
} from "../../common/helpers/Utils";
import constant from "../../constant";

const socket = socketClass.getSocket();

const AudioCall = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [muteAudio, setMuteAudio] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [token, setToken] = useState();
  const [roomid, setRoomId] = useState("ELPLocalhost3000");
  const [streamTracks, setTracks] = useState({});
  const [timerStr, setTimerStr] = useState(null);
  const roomRef = useRef(null)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const callTimerRef = useRef(null);
  const [userMuted, setUserMuted] = useState(false)

  const toggleChat = () => {
    setShowChat(prev => !prev)
  }
  const openChatWindow = () => {
    setShowChat(true)
  }
  const { caller, id: paramsid } = useParams();
  const history = useHistory();

  useEffect(() => {
    socket.on('muteAndUnmute', data => {
      console.log('-------  muteAndUnmute', data);
      setUserMuted(data.isMute)
    })
    if(token){
      console.log("THIS IS USEEFFECT TOKEN " ,token , userDetails)
    }
    socket.on('endVideoCall', (data) => {
      console.log("Call has been ended. DUE TO ",data)
      showErrorMessage("Call has been ended.")
      if (getUserProfile().u_role_id == CONSTANTS.ROLES.USER) {
        history.push('/chatuser/' + paramsid)
      } else {
        history.push('/chat/' + paramsid)
      }
    });
    //get the token
    (async () => {
      const room = generateRoomId(getUserProfile().u_id, paramsid);
      const params = new window.URLSearchParams({ identity: 'user' + getUserProfile().u_id, room_id: room, type: 'video' });
      const token = await Axios.get(`${SOCKET_IO_URL}/getToken?${params}`).then(res => res.data.token);
      console.log(" GOT THE TOKEN " , token)
      setRoomId(room);
      setToken(token);
      connectTwillio(token, room);
      getUserDetails(paramsid);
    })()
    return () => {
      if (callTimerRef.current) {
        clearInterval(callTimerRef.current);
      }
      // disconnect();

    }
  },[])
  const runTimer = () => {
    console.log("RUN TIMER");
    console.log("LOCAL STORAFE FOR CHECK",getLocalStorage('customerInfo')?.u_role_id , userDetails,paramsid.toString())
    const curr = new Date().getTime();
    callTimerRef.current = setInterval(() => {
      const diff = Date.now() - curr;
      const time = moment.duration(diff);
      setTimerStr(`${time.hours()}h: ${time.minutes()}m: ${time.seconds()}s`);
      if(getLocalStorage('customerInfo')?.u_role_id === constant.roles.CORPORATE_CUSTOMER){
        socket.emit('updateTime', { "user_id": getLocalStorage('customerInfo').u_id,type:'audio' }, data => {
          console.log("userDetail data", data);
          if (data.success === 2) {
            showErrorMessage(data.msg || "Call is Ended")
            disconnect();
          } else {
            // handle odd scenario
            console.log("TIME UPDATED")
          }
        })
      }
    }, 2000)
  }
  const getUserDetails = (id) => {
    socket.emit('userDetail', { "user_id": id }, data => {
      console.log("userDetail data", data);
      if (data.success === 1) {
        setUserDetails(data.userDetail);
      } else {
        // handle odd scenario
      }
    })
  }

  const sendMessage = (message, type = 1) => {
    console.log("_____________________ DATA ________")
    console.log(props)
    console.log("_____________________ DATA ________")

    let object = {
      message: message,
      from_user_id: getUserProfile().u_id,
      to_user_id: props.match.params.id,
      message_type: type,
      date_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      // user_type: this.state.userMeta.user_type,
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("HH:mm:ss")
    };
    console.log('==== send message ', object)
    socket.emit("sendMessage", JSON.stringify(object), (data) => {

    });
  }

  const disconnect = () => {

    console.log("CALL ENDED " ,roomRef.current)
    sendMessage(`Audio call ended at`, 2)
    if (roomRef.current != null) {
      setToken(null)
      // this.setState({ tracks: { counterparty: {}, local: [] }, disconnected: true });
      roomRef.current.disconnect();
    }
    console.log("GET TOKEN",token)
    const payload = {
      reciver_id: paramsid,
      reciver_type: userDetails?.u_role_id || "2",
      // "sender": {},
      type: "audio",
      sender_id: getUserProfile().u_id
    }
    console.log("PAYLOAD ",payload)
    if (token) {
      socket.emit('cancelCall', payload , (data)=>{
        console.log("AFTER CALLL ENDED & GETING TOKEN ", data , payload)
        if(data.success === 1)
        showSuccessToast(data.msg)
      });
    }
    if (getUserProfile().u_role_id == CONSTANTS.ROLES.USER) {
      history.push('/chatuser/' + paramsid)
    } else {
      history.push('/chat/' + paramsid)
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
        if (remoteContainer) {
          remoteContainer.appendChild(track.attach());
        }

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
    console.log('tracks', tracks,callTimerRef ,type);
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
      if (container) {
        container.appendChild(track.attach());
      }

    });
  }
  // console.log(props, getUserProfile, token)
  const editTrack = (type1, type2, todo) => {
    //'local', 'audio', 'disable'
    if (type1 === 'local') {
      streamTracks.local.forEach((track) => {
        if (track.kind == type2) {
          switch (todo) {
            case 'enable':
              track.enable();
              setMuteAudio(false)
              socket.emit('muteAndUnmute', {
                reciver_id: paramsid,
                isMute: false
              })
              break;
            case 'disable':
              track.disable();
              setMuteAudio(true)
              socket.emit('muteAndUnmute', {
                reciver_id: paramsid,
                isMute: true
              })
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
        <NavBar {...props} disconnectPayload={{
          reciver_id: paramsid,
          reciver_type: userDetails?.u_role_id,
          type: "Audio",
          disconnect: disconnect
        }} />
      </div>
      <div className="audiochat">
        <Container>
          <div className="w-100 audiocontrol">
            {!!userDetails &&
              <div className="mb-5">
                <Image src={userDetails.u_image || Videousertwo} alt="" className="mw-150" />
                <div className="fs20 col18 fw500 mt-3">{userDetails.u_name}</div><br />
                {
                  userMuted ? <div style={{ textAlign: 'center' }} className="fs16 col18 fw300"><Image style={{ width: '18px' }} src={VideomuteInverse} alt="" /> {userDetails?.u_name + ' muted this call'}</div> : null
                } <br />
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
