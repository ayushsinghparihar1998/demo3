import React, { useEffect, useState } from 'react'
import socketClass from '../../../common/utility/socketClass';
import { useHistory } from "react-router-dom";

function VideoCalling() {
  const socket = socketClass.getSocket();
  const [caller, setCaller] = useState(null);
  const [callerView, setCallerView] = useState(true)
  const history = useHistory();

  useEffect(() => {
    socket.on("videoIncomingCall", setCaller);
    socket.on("videoCallAccepted", data => {
      console.log("socket=== videoCallAccepted", data)
      // debugger;
      if (data.actiontype === "accept") {
        history.push('/videocall/' + data.sender.u_id, { caller: data.sender })
      } else {
        alert("your call request has been declined")
      }
      console.log(history)
    })
  }, [socket])
  const acceptCall = (type) => {
    const payload = {
      // ...caller
      reciver_id: caller.sender.u_id,
      reciver_type: caller.sender.u_role_id,
      sender: {
        u_id: caller.reciver_id,
        u_role_id: caller.u_id
      },
      type: caller.type,
      actiontype: type
    }
    socket.emit('acceptVideoCall', payload, data => {
      if (data.success === 1) {
        if (type === "accept") {
          history.push('/videocall/' + caller.sender.u_id, { caller: caller.sender })
        }
        setCaller(null)
      }
      console.log("socket=== acceptVideoCall", data)
    })
  }

  console.log("socket===", history)

  if (!caller) return false;
  return (
    <>
      <div>
        {caller.sender.u_email} is {caller.type} calling
      </div>
      <button onClick={() => acceptCall("accept")}>Accept</button>
      <button onClick={() => acceptCall("decline")}>Decline</button>
    </>
  )
}

export default VideoCalling
