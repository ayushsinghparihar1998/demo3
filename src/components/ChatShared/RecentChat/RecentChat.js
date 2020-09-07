import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import UserChat from '../../../assets/images/user_chat.svg';
import getUserProfile from '../../../common/utility/getUserProfile'
import socketClass from '../../../common/utility/socketClass'
import ChatCross from '../../../assets/images/chat_cross.svg';
const socket = socketClass.getSocket();
function RecentChat({ onRedirect }) {
  const user = getUserProfile();
  const [recentChats, setRecentChats] = useState([]);
  useEffect(() => {
    getRecentChats();
    socket.on("sendMessage", getRecentChats);
    socket.on("changeUserOnlineStatus", getRecentChats);
  }, [])
  const getRecentChats = () => {
    socket.emit('getRecentsChatedUsers', JSON.stringify({ user_id: user.u_id }), data => {
      if (data.success)
        setRecentChats(data.data)
      else
        console.warn("Error, getRecentsChatedUsers", data)
    });
  }
  return (
    <div className="inner_side">
      <div className="chat-bg fs600 fs17 col18 pl-3 ">
        Chat
        </div>
      {recentChats &&
        recentChats.map((item) => {
          return (
            <div className="d-flex m-3 border-bottom pointer" key={item.id} onClick={onRedirect(item)} >
              {/* this.handleRedirectRecentChat(item) */}
              <div className="position-relative">
                <Image
                  src={
                    item.from_image ? item.from_image : UserChat
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
    </div>
  )
}

export default RecentChat
