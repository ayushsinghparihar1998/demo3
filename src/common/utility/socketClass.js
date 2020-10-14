import SocketIOClient from 'socket.io-client';

// export const SOCKET_IO_URL = 'http://103.76.253.131:8282';
// export const SOCKET_IO_URL = 'http://148.66.136.214:8443';
export const SOCKET_IO_URL = 'https://eatluvnpray.org:8443';

// const socket = SocketIOClient(SOCKET_IO_URL);

class socketClass {
  constructor() {
    this.socket = SocketIOClient(SOCKET_IO_URL);
  }
  connect(user) {
    this.socket.connect();
    // console.log('chat-login = connected to socket')
    this.chatlogin(user);
  }
  disconnect() {
    if(this.socket){
      this.socket.disconnect(); 
    }
  }
  getSocket() {
    return this.socket;
  }

  chatlogin(user) {
    console.log('chat-login', user)
    this.socket.emit(
      "chat-login",
      JSON.stringify({
        user_id: user.u_id,
        user_type: user.u_role_id,
      }),
      function (data) {
        console.log("chat-login socket=== authenticateSocket", data);
      }
    );
  }
}

export default new socketClass();