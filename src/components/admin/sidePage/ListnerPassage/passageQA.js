import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from "../../../core/navAdmin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Deleteicon from "../../../../assets/images/delete_icon.svg";
import ELPViewApiService from '../../../../common/services/apiService';
import { showSuccessToast } from '../../../../common/helpers/Utils';

const EMPTY_QA = {
    ls_que_name: '',
    ls_correct_answer: "",
    ls_ans: [
        {
            option: ''
        }
    ]
}

const PassageQA = () => {
    const history = useHistory();
    const { id } = useParams();
    const [listnerQA, setListnerQA] = useState([EMPTY_QA, EMPTY_QA]);


    const addAnswer = (index) => {
        console.log("BEFORE ,", listnerQA[index].ls_ans)
        const answer = EMPTY_QA.ls_ans;
        let newEdit = [...listnerQA];
        newEdit[index].ls_ans.push(answer[0]);
        console.log("STATE ", index, listnerQA[index].ls_ans[index], answer, listnerQA[index].ls_ans)
        setListnerQA(newEdit);
    }

    const deleteAnswer = (index) => {
        let newEdit = [...listnerQA];
        newEdit[index].ls_ans.splice(index, 1);
        console.log("STATE ", listnerQA)
        setListnerQA(newEdit);
    }

    const deleteQuestion = (index) => {
        let newEdit = [...listnerQA];
        newEdit.splice(index);
        console.log("STATE ", listnerQA)
        setListnerQA(newEdit);
    }

    const addQuestion = () => {
        let newEdit = [...listnerQA];
        newEdit.push(EMPTY_QA);
        console.log("STATE ", listnerQA)
        setListnerQA(newEdit);
    }

    const markCorrectAnswer = (index , idx) => {
        let newEdit = [...listnerQA];
        newEdit[index].ls_correct_answer = newEdit[index].ls_ans[idx].option;
        console.log("STATE ", listnerQA)
        setListnerQA(newEdit);
    }

    const submitForm = () => {
        const data = {
            listner_paragraph_id: id,
            listner_que_ans: listnerQA
        }
        ELPViewApiService('superadminadd_Listnerqueans', data)
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
                    showSuccessToast(response.data.message)
                    history.push('/admin');
                }
            })
            .catch(err => console.log("Error is ", err))
    }
    console.log("STATE ", listnerQA)
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
                                    <div className="fs28 col10 mb-4">Passage Q&A</div>
                                    <div className="QuestionListings">
                                        {console.log("SD", listnerQA)}
                                        {
                                            listnerQA.map((listner, index) =>
                                                <div key={"jnka".concat(index)}>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="fs20 fw600 col14 questionSet">
                                                            <div>Question. {index + 1} </div>
                                                            <div>
                                                                <Image
                                                                    src={Deleteicon}
                                                                    className="d2 pointer"
                                                                    onClick={() => {
                                                                        deleteQuestion(index)
                                                                    }}
                                                                />
                                                            </div>
                                                        </Form.Label>

                                                        <CKEditor
                                                            key={listner.ls_que_name.concat("ds")}
                                                            data={listner.ls_que_name}
                                                            config={{
                                                                height: 500,
                                                                toolbar: [
                                                                    "bold",
                                                                    "italic",
                                                                    "bulletedList",
                                                                    "numberedList",
                                                                    "blockQuote",
                                                                    "Link",
                                                                ],
                                                            }}
                                                            editor={ClassicEditor}
                                                            onReady={(editor) => {
                                                                console.log(
                                                                    "Editor is ready to use!",
                                                                    editor
                                                                );
                                                            }}

                                                            onChange={(event, editor) => {
                                                                let data = editor.getData();
                                                                listnerQA[index].ls_que_name = data;
                                                                setListnerQA(listnerQA)
                                                            }}
                                                            className="inputTyp2"
                                                        />

                                                    </Form.Group>

                                                    {
                                                        listner.ls_ans.map((answer, idx) =>
                                                            <>
                                                                <Form.Group className="mb-4">
                                                                    <Form.Label className="fs20 fw600 col14 questionSet ansBg">
                                                                        <div>Answer. {index + 1}</div>
                                                                        <div>
                                                                            <Image
                                                                                src={Deleteicon}
                                                                                className="d2 pointer"
                                                                                onClick={() => {
                                                                                    deleteAnswer(index)
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </Form.Label>


                                                                    <CKEditor
                                                                        key={answer.option}
                                                                        data={answer.option}
                                                                        config={{
                                                                            height: 500,
                                                                            toolbar: [
                                                                                "bold",
                                                                                "italic",
                                                                                "bulletedList",
                                                                                "numberedList",
                                                                                "blockQuote",
                                                                                "Link",
                                                                            ],
                                                                        }}
                                                                        editor={ClassicEditor}
                                                                        onReady={(editor) => {
                                                                            console.log(
                                                                                "Editor is ready to use!",
                                                                                editor
                                                                            );
                                                                        }}
                                                                        onChange={(event, editor) => {
                                                                            let data = editor.getData();
                                                                            listnerQA[index].ls_ans[idx].option = data;
                                                                            setListnerQA(listnerQA)
                                                                        }}
                                                                        className="inputTyp2"
                                                                    />


                                                                </Form.Group>

                                                                <Form className="p_form mb-4">
                                                                    <div className="checkCategory">
                                                                        <Form.Group
                                                                            controlId="formBasicCheckbox1"
                                                                            className="row"
                                                                        >
                                                                            <Form.Check
                                                                                id={idx}
                                                                                key={idx}
                                                                                type="checkbox"
                                                                                // className={`checkthree ${item.pbc_status == "1" ? "active" : ""
                                                                                //     }`}
                                                                                label={"Mark As A Correct Answer"}
                                                                                onChange={()=>{
                                                                                    markCorrectAnswer(index,idx)
                                                                                }}
                                                                                // name={item.pbc_name}
                                                                                // onChange={(e) => { }}
                                                                                // value={item.pbc_id}
                                                                                // checked={item.pbc_status == "1"}
                                                                            />
                                                                        </Form.Group>
                                                                    </div>
                                                                </Form>

                                                                <Form.Group className="mb-4">
                                                                    <div className="position-relative">
                                                                        <Button
                                                                            variant="btnTypAdd"
                                                                            type="button"
                                                                            onClick={() => {
                                                                                addAnswer(index)
                                                                            }}
                                                                        >
                                                                            <span>
                                                                                <i className="fa fa-plus"></i>
                                                                            </span>{" "}
                                                                            Add Answer
                                                                        </Button>
                                                                    </div>
                                                                </Form.Group>
                                                            </>
                                                        )

                                                    }
                                                </div>
                                            )
                                        }

                                        <Button
                                            variant="btnTypAdd btnSet9"
                                            type="button"
                                            className="inputTyp2 form-control"
                                            onClick={addQuestion}
                                        >
                                            <span className="col40">
                                                <i className="fa fa-plus"></i>
                                            </span>
                                            <b className="col40 fw500">Add Question</b>
                                        </Button>

                                    </div>
                                    <Button
                                        variant="primary btnTyp5 mt-4"
                                        type="button"
                                        onClick={submitForm}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default PassageQA;
