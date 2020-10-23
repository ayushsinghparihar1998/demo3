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

class Faq extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5 faqone"> 
          <Container>
            <Row> 
              <Col md={12} lg={12}> 
                <div className="myprofile reviewrequest memberfaq"> 
                  <div className="text-center user_tab">
                    <Tabs defaultActiveKey="request">  
                      <Tab eventKey="request" title="General FAQ"> 
                        <div className="fw400 col29 fs28 text-center mt-4 mb-2">  
                            General FAQ
                        </div>
                        <div className="fs20 fw400 col27 mb-5">   
                            FAQ about ENLP, Listener & Member Accounts, and more.
                        </div>
                        <div className="QuestionAnswer"> 
                            <Accordion defaultActiveKey="0">    
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                      What is ELNP Foundation?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body> 
                                        ELNP is a sponsored online emotional support service platform. It 
                                        connects those in need of emotional support with our network of 
                                        Listeners who have been trained through specialists and want to 
                                        provide compassionate care. Connections to Listeners are private 
                                        conversations initiated on demand and kept anonymous.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                    What is active listening?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>  
                                        Active Listening is hearing in a way that exhibits compassion and 
                                        empathy while keeping in mind the importance of anonymity. Our 
                                        listeners are called “CoCo” (your constant companion) who will be all 
                                        ears to ensure you feel valued and heard.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                    How is active listening different from talking to a professional?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2"> 
                                    <Card.Body>  
                                        Professionals have undergone years of training and testing to earn an 
                                        accredited qualification in their respective fields. Listeners also 
                                        undergo certified training module designed by our professional 
                                        experts to polish their listening and soft skills.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                    How do I change my username
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3"> 
                                    <Card.Body>   
                                        If you have been a member/listener for less than 2 weeks then you 
                                        can do this from settings. After two weeks you can only change your 
                                        username for valid reasons, you can request a username change 
                                        along with reason by an email on contact@eatluvnpray.org
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                    How do I change my username
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4"> 
                                    <Card.Body>   
                                        If you have been a member/listener for less than 2 weeks then you 
                                        can do this from settings. After two weeks you can only change your 
                                        username for valid reasons, you can request a username change 
                                        along with reason by an email on contact@eatluvnpray.org
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                    I entered the wrong birthday so my age group is incorrect, what do I do?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">  
                                    <Card.Body>     
                                        Please write to contact@eatluvnpray.org with your username and 
                                        correct birthday along with any of the following documents:
                                        <div className="mt-2">1) Aadhaar Card</div>
                                        <div>2) Pan Card</div>
                                        <div>3) Driving License</div> 
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                        </div>
                      
                      </Tab>

                      {/* <Tab eventKey="completed" title="Members FAQ">
                      <div className="fw400 col29 fs28 text-center mt-4 mb-2">  
                            Members FAQ
                      </div>
                      <div className="fs20 fw400 col27 mb-5">     
                          FAQ about ENLP, Listener & Member Accounts, and more.
                      </div>  
                        <div className="QuestionAnswer">  
                            <Accordion defaultActiveKey="0">    
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        How do I connect with a Listener?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body> 
                                        ELNP is a sponsored online emotional support service platform. It 
                                        connects those in need of emotional support with our network of 
                                        Listeners who have been trained through specialists and want to 
                                        provide compassionate care. Connections to Listeners are private 
                                        conversations initiated on demand and kept anonymous.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                      How do I access support rooms?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>  
                                        Active Listening is hearing in a way that exhibits compassion and 
                                        empathy while keeping in mind the importance of anonymity. Our 
                                        listeners are called “CoCo” (your constant companion) who will be all 
                                        ears to ensure you feel valued and heard.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                    What are subcommunities?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2"> 
                                    <Card.Body>  
                                        Professionals have undergone years of training and testing to earn an 
                                        accredited qualification in their respective fields. Listeners also 
                                        undergo certified training module designed by our professional 
                                        experts to polish their listening and soft skills.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                    What is active listening?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3"> 
                                    <Card.Body>   
                                        If you have been a member/listener for less than 2 weeks then you 
                                        can do this from settings. After two weeks you can only change your 
                                        username for valid reasons, you can request a username change 
                                        along with reason by an email on contact@eatluvnpray.org
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                    My Listener is inappropriate, what do I do?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4"> 
                                    <Card.Body>   
                                        If you have been a member/listener for less than 2 weeks then you 
                                        can do this from settings. After two weeks you can only change your 
                                        username for valid reasons, you can request a username change 
                                        along with reason by an email on contact@eatluvnpray.org
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                    Using ELNP as a teen
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">  
                                    <Card.Body>     
                                        Please write to contact@eatluvnpray.org with your username and 
                                        correct birthday along with any of the following documents:
                                        <div className="mt-2">1) Aadhaar Card</div>
                                        <div>2) Pan Card</div>
                                        <div>3) Driving License</div> 
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                    Why was ELP founded? 
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">  
                                    <Card.Body>     
                                        Please write to contact@eatluvnpray.org with your username and 
                                        correct birthday along with any of the following documents:
                                        <div className="mt-2">1) Aadhaar Card</div>
                                        <div>2) Pan Card</div>
                                        <div>3) Driving License</div> 
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                        </div>
                      
                      </Tab>

                      <Tab eventKey="reject" title="Listeners FAQ"> 
                        <div className="fw400 col29 fs28 text-center mt-4 mb-2">  
                            Listeners FAQ
                        </div> 
                            <div className="fs20 fw400 col27 mb-5">   
                                FAQ about ENLP, Listener & Member Accounts, and more.
                            </div>
                            <div className="QuestionAnswer"> 
                                <Accordion defaultActiveKey="0">    
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        I can’t login to my listener account
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body> 
                                            ELNP is a sponsored online emotional support service platform. It 
                                            connects those in need of emotional support with our network of 
                                            Listeners who have been trained through specialists and want to 
                                            provide compassionate care. Connections to Listeners are private 
                                            conversations initiated on demand and kept anonymous.
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                        I forgot my password
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>  
                                            Active Listening is hearing in a way that exhibits compassion and 
                                            empathy while keeping in mind the importance of anonymity. Our 
                                            listeners are called “CoCo” (your constant companion) who will be all 
                                            ears to ensure you feel valued and heard.
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Want does ELNP mean?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2"> 
                                        <Card.Body>  
                                            Professionals have undergone years of training and testing to earn an 
                                            accredited qualification in their respective fields. Listeners also 
                                            undergo certified training module designed by our professional 
                                            experts to polish their listening and soft skills.
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                        What are Listener Certifications?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3"> 
                                        <Card.Body>   
                                            If you have been a member/listener for less than 2 weeks then you 
                                            can do this from settings. After two weeks you can only change your 
                                            username for valid reasons, you can request a username change 
                                            along with reason by an email on contact@eatluvnpray.org
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                        I am an adult, can I volunteer as a listener for teens? 
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4"> 
                                        <Card.Body>   
                                            If you have been a member/listener for less than 2 weeks then you 
                                            can do this from settings. After two weeks you can only change your 
                                            username for valid reasons, you can request a username change 
                                            along with reason by an email on contact@eatluvnpray.org
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">
                                        How do I modify my profile and settings?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">  
                                        <Card.Body>     
                                            Please write to contact@eatluvnpray.org with your username and 
                                            correct birthday along with any of the following documents:
                                            <div className="mt-2">1) Aadhaar Card</div>
                                            <div>2) Pan Card</div>
                                            <div>3) Driving License</div> 
                                        </Card.Body>
                                        </Accordion.Collapse> 
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="6">
                                        How do I modify my profile and settings?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">   
                                        <Card.Body>     
                                            Please write to contact@eatluvnpray.org with your username and 
                                            correct birthday along with any of the following documents:
                                            <div className="mt-2">1) Aadhaar Card</div>
                                            <div>2) Pan Card</div>
                                            <div>3) Driving License</div>  
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion> 
                            </div>
                      
                      </Tab> */}
                    </Tabs>
                  </div>
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
export default Faq;  


