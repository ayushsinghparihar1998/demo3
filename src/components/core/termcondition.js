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
  Accordion,
  Card
} from "react-bootstrap"; 
import NavBar from "../core/nav";
import Footer from "../core/footer"; 

class Termcondition extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row> 
              <Col md={12} lg={12} className="pl-1">
                <div className="myprofile terms">
                    <div className="fs36 fw600 col29">Terms of Service</div>
                    <div className="fs20 fw600 col29 mt-2 mb-2">Welcome to Eat Luv N Pray Foundation!</div>
                    <p>The Services are provided by Eat, Luv N Pray Pvt. Ltd. By using our Services, you agree to these Terms, includes the Privacy Policy, which is incorporated by reference. Please read them carefully.</p>
                    <div className="fs20 fw600 col29 mt-2 mb-2">Using our Services</div> 
                    <p>Don’t misuse or abuse our Services. Don’t interfere with our Services or try to access them in a way other than what we provide. You can use our Services only as permitted by law. We may suspend, ban, or stop providing our Services to you if you do not follow our Terms, Privacy Policy, or other policies or if we are investigating suspected misconduct.</p>

                    <p>Using our Services does not give you ownership of any intellectual property rights in our Services or the content you may access. You may not use content from our Services unless you have obtained permission from its owner or are otherwise permitted by law. These Terms do not grant you the right to use any branding or logos from our Services without written consent from Eat Luv N Pray Pvt. Ltd.. Do not remove, obscure, or alter any legal notices displayed in or along with our Services.</p>

                    <p>Our Services may display some content that does not belong to Eat Luv N Pray Pvt. Ltd.. This content is the sole responsibility of the individual who makes it available. We may review content to determine whether it is illegal or violates any of our policies, and we will remove or refuse to display content that we believe violates our policies or the law. We do not necessarily review all content and you should not assume that we do.</p>

                    <p>In connection with your use of our Services, we may send you announcements, administrative messages, and other information. You may opt out of some of these communications. Some of our Services are available on mobile devices. Do not use our Services in a way that distracts you and prevents or diminishes your ability to obey traffic and safety laws. </p>
                    <div className="fs20 fw600 col29 mt-2 mb-2">Listening and Therapy Services</div>
                    <p>DO NOT USE OUR SERVICE FOR EMERGENCIES. EAT LUV N PRAY PVT. LTD. LISTENERS ARE NOT TRAINED OR QUALIFIED TO ASSIST THOSE IN CRISIS. ALL CRISIS CHATS WILL BE TERMINATED IMMEDIATELY. IF YOU ARE THINKING ABOUT SUICIDE, IF YOU FEEL THAT YOU MAY BE A DANGER TO YOURSELF OR TO OTHERS, OR IF YOU OTHERWISE HAVE ANY MEDICAL EMERGENCY, PLEASE IMMEDIATELY CALL THE RELEVANT EMERGENCY NUMBER IN YOUR COUNTRY AND NOTIFY THE POLICE OR EMERGENCY MEDICAL SERVICES.</p>
                    
                    <p>You acknowledge and agree that Listeners and Therapists are neither employees nor agents nor representatives of EAT LUV N PRAY PVT. LTD., IT assumes no responsibility for any act or omission of any such Listener or Therapist.</p>
                </div>
             </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Termcondition; 


