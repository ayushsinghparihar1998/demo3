import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import { getLocalStorage } from "../../common/helpers/Utils";
import { connect } from 'react-redux';
import validationSubscribe from '../../common/validations/validationSubscribe';
import { actionSubscribe } from '../../common/redux/actions';

class Abouteat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {},
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    getSubscribe = () => {
        if (this.isValid()) {
            let data = {
                email: this.state.email.toLowerCase().trim(),
            };
            this.props.actionSubscribe(data).then((result) => {
                this.setState({
                    errors: {},
                    email: ''
                });
            })
        }
    }
    isValid = () => {
        const { errors, isValid } = validationSubscribe(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    render() {
        const { email, password } = this.state;
        const { errors } = this.state;
        return (
            <div className="aboutEats" id="about_us_container">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="fs44 col14 fw700 w-100">About Eat Luv N Pray</div>
                            <div className="col14 fs16 fw300 w-100 pt-3">
                                <div className="pb-4">Eat Luv N Pray was founded by a Group of individuals who have had moments just like you - where we needed that empathetic someone to listen to our chain of thoughts.</div>

                                <div className="pb-4 fw500">With this in mind Eat, Luv N Pray was born.</div>

                                <div classNam="pb-4">Today, Eat Luv N Pray remedies that problem by connecting you with trained listeners who are called “CoCo’s” around the world to talk about your problems without being condescending or judgemental.</div>
                                <br />
                                <div className="pb-2">As a community, we've found that talking through our emotional, psychological, or mental issues is one of the best methods of managing our overwhelming emotions. Sharing and connecting with a CoCo who has gone through struggles just like you provides great consolation to anyone in need of healing or a friend. </div>
                                <div className="pb-2">NEVER ALONE. </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="subscribe_here">
                                <div className="fs40 fw700 col1">Subscribe to Newsletter</div>
                                <div className="fs22 fw300 col10 mb-3">Are you ready to excel in your life? Get a free newsletter about holistic wellness delivered to your email.</div>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email address"
                                        error={errors.email ? true : false}
                                        className="inputTyp1"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                    />
                                    <div className="error alignLeft">{errors.email}</div>
                                </Form.Group>
                                <Button variant="primary"
                                    onClick={this.getSubscribe}
                                    type="submit" className="btnTyp2 mt-3">
                                    SUBSCRIBE
                                </Button>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
export default connect(
    null,
    { actionSubscribe }
)(Abouteat); 
