import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import NavBar from "../../../core/navAdmin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ELPViewApiService from '../../../../common/services/apiService';

const CreateListPassage = () => {
    const [passage, setPassage] = useState('');
    const [passDecribe, setPassDescribe] = useState('');
    const history = useHistory();

    const createPassage = () => {
        const data = { "lp_title": passage, "lp_description": passDecribe };
        ELPViewApiService('superadminadd_listnerparagraphtest',data)
        .then((response)=>{
            console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
                    history.push(`/passageQA/${data.listner_paragraph_id}`)
                }
        })
        .catch(err=>console.log("ERROR ",err));
    }

    
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
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fs20 fw600 col14">
                                                Passage Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="inputTyp2"
                                                name="kt_subheading"
                                                value={passage}
                                                onChange={(e) => { setPassage(e.target.value) }}
                                                maxLength={150}
                                            />

                                            <div className="col27 fs14 fw400 mt-2 error">
                                                {/* {errors.kt_subheading} */}
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="fs20 fw600 col14">
                                                Passage Description
                                            </Form.Label>
                                            <CKEditor
                                                className="inputTyp2"
                                                config={{
                                                    height: 500,
                                                    maxCharCount: 250,
                                                    toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Link']
                                                }}
                                                editor={ClassicEditor}
                                                data={passDecribe}

                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log('Editor is ready to use!', editor);
                                                }}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setPassDescribe(data);
                                                }}
                                            />

                                        </Form.Group>
                                    </Form>

                                    <div className="text-left pro_cbtn">
                                        <Button
                                            type="button"
                                            className="btnTyp5"
                                            onClick={createPassage}
                                        >
                                            Next
                                        </Button>
                                    </div>

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