import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from "../../../core/navAdmin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ELPViewApiService from '../../../../common/services/apiService';


const CreateListPassage = () => {
    const [passage, setPassage] = useState('');
    const [passDecribe, setPassDescribe] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const createPassage = () => {
        let data , type;
        if(id === '0'){
            data = { "lp_title": passage, "lp_description": passDecribe };
            type = 'superadminadd_listnerparagraphtest';
        }
        else{
            data = { "lp_id" : id, "lp_title": passage, "lp_description": passDecribe };
            type = 'superadminedit_listnerparagraphtest';
        }
        ELPViewApiService(type, data)
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
                    let passID = id !== '0' ? id : data.listner_paragraph_id
                    if(id==='0')
                    history.push(`/passageQA/${passID}`)
                    else
                    history.push(`/viewPassage/${id}`)
                }
            })
            .catch(err => console.log("ERROR ", err));
    }

    useEffect(() => {
        if (id !== "0") {
            ELPViewApiService('superadminget_detailslistnerparagraphtest', { "lp_id": id })
                .then((response) => {
                    console.log("RESPONSE ", response)
                    if (response.data.status === "success") {
                        const data = response.data.data;
                        console.log("DATA ", data[0]);
                        setPassage(data[0].lp_title);
                        setPassDescribe(data[0].lp_description);
                    }
                })
                .catch(err => new Error(`Error in Getting PARA ${err}`))
        }
    }, [id])

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
                                    <div className="fs28 col10 mb-4">{id === "0" ? 'Create' : 'Update'}  Passage</div>
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
                                            {id === '0' ? 'Next' : 'Save'}
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