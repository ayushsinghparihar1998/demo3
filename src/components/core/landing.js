import React, { Component } from "react";
import NavBar from '../core/nav';
import Banner from '../landing/banner';
import Conversations from '../landing/conversation';
import Happypatient from '../landing/happyPatient';
import Abouteat from '../landing/aboutEat';
import Supporting from '../landing/supporting';
import Discussanything from '../landing/discussAnything';
import Footer from '../core/footer';
class Home extends Component {
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
        <Discussanything />
        <Footer />
      </div>)

  }
}
export default Home; 