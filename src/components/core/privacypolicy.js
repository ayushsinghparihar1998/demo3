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

class Privacypolicy extends Component {
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
                    <div className="fs36 fw600 col29 mb-2">EAT LUV N PRAY PVT. LTD.</div>
                    <div className="fs36 fw600 col29 mb-2">Privacy Policy – Effective Date Oct 1st 2020</div>
                    <p>Eat Luv N Pray Pvt. Ltd. ("ELNP," "we," "us" and "our") provides virtual access to emotional and social support, and to promote early detection of mental health symptoms. Privacy is extremely important to us, so we have taken several steps to protect your information and put you in control.</p>
                    {/* <div className="fs20 fw600 col29 mt-2 mb-2">Using our Services</div>  */}

                    <p>This privacy policy ("Privacy Policy") describes how we collect, use, disclose and store Personal Information you provide to us through the website and mobile application tools that provide the services described above (collectively, the "Services"). Please review this Privacy Policy carefully and in its entirety. If you have questions about this Privacy Policy, you can contact us at support@eatluvnpray.org.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">This Privacy Policy describes</div>

                    <ul>
                        <li>The Personal Information we collect when you interact with the Services</li> 
                        <li>How we use and process the Personal Information that we collect;</li>
                        <li>How we may share Personal Information with third parties; and</li>
                        <li>The security of your Personal Information.</li>
                    </ul>
                    
                    <div className="fs20 fw600 col29 mt-2 mb-2">1. Acceptance of the Privacy Policy</div>

                    <p>PLEASE REVIEW THIS PRIVACY POLICY CAREFULLY. When you submit your Personal Information to or through the Services, you consent to the collection and processing of your Personal Information as described in this Privacy Policy. By using the Services, you accept the terms of this Privacy Policy, and our Terms of Use.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">2. Effective Date and Changes to Privacy Policy</div>

                    <p>The Effective Date of this Privacy Policy is set forth at the top of this Privacy Policy. We may change this Privacy Policy from time to time at our discretion and when required by law, we will notify you of changes to this Privacy Policy. Material changes will be posted to this page. Your continued use of the Services after the Effective Date constitutes your acceptance of the amended Privacy Policy. The amended Privacy Policy supersedes all previous versions.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">3. Personal Information We Collect</div>

                    <p>We require certain Personal Information to provide our Services to you. "Personal Information" may include contact information such as your first name, last name, email address, location, phone number, certain demographic information such as age, gender, race ethnicity, primary language spoken, sexual orientation, disabilities, and veteran status, information about your health and medical history that you may input while using or communicating through the Services, and information about how you interact with and use your device. Personal Information that has been anonymized is not Personal Information as it does not allow for a specific individual to be identified.</p>

                    <p>Listening and Therapy Chat Transcripts. While we generally do not monitor transcripts of chats between users and Listeners and Therapists, we may occasionally review the chat transcripts to conduct quality control, address potential safety issues, and prevent misuse of our platform, if certain suspicious or potentially harmful activity is detected. We may also use aggregated data from chat transcripts to conduct research and development. In reviewing this information, ELNP will maintain all applicable confidentiality/privacy standards.</p>

                    <p>Without providing your Personal Information you may not access Services through ELNP, contact or correspond with us, other users, therapists or other health care providers via the Services, or utilize the therapy exercises and programs available on the Services.</p> 
                    

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
export default Privacypolicy; 


