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
import { useParams } from 'react-router';

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
    const [showQuesAns, setShowQuesAns] = useState({ start: 0, end: 5, });
    const [submitForm , setForm ] = useState({
        "listner_paragraph_id":testId,
        "lr_no_attend_que": 0,
        "lr_skip_que":"",
        "lr_submit":[]
    })
    useEffect(() => {
        ELPViewApiService('getquesans_listnerlist', { count: 10, offset: 1, listner_paragraph_id: testId })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
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
            start = start + 5;
            end = end + 5;
        }
        if (key === "prev") {
            start = start - 5;
            end = end - 5;
        }
        setShowQuesAns({ start: start, end: end });
    };

    const giveAnswer = (quesID , answerID) => {
        // {"que_id":"25","ans_id":"34"}
        const lr_submit = {que_id:quesID,ans_id:answerID};
        const submit = submitForm;
        submit.lr_submit.push(lr_submit);
        setForm(submit); 
    }

    return (
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
                                                        Question 1/
                                                        <small>
                                                            {Array.isArray(testData) && testData.length}
                                                        </small>
                                                    </div>
                                                    <Slider
                                                        min={0}
                                                        max={Array.isArray(testData) && testData.length}
                                                        value={showQuesAns.start}
                                                    />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        {
                                            Array.isArray(testData) &&
                                            testData
                                                .filter(data => data.ql_status === '1').map((data, quesIndex) =>
                                                    <div className="QuestionList">
                                                        <div className="col8 fw500 qaList fs18 pb-1">
                                                            <strong>Q {quesIndex + 1}.</strong>{" "}
                                                            <span
                                                                className="d-inline-block ml-1"
                                                            >{data.ql_text}</span>
                                                        </div>
                                                        {
                                                            data.uc_cat_name.map((answers) =>
                                                                <div className="answerDetail" key={answers.qa_id}>
                                                                    <ul>

                                                                        <li>
                                                                            <span className="ansOne">
                                                                                <Form.Group controlId="formBasicCheckbox">
                                                                                    <Form.Check
                                                                                        type="radio"
                                                                                        id={answers.qa_id+data.ql_lp_id}
                                                                                        className="radioboxTyp1"
                                                                                        onChange={()=>{
                                                                                            giveAnswer(data.ql_lp_id,answers.qa_id)
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

                                        <Button
                                            type="button"
                                            className={`btnTyp5 talkBtntwo  ${showQuesAns.end <= testData?.length ? "disable" : ""
                                                }`}
                                            onClick={() => { pageHandle("next") }}
                                        >
                                            SAVE & NEXT
                                        </Button>

                                        <Button
                                            type="button"
                                            className="btnTyp5 talkBtntwo"
                                        >
                                            Submit
                                        </Button>

                                    </div>
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

            {/* <Modal
            show={this.state.show}
            onHide={this.handleClose}
            className="CreateAccount alertShow"
          >
            <Modal.Header>
              <Button type="button" onClick={this.handleClose} class="close">
                <Image src={CrossTwo} alt="alert" className="alertCross" />
              </Button>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-4">
                <Image src={Alerts} alt="alert" className="" />
              </div>
              <div className="fw600 fs28 mb-3">Alert!</div>
              <div className="col14 fs20 fw500 mb-4">
                  Your entries are final and if you submit the test, your report will be generated.
              </div>
              <Button
                type="button"
                className="btnTyp5"
                onClick={() => this.handleSubmit()}
              >
                OKAY
              </Button>
            </Modal.Body>
          </Modal> */}
            {/* modal end */}
        </div>
    );
}
export default ListnerPassageTest