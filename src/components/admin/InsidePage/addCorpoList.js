import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const AddCorpoList = ({errors , memberObj , handleChangeCorpMember , handleSubmitCorpMember}) => {
    return (
        <Col md={8} className="pl-1">
            <div className="corporateMember adminlistener">
                <div className="fs28 col10 mb-4">
                    Become a Corporate Member
            </div>
                <Form>
                    <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                            Email/ Domain address
                </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className="inputTyp2"
                            id="outlined-email"
                            variant="outlined"
                            name="email"
                            isInvalid={errors.email}
                            value={memberObj.email}
                            onChange={(e) => handleChangeCorpMember(e)}
                            maxLength={100}
                        />

                        <div className="col27 fs14 fw400 mt-2 error">
                            {errors.email}
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                            Create a Password
                </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            className="inputTyp2"
                            id="outlined-password"
                            variant="outlined"
                            name="password"
                            value={memberObj.password}
                            onChange={(e) => handleChangeCorpMember(e)}
                            maxLength={40}
                        />{" "}
                        <div className="col27 fs14 fw400 mt-2 error">
                            {errors.password}{" "}
                        </div>
                    </Form.Group>
                    <Button
                        variant="primary btnTyp5 mt-4"
                        type="button"
                        onClick={() => handleSubmitCorpMember()}
                    >
                        Submit
              </Button>
                </Form>
            </div>
        </Col>
    )
}

export default AddCorpoList;