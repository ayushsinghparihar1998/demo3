import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav"; 
import Footer from "../core/footer"; 
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadDetail from "../../assets/images/upload_detail.svg"; 

class ProfessinalBlogCreate extends Component {                                         
    render() {  
        return (
            <div className="page__wrapper innerpage"> 
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout adminProfessinal pt-4 pb-5">  
                    <Container>
                        <Row> 
                            <Col md={3} className="pr-1">
                                <div className="adminsidebar">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> USER LISTING</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">  
                                            <div className=""> 
                                                <div className="fs14 col23 fw500"> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom"> 
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> CATEGORY</div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </Col>  
                            <Col md={9} className="pl-1">             
                                <div className="corporateMember layout_box">     
                                     <div className="fs28 col10 fw600">Create Blog</div>
                                     <div className="col14 fs16 fw300 mt-1 mb-4">        
                                          Lorem Ipsum is simply dummy and typesetting industry.
                                     </div>
                                        <Form> 
                                            <Form.Group> 
                                            <Form.Label className="fs20 fw600 col14">    
                                                Upload Blog Image
                                            </Form.Label> 
                                            {/* <div className="mt-1 mb-3 imgSetProfile">         
                                                <Image src={UploadDetail} className="" /> 
                                            </div> */}
                                            <Form.File
                                                id="exampleFormControlFile1"
                                                className="inputTyp2"
                                            /> 
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Title of the Blog
                                                </Form.Label>
                                                <Form.Control type="text" className="inputTyp2" /> 
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Description 
                                                </Form.Label>
                                                <CKEditor
                                                    config={{
                                                    height: 500,
                                                    }}
                                                    editor={ClassicEditor}
                                                    // data="<p>Hello from CKEditor 5!</p>"

                                                    onReady={(editor) => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log("Editor is ready to use!", editor); 
                                                    }}
                                                    onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    this.setState({ u_bio: data });
                                                    }}
                                                    onBlur={(event, editor) => {
                                                    console.log("Blur.", editor);
                                                    }}
                                                    onFocus={(event, editor) => {
                                                    console.log("Focus.", editor);
                                                    }}
                                                />            
                                            </Form.Group> 

                                            <Form.Group> 
                                                <Form.Label className="fs20 fw600 col14">
                                                    Select Category
                                                </Form.Label>
                                                <Row>
                                                    <Col md={4}>
                                                        <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="EAT"
                                                            className="checkboxTyp1"
                                                            id="eatone" 
                                                        />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="LUV"
                                                            className="checkboxTyp1"
                                                            id="luvone" 
                                                        />
                                                        </Form.Group> 
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="PRAY" 
                                                            className="checkboxTyp1"
                                                            id="prayone"  
                                                        />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form.Group> 

                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Blog written by
                                                </Form.Label>
                                                <Form.Control type="text" className="inputTyp2" /> 
                                            </Form.Group>

                                            <Button variant="primary btnTyp5 mt-4" type="submit">
                                                create
                                            </Button> 
                                         </Form>  
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

export default ProfessinalBlogCreate;



