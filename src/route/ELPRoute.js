import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/core/landing";
import Login from "../components/login/Login";
// import Login from '../components/login/Login';
import ProfessionalLogin from "../components/login/professionalLogin";
import Becomelistener from "../components/signup/becomeListener";
import Listenersignup from "../components/signup/listenerSignup";
import Usersignup from "../components/signup/userSignup";
import Userdashboard from "../components/listener/userdashboard";
import Chat from "../components/listener/chat";
import PrivateRouteList from "./PrivateRouteList";
import PrivateRouteProff from "./PrivateRouteProff";
import PublicRoute from "./PublicRoute";
import UserdashboardProff from "../components/professional/userdashboardProff";
import ChatProff from "../components/professional/chatproff";
import UserdashboardCust from "../components/user/userdashboard";

import PrivateRouteUser from "./PrivateRouteUser";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../components/editprofile/myprofile";
import EditProfile from "../components/editprofile/editprofile";
import ChatUser from "../components/user/chatUser";
import Resetpassword from "../components/login/resetpassword";
import Forgotpassword from "../components/login/forgotpassword";
import Userotp from "../components/login/userotp";
import Userprofiledetail from "../components/jsx/superadmin/userprofiledetail";

import AdminLogin from "../components/admin/adminlogin";
import Adminlistener from "../components/admin/listener";
import ListenerSearch from "../components/chat/listenerSearch";
import Videocall from "../components/videoaudio/videocall";
import Audiocall from "../components/videoaudio/audiocall";
import Menubar from "../components/core/menu"; 
import Ngo from "../components/core/ngo";
import Ngodetail from "../components/core/ngodetail"; 

import getUserProfile from "../common/utility/getUserProfile"; 
import { getLocalStorage, showErrorMessage } from "../common/helpers/Utils"; 
import socketClass from "../common/utility/socketClass";
import VideoCalling from "../components/VideoComponents/VideoCalling/VideoCalling";
import CallingTo from "../components/videoaudio/CallingTo/CallingTo";
import Admincategory from "../components/jsx/superadmin/category";
import Addquestionanswer from "../components/jsx/superadmin/addquestionanswer";
import Adminselectcategory from "../components/jsx/superadmin/adminselectcategory"; 
import CalendarDemo from "../components/professional/calendar";
import ProfessionalChatSearch from "../components/chat/professionalSearch";

const user =
  getLocalStorage("userInfo") ||
  getLocalStorage("userInfoProff") ||
  getLocalStorage("customerInfo") ||
  getLocalStorage("userInfoAdmin");
class ELPRoute extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("beforeunload", socketClass.disconnect);
    if (getUserProfile()) {
      // console.log("socketClass", socketClass.connect);
      socketClass.connect(getUserProfile());
    }
    this.setState({ socket: socketClass.getSocket() });
    // console.log("socket===", socket)
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", socketClass.disconnect);
  }
  render() {
    return (
      <>
        {this.state.socket && <VideoCalling />}
        <Switch>
          <PublicRoute exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <PublicRoute path="/adminLogin" component={AdminLogin} />
          <PublicRoute path="/becomeListener" component={Becomelistener} />
          <PublicRoute path="/listenersignup" component={Listenersignup} />
          <PublicRoute
            path="/professionalLogin"
            component={ProfessionalLogin}
          />
          <PublicRoute path="/logout" component={Chat} />
          <PublicRoute path="/reset" component={Resetpassword} />
          <PublicRoute path="/forgotpassword" component={Forgotpassword} />
          <PublicRoute path="/userotp" component={Userotp} />
          <PublicRoute path="/menu" component={Menubar} /> 
          {/* <PublicRoute path="/adminlogin" component={Adminlogin} />  */}
          {/* <PublicRoute path="/adminlistener" component={Adminlistener} />  */}
          <PublicRoute path="/adminlistener" component={Adminlistener} />
          <PrivateRoutes path="/userprofile" component={Userprofiledetail} />
          {/* LIst */}
          <PrivateRouteList path="/userDashboard" component={Userdashboard} />
          <PrivateRouteList path="/chat/:id" component={Chat} />

          {/* Proff */}
          <PublicRoute path="/adminlistener" component={Adminlistener} />
          <PublicRoute path="/usersignup" component={Usersignup} />
          <PublicRoute path="/ngo" component={Ngo} /> 
          <PublicRoute path="/ngodetail" component={Ngodetail} />
          <PrivateRouteUser path="/listenerSearch" component={ListenerSearch} />
          {/* LIst */}
          <PrivateRouteList path="/userDashboard" component={Userdashboard} />
          <PrivateRouteList path="/chat/:id" component={Chat} />
          {/* <PrivateRouteList path="/calendarListener" component={CalendarDemo} /> */}

          {/* Proff */}
          <PrivateRouteProff
            path="/userDashboardproff"
            component={UserdashboardProff}
          />
          {/*User*/}
          <PrivateRouteUser
            path="/userDashboardcust"
            component={UserdashboardCust}
          />
          <PrivateRouteUser path="/chatuser/:id" component={ChatUser} />
          <PrivateRouteProff path="/chatproff/:id" component={ChatProff} />
          {/* <PrivateRouteProff path="/calendar" component={CalendarDemo} /> */}

          <PrivateRoutes path="/calendar" component={CalendarDemo} />

          <PrivateRoutes path="/myprofile" component={MyProfile} />
          <PrivateRoutes path="/editprofile" component={EditProfile} />
          <PrivateRoutes path="/videocall/:id" component={Videocall} />
          <PrivateRoutes path="/audiocall/:id" component={Audiocall} />
          <PrivateRoutes path="/calling" component={CallingTo} />
          <PublicRoute path="/admincategory" component={Admincategory} />
          <PublicRoute path="/addquestionanswer" component={Addquestionanswer} /> 
          <PublicRoute path="/adminselectcategory" component={Adminselectcategory} /> 
          <PrivateRoutes
            path="/professionalSearch"
            component={ProfessionalChatSearch}
          />
        </Switch>
      </>
    );
  }
}
export default ELPRoute;
