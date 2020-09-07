import React, { useEffect, useState } from 'react'
import { Image, Tabs, Tab } from 'react-bootstrap';
import UserChat from '../../../assets/images/user_chat.svg';
import getUserProfile from '../../../common/utility/getUserProfile'
import socketClass from '../../../common/utility/socketClass'
const socket = socketClass.getSocket();
function ActiveUsers({ onRedirect }) {
  const user = getUserProfile();
  const [activeUsers, setActiveUsers] = useState([]);
  const [showVal, setShowVal] = useState(4);
  useEffect(() => {
    socket.on("newUserForActivityList", (data) => {
      if (activeUsers.findIndex(u => u.id === data.id) === -1) {
        getActiveUsers(prev => ([...prev, data]))
      }
    });
    getActiveUsers();
    // socket.on("sendMessage", getRecentChats);
    socket.on("changeUserOnlineStatus", getActiveUsers);
  }, [])
  const getActiveUsers = () => {
    socket.emit(
      'getActiveListnersOrCustomers',
      JSON.stringify({
        user_type: user.u_role_id,
        user_id: user.u_id,
        pagination: '100',
        page: '1',
      }),
      data => {
        if (data.success) {
          if (data.data && data.data.length > 0) {
            const activeUsers = data.data.filter(item => item.show_record)
            setActiveUsers(activeUsers)
          }
        }
        else {
          console.warn("Error, getActiveListnersOrCustomers", data)
        }
      }
    );
    // socket.emit('getRecentsChatedUsers', JSON.stringify({ user_id: user.u_id }), data => {
    //   if (data.success)
    //     setActiveUsers(data.data)
    //   else
    //     console.warn("Error, getRecentsChatedUsers", data)
    // });
  }
  return (
    <div className="inner_side">
      <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
        <span
        // onClick={() => this.call()}
        >
          Currently Active Listeners
      </span>
      </div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Listener">
          <div className="chat-border"></div>
          {activeUsers &&
            activeUsers.map((item, ind) => {
              return ind < showVal ? (
                <div key={item.id} className="d-flex m-3 border-bottom pointer"
                  onClick={onRedirect(item)}
                >
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
                  ''
                );
            })}
        </Tab>
      </Tabs>
      {showVal == 4 ? (
        <div
          className="fs15 fw600 col23 p-3 pointer show-more"
          onClick={() => setShowVal(activeUsers.length)}
        >
          Show More
        </div>
      ) : (
          <div
            className="fs15 fw600 col23 p-3 pointer show-more"
            onClick={() => setShowVal(4)}
          >
            Show Less
          </div>
        )}
    </div>
  )
}

export default ActiveUsers
