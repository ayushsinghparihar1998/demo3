import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import { getLocalStorage } from "../../common/helpers/Utils";
import { connect } from 'react-redux';
import validationSubscribe from '../../common/validations/validationSubscribe';
import { actionSubscribe } from '../../common/redux/actions';
import AboutEat from '../../assets/images/AboutEat.png';
import AboutLove from '../../assets/images/AboutLove.png';
import AboutPray from '../../assets/images/AboutPray.png';


class Abouteat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {},
            show:false
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
        const { email, password } = this.state; const { errors } = this.state;  
        return (
        <div className="aboutEats" id="about_us_container">
            <Container>
                <Row>
                    <Col md={12} lg={12} className="m-auto">
                        <div className="fs40 col8 fw600 w-100">About Eat Luv N Pray</div>  
                        <div className="col14 fw300 w-100"> 
                            <div className="fw500 fs26 col64 pb-4">Eat Luv N Pray Pvt Ltd.</div>
                            <div className="fw500 fs18 col14 pb-2">Who are we – A Lifestyle Management Company</div>
                            <div className="fw400 col14 pb-2">How we do it – By Listening and properly understanding the help or problem areas of our client. Understanding the root cause and not just treating the symptoms: Our primary objective is to diagnose the root cause so that the client is aware of what triggered the illness and we can plan the disease management protocol accordingly. Many diseases just don’t happen immediately, they happen over prolonged period of time. Only when we spend time diagnosing and looking back at their lifestyle, can we find the possible source of the disease. It could either be a constantly low level of immunity or an emotional scar or poor nutrition. We need to start addressing the root causes of a disease to repair our body at all levels – Physical, mental, emotional and spiritual. We treat the symptoms but also identify, address and work on the root cause to effectively manage and control the condition.</div>
                            <div className="fw500 fs18 col14 pt-4 pb-2">A holistic approach:</div>
                            <div className="col14 fw400 pb-2">Beyond medicine is something that every human has access to and it’s usually inexpensive and free. People just need to believe in it and start using it. Our approach isn’t a replacement for medicine. But over and above medicine, we also need genuine care, patience, motivation, positivity, compassion, human touch, and an attitude of real care along with advice to eat well, sleep well, manage stress, and move more. For this primary reason, we have a fullfledged integrative ecosystem consisting of dieticians, nutritionists, doctors, emotional counsellors, yoga experts, alternate medicine doctors and healers. It is our constant endeavour to strive towards bettering what we can offer through our programs, which is beyond nutritional plans and alternate medical intervention.</div>
                        </div>
                        
                    </Col>
                    </Row>
            </Container>

            <div className="PillarsThree">
                <Container>
                        <div className="position-relative">
                            <div className="fs24 fw500 col14 mt-4 mb-5 text-center">Three main pillars of holistic health</div>
                            <Row>
                                <Col md="4" xs="12">
                                    <div className="pillars">
                                        <Image src={AboutEat} className="pillarImg" />
                                        <div className="fs26 fw500 col10 text-center mt-3 mb-3">Eat</div>
                                        <div className="fs14 fw400 col29 text-center">Food is information to our genes and nourishes every single cell. The right quality, quantity and balance of food can promote good health, while the wrong kind of food can deteriorate our health. Additionally, effective digestion, absorption, assimilation and elimination are also our primary areas of focus. Foods are directly related to our body, mental and social health because each food or liquid contains particular nutrition such as carbohydrates, protein, vitamins, minerals, fats, which are very necessary for our physical and mental growth.</div>
                                    </div>
                                </Col>
                                <Col md="4" xs="12">
                                    <div className="pillars">
                                        <Image src={AboutLove} className="pillarImg" />
                                        <div className="fs26 fw500 col10 text-center mt-3 mb-3">Luv</div>
                                        <div className="fs14 fw400 col29 text-center">What we feed our mind and soul is as important as what we feed our body. Every cell in our body responds to every thought that crosses our mind. A happy emotion can take healing a step forward, a negative emotion can move you a few steps backward. Emotions can play an important role in how we think and behave. The emotions we feel each day can compel us to take action and influence the decisions we make about our lives, both large and small. Self love & care is imperative and can help us attain anything in our lives.</div>
                                    </div>
                                </Col>
                                <Col md="4" xs="12">
                                    <div className="pillars">
                                        <Image src={AboutPray} className="pillarImg threes" />
                                        <div className="fs26 fw500 col10 text-center mt-3 mb-3">Pray</div> 
                                        <div className="fs14 fw400 col29 text-center">Our bodies have been designed to move. While being sedentary is unnatural, movement is medicine for us. With movement, we enable better circulation of oxygen, nutrients and effective detoxification. Also, its not just about exercising the body, but also the mind with tools like meditation. Sleep is the inbuilt intelligence of our body that allows true healing to take place – like hormonal balance, weight loss, growth, repair, recovery, recharging, immunity and detoxification. Also, its not just sleeping long enough, but also well enough that makes a huge difference in our well being.</div>
                                    </div>
                                </Col>
                            </Row> 
                        </div>
                </Container>
            </div>

        </div>) } } export default connect( null, { actionSubscribe } )(Abouteat);