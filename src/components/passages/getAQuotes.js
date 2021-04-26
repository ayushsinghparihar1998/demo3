import React, { useState } from "react";
import {
    Container, Button, Col, Form
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Validator from "validator";
import ValidationMessages from "../../common/helpers/ValidationMessages";
import ELPViewApiService from "../../common/services/apiService";
import { showSuccessToast } from "../../common/helpers/Utils";
import { useHistory } from "react-router";

const QUOTE_REQUEST = {
    "qu_name": "",
    "qu_email": "",
    "qu_phone_number": "",
    "qu_company_name": "",
    "qu_country": ""
}
const COUNTRIES_DROPDOWN = [
    'India',
    'USA',
    'China',
    'United Kingdom'
]
const GetAQuote = (props) => {
    const [quote, setQuote] = useState(QUOTE_REQUEST);
    const [errors, setErrors] = useState(QUOTE_REQUEST);
    const history = useHistory();

    const handleForm = (event) => {
        const { name, value } = event.target;
        let newEdit = quote
        newEdit = { ...newEdit, [name]: value };
        setQuote(newEdit);
    }

    const submitForm = () => {
        let newEdit = { ...quote };
        const validator = ValidateForm(newEdit);
        setErrors(validator);
        if (Object.keys(validator).length === 0) {
            ELPViewApiService('addquote_user', quote)
            .then((response)=>{
                const data  = response.data ;
                if(data.status === 'success'){
                    showSuccessToast(data.message);
                    setTimeout(()=>{history.push('/planlistholistic')},200)
                }
            })
            .catch((err)=>new Error(`Error occured because ${err}`))
        }
    }
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="ngo_services passageLayout">
                <Container>
                    <Col md={8} className="m-auto">
                        <div className="ngo_listing mt-4 mb-4">
                            <div className="fs22 fw600 col3 w-100 mb-2 mt-4 text-uppercase">
                                let’s get you a quote
                            </div>
                            <div className="fs16 fw400 mb-5">
                                Please fill out the below form. Our team will be in touch shortly with a quote.
                            </div>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">
                                        Name <sup>*</sup>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        className="inputTyp2"
                                        name="qu_name"
                                        value={quote.qu_name}
                                        onChange={handleForm}
                                    />
                                    <div className="col27 fs14 fw400 mt-2 error">
                                        {errors?.qu_name}
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">
                                        Work Email <sup>*</sup>
                                    </Form.Label>

                                    <Form.Control
                                        type="email"
                                        className="inputTyp2"
                                        name="qu_email"
                                        value={quote.qu_email}
                                        onChange={handleForm}
                                    />
                                    <div className="col27 fs14 fw400 mt-2 error">
                                        {errors?.qu_email}
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">
                                        Phone Number <sup>*</sup>
                                    </Form.Label>

                                    <Form.Control
                                        type="number"
                                        className="inputTyp2"
                                        name="qu_phone_number"
                                        value={parseInt(quote.qu_phone_number)}
                                        onChange={handleForm}
                                    />
                                    <div className="col27 fs14 fw400 mt-2 error">
                                        {errors?.qu_phone_number}
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">
                                        Company Name <sup>*</sup>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        className="inputTyp2"
                                        name="qu_company_name"
                                        value={quote.qu_company_name}
                                        onChange={handleForm}
                                    />
                                    <div className="col27 fs14 fw400 mt-2 error">
                                        {errors?.qu_company_name}
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">
                                        Country <sup>*</sup>
                                    </Form.Label>

                                    <Form.Control
                                        className="selectTyp1"
                                        as="select"
                                        name='qu_country'
                                        value={quote.qu_country}
                                        defaultValue={""}
                                        onChange={handleForm}
                                    >
                                        <option value="" disabled>Select Country</option>
                                        {
                                            COUNTRIES_DROPDOWN.map((country) =>
                                                <option key={country} value={country}>{country}</option>
                                            )
                                        }
                                    </Form.Control>
                                    <div className="col27 fs14 fw400 mt-2 error">
                                        {errors?.qu_country}
                                    </div>
                                </Form.Group>

                                <div className="fs16 fw400 mt-4">
                                    Your information will be used to consider and fulfill your request, and will be
                                    handled pursuant to our Privacy Policy.
                                </div>

                                <div className="mt-5 mb-5">
                                    <Button type="button" className="btnTyp5" onClick={submitForm}>SUBMIT</Button>
                                </div>
                            </Form>



                        </div>
                    </Col>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

const ValidateForm = (form) => {


    let errors = {};

    if (Validator.isEmpty(form.qu_name) || form.qu_name.trim() === "") {
        errors.qu_name = ValidationMessages.userQuote.qu_name.required;

    }

    if (Validator.isEmpty(form.qu_email)) {
        errors.qu_email = ValidationMessages.email.required;

    } else if (!Validator.isEmail(form.qu_email)) {
        errors.qu_email = ValidationMessages.email.invalid;

    }

    if (Validator.isEmpty(form.qu_phone_number) || form.qu_phone_number.trim() === "") {
        errors.qu_phone_number = ValidationMessages.phoneNumber.required;

    } else if (form.qu_phone_number.toString().length < 10) {
        errors.qu_phone_number = ValidationMessages.phoneNumber.invalid;

    } else if (form.qu_phone_number.toString().length > 14) {
        errors.qu_phone_number = ValidationMessages.phoneNumber.invalid;

    }

    if (Validator.isEmpty(form.qu_company_name) || form.qu_company_name.trim() === "") {
        errors.qu_company_name = ValidationMessages.userQuote.qu_company_name.required;

    }

    if (Validator.isEmpty(form.qu_country) || form.qu_country.trim() === "") {
        errors.qu_country = ValidationMessages.userQuote.qu_country.required;

    }

    return errors;
}
export default GetAQuote;

