import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import NavBar from "../../../core/navAdmin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Deleteicon from "../../../../assets/images/delete_icon.svg";
import ELPViewApiService from '../../../../common/services/apiService';
import { showSuccessToast } from '../../../../common/helpers/Utils';
import { nanoid } from 'nanoid'
import ValidatePassageQA from './validatePassageQA';

function stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

const EMPTY_QA = {
    ls_que_name: '',
    ls_correct_answer: "",
    ls_ans: [
        {
            option: '',
            id: nanoid(5)
        }
    ],
    id: nanoid(5)
}

const PassageQA = () => { 
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const [listnerQA, setListnerQA] = useState([EMPTY_QA, EMPTY_QA]);
    const [errorsQA, setErrorsQA] = useState([EMPTY_QA, EMPTY_QA]);
    const goback = () => history.push('/admin',{state : location.state});

    const addAnswer = (index) => {
        const answer = EMPTY_QA.ls_ans;
        let newEdit = [...listnerQA];
        newEdit[index].ls_ans.push(answer[0]);
        setListnerQA(newEdit);
        setErrorsQA(null);
    }

    const deleteAnswer = (Qindex, Aindex) => {
        listnerQA[Qindex].ls_ans.splice(Aindex, 1);
        if (String(Aindex) === listnerQA[Qindex].ls_correct_answer) {
            listnerQA[Qindex].ls_correct_answer = ''
        }
        const newEdit = listnerQA.map((listner, i) => {
            return Qindex === i ? ({
                ...listner,
                ls_correct_answer: listner.ls_correct_answer,
                ls_ans: listner.ls_ans
            }) : listner
        })
        setListnerQA(newEdit);
        setErrorsQA(null);
    }

    const deleteQuestion = (index) => {
        listnerQA.splice(index, 1);
        const newEdit = listnerQA.map((listner, i) => {
            return index === i ? ({
                ...listner
            }) : listner
        })
        setListnerQA(newEdit);
        setErrorsQA(null);
    }

    const addQuestion = () => {
        let newEdit = [...listnerQA];
        newEdit.push(EMPTY_QA);
        setListnerQA(newEdit);
        setErrorsQA(null);
    }

    const markCorrectAnswer = (index, idx) => {
        const newEdit = listnerQA.map((listner, i) => {
            return index === i ? ({
                ...listner,
                ls_correct_answer: listner.ls_ans[idx].option
            }) : listner
        })
        setListnerQA(newEdit);

    }

    const enterQA = (editor, index) => {
        let data = editor.getData();
        const newEdit = listnerQA.map((listner, i) => {
            return index === i ? ({
                ...listner,
                ls_que_name: data
            }) : listner
        })
        setListnerQA(newEdit);

    }

    const enterAnswer = (editor, Qindex, Aindex) => {
        let data = editor.getData();
        const newEdit = listnerQA.map((listner, i) => {
            return Qindex === i ? ({
                ...listner,
                ls_ans: listner.ls_ans.map((answer, i) => {
                    return Aindex === i ? ({
                        ...answer,
                        option: data
                    }) : answer
                })
            }) : listner
        })
        setListnerQA(newEdit);

    }


    const submitForm = () => {
        const newEdit = listnerQA.map((listner) => {
            const updates = {
                ls_que_name: stripHtml(listner.ls_que_name),
                ls_correct_answer: stripHtml(listner.ls_correct_answer),
                ls_ans: listner.ls_ans.map((answer) => ({ option: stripHtml(answer.option) }))
            }
            return updates;
        })
        const validate = ValidatePassageQA(newEdit);
        if (Array.isArray(validate)) {
            setErrorsQA(validate);
        }
        else {
            const data = {
                listner_paragraph_id: id,
                listner_que_ans: newEdit
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
    }

    const isAnswerChecked = (answer , listner ) => {
        if(listner.ls_correct_answer === '') return false;
        else return stripHtml(answer.option) === stripHtml(listner.ls_correct_answer)
    }

    return (
        <>
            {/* <pre>{JSON.stringify(listnerQA, null, 2)}</pre>
            <pre>{JSON.stringify(errorsQA, null, 2)}</pre> */}
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
                                                <div className="fs14 col28 fw500" onClick={goback}>
                                                    <Link >Back</Link>
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
                                        {
                                            listnerQA.map((listner, index) =>
                                                <div key={listner.id}>
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
                                                            key={listner.id}
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
                                                                enterQA(editor, index)
                                                            }}
                                                            className="inputTyp2"
                                                        />
                                                        {
                                                            !!errorsQA &&
                                                            <div className="col27 fs14 fw400 mt-2 error">
                                                                {errorsQA[index].ls_que_name}
                                                            </div>
                                                        }
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
                                                                                    deleteAnswer(index, idx)
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </Form.Label>


                                                                    <CKEditor
                                                                        key={answer.id}
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
                                                                            enterAnswer(editor, index, idx)
                                                                        }}
                                                                        className="inputTyp2"
                                                                    />

                                                                    {
                                                                        !!errorsQA &&
                                                                        <div className="col27 fs14 fw400 mt-2 error">
                                                                            {errorsQA[index].ls_ans[idx].option}
                                                                        </div>
                                                                    }

                                                                </Form.Group>

                                                                <Form className="p_form mb-4">
                                                                    <div className="checkCategory">
                                                                        <Form.Group
                                                                            controlId="formBasicCheckbox1"
                                                                            className="row"
                                                                        >
                                                                            <Form.Check
                                                                                id={answer.id}
                                                                                key={answer.id}
                                                                                type="checkbox"
                                                                                onChange={() => {
                                                                                    markCorrectAnswer(index, idx)
                                                                                }}

                                                                                checked={isAnswerChecked(answer , listner)}
                                                                            />
                                                                            <Form.Label>
                                                                                Mark As A Correct Answer
                                                                            </Form.Label>
                                                                        </Form.Group>
                                                                        {
                                                                            !!errorsQA &&
                                                                            <div className="col27 fs14 fw400 mt-2 error">
                                                                                {errorsQA[index].ls_correct_answer}
                                                                            </div>
                                                                        }
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
                                            onClick={() => { addQuestion() }}
                                        >
                                            <span className="col40">
                                                <i className="fa fa-plus"></i>
                                            </span>
                                            <b className="col40 fw500">Add Question</b>
                                        </Button>

                                    </div>
                                    {
                                        listnerQA && listnerQA.length > 0 &&
                                        <Button
                                            variant="primary btnTyp5 mt-4"
                                            type="button"
                                            onClick={() => { submitForm() }}
                                        >
                                            Save
                                        </Button>
                                    }
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
