import React, { Component } from "react";
import NavBar from '../core/nav';
import Banner from '../jsx/banner';
import Conversations from '../jsx/conversation';
import Happypatient from '../jsx/happyPatient';
import Abouteat from '../jsx/aboutEat';
import Supporting from '../jsx/supporting';
import Discussanything from '../jsx/discussAnything';
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
        <Abouteat />
        <Supporting />
        <Discussanything />
        <Footer />
      </div>)

  }
}
export default Home; 