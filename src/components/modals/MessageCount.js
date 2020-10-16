import React, { useEffect, useState } from 'react';
import socketClass from "../../common/utility/socketClass";
import { getLocalStorage } from "../../common/helpers/Utils";

const socket = socketClass.getSocket();

const MessageCount = ({ userId }) => {

    const [data, setData] = useState({
        conversation: 0,
        unreadMessage: 0,
    })
    const [selfId, setSelfId] = useState(null)

    useEffect(() => {
        getActiveConversation()
    }, [])
    useEffect(() => {
        let title = 'Report '
        let id = null
        if (getLocalStorage('userInfo')) {
            title = title + 'user'
            id = getLocalStorage('userInfo').u_id
        } else if (getLocalStorage('customerInfo')) {
            title = title + 'listener'
            id = getLocalStorage('customerInfo').u_id
        } else if (getLocalStorage('userInfoProff')) {
            title = title + 'listener'
            id = getLocalStorage('userInfoProff').u_id 
        }
        
        setSelfId(id)
    }, [])
    const getActiveConversation = () => {

        const getData = () => {
            socket.emit("get-active-conversation", {
                user_id: selfId 
            }, (data) => { 
                console.log('active data', data);
                setData({...data.result})
            });
        }
        setInterval(() => {
            getData()
        }, 20000)
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