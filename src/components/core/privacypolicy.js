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
                    <div className="fs32 fw600 col29 mb-2">EAT LUV N PRAY PVT. LTD.</div>
                    <div className="fs32 fw600 col29 mb-2">Privacy Policy – Effective Date Oct 1st 2020</div>
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

                    <ul>
                        <li><strong><i>Account Setup.</i></strong> When you sign up for an account with us, we ask for and collect Personal Information such as your name, a valid email address, phone number, birthdate and address. We need this information to provide you with the Services.</li>

                        <li><strong><i>Paid Services.</i></strong> If you purchase paid services, such as therapy or other upgrades, Personal Information such as billing name, address and credit card payment information will be collected to process payment.</li>

                        <li><strong><i>Listener and Therapist Applicants.</i></strong> If a visitor wishes to apply to be a Listener or Therapist on ELNP’ Listening Platform, the visitor will be required to submit Personal Information as requested. Any Personal Information supplied by or on behalf of a visitor for purposes of becoming a Listener or Therapist will be maintained by ELNP. Please note that ELNP may have additional privacy terms that apply to Listeners or Therapists. Such terms will be made available when an applicant applies to be a Listener or Therapist or otherwise accesses his or her account.</li>

                        <li><strong><i>Mental Health Services.</i></strong>We collect your Personal Information when you access mental health services through our Services, when you contact or correspond with us, therapists or other health care providers via the Services or when you utilize the therapy exercises and programs available on the Services.</li>

                        <li><strong><i>Public Forums, Chats, or Other Features.</i></strong> Depending on how you interact with the Services, you may share your Personal Information with other Users, such as peers and other users who participate in chat, forums or other non-private locations. Anything users post in the public forums, chats, or other features will be accessible to other users and may not be able to be deleted. Accordingly, ELNP strongly discourages posting any Personal Information in these places and it is your responsibility not to share Personal Information in such non-private location.</li> 

                        <li><strong><i>Log Data.</i></strong> When you use our Services, we store, process and transmit your information about how you use our Services to engage, educate and suggest behavioural activation strategies to you.</li>

                        <li><strong><i>Surveys.</i></strong> From time to time we may collect Personal Information from users via surveys. This information is used to improve the content of our web pages, the quality of our Services.</li>

                        <li><strong><i>Assessments.</i></strong> Periodically, ELNP will offer the opportunity to assess your emotional wellness based on questionnaires where you will be asked to provide Personal Information. It is your choice to participate in these assessments; not participating will not prevent you from participating in any other aspect of the Services offered.</li>

                        <li><strong><i>Requests for Information, News and other Content.</i></strong> You may sign up to receive information, news and other content related to new and existing products and services related to ELNP’ Sites, ELNP’ Listening Platform and events and other information related to ELNP that may be of interest to you. When signing up to receive such information, you will be asked to provide Personal Information, including your name, an email address, address and phone number.</li>

                        <li><strong><i>Technical Support Requests.</i></strong> If you need technical support related to ELNP’ Services, you will need to complete a form for the purposes of defining and clarifying your technical support request. When submitting a technical support request, you will be asked to provide Personal Information, including an email address and a description of the issue. When you contact us, we keep a record of email and chat communications to address and resolve any issues you are facing.</li>

                        <li><strong><i>Browser Information and Cookies.</i></strong> We use browser information (e.g., IP addresses and browser types), cookies and pixel tags to determine what data or information should be shown on your browser when you are visiting ELNP’ Site or using ELNP’ Listening Platform. We may also use browser information, cookies and pixel tags: to determine how you arrived at ELNP’ Site or Listening Platform, to determine whether you are a return visitor, to help us improve our product and service offerings, for quality assurance and training purposes, to help diagnose problems with our servers, to gather broad demographic information, to administer and optimize our services, and for other lawful purposes. Please refer to the "Cookies" section below for more information.</li>
                    </ul>

                    <p>Users can request a download of their own Personal Information that ELNP currently stores, and also request deletion of their account and associated Personal Information. We reserve the right to prevent a User from exercising such rights in certain circumstances, as permitted by law. For example, if the User in question has broken the terms laid out in the Terms, caused harm or has abused our Services, or has negatively impacted other members. In this case, we retain the right to keep some of your Personal Information in order to provide more security and safety to our members.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">4. Cookies and Other Tracking Technologies</div>

                    <p>Cookies are small files, typically of letters and numbers, downloaded onto your computer or mobile device when you visit certain websites.</p>

                    <ul>
                        <li> 
                            <strong><i>How We Use Cookies.</i></strong> Generally, we use first-party and third-party cookies for the following purposes: 
                            <ul>
                                <li>oto make our Services function properly;</li>
                                <li>oto provide a secure browsing experience during your use of our Services;</li>
                                <li>oto collect passive information about your use of our Services;</li>
                                <li>oto help us improve our Services; and</li>
                                <li>oto remember your preferences for your convenience.</li> 
                            </ul>
                        </li>

                        <li> 
                            <strong><i>Types of Cookies on Our Services.</i></strong> We use the following types of cookies on our Services: 
                            <ul>
                                <li>oStrictly Necessary Cookies. These cookies are essential because they enable you to move around and use our Services. For example, strictly necessary cookies allow you to access secure areas on our Services. Without these cookies, some services cannot be provided. These cookies do not gather information about you for marketing purposes. This category of cookies is essential for our Services to work and they cannot be disabled.</li>

                                <li>Functional Cookies. We use functional cookies to remember your choices so we can tailor our Services to provide you with enhanced features and personalized content. For example, these cookies can be used to remember your name or preferences on our Services. We do not use functional cookies to target you with online marketing. While these cookies can be disabled, this may result in less functionality during your use of our Services.</li>

                                <li>oPerformance or Analytic Cookies. These cookies collect anonymous passive information about how you use our Services, including webpages you visit, and links you click. We use the information collected by such cookies to improve and optimize our Services. We do not use these cookies to target you with online marketing. You can disable these cookies.</li>

                                <li>oThird-Party Cookies. These are cookies that are provided by third-party service providers and belong in one of the cookie categories described above. These third-party providers process your Personal Information on our behalf pursuant to our instructions and obligations consistent with this Privacy Policy.</li>

                            </ul>
                        </li>

                        <li><strong><i>How to Manage Cookies.</i></strong> Depending on whether you would like to manage a first-party or third-party cookie, you will need to take the following steps:
                            <ul>
                                <li>
                                     First-Party Cookies. You can enable, disable or delete our cookies through the browser you are using to access our Services. To do this, follow the instructions provided by your browser (usually located within the "Help", "Tools" or "Edit" settings). Please note, if you set your browser to disable cookies, you may not be able to access secure areas of our Services, and/or parts of the Services may not work properly for you. You can find more information about how to change your browser cookie settings at  
                                     <a> http://www.allaboutcookies.org. </a> 
                                </li> 
                                <li>Third-Party Cookies. Modern browsers also allow you to block third-party cookies using the steps described above.</li>

                            </ul>
                        </li>

                        <li>
                            <strong>
                                 Pixel Tags.
                            </strong>
                             We also use pixel tags throughout or Services. Pixel Tags are small graphic images that are embedded in a web page or email for purposes of tracking activity on web pages or whether a user has opened or accessed an email. A pixel tag may be set to identify on what browser and computer it was viewed, whether that browser has cookies received from a server associated with the pixel tag, and whether the web page or email with the pixel tag was forwarded or copied.
                        </li>
                    </ul>

                    <div className="fs20 fw600 col29 mt-2 mb-2">5. Why We Collect Your Personal Information</div>

                    <p>We may use Personal Information that we collect about you for various purposes, including: </p>

                    <ul>
                        <li>To operate, provide and improve our Services;</li>
                        <li>To communicate with you regarding our Services, and promotions;</li>
                        <li>To ensure network and information security;</li>
                        <li>To provide customer support and respond to your inquires; and</li>
                        <li>To protect you, us and other users.</li>
                    </ul>
                    
                    <div className="fs20 fw600 col29 mt-2 mb-2">6. Personal Information We Share</div>

                    <p>We may share and disclose Personal Information as follows:</p>

                    <ul>
                        <li>
                            <strong><i>Third Party Service Providers Performing Services on Our Behalf.</i> </strong> 
                             We share Personal Information, with certain third-party service providers that assist us in providing the Services and which are bound by duties of confidentiality. For example, we may use third parties to host the Services, to send out email updates about the Services, administrative services, financial services, quality assurance, data aggregation or remove repetitive information from our user lists.
                        </li>
                        <li>
                            <strong><i>Therapists.</i> </strong> 
                            If you elect to consult with a licensed therapist through ELNP, we may share your information with your therapist to enable and facilitate care.
                        </li>
                        <li>
                            <strong><i>Healthcare Providers.</i> </strong> 
                            If you have been referred to the Services as part of a care plan by your healthcare provider, we may share your Personal Information with your healthcare provider to facilitate care.
                        </li>
                        <li>
                            <strong><i>For Legal Purposes.</i> </strong> 
                            We will disclose your Personal Information as we deem necessary to respond to a subpoena, regulation, binding order of a data protection agency, legal process, governmental request or other legal or regulatory process. We may also share your Personal Information as required to pursue available remedies or limit damages we may sustain.
                        </li>
                        <li>
                            <strong><i>Welfare Assurance.</i> </strong> 
                             We may disclose your Personal Information directly to law enforcement or local authorities in the event that it has been reasonably determined that your safety or the safety of others may be at risk.
                        </li>
                        <li>
                            <strong><i>Business Transfer.</i> </strong> 
                             In the event of a merger, reorganization, consolidation, restructuring, bankruptcy, sale of substantially all interests or assets, or other similar transaction, we may transfer your Personal Information to the subsequent owner or operator of the Services.
                        </li>
                        <li>
                            <strong><i>Anonymized Data</i> </strong> 
                             We may de-identify your Personal Information, in compliance with applicable law and aggregate such de-identified data with the de-identified data of other users. Such anonymized, aggregated data is no longer considered Personal Information. We may then share such anonymized aggregated data with the sponsors of programs that facilitate your access to the Services, such as government health agencies, researchers or healthcare providers. At ELNP, we believe that global mental health is a collaborative effort. The sharing of anonymized data plays a key role in helping both users and people worldwide to understand and better their mental health while maintaining a high level of privacy and anonymity to individuals.
                        </li>
                    </ul>

                    <div className="fs20 fw600 col29 mt-2 mb-2">7. Security of Your Personal Information</div>

                    <p>We employ reasonable security measures designed to protect the security of information submitted through the Services. However, the security of information transmitted through the Internet can never be guaranteed. To protect you and your Personal Information we may suspend your use of the Services, without notice, pending an investigation, if any breach of security is suspected</p>

                    <ul>
                        <li>
                            <strong><i>Your Responsibilities.</i> </strong> 
                            Users of the Services are responsible for maintaining the security of any password, user ID or other form of authentication involved in obtaining access to password protected or secure areas of any of the Services.
                        </li>
                        <li>
                            <strong><i>Unauthorized Access.</i> </strong> 
                            Access to and use of password protected and/or secure areas of the Services are restricted to authorized users only. Unauthorized access to such areas or information is prohibited.
                        </li>
                        <li>
                            <strong><i>Encryption and Firewalls.</i> </strong> 
                            All information, including but not limited to chat transcripts and personal information is encrypted during transmission. We use standard Secure Socket Layer (SSL) encryption that encodes information for such transmissions. All information received is maintained on secure servers in encrypted format. Access to stored information is protected by multi-layered security controls including firewalls, encryption, role-based access controls, and passwords.
                        </li>
                    </ul>

                    <div className="fs20 fw600 col29 mt-2 mb-2">8. Retention Period</div>

                    <p>Generally, we will retain your Personal Information for as long as your account or profile is active, or for the length of time needed to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. Private messages are stored for up to one year. Group messages (in chatrooms, group chat) are stored for up to 30 days. Posts in community forums (including sub communities) are maintained on community forums at the discretion of Community admins. ELNP will store your user account and associated Personal Information if your account is active. After a period of inactivity greater than 1 calendar year, ELNP may, at its discretion, purge Personal Information related to inactive accounts.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">9. Links to Other Sites</div>

                    <p>The Services may contain links and widgets related to third-party websites and services ("Third Party Services") with which we have no affiliation. A link to any Third Party Services does not mean that we endorse it or the quality or accuracy of information presented on it. If you decide to visit any Third Party Services, you are subject to its privacy policy and practices and not this Privacy Policy. We encourage you to carefully review the legal and privacy notices of all other digital services that you visit. Users are prohibited from requesting offsite contact with other users. If a user is detected initiating offsite contact, ELNP reserves the right to immediately terminate that account.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">10. Non-discrimination</div>

                    <p>ELNP does not and shall not discriminate on the basis of race, colour, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.</p>

                    <div>11. Children’s Data</div>

                    <p>ELNP complies with the Children’s Online Privacy Protection Act and Our Site and
Services clearly specify that users must be at least 13 years old. Children between the ages of 13-17 years old may only participate in our Services with parental consent. If a parent or guardian becomes aware that his or her child has provided us with Personal Information without their consent, he or she should contact us at support@eatluvnpray.org. If we become aware that a child under 18 (or between the ages of 13-17 years old without parental consent) has provided us with Personal Information, we will take steps to delete such information from our files. Separately, a child under 18 may request deletion of information they posted on our Site or Services, which may be accomplished through anonymization.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">12. Therapists as Mandated Reporters</div>

                    <p>Therapists are mandated reporters. Because of their profession, they have a legal obligation to report to authorities any signs of child abuse or vulnerable adult abuse. However, members cannot be forced to give any Personal Information. Adults who are in therapy provide Personal Information which will only be disclosed to the therapist if they or someone else is in imminent danger.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">13. International Transfer</div>

                    <p>As a global entity, ELNP may store, transfer, and otherwise process your Personal
Information in countries outside of the country of your residence. Such countries may have data protection laws that are less protective than the laws of the jurisdiction in which you reside. If you do not want your information transferred to, processed, or maintained outside of the country or jurisdiction where you are located, you should immediately stop accessing or using the Services.</p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">16. Do Not Track</div>

                    <p>The Services do not support Do Not Track with respect to the Services at this time. Do Not Track is a privacy preference that you can set in your web browser to indicate that you do not want certain information about your webpage visits collected across websites when you have not interacted with that service on the page. For all the details, including how to turn on Do Not Track, visit<a> https://www.donottrack.us. </a></p>

                    <div className="fs20 fw600 col29 mt-2 mb-2">17. Notices</div>

                    <p>Please send all questions, comments and notices regarding this Privacy Policy to ELNP at support@eatluvnpray.org.</p>



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


