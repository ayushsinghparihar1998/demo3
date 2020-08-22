import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Landing from "../components/core/landing";
import Login from "../components/login/login";
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

class ELPRoute extends Component {
  render() {
    return (
      <Switch>
        <PublicRoute exact path="/" component={Landing} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/becomeListener" component={Becomelistener} />
        <PublicRoute path="/listenersignup" component={Listenersignup} />

        <PublicRoute path="/professionalLogin" component={ProfessionalLogin} />
        <PublicRoute path="/logout" component={Chat} />

        <PublicRoute path="/usersignup" component={Usersignup} />

        {/* LIst */}
        <PrivateRouteList path="/userDashboard" component={Userdashboard} />
        <PrivateRouteList path="/chat/:id" component={Chat} />

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



        <PrivateRoutes path="/myprofile" component={MyProfile} />
        <PrivateRoutes path="/editprofile" component={EditProfile} />


      </Switch>
    );
  }
}
export default ELPRoute;
