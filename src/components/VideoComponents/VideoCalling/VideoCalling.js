import React, { useEffect, useState } from 'react'
import socketClass from '../../../common/utility/socketClass';
import { useHistory } from "react-router-dom";
import Calling from '../Calling/Calling';
import { showErrorMessage } from '../../../common/helpers/Utils';
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
        history.push((data.type === "video" ? '/videocall/' : '/audiocall/') + data.sender.u_id, { caller: data.sender })
      } else {
        // alert("DECLINED")
        showErrorMessage("your call request has been declined");
        setTimeout(() => {
          history.goBack()
        }, 2000)
      }
    })
    socket.on("cancelCall", data => {
      console.log('cancelCall === called')
      showErrorMessage(data.msg);
      setTimeout(() => {
        setCaller(null)
      }, 1000)
    })
  }, [socket])
  const acceptCall = (type,payloadData) => {
    const payload = {
      // ...caller
      reciver_id: caller.sender.u_id,
      reciver_type: caller.sender.u_role_id,
      sender: {
        u_id: caller.reciver_id,
        u_role_id: caller.u_id
      },
      sender_id: caller.reciver_id,
      type: caller.type,
      actiontype: type
    }
    socket.emit('acceptVideoCall', payload, data => {
      if (data.success === 1) {
        if (type === "accept") {
          
          history.push((caller.type === "video" ? '/videocall/' : '/audiocall/') + caller.sender.u_id, { caller: caller.sender, ...payloadData })
          setCaller(null)
        } else {
          setCaller(null)
        }
      }
      console.log("socket=== acceptVideoCall", data)
    })
  }

  console.log("socket===", history)

  if (!caller) return false;
  return (
    <>
      <div style={{
        position: 'fixed',
        zIndex: 999,
        width: 100 + "%"
      }}>
        <Calling id={caller.sender.u_id} mode="incoming" type={caller.type} handleAction={acceptCall} />
      </div>

      {/* <div>
        {caller.sender.u_email} is {caller.type} calling
      </div>
      <button onClick={() => acceptCall("accept")}>Accept</button>
      <button onClick={() => acceptCall("decline")}>Decline</button> */}
    </>
  )
}

export default VideoCalling
