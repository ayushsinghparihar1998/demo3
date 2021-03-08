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
                    {/* <Tabs defaultActiveKey="request">  
                      <Tab eventKey="request" title="General FAQ">  */}
                        <div className="fw400 col29 fs28 text-center mb-2">  
                            General FAQ
                        </div>
                        <div className="fs20 fw400 col27 mb-5">   
                            FAQ about ELNP, Listener & Member Accounts, and more.
                        </div>
                        <div className="QuestionAnswer"> 
                            <Accordion defaultActiveKey="8">  
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="8">
                                        What is Eat Luv N Pray Pvt. Ltd.?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="8">
                                    <Card.Body> 
                                        Aiming to create a ”Happy Planet” through Eating right, Loving better and Praying to the best of our 
    capability, we are a lifestyle management organisation that runs solely on the concept of Eat, Love and 
    Pray since we totally believe in the concept of bringing these three together to create a healthier and 
    happier place to live in. <br />
    We use active listening as the base to understand the client pain points and work around them to create 
    a curated program for them using experts in the respective fields.
                                   

                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="9">
                                        I'm not sure which plan is best for me. Can I talk to a Coach to figure out the best plan for me?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="9">
                                    <Card.Body> 
                                    Sure. You can chat with one of our Senior Coaches who will understand your body type, lifestyle, cuisine 
preferences, weight gain history, medical conditions (if any) & can suggest the best suited plan for you.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="10">
                                        Do I get to select the coach or does ELNP assign me one?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="10"> 
                                    <Card.Body> 
                                    You will be assigned coaches as per your needs after assessment. If after sometime you want to change 
a professional for any reason, you can put in a request. 
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                        What are ELNP Kits?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="11">
                                    <Card.Body> 
                                        ELNP Kits are special care packages that you can get for yourself or gift them to a loved one.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* changes   */}
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
                                        listeners will be all 
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
                                {/* <Card>
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
                                </Card> */}
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
                                    I entered the wrong birthday so my age group is incorrect, what do I do?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">  
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
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                    How do I modify my profile and settings?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5"> 
                                    <Card.Body>   
                                    Click on your profile pic in the top right to open your account drop 
                                    down menu and select My Settings. Here you can add a little info 
                                    about yourself and a custom photo. You can also change your email 
                                    notification settings and update your password among various other 
                                    things from My Settings .
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                    How do I connect with a Listener?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6"> 
                                    <Card.Body>   
                                    You can connect to a listener in two ways.
                                    <div className="mb-2"><strong>Connect Now:</strong> Click the connect now button on the top left of your screen. 
                                    It will ask you to either sign up as a member or log into your existing 
                                    member account. Please click what applies, once you have 
                                    registered/logged in, your request for a listener will be placed and a 
                                    listener will pick up your request.</div>
                                    <div className="mb-1"> 
                                    If you are already logged in as a member then you can find the ““Need 
                                    Someone to talk to” button on top center of the page. Click on the button 
                                    and select a Category in which you are seeking support. You will then be 
                                    connected to an available listener.</div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                    My Listener is inappropriate, what do I do?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="7">  
                                    <Card.Body>   
                                    <div className="mb-2">
                                        Please leave a written review for your listener. You can rate & review 
                                        the listener at the end of the chat. We use your written reviews to 
                                        give listeners direct feedback on how to improve. Please keep your 
                                        reviews honest and thoughtful. We are all here to grow together. You 
                                        can use one of the following options to control contact with the 
                                        listener.
                                    </div>
                                    <div className="mb-2"><strong>Block:</strong> Cut off communication between you and a listener.</div>
                                    <div className="mb-1"><strong>Report Abuse:</strong> Report the listener for violating terms of service of the website with the appropriate reason. Please use this only if you feel this listener could be harmful for other members as well.</div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="12">
                                      My question is not listed here
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="12">   
                                    <Card.Body> 
                                        Please reach out to us at support@eatluvnpray.com
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                        </div>
                      
                      {/* </Tab> */}

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
                    {/* </Tabs> */}
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


