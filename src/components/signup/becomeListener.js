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
            <div className="listener_layout mt-4 mb-4">
              <Row>
                <Col md={7} lg={8}> 
                  <div className="col10 fs40 fw600 mb-1 mt-4 pt-2">
                    Become a Listener
                  </div>
                  <div className="fw300 fs20 col14">
                    Welcome. We’re happy to have you!
                  </div>
                  <div className="fw300 fs15 col28 pt-2">
                    We are building a world-class listening service made up of
                    compassionate, caring individuals like you. Thank you for
                    offering to lend an ear to those in need of support.
                  </div>
                  <div className="fw500 fs20 col29 pt-3">How does it work?</div>
                  <div className="fw300 fs15 col28 pt-2">
                    Getting started as an active listener is easy and rewarding
                    in many ways. You’re in complete control over your displayed
                    availability, so you can listen as often as you like.
                  </div>
                  <div className="fw500 fs20 col29 pt-3 mb-2">
                    Here is the two-step registration process:
                  </div>

                  <ol className="pl-3">
                    <li>
                      <div className="fw300 fs15 col28">
                        {' '}
                        Complete the active listening course
                      </div>
                    </li>
                    <li>
                      <div className="fw300 fs15 col28">
                        {' '}
                        Create your listener profile
                      </div>
                    </li>
                  </ol>

                  <NavLink
                    to="/listenersignup"
                    className="btnTyp4 mb-4 mt-5 d-inline-block"
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
