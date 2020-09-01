import React, { Component, useState, useEffect, useRef } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import { connect, createLocalTracks, createLocalVideoTrack } from 'twilio-video';
import NavBar from "../core/nav";
import Backicon from "../../assets/images/backicon.svg";
import Videouser from "../../assets/images/pro_img2.svg";
import Videousertwo from "../../assets/images/videousers.svg";
import Soundstwo from "../../assets/images/sounds.svg";
import Videomute from "../../assets/images/mute.svg";
import Videothree from "../../assets/images/video.svg";
import Videochat from "../../assets/images/chat.svg";
import Videodisconnect from "../../assets/images/dissconect.svg";
import UserChat4 from "../../assets/images/user_chat4.svg";
import ChatCross from "../../assets/images/cross2s.svg";
import getUserProfile from "../../common/utility/getUserProfile";
import Axios from "axios";
const Videocall = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [token, setToken] = useState();
  const [roomid, setRoomId] = useState("ELPLocalhost3000");
  const [streamTracks, setTracks] = useState({});
  const roomRef = useRef(null)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const toggleChat = () => {
    setShowChat(prev => !prev)
  }

  useEffect(() => {
    //get the token
    (async () => {
      const params = new window.URLSearchParams({ identity: 'user' + getUserProfile.u_id, room_id: roomid, type: 'video' });
      const token = await Axios.get(`http://103.76.253.131:8282/getToken?${params}`).then(res => res.data.token);
      setToken(token);
      connectTwillio(token);
    })()

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
    }
  }
  const connectTwillio = (token) => {
    connect(token, {
      audio: true,
      name: roomid,
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
  console.log("streamTracks", streamTracks)
  return (
    <div className="page__wrapper innerpage">
      <div className="main_baner">
        <NavBar {...props} />
      </div>
      <div className="videochat">
        <Container>
          <div className="userdetail pt-5">
            <span><Image src={Backicon} alt="" className="pointer" /></span>
            <span><Image src={Videouser} alt="" className="r50" /></span>
            <span className="fs20 fw600 col60">William Smith</span>
          </div>
          <div ref={remoteVideoRef} className="remoteMedia"></div>
          <div className="w-100 videocontrol">
            <div className="text-right mb-5">
              <div ref={localVideoRef} className="localMedia"></div>
              {/* <Image src={Videousertwo} alt="" className="mw-250" /> */}
            </div>
            <div className="videocontrolicon text-center">
              <Image src={Soundstwo} className="mr-3 pointer" />
              <Image src={Videomute} className="mr-3 pointer" />
              <Image src={Videothree} className="mr-3 pointer" />
              <Image src={Videochat} className="mr-3 pointer" onClick={toggleChat} />
              <Image src={Videodisconnect} className="pointer" onClick={disconnect} />
            </div>
          </div>

        </Container>

        {showChat && <div className="chat_dashboard">
          <div className="chat_top">
            <Row>
              <Col xs={6}>
                <div className="mt-auto mb-auto">
                  <span className="fs17 fw600 col18">William Smith</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="mt-auto mb-auto text-right">
                  <Image src={ChatCross} alt="" className="pointer cross_btn" onClick={toggleChat} />
                </div>
              </Col>
            </Row>
            <div></div>
          </div>
          <div className="chat_middle">
            <div className="mt-auto">
              <div className="pl-3 pr-3 pb-3">
                <div className="d-flex">
                  <div className="mt-auto mb-auto">
                    <Image src={UserChat4} alt="" className="r50 mr-3" />
                  </div>
                  <div className="mt-auto mb-auto">
                    <div className="p-2 bg_blue d-inline-block fs15 fw500 col29">Hi</div>
                    <div className="fs10 fw300 col47">Thu Apr 30, 2020 1.12 pm</div>
                  </div>
                </div>
              </div>
              <div className="pl-3 pr-3 pb-3">
                <div className="text-right">
                  <div className="p-2 bg_gray d-inline-block fs15 fw500 col29">Hi, how are you?</div>
                  <div className="fs10 fw300 col47">Thu Apr 30, 2020 1.12 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat_bottom">
            <Form>
              <Form.Group className="mb-0">
                <div className="d-flex">
                  <Form.Control type="text" placeholder="Type your message here..." className="inputTyp3" />
                  <Button className="btnTyp7">Send</Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>}
      </div>
    </div>
  );
}
export default Videocall; 
