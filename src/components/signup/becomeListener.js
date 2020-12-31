import React, { Component } from 'react';
import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
} from 'react-bootstrap';
import { Link, NavLink, Router } from 'react-router-dom';
import NavBar from '../core/nav';
import Footer from '../core/footer';
import WomenListener from '../../assets/images/listenerWomen.svg';
import CONSTANTS from '../../common/helpers/Constants';
class Becomelistener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleType: CONSTANTS.ROLES.LISTNER,
    };
  }
  goToLoginPage = () => {
    this.props.history.push({
      pathname: 'login',
      state: { path: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };
  render() {
    return (
      <div className="page__wrapper innerpage"> 
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="becomeListener">
          <Container>
            <div className="listener_layout mt-2 mb-2">
              <Row>
                <Col md={7} lg={8}> 
                  <div className="col10 fs40 fw600 mb-1 mt-2 pt-1">
                    Become a Listener
                  </div>
                  <div className="fw300 fs15 col28 pt-1">
                    “You have not lived today until you have done something for someone who can never repay you.”
                    ― John Bunyan
                  </div>
                  <div className="fw300 fs18 col14 mt-3">
                    Welcome. We’re thrilled to have you on-board!
                  </div>
                  <div className="fw300 fs15 col28 pt-1">
                    This is a unique listening service made up of compassionate, caring individuals like you. Thank you
                    for offering to lend an ear to those in need of support to make real difference.
                  </div>
                  <div className="fw500 fs18 col29 pt-1">How does it work?</div>
                  <div className="fw300 fs15 col28 pt-2">
                    Getting started as a Listener (Constant Companion) is easy and rewarding in many ways. You’re in
                    complete control over your displayed availability, so you can help others as often as you like.
                  </div>
                  <div className="fw500 fs18 col29 pt-1 mb-2">
                  Here is the two-step registration process:
                  </div>

                  <ol className="pl-3">
                    <li>
                      <div className="fw300 fs15 col28">
                        {' '}
                        Complete the Active listening course & Practice Chat.
                      </div>
                    </li>
                    <li>
                      <div className="fw300 fs15 col28">
                        {' '}
                        Create your Listener profile.
                      </div>
                    </li>
                  </ol>

                  <NavLink
                    to="/listenersignup"
                    className="btnTyp4 mb-0 mt-3 d-inline-block"
                  >
                    Become a Listener
                  </NavLink>

                  <div className="col28 fw500 fs20 pt-4">
                    Already have an account?
                    <span className="col12 pointer pl-1">
                      <Link to={`/login`}>Login here</Link>
                    </span>
                  </div>
                </Col>
                <Col md={5} lg={4}>
                  <Image src={WomenListener} alt="" className="w-100" />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Becomelistener;
