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
  componentDidMount() {
    window.scrollTo(0, 0);
  } 
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

                    <p>You understand and agree that, although a mental or medical health professional, physician, attorney or other professional Listener or Therapist may have been accessed through this platform, Eat Luv N Pray Pvt. Ltd. cannot predict or assess the competence of, or appropriateness for your needs, of the professional or other Listener or Therapist. You also acknowledge and agree that you take full responsibility for the decision to access a Listener or Therapist through the Site and to continue to interact with the Listener or Therapist, and that the role of Eat Luv N Pray Pvt. Ltd. is strictly limited to providing access to such Listeners and Therapists for your consideration.</p>

                    <p>Your relationship relating to the Listening and Therapy Services is strictly with the Listener or Therapist. We are not involved in any way with the actual substance of that relationship or any part of the Listening or Therapy Service (whether provided through the Platform or not). Information shared between User and Therapist during online therapy services may be reviewed periodically by Eat Luv N Pray Pvt. Ltd to conduct quality control, address potential safety issues, and prevent misuse of our platform, if certain suspicious or potentially harmful activity is detected. We may also use aggregated data from chat transcripts to conduct research and development. In reviewing this information, Eat Luv N Pray Pvt. Ltd. will maintain all applicable confidentiality/HIPAA/privacy standards.</p>

                    <p>Eat Luv N Pray Pvt. Ltd. makes no representation or warranty whatsoever as to (a) the accuracy or availability of the Listening Platform or the Sites, (b) the willingness or ability of the Listener or Therapist to listen, (c) the willingness or ability of any Listener or Therapist to give advice, (d) whether the Member shall find a Listener or Therapists useful or satisfactory, (e) whether the Member shall find a Listener or Therapist’s advice relevant, useful, accurate or satisfactory, (f) whether the listening of the Listener or Therapist will be helpful, (g) whether the advice of the Listener or Therapist will be responsive or relevant to the Member’s question, or (h) whether the Listener or Therapist’s advice will otherwise be suitable to the Member’s needs. </p>

                    <p>Eat Luv N Pray Pvt. Ltd. does not verify the skills, degrees, qualifications, credentials or background of any Listeners. While Eat Luv N Pray Pvt. Ltd. does verify the license, qualifications and credentials of Therapists providing services through , you this platform, acknowledge that we do not guarantee such verification of the skills, degrees, qualifications, credentials, competence or background of any Therapist. It is your responsibility to conduct independent verification regarding any Therapist that provides you with Therapy Services (whether through the Platform or not). WE STRONGLY RECOMMEND THAT YOU CHECK THE CERTIFICATION AND/OR LICENSING OF THE MEDICAL PROFESSIONAL, MENTAL HEALTH PROFESSIONAL, PHYSICIAN, ATTORNEY OR OTHER PROFESSIONAL LISTENER WITH THE APPLICABLE STATE LICENSING BOARD OR AUTHORITIES IN THE LISTENER’S STATE OR COUNTRY.</p>

                    <p>In case you make a payment through the Platform, or make any payment to us, this payment is made to the Therapist for the Therapist Services. We may charge the Therapist by taking a portion of this payment for the use and operation of the Platform ("Platform Use Fees"). However, we will not be deemed as the Therapist of any Therapy Services regardless of payment. Furthermore, the payment for the use of the Platform is made by the Therapist and not by you.</p>

                    <p>Information and advice found on Eat Luv N Pray Pvt. Ltd. is intended for general information purposes only and does not replace a meeting with a professional. You are encouraged to 
                    verify any information provided on Eat Luv N Pray Pvt. Ltd. Any reliance on information is done at your sole risk and liability. 
                    </p>

                    <p>EAT LUV N PRAY PVT. LTD. DOES NOT WARRANT THE VALIDITY, ACCURACY, OR AVAILABILITY OF ANY CONTENT OR ADVICE PROVIDED BY LISTENERS OR THERAPISTS AND ELNP WILL NOT BE LIABLE FOR ANY DAMAGES SUSTAINED BY MEMBER DUE TO RELIANCE ON ANY SUCH INFORMATION OR ADVICE.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">Your EAT LUV N PRAY Account</div>

                    <p>You need a EAT LUV N PRAY account in order to use our Services. You may create your own Eat Luv N Pray member and/or listener account. You may hold only one member and one listener account. To protect your Eat Luv N Pray account, keep your password confidential. You are responsible for any activity that happens on or through your Eat Luv N Pray account. If you discover any unauthorized use of your password or Eat Luv N Pray account, contact at 
                     <a> support@eatluvnpray.org </a> </p> 

                    <div className="fs20 fw600 col29 mt-2 mb-2">Privacy</div>
                    <p>The <a>Eat Luv N Pray Privacy Policy</a> explains how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Eat Luv N Pray can use your data in accordance with our Privacy Policy</p>

                    <p>We respect the intellectual property rights of others and request users to do the same. We will respond to notices of abuse or alleged copyright infringement and terminate accounts of repeat offenders according to the process. If you believe there is copyright infringement, please send an email or written notice to our Designated Agent (Eat Luv N Pray Pvt. Ltd. At support@eatluvnpray.org)</p>

                    <ol>
                        <li>description of the alleged infringement</li>
                        <li>identification of the copyrighted work</li>
                        <li>your name and contact information (email address and phone number)</li> 
                        <li>Signed statement that you are either the copyright owner or the person authorized to act on behalf of the copyright owner. </li>
                    </ol>
                    <div className="fs20 fw600 col29 mt-2 mb-2">Your Content in Our Services</div>

                    <p>Some of our Services allow you to upload, submit, store, send or receive content. Eat Luv N Pray Pvt. Ltd. shall maintain the storage and integrity of such data in accordance with our Privacy Policy.</p>

                    <p>You can find out more about how Eat Luv N Pray uses and stores your content in the Privacy Policy. If you submit feedback or suggestions about our Services, we may use your feedback or suggestions without obligation to you.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">Modifying and Terminating Our Services</div>

                    <p>Modifying and Terminating Our Services</p>

                    <p>You can stop using our Services at any time. Eat Luv N Pray Pvt. Ltd. may also stop providing Services to you, or add or create new limits to our Services at any time.</p>

                    <p>We believe that you own your data. Preserving your access to and control of your data is important. Upon request, we will delete all data related to your account in accordance with our Privacy Policy.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">Our Warranties and Disclaimers</div>

                    <p>DO NOT USE OUR SERVICE FOR EMERGENCIES. EAT LUV N PRAY LISTENERS ARE NOT TRAINED OR QUALIFIED TO ASSIST THOSE IN CRISIS. ALL CRISIS CHATS WILL BE TERMINATED IMMEDIATELY. IF YOU ARE THINKING ABOUT SUICIDE, IF YOU FEEL THAT YOU MAY BE A DANGER TO YOURSELF OR TO OTHERS, OR IF YOU OTHERWISE HAVE ANY MEDICAL EMERGENCY, PLEASE IMMEDIATELY CALL THE RELEVANT EMERGENCY NUMBER IN YOUR COUNTRY AND NOTIFY THE POLICE OR EMERGENCY MEDICAL SERVICES.</p>

                    <p>We provide our Services using a reasonable level of care and skill and we hope that you enjoy using them. There are certain things that we do not promise about our Services.</p>

                    <p>OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS, NEITHER EAT LUV N PRAY PVT. LTD. NOR ITS AFFILIATES, OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, SUB-CONTRACTORS, REPRESENTATIVES, OR AGENTS MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN THE SERVICES, THE SPECIFIC FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE OUR SERVICES “AS IS.” WE EXCLUDE ALL WARRANTIES.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">Liability for Our Services</div>

                    <p>WHEN PERMITTED BY LAW, EAT LUV N PRAY PVT. LTD. AND IT’S AFFILIATES, OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, SUB-CONTRACTORS, REPRESENTATIVES, OR AGENTS WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.</p>

                    <p>TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF EAT LUV N PRAY PVT. LTD. AND ITS AFFILIATES, OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, SUB-CONTRACTORS, REPRESENTATIVES, AND AGENTS FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE SO CHOOSE, TO SUPPLYING YOU THE SERVICES AGAIN).</p>

                    <p>IN ALL CASES, EAT LUV N PRAY PVT. LTD. AND ITS AFFILIATES, OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, SUB-CONTRACTORS, REPRESENTATIVES, AND AGENTS, WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE THAT IS NOT REASONABLY FORESEEABLE.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">Business Uses of Our Services</div>

                    <p>If you are using our Services on behalf of a business or organization, that business or organization accepts these terms. It will hold harmless and indemnify Eat Luv N Pray Pvt. Ltd. and its affiliates, officers, directors, shareholders, employees, sub-contractors, representatives, and agents from any claim, suit or action arising from or related to the use of the Services or violation of these terms, including any liability or expense arising from claims, losses, damages, suits, judgements, litigation costs, and attorneys’ fees.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">About These Terms</div>

                    <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page and email them to registered users. We’ll post notice of modified additional terms in the applicable Service. Changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should immediately discontinue your use of that Service.</p>

                    <p>If there is a conflict between these terms and the additional terms, the additional terms will control for that conflict.</p>

                    <p>These terms control the relationship between Eat Luv N Pray Pvt. Ltd. and you. They do not create any third party beneficiary rights.</p>

                    <p>If you do not comply with these terms, and we don’t take action right away, that doesn’t mean that we will give up any rights that we may have (such as taking action in the future)</p>

                    <p>For more information about how to contact Eat Luv Pray Pvt. Ltd., please visit our 
                        <a> FAQ Page. </a></p>
                        
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


