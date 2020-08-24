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
            <div className="aboutEats">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="fs44 col14 fw700 w-100">About Eat Luv n Pray</div>
                            <div className="col14 fs16 fw300 w-100 pt-3">
                                <div className="pb-4">We live in a world where you can be surrounded by people, but still feel lonely, with nobody to turn to when things get rough.</div>

                                <div className="pb-4">But being heard is an important part of being human. Psychologist, Glen Moriarty saw that there was great power in listening, but he knew not everyone had someone to talk to. He started to wonder. "How can I make being heard a reality for everyone?"</div>

                                <div className="pb-4 fw500">That's why EatLoveNPray was born.</div>

                                <div className="pb-4">Thanks to thousands of volunteer listeners stepping up to lend a friendly ear, EatLoveNPray is happy to say, "We're here for you!"</div>

                                <div className="pb-2">No matter who you are or what you're going through, this is a place where you'll be heard and cared for. We might be strangers on the surface, but underneath we're just the friends you haven't met yet. </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="subscribe_here">
                                <div className="fs40 fw700 col1">Subscribe Here</div>
                                <div className="fs22 fw300 col10 mb-3">Get updates about
                                Eat Luv N Pray</div>
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
