import React from 'react';
import { Container, Row, Col , Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from "../../core/navAdmin";

const CreateListPassage = () => {
    return (
        <>
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar />
                </div>
                <div className="profile_layout adminProfessinal addKits pt-4 pb-5">
                    <Container>
                        <Row>
                            <Col md={4} lg={3} className="pr-1">
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
                                <div className="corporateMember subscriptionplan">
                                    <div className="fs28 col10 mb-4">Create Passage</div>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label className="fs20 fw600 col14">
                                                Upload
                                            </Form.Label>

                                            <Form.Group>
                                                <Form.File
                                                    id="exampleFormControlFile1"
                                                    label="Example file input"
                                                    className="inputTyp2"
                                                />

                                            </Form.Group>
                                            <div className="col27 fs14 fw400 mt-2 error">
                                            </div>
                                        </Form.Group>

                                        <Button
                                            variant="primary btnTyp5 mt-4"
                                            type="button"
                                        >
                                            UPLOAD
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default CreateListPassage;