import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";

import CONSTANTS from "../../common/helpers/Constants";
import validateInput from "../../common/validations/validationSignup";
import ELPRxApiService from "../../common/services/apiService";

class SurveyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roleType: CONSTANTS.ROLES.ORGANIZER,
            email: "",
            password: "",
            errors: {},
            organisationName: "",
            showLoader: false,
            fristSignUp: true,
            listOfCategory: [],
            question: []
        };
    }

    componentDidMount() {
        this._getSurveyListHandler()
    }

    _getSurveyListHandler = async () => {
        try {
            let response = await ELPRxApiService("getSurveyList")
            console.log(response)

            let question = response.data.data.que_list;
            console.log(question)
            this.setState({ question })

        } catch (err) {
            console.log(err);
        }
    }


    isValidQA() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    handleSubmitQuestion = async () => {
        try {
            let question = this.state.question;
            let question_submit = []
            console.log("questionquestion", question)
            question &&
                question.forEach(function (item, catIndex) {
                    if (item.que_id) {
                        item.survey_answer &&
                            item.survey_answer.forEach(function (elem, catIndex) {
                                if (elem.active)
                                    question_submit.push({ que_id: item.que_id, ans_id: elem.sa_id });
                            });
                    }
                });
            let response = await ELPRxApiService("submitSurvey", {
                survey_submit: question_submit
            });
            console.log(response);

            this.handleClose()
            this.props.disableInputHandler()
        } catch (err) {
            console.log(err)
        }





    };


    addCategory = () => {
        let cat = this.state.category;
        let listOfCategory = this.state.listOfCategory;
        listOfCategory.push({ "uc_cat_name": cat })
        this.setState({ listOfCategory: listOfCategory, category: '' })
    }
    handleChangeQuestion = (event, index, subIndex, id) => {
        console.log("index, subIndex", index);
        console.log("subIndex", subIndex);
        console.log("event", event);
        const { name, checked } = event.target;
        let question = this.state.question;

        console.log(question[index], "checked", checked, question[index].survey_answer);
        question[index].survey_answer.map(obj => {
            obj.active = false
        })
        question[index].survey_answer[subIndex].active = checked
        this.setState({ question: question })
    }
    handleClose = () => {
        this.setState({
            isOpen: false,
        })
    }
    openModal() {
        this.setState({
            isOpen: true,
        })
    }
    render() {
        const { errors } = this.state;
        return (
            <Modal
                show={this.state.isOpen}
                onHide={this.handleClose}
                className="custom-popUp confirmation-box survay_modals"
                bsSize="small"
            >
                <Modal.Body>
                    <Container>
                        <div className="layout_box mt-3 mb-4">
                            <div className="col10 fs30 fw600 mb-2">ELNP Survey</div>
                            <div className="fs300 fs20 col14 mb-4 pb-2">
                                {/* Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. */}
                            </div>

                            <div>
                                <Form>
                                    <Row>
                                        <div className="layout_box mt-3 mb-4">

                                            {this.state.question &&
                                                this.state.question.map((item, index) => {
                                                    return (
                                                        <div>
                                                            <div className="col11 fs20 fw500">
                                                                {/* <span className="fw600 col29">Question {index + 1} </span> */}
                                                                {item.sq_text}
                                                            </div>
                                                            <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>
                                                            {item.survey_answer &&
                                                                item.survey_answer.map((elem, subIndex) => { 
                                                                    return (
                                                                        <Form.Group controlId={'formBasicCheckbox4' + index + subIndex} className="d-flex">
                                                                            <Form.Check name={'active' + index + subIndex}
                                                                                onChange={event => {
                                                                                    this.handleChangeQuestion(event, index, subIndex, elem.sa_id);
                                                                                }}
                                                                                type="checkbox" checked={elem.active ? elem.active : false} className="fw300 fs17 col28 mt-1 checkboxTyp1" label={elem.sa_options} />
                                                                        </Form.Group>
                                                                    )
                                                                })}
                                                        </div>
                                                    )
                                                })}

                                        </div>

                                    </Row>
                                </Form>
                                <Button
                                    onClick={this.handleSubmitQuestion} className="btnTyp5 ">
                                    Submit
                                </Button>
                            </div>

                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default SurveyModal;
