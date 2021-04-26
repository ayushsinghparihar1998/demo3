import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Image,
    Form,
    Modal,
} from "react-bootstrap";
import Alerts from "../../assets/images/alerts.png";
import CrossTwo from "../../assets/images/crosstwo.png";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import ELPViewApiService from "../../common/services/apiService";
import Slider from "react-rangeslider";
import { useHistory, useParams } from 'react-router';
import { showErrorMessage, showSuccessToast } from '../../common/helpers/Utils';

// {
// "listner_paragraph_id":"1",
// "lr_no_attend_que":2,
// "lr_skip_que":"",
// "lr_submit":[
// {"que_id":"25","ans_id":"34"},
// {"que_id":"27","ans_id":"39"}]
//     }
const ListnerPassageTest = (props) => {
    const { testId } = useParams();
    const [testData, setTestData] = useState();
    const [showQuesAns, setShowQuesAns] = useState({ start: 0, end: 5, attempted_ques: 0 });
    const [submitForm, setForm] = useState({
        "listner_paragraph_id": testId,
        "lr_no_attend_que": 0,
        "lr_skip_que": "",
        "lr_submit": []
    });
    const history = useHistory();
    const [showSumbitPop, setSubmitPop] = useState(false);

    const showSubmitPopUp = () => setSubmitPop(true);
    const closeSubmitPopUp = () => setSubmitPop(false);

    useEffect(() => {
        ELPViewApiService('getquesans_listnerlist', { count: 10, offset: 1, listner_paragraph_id: testId })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    setTestData(data.listing);
                    // setTestData(data.listener_paragraph_test[0]);
                }
            })
            .catch((err) => new Error(`Error occured because ${err}`))
    }, [testId]);

    const pageHandle = (key) => {
        let start = showQuesAns.start;
        let end = showQuesAns.end;
        if (key === "next") {
            start = start + 6;
            end = end + 6;
        }
        if (key === "prev") {
            start = start - 6;
            end = end - 6;
        }
        setShowQuesAns({ start: start, end: end, attempted_ques: showQuesAns.attempted_ques });
    };

    const giveAnswer = (quesID, answerID, quesIndex, ansIndex) => {
        // {"que_id":"25","ans_id":"34"}
        const newEdit = testData.map((test, i) => {
            return quesIndex === i ? ({
                ...test,
                uc_cat_name: test.uc_cat_name.map((answer, i) => {
                    return ansIndex === i ? ({
                        ...answer,
                        flag: true
                    }) : ({ ...answer, flag: false })
                })
            }) : test
        })
        const lr_submit = { que_id: quesID, ans_id: answerID };
        let submit = submitForm;
        submit.lr_submit[quesIndex] = lr_submit;
        submit.lr_no_attend_que = submit.lr_submit.filter(function (el) {
            return el != null;
        }).length;
        submit.lr_skip_que = testData.length - submit.lr_no_attend_que;
        setForm(submit);
        setTestData(newEdit);
    }

    const submitTest = () => {
        if (submitForm.lr_submit.length > 0)
            ELPViewApiService('submit_listnerTest', submitForm)
                .then((response) => {
                    console.log("RESPONSE", response);
                    if (response.data.status === 'success') {
                        showSuccessToast(response.data.message);
                        showSubmitPopUp();
                    }
                })
                .catch(err => new Error(`Error Occured is ${err}`));
        else
            showErrorMessage('Give Atleast 1 Answer')
    }

    const endPopUp = () => {
        history.push('/');
        closeSubmitPopUp();
    }

    return (
        <>
            {/* <pre>{JSON.stringify(submitForm, null, 2)}</pre> */}
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="professor_search mentalHealths ViewQa">
                                    <div className="QaListings">
                                        <div className="QaBody">
                                            <div className="CreateAssessment">
                                                <Form.Group className="mb-4">
                                                    <div className="slider">
                                                        <div className="value mb-3">
                                                            Question {submitForm.lr_no_attend_que}/
                                                        <small>
                                                                {Array.isArray(testData) && testData.length}
                                                            </small>
                                                        </div>
                                                        <Slider
                                                            min={0}
                                                            max={Array.isArray(testData) && testData.length}
                                                            value={submitForm.lr_no_attend_que}
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </div>
                                            {
                                                Array.isArray(testData) &&
                                                testData
                                                    .filter((data, testDataIndex) =>
                                                        data.ql_status === '1' &&
                                                        testDataIndex >= showQuesAns.start &&
                                                        testDataIndex <= showQuesAns.end
                                                    ).map((data, quesIndex) =>
                                                        <div className="QuestionList" key={data.ql_id}>
                                                            <div className="col8 fw500 qaList fs18 pb-1">
                                                                <strong>Q {quesIndex + 1}.</strong>{" "}
                                                                <span
                                                                    className="d-inline-block ml-1"
                                                                >{data.ql_text}</span>
                                                            </div>
                                                            {
                                                                data.uc_cat_name.map((answers, ansIndex) =>
                                                                    <div className="answerDetail" key={answers.qa_id}>
                                                                        <ul>

                                                                            <li>
                                                                                <span className="ansOne">
                                                                                    <Form.Group controlId="formBasicCheckbox">
                                                                                        <Form.Check
                                                                                            type="radio"
                                                                                            key={answers.qa_id + data.ql_id}
                                                                                            id={answers.qa_id + data.ql_id}
                                                                                            className="radioboxTyp1"
                                                                                            checked={answers.flag}
                                                                                            onChange={() => {
                                                                                                giveAnswer(
                                                                                                    data.ql_id,
                                                                                                    answers.qa_id,
                                                                                                    quesIndex,
                                                                                                    ansIndex
                                                                                                )
                                                                                            }}
                                                                                            label=""
                                                                                        />
                                                                                    </Form.Group>
                                                                                </span>
                                                                                <span
                                                                                    className="d-inline-block ml-1"
                                                                                >{answers.qa_options}</span>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    </div>
                                    <div className="next_prevs">
                                        <div className="mt-4">
                                            <Button
                                                type="button"
                                                className={`btnTyp5 talkBtntwo  ${showQuesAns.start === 0 ? "disable" : ""
                                                    }`}
                                                onClick={() => { pageHandle("prev") }}
                                            >
                                                PREVIOUS
                                        </Button>
                                        </div>

                                        <div className="mt-4 text-right">
                                            {
                                                showQuesAns.end <= testData?.length ?
                                                    <Button
                                                        type="button"
                                                        className={`btnTyp5 talkBtntwo  ${showQuesAns.end <= testData?.length ? "disable" : ""
                                                            }`}
                                                        onClick={() => { pageHandle("next") }}
                                                    >
                                                        SAVE & NEXT
                                                    </Button>
                                                    : <Button
                                                        type="button"
                                                        className="btnTyp5 talkBtntwo"
                                                        onClick={submitTest}
                                                    >
                                                        Submit
                                                    </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />

                {/* modal start */}

                <Modal
                    show={showSumbitPop}
                    onHide={endPopUp}
                    className="CreateAccount alertShow"
                >
                    <Modal.Header>
                        <Button type="button" onClick={endPopUp} class="close">
                            <Image src={CrossTwo} alt="alert" className="alertCross" />
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-4">
                            <Image src={Alerts} alt="alert" className="" />
                        </div>
                        <div className="fw600 fs28 mb-3">Alert!</div>
                        <div className="col14 fs20 fw500 mb-4">
                            Your entries are Submitted .
                        </div>
                        <Button
                            type="button"
                            className="btnTyp5"
                            onClick={endPopUp}
                        >
                            OKAY
                        </Button>
                    </Modal.Body>
                </Modal>
                {/* modal end */}
            </div>
        </>
    );
}
export default ListnerPassageTest