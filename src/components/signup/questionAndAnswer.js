import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import NavBar from '../core/nav';
import Footer from '../core/footer';
import { connect } from 'react-redux';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import moment from 'moment';
import { actionListnerSignup, actionGetQuestion, actionSubmitQuestion } from '../../common/redux/actions';
import CONSTANTS from "../../common/helpers/Constants";
import validateInput from "../../common/validations/validationSignup";
import { setLocalStorage } from "../../common/helpers/Utils";
class QuestionAndAnswer extends Component {
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
        this.props.actionGetQuestion({}).then((result) => {
            console.log("result321321312", result.data.data)
            if (result && result.status === 200) {
                let question = result.data.data;
                this.setState({ question: question.que_list })
            }
        })
    }




    isValidQA() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    handleSubmitQuestion = () => {
        // if (this.isValidQA()) {
        this.setState({
            showLoader: true,
        });
        let question = this.state.question;
        let question_submit = []
        console.log("questionquestion", question)
        question &&
            question.forEach(function (item, catIndex) {
                if (item.que_id) {
                    item.question_answer &&
                        item.question_answer.forEach(function (elem, catIndex) {
                            if (elem.active)
                                question_submit.push({ que_id: item.que_id, ans_id: elem.qa_id });
                        });
                }
            });
        let data = {
            question_submit: question_submit
        };
        console.log("datadatadata", data)
        this.props.actionSubmitQuestion(data).then((result) => {
            console.log("cwerwerwer", result.data.data)
            if (result && result.status === 200) {
                if (result.data.data >= 60)
                    setLocalStorage("loggedIn", true);
                setLocalStorage("signup", true);
                setLocalStorage("result", result.data.data);
                this.props.history.push({ pathname: "/userDashboard" });
            }
        })

        // } else {
        // this.setState({
        //     showLoader: false,
        // });
        //  }
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

        console.log(question[index], "checked", checked, question[index].question_answer);
        question[index].question_answer[subIndex].active = checked
        this.setState({ question: question })
    }
    handleClose = () => {
        this.setState({
            secondSignUp: true,
        })
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <Form>
                    <Row>
                        <div className="layout_box mt-3 mb-4">

                            {this.state.question &&
                                this.state.question.map((item, index) => {
                                    return (
                                        <div>
                                            <div className="col11 fs20 fw500">
                                                <span className="fw600 col29">Question {index + 1}</span>
                                                {item.ql_text}
                                            </div>
                                            <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>
                                            {item.question_answer &&
                                                item.question_answer.map((elem, subIndex) => {
                                                    return (
                                                        <Form.Group controlId={'formBasicCheckbox4' + index + subIndex} className="d-flex">
                                                            <Form.Check name={'active' + index + subIndex}
                                                                onChange={event => {
                                                                    this.handleChangeQuestion(event, index, subIndex, elem.qa_id);
                                                                }}
                                                                type="checkbox" checked={elem.active ? elem.active : false} className="fw300 fs17 col28 mt-1 checkboxTyp1" label={elem.qa_options} />
                                                        </Form.Group>
                                                    )
                                                })}
                                        </div>
                                    )
                                })}

                        </div>
                        <Button onSubmit={this.handleSubmitQuestion}
                            onClick={this.handleSubmitQuestion} className="btnTyp5 mt-3">
                            Submit Question
                                </Button>
                    </Row>
                </Form>
            </div>)
    }
}
export default connect(
    null,
    { actionListnerSignup, actionGetQuestion, actionSubmitQuestion }
)(QuestionAndAnswer);
