import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from "../../../core/navAdmin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Deleteicon from "../../../../assets/images/delete_icon.svg";
import ELPViewApiService from '../../../../common/services/apiService';
import { showSuccessToast } from '../../../../common/helpers/Utils';
import { nanoid } from 'nanoid'


function stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

const EditPassQA = () => {
    const history = useHistory();
    const { id , questionID} = useParams();
    const [listPassQA, setListnerPassQA] = useState([]);

    const openViewPassage = () => history.push(`/viewPassQA/${id}`);

    useEffect(() => {
        if (id !== '0') {
            const data = { "count": "10", "offset": "1", "ql_id": questionID }
            ELPViewApiService('superadminget_quesanslistnerdetails', data)
                .then((response) => {
                    console.log("RESPONSE ", response)
                    if (response.data.status === "success") {
                        const data = response.data.data;
                        console.log("DATA ", data);

                        const update = {
                            ls_que_name: data[0].ql_text,
                            ls_correct_answer: data[0].qc_correct_answer,
                            ls_ans: data[0].uc_cat_name.map((answer) => ({ option: answer.qa_options, id: answer.qa_id })),
                            id: data[0].qc_id
                        }
                        setListnerPassQA([update]);
                        console.log("DATA ", update)
                    }
                })
                .catch(err => new Error(`Error in Getting PARA ${err}`))
        }
    }, [id,questionID])

    const onChangeQuestion = (e, editor) => {
        let data = editor.getData();
        const newEdit = [...listPassQA];
        newEdit[0].ls_que_name = data;
        console.log("ON CHANGE ", newEdit)
        setListnerPassQA(newEdit)
    }

    const onChangeAnswer = (editor, index) => {
        let data = editor.getData();
        const newEdit = [...listPassQA];
        newEdit[0].ls_ans[index].option = data;
        console.log("ON CHANGE ", newEdit)
        setListnerPassQA(newEdit)
    }

    const markCorrectAnswer = (index) => {
        const newEdit = [...listPassQA];
        newEdit[0].ls_correct_answer = newEdit[0].ls_ans[index].option;
        setListnerPassQA(newEdit);
    }

    const addAnswer = (index) => {
        const update = {
            option: '',
            id: nanoid(5)
        }
        const newEdit = [...listPassQA];
        newEdit[0].ls_ans.splice(index + 1, 0, update);
        setListnerPassQA(newEdit);
    }

    const deleteAnswer = (index) => {
        const newEdit = [...listPassQA];
        newEdit[0].ls_ans.splice(index);
        setListnerPassQA(newEdit);
    }

    const submitForm = () => {
        const newEdit = listPassQA.map((listner) => {
            const updates = {
                ls_que_name: stripHtml(listner.ls_que_name),
                ls_correct_answer: stripHtml(listner.ls_correct_answer),
                ls_ans: listner.ls_ans.map((answer) => ({ option: stripHtml(answer.option) }))
            }
            return updates;
        })
        
        const data = {
            listner_paragraph_id: id,
            listner_que_ans: newEdit,
            listner_que_id: questionID
        }
        console.log("NEW EDIT ", newEdit , data);
        ELPViewApiService('superadminedit_Listnerqueans', data)
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
                    showSuccessToast(response.data.message)
                    openViewPassage()
                }
            })
            .catch(err => console.log("Error is ", err))
    }

    return (
        <>
            {/* <pre>{JSON.stringify(listPassQA, null, 2)}</pre> */}
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
                                                    <Link to={{ pathname: '/viewPassQA/'.concat(id) }}>Back</Link>
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
                                            listPassQA.length > 0 &&
                                            listPassQA.map((list, index) =>
                                                <div key={list.id}>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="fs20 fw600 col14 questionSet">
                                                            <div>Question. {index + 1} </div>
                                                            {/* <div>
                                                                <Image
                                                                    src={Deleteicon}
                                                                    className="d2 pointer"
                                                                    
                                                                />
                                                            </div> */}
                                                        </Form.Label>

                                                        <CKEditor

                                                            data={list.ls_que_name}
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

                                                            onChange={onChangeQuestion}
                                                            className="inputTyp2"
                                                        />

                                                    </Form.Group>

                                                    {
                                                        list.ls_ans.map((answer, idx) =>
                                                            <>
                                                                <Form.Group className="mb-4">
                                                                    <Form.Label className="fs20 fw600 col14 questionSet ansBg">
                                                                        <div>Answer. {idx + 1} </div>
                                                                        <div>
                                                                            <Image
                                                                                src={Deleteicon}
                                                                                className="d2 pointer"
                                                                                onClick={() => { deleteAnswer(idx) }}
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
                                                                            onChangeAnswer(editor, idx)
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
                                                                                type="checkbox"
                                                                                onChange={() => {
                                                                                    markCorrectAnswer(idx)
                                                                                }}

                                                                                checked={stripHtml(answer.option) === stripHtml(list.ls_correct_answer)}
                                                                            />
                                                                            <Form.Label>
                                                                                Mark As A Correct Answer
                                                                            </Form.Label>
                                                                        </Form.Group>
                                                                    </div>
                                                                </Form>

                                                                <Form.Group className="mb-4">
                                                                    <div className="position-relative">
                                                                        <Button
                                                                            variant="btnTypAdd"
                                                                            type="button"
                                                                            onClick={() => addAnswer(idx)}
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

                                        {/* <Button
                                            variant="btnTypAdd btnSet9"
                                            type="button"
                                            className="inputTyp2 form-control"
                                        >
                                            <span className="col40">
                                                <i className="fa fa-plus"></i>
                                            </span>
                                            <b className="col40 fw500">Add Question</b>
                                        </Button> */}

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

export default EditPassQA;