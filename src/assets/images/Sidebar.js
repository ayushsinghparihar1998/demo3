import React, { Component } from "react";
import { Col, Image, Nav } from "react-bootstrap";
import { Link, NavLink, Router } from "react-router-dom";

// import "../../../assets/scss/icomoon.scss";

class Sidebar extends Component { 
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("sidebar");
  }
  render() {
    return (
      <Col md={3} lg={2} className="sidebar">
        <div className="sidebarNav">
          <NavLink  to="/admin/dashboard">
            <span className="icon-dashboard"></span> DASHBOARD
          </NavLink>
          {/* <Nav.Link as =  to="/admin/dashboard" className="active">
            <span className="icon-dashboard"></span> DASHBOARDbb
          </NavLink> */}
          {/* <NavLink to="">
            <span className="icon-reports"></span> REPORTS / ANALYTICS
          </NavLink> */}
          <NavLink  to="/admin/processingagentlist">
            <span className="icon-processing-centre"></span> PROCESSING CENTRES
          </NavLink>
          <NavLink  to="/admin/deliveryagentlist">
            <span className="icon-delivery-agent"></span> DELIVERY AGENTS
          </NavLink>
          <NavLink  to="/admin/customerlist">
            <span className="icon-customers"></span> CUSTOMERS
          </NavLink>

          {/* <NavLink  to="/admin/OrderDetails">
            <span className="icon-customers"></span> ORDER DETAILS
          </NavLink>
          <NavLink  to="/admin/TableDemo">
            <span className="icon-customers"></span> TableDemo
          </NavLink> */}
          <NavLink  to="/admin/Notifications">
            <span className="icon-customers"></span> Notifications
          </NavLink>
          <NavLink  to="/admin/Accounts">
            <span className="icon-customers"></span> Accounts
          </NavLink>
          <NavLink to="/admin/verifivation/3">
            <span className="icon-verification"></span> VERIFICATION & APPROVALS
            
          </NavLink>
          {/* <NavLink to="/admin/verifivation/4">
            <span className="icon-verification"></span> VERIFICATION & APPROVALS
            (PROCESSING AGENT)
          </NavLink> */}
          {/* <NavLink to="">
            <span className="icon-accouts"></span> ACCOUNTS
          </NavLink>
          <NavLink to="">
            <span className="icon-payoutSystemt"></span> PAY-OUT SYSTEM
          </NavLink> */}
        </div>
      </Col>
    );
  }
}

export default Sidebar;
