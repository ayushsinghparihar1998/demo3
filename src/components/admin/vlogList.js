import React, { Component } from "react";

import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
  Modal
} from "react-bootstrap"; 
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import Editicon from "../../assets/images/edit_icon.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import VideoIcon from "../../assets/images/videoIcon.png";
import BlogProcessFive from "../../assets/images/blog4.png"; 


class VlogList extends Component {     
  constructor() {
    super();
    this.state = {
      setShow: false,
      show: false,
      show3: false,
      
    };
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  
  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => { 
    this.setState({ show: false });
  };
  render() {   
    // const {​show}​ = this.state
    return (
      <div className="page__wrapper innerpage">  
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal VlogMain pt-4 pb-5">     
          <Container>
            <Row>
              <Col md={3} className="pr-1">
                <div className="adminsidebar">
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Quick Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom"> 
                      <div>
                        <div className="fs14 col28 fw500">
                          <Link to={{ pathname: `/admin` }}>Back</Link> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              
              <Col md={8} lg={9} className="pl-1">
                <div className="professor_search listBlogs">  
                  <Row className="mb-1">
                    <Col md={8}>
                      <div className="fs22 fw600 col10"> 
                          Vlog Listing
                      </div>
                      <div className="fw300 fs16 col14">
                        {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-right pro_cbtn">
                        <Button
                          type="button"
                          className="btnTyp5" 
                        >
                          create VLOG 
                        </Button>
                      </div>
                    </Col>
                  </Row>
                        <Form className="p_form mb-4">
                            <div className="checkCategory"> 
                                <Form.Group
                                    controlId="formBasicCheckbox1"
                                    className="row"
                                    >
                                <Form.Check 
                                    type="checkbox"
                                    className="checkthree active" 
                                    label="All"
                                    name="all"
                                    checked=""  
                                    />
                                <Form.Check 
                                    type="checkbox"
                                    className="checkthree"  
                                    label="Featured" 
                                    name="all"
                                    checked=""  
                                />             
                              </Form.Group>
                            </div>
                        </Form>
                </div>
                
                      <div className="adminlistener vlogListadmin p-4 mb-3">
                        <div className="d-flex text-left">
                          <Col md={2}>
                              <div className="elpVideoblog"> 
                                <Image
                                  src={BlogProcessFive} 
                                  className="iconVideomain"
                                /> 
                              <div>  
                                  <Image
                                    src={VideoIcon} 
                                    className="iconVideo" 
                                    onClick={this.handleShow}  
                                  /> 
                                <iframe  
                                  width="100%"
                                  height="100"
                                  // src={this.state.url}
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>

                              </div>
                            </div>
                          </Col> 

                          <Col md={10}> 
                          <div className="w-100">
                            <div className="d-flex justify-content-between">
                              <div className="w-100">
                                <div className="d-flex">
                                  <div className="col1 fw600 fs18 pb-1">
                                      Child Welfare
                                  </div>
                                  <div className="d-flex ml-auto">
                                    <span className="mr-3">
                                      <Image
                                        src={Editicon}
                                        alt=""
                                        
                                      />
                                    </span>
                                    <span>
                                      <Image
                                        src={Deleteicon}
                                        alt=""
                                        
                                      />
                                    </span>
                                  </div>
                                </div>

                                {/* <div className="mb-1"> 
                                  <span className="fs16 fw400 col14"> 
                                    <Image
                                      src={blogclock} 
                                      className="wSet-20 mr-2"
                                    />
                                     11 Minute read
                                  </span>
                                </div> */}

                                <div className="fs16 fw400 col14 pb-1 e_detai mt-1">
                                  <strong className="fw600">
                                      Description: 
                                  </strong>
                                  <span className="fs15">
                                       lorem dummy content Lorem Ipsum is simply dummy text
                                        of the printing and typesetting industry. 
                                        <a className="col40 fw15 fw500">Read more...</a>
                                  </span>  
                                </div>

                              </div>
                            </div>
                          </div>
                          </Col>
                        </div>
                      </div>

                      <div className="adminlistener vlogListadmin p-4 mb-3">
                        <div className="d-flex text-left">
                          <Col md={2}>
                              <div className="elpVideoblog"> 
                                <Image
                                  src={BlogProcessFive} 
                                  className="iconVideomain"
                                /> 
                              <div>  
                                  <Image
                                    src={VideoIcon} 
                                    className="iconVideo" 
                                    onClick={this.handleShow}  
                                  /> 
                                <iframe  
                                  width="100%"
                                  height="100"
                                  // src={this.state.url}
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>

                              </div>
                            </div>
                          </Col> 

                          <Col md={10}> 
                          <div className="w-100">
                            <div className="d-flex justify-content-between">
                              <div className="w-100">
                                <div className="d-flex">
                                  <div className="col1 fw600 fs18 pb-1">
                                      Child Welfare
                                  </div>
                                  <div className="d-flex ml-auto">
                                    <span className="mr-3">
                                      <Image
                                        src={Editicon}
                                        alt=""
                                        
                                      />
                                    </span>
                                    <span>
                                      <Image
                                        src={Deleteicon}
                                        alt=""
                                        
                                      />
                                    </span>
                                  </div>
                                </div>

                                {/* <div className="mb-1"> 
                                  <span className="fs16 fw400 col14"> 
                                    <Image
                                      src={blogclock} 
                                      className="wSet-20 mr-2"
                                    />
                                     11 Minute read
                                  </span>
                                </div> */}

                                <div className="fs16 fw400 col14 pb-1 e_detai mt-1">
                                  <strong className="fw600">
                                      Description: 
                                  </strong>
                                  <span className="fs15">
                                       lorem dummy content Lorem Ipsum is simply dummy text
                                        of the printing and typesetting industry. 
                                        <a className="col40 fw15 fw500">Read more...</a>
                                  </span>  
                                </div>

                              </div>
                            </div>
                          </div>
                          </Col>
                        </div>
                      </div>  
              </Col>
            

            </Row>
          </Container>
        </div>
        <Footer />

      {/* modal start */}
      {/* <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button> */} 

      <Modal show={this.state.show} onHide={this.handleClose} className="VlogBlogModal">                   
        <Modal.Header closeButton>    
        </Modal.Header>
        <Modal.Body>
        <div className="elpVideoblog">      
            <Image
              src={BlogProcessFive} 
              className="iconVideomain"
            /> 
          <div>  
              <Image
                src={VideoIcon} 
                className="iconVideo" 
                onClick={this.handleShow}  
              /> 
            <iframe  
              width="100%"
              height="400"
              // src={this.state.url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

          </div>
        </div>
         </Modal.Body> 
      </Modal>
      {/* modal end */}

      </div>
    );
  }
}

export default VlogList;  



