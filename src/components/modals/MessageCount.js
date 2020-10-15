import React, { useEffect, useState } from 'react';
import socketClass from "../../common/utility/socketClass";

const socket = socketClass.getSocket();

const MessageCount = ({ userId }) => {

    const [data, setData] = useState({
        conversation: 0,
        unreadMessage: 0,
    })

    useEffect(() => {
        getActiveConversation()
    }, [])

    const getActiveConversation = () => {

        const getData = () => {
            socket.emit("get-active-conversation", {
                user_id: userId
            }, (data) => {
                // console.log('active data', data);
                setData({...data.result})
            });
        }
        setInterval(() => {
            getData()
        }, 5000)
        getData()
    }

    return (
        <div><p style={{ textAlign: 'center' }}><span style={{
            backgroundColor: 'rgba(227, 92, 60, 0.92)',
            'color': 'white',
            'padding': '10px',
            'borderRadius': '50px',
        }}>{data.conversation} active conversation / {data.unreadMessage} unread messages</span></p></div>
    )
}


export default MessageCount