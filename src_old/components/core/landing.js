import React, { Component } from "react";
import NavBar from "../core/nav";
import Banner from "../landing/banner";
import Conversations from "../landing/conversation";
import Happypatient from "../landing/happyPatient";
import Abouteat from "../landing/aboutEat";
import Supporting from "../landing/supporting";
import Discussanything from "../landing/discussAnything";
import Footer from "../core/footer";
import Crossbtn from "../../assets/images/blue_cross.svg";
import Payments from "../../assets/images/payment_chk.svg";
import { Button, Modal, Image, Container, Form } from "react-bootstrap";
import * as qs from "query-string";
import ReactGA from 'react-ga';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      show5: false,
    };
  }
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    const { location } = this.props;
    if (location.search) {
      const parsed = qs.parse(location.search);
      // if (parsed.type === "emailverification") {
      let RESPMSG = parsed.RESPMSG;
      let STATUS = parsed.STATUS;
      //  let roleType = parsed.role.replace(/\s/g, '+');
      // }
      if (STATUS == "TXN_SUCCESS") {
        this.setState({
          show5: true,
        });
      }
      console.log(RESPMSG, STATUS);
    }
  }
  handlePaymentModal = () => {
    this.setState({ show5: true });
  };
  handlePaymentClose = () => {
    this.setState({ show5: false });
  };
  render() {
    return (
      <div className="page__wrapper">
        <div className="main_baner">
          <NavBar {...this.props} />
          <Banner />
        </div>
        <Conversations />
        <Happypatient />
        <Abouteat {...this.props} />
        <Supporting />
        <Discussanything {...this.props} />

        {/* <div className="text-center  mb-5">
          <Button className="" onClick={this.handlePaymentModal}>
            Payment
          </Button>
        </div> */}

        <Modal show={this.state.show5} className="CreateAccount Payment">
          <Modal.Header>
            <Button onClick={this.handlePaymentClose}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <div className="layout_box text-center mt-3 mb-4">
                <Image src={Payments} alt="" className="mt-5 mb-4" />
                <div className="col10 fs30 fw600 mb-4">Donation Successful</div>
                <div className="fs300 fs20 col14 mb-5 pb-2">
                  Thank you for supporting our cause
                </div>
                {/* <Button className="btnTyp12 btnT12">OKAY</Button> */}
              </div>
            </Container>
          </Modal.Body>
        </Modal>
        <Footer />
      </div>
    );
  }
}
export default Home;
