import React, { Component } from "react";
import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { Link, NavLink, Router } from "react-router-dom";

import Donationheart from "../../assets/images/donation_heart.png";
import Contentbox from "../../assets/images/boxes.png";
import Nextbtn from "../../assets/images/next-button.png";

import {
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";
class Compaign extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>

        <div className="profile_layout listenerprofile compaigns ss1 pt-4 pb-5"> 
          <Container style={{overflow:'hidden'}}>
            <div className="myprofile w-100">
              <div className="col10 fw600 fs32 mb-2">Compassion Campaign</div>   
              <div className="fs16 fw300 col14 mb-4">
                We believe that every human deserves free, emotional support, no matter where they are or what
                they’re going through. We want to make sure nobody has to struggle through difficult times alone,
                without a listening ear. Our mission is to be there for as many people as possible, but we need help
                to get there.
              </div>
              {/* <div className="today_goals mb-4">
                <Image src={Donationheart} alt="" className="mr-3" />
                <div className="fs20 fw500 col83">
                  Today’s goal is 19 New Contributors So far we have 3
                </div>
              </div> */}
              <div className="fs16 fw400 col14 compaign_para mb-4">
                We wish to provide a listeners to over a million lives in 2021. Every time
                someone backs ELNP, we are one step closer making sure support is available on-demand to anyone
                who needs it.
              </div>

              <div className="keep_kindness mb-4">
                <Col lg={7} col={12} className="pl-0">
                  <div className="fw500 fs16 col14">
                    Can you help us fill the jar and keep kindness and
                    compassion flowing?
                  </div>
                </Col>
                <Col lg={5} col={12} className="pr-0">
                  <div class="donate_data">
                    {/* <Link to={`/paytm_demo`}>Donate My Data</Link> */}
                    {/*https://eatluvnpray.org/paytm_demo/  */}
                    <a
                      // target="_blank"
                      href="https://staging.eatluvnpray.org/paytm_demo/"
                    // href="https://eatluvnpray.org/paytm_demo/"
                    >
                      Donate
                    </a>
                  </div>
                </Col>
              </div>

           

              <div className="right_donate" >
                <Image src={Contentbox} alt="" style={{marginTop:'50px'}} />
              </div>

              <div className="donate_ul">
                <div className="overlays_bottom"></div>
                <ul>
                  <li className="first">Spread the word</li>
                  <li>
                    Share on Facebook{" "}
                   <FacebookShareButton url={'https://eatluvnpray.org/compaign'}><Image src={Nextbtn} className="ml-1" alt="" /></FacebookShareButton> 
                  </li>
                  <li>
                    Share on Twitter{" "}
                   <TwitterShareButton url={'https://eatluvnpray.org/compaign'}> <Image src={Nextbtn} className="ml-1" alt="" /></TwitterShareButton>
                  </li>
                  {/* <li>
                    Tell other ELNP members & Listeners{" "}
                    <Image src={Nextbtn} className="ml-1" alt="" />
                  </li> */}
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Compaign;
