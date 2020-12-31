import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import UserChat from '../../../assets/images/user_chat.png';
import getUserProfile from '../../../common/utility/getUserProfile'
import socketClass from '../../../common/utility/socketClass'
import ChatCross from '../../../assets/images/chat_cross.svg';
import moment from "moment";

const socket = socketClass.getSocket();
function RecentChat({ onRedirect }) {
  const user = getUserProfile();
  const [recentChats, setRecentChats] = useState([]);
  useEffect(() => {
    getRecentChats();
    socket.on("messageReceived", () => {
      getRecentChats()
    });
    socket.on("sendMessage", getRecentChats);
    socket.on("changeUserOnlineStatus", getRecentChats);
  }, [])
  const getRecentChats = () => {
    socket.emit('getRecentsChatedUsers', JSON.stringify({ user_id: user.u_id }), data => {

      console.warn("getRecentsChatedUsers", data)
      // alert(moment())
      if (data.success) {
        data.data.map(obj => {

          obj.date_time = moment.utc(obj.date_time).calendar();
          // let d = new Date(new Date(obj.date_time));
          // console.log(d)
          // obj.date_time =  moment.utc(new Date(d)).startOf('hour').fromNow();  
        })
        setRecentChats(data.data)

      }
      else
        console.warn("Error, getRecentsChatedUsers", data)
    });
  }
  return (
    <div className="inner_side">
      <div className="chat-bg fs600 fs17 col18 pl-3 ">
        Chat
        </div>
        {
        !recentChats||recentChats.length == 0?<div className="fs18 fw600 m-auto" style={{textAlign:'center'}}>
        No users found
      </div>:null
        }
      {recentChats &&
        recentChats.map((item) => {
          return (
            <div className="d-flex m-3 border-bottom pointer" key={item.id} onClick={onRedirect(item)} >
              {/* this.handleRedirectRecentChat(item) */}
              {console.log(item)}
              <div className="position-relative">
                <Image
                  src={
                    item.from_user_id == user.u_id ? item.to_image || UserChat : item.from_image || UserChat
                    // item.to_image ? item.to_image : UserChat
                  }
                  alt=""
                  className="r50 pt-1"
                />
                <span className={(item.from_user_id ==
                  user.u_id
                  ? item.to_user_online
                  : item.from_user_online) == "1" ? 'online' : ''}></span>
              </div>
              <div className="position-relative pl-3">
                <div className="fs15 col23 fw500 pr-2">
                  {item.from_user_id ==
                    user.u_id
                    ? item.to_user_name
                    : item.from_user_name}
                </div>
                <div className="col27 fs13 fw500 pr-2">
                  {item.message}
                </div>
                <div className="col27 fs13 fw500 pr-2">

                  {item.date_time}
                </div>
                {/* <Image
                  src={ChatCross}
                  alt=""
                  className="pointer cross_btn"
                /> */}
                {
                  item.from_user_id != user.u_id ?
                    item.to_user_unread_count != 0 ? <div className="counts">{item.to_user_unread_count}</div> : null
                    : item.from_user_unread_count != 0 ? <div className="counts">{item.from_user_unread_count}</div> : null
                }

              </div>
            </div>
          );
        })}
    </div>
  )
}

export default RecentChat
