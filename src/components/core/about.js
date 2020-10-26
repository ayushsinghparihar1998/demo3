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
import { NavLink } from 'react-router-dom';
import Aboutlogo from '../../assets/images/about_logo.jpg';
import Aboutprofileone from '../../assets/images/Priyanka-Wadhera.jpg'; 
import Aboutprofiletwo from '../../assets/images/Manoj-Agrawal.jpg';
import Aboutprofilethree from '../../assets/images/Sonia-Arora-Sood.jpg'; 

class About extends Component {          
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
              <Col md={12} lg={12}> 
                <div className="myprofile terms aboutpage">  
                  <div className="text-center mb-5"> 
                      <Image src={Aboutlogo} alt="" className="mx-w" /> 
                  </div>     
                  {/* <div className="fs36 fw600 col29">Terms of Service</div> */}
                  {/* <div className="fs20 fw600 col29 mt-2 mb-2">Welcome to Eat Luv N Pray Foundation!</div> */}
                  <p>Eat Luv N Pray Pvt. Ltd. is an EPO (Emotion Process Outsourcing) platform promising anonymity at all times. It is by far the largest virtual ‘free listening platform’ in the country making mental health a core to cure any ailment and issues by providing research-based emotional support over the phone, video discussions, forums, and social media. </p>

                  <p>It aims to touch and elevate overall wellbeing of at least 10 million lives and help generate livelihood for the inclusive section. It also supports NGO’s in likes of ELNP Foundation by providing virtual leased space on its platform and help them function with ease. It provides preventive care to its members by listening and simply enabling users to vent out their innermost voice with the sure promise of anonymity in order to eradicate evils of society and avoid acute mental illnesses. </p>

                  <div className="fs32 fw600 col29 mt-2 mb-2">Vision – Eat Luv N Pray Pvt. Ltd.</div>
                  <p>Eat Luv N Pray will become the best aggregator platform offering a well crafted range of services  in core areas of Eat Luv N Pray offering alternate medicine solutions. It will help masses understand 7 dimensions of wellness and cover entire cycle through their Eat Luv N Pray journey.</p>

                  <p>Will take care of various NGO’s, it’s employees, stakeholders and customers by picking services which in some manner contribute to a bigger social cause.</p>
                 
                  <div className="fs32 fw600 col29 mt-2 mb-2">Mission – Eat Luv N Pray Pvt. Ltd.</div>
                  <p>Will provide a focussed but a widely spread platform to conscious service providers, specially abled people, LGBTQ, NGO’s, children of criminals, prostitutes, acid attack survivors etc. to help them create livelihood for themselves.</p>
                  <p>Will offer services globally in Eat Luv n Pray areas to provide holistic wellbeing in daily lives of people.</p> 

                  <div className="fs32 fw600 col29 mt-4 mb-5 text-center">Founders</div> 
                  <div className="detail_listing mb-3"> 
                        <Row>
                            <Col lg={2} md={3} xs={12}>
                                    <Image src={Aboutprofileone} />
                            </Col>
                            <Col lg={9} md={9}> 
                                    <div className="fs22 fw600 col1 mb-3">Priyanka Wadhera</div> 
                                    <p className="fs16">16 years of rich experience in various fields like aviation, SAAS, customer experience, Product Organization. Certain personal experiences bring about a new passion for Mental Health and feels like now is my time to give back to the society by making people know the benefits of good health and providing them with resources to achieve it. Priyanka’s educational qualifications are from DU and IIM Lucknow.</p>
                            </Col>
                        </Row>
                  </div>

                  <div className="detail_listing mb-3"> 
                        <Row>
                            <Col lg={2} md={3} xs={12}>
                                    <Image src={Aboutprofiletwo} />
                            </Col>
                            <Col lg={9} md={9}> 
                                    <div className="fs22 fw600 col1 mb-3">Manoj Agrawal</div> 
                                    <p className="fs16">30 years of rich experience in IT including service and product IT companies of all sizes in India. Manoj is an innovator and has a history of product championing and technology development.  Manoj holds Engineering graduate and post-graduate degrees from IITs (Bombay and Delhi respectively) and his secondary education from Scindia School, Gwalior.</p>
                            </Col>
                        </Row>
                  </div>

                  <div className="detail_listing mb-3"> 
                        <Row>
                            <Col lg={2} md={3} xs={12}> 
                                    <Image src={Aboutprofilethree} /> 
                            </Col>
                            <Col lg={9} md={9}> 
                                    <div className="fs22 fw600 col1 mb-3">Sonia Arora Sood</div> 
                                    <p className="fs16">Overall 18 years of experience in Sales and Marketing along with 10 years of Entrepreneurial experience in the field of Art and Culture which brings about great passion for Psychology and concept of holistic wellness.  Sonia’s educational experience is from Berlin University and Sotheby's London.
                                    </p>  
                            </Col>
                        </Row>
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
export default About; 


