import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Splan from "../../assets/images/blog5.png";
import Arrowright from "../../assets/images/Arrowright.png";
import { Link, Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import VideoIcon from "../../assets/images/videoIcon.png";

import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";

import YouTube from "react-youtube";
import validator from "validator";
import { getLocalStorage } from "../../common/helpers/Utils";
import CustomModal from "../modals/customModal";
import KitOne from "../../assets/images/kits.png";
import KitTwo from "../../assets/images/kits2.png";
import KitThree from "../../assets/images/kits3.png";


class KitDetails extends Component {

  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="kitListings">
            <Container>
                <div className="kitplans mt-4 mb-4"> 
                    <div className="fs18 text-left fw500 mt-3 mb-5"><span className="col14 fw300 mr-1">Kits</span> / 
                    <span className="col29 fs18 ml-1">Kit Details</span></div> 
                </div>
            </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default KitDetails; 



