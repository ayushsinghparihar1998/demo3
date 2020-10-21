import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import NavBar from "../../core/nav";
import Footer from "../../core/footer";
import { connect } from "react-redux";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import moment from "moment";
import {
  actionListnerSignup,
  actionGetQuestion,
  actionSubmitQuestion,
} from "../../../common/redux/actions";
import CONSTANTS from "../../../common/helpers/Constants";
import validateInput from "../../../common/validations/validationSignup";
import { setLocalStorage } from "../../../common/helpers/Utils";
class BlockReviewTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { errors } = this.state;
    return (
      <div className="myprofile reviewrequest">
        <div className="text-center user_tab">
          <Tabs defaultActiveKey="request">
            <Tab eventKey="request" title="Requested">
              <div className="requests">
                <div className="d-flex pt-4 pb-4 text-left border-grays">
                  <div className="mr-4">
                    <Image src={Requestuser} alt="" className="r50" />
                  </div>
                  <div className="pl-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="col1 fw500 fs18 pb-1">
                          John Wade-Hampton
                        </div>
                        <div className="fs14 fw400 col54 pb-1">
                          Thu Apr 30, 2020 1.12 pm
                        </div>
                      </div>
                      <div className="col81 fs15 fs400 pr-3">
                        Review for - Mic Hegrid
                      </div>
                    </div>

                    <div className="col28 fs14 fw400 pt-1">
                      I enjoy working with individuals of all capacities as I
                      view the role of therapist as one in which you help the
                      client learn to cope with the pressures of daily life.{" "}
                      <span className="col40 fw500 pointer">Read more...</span>
                    </div>

                    <div className="mt-3">
                      <Button className="btnTyp9 approve mr-4">APPROVE</Button>
                      <Button className="btnTyp9 reject">REJECT</Button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <Button className="btnTyp9 shows">show more</Button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="completed" title="COMPLETED">
              <div className="requests">
                <div className="d-flex pt-4 pb-4 text-left border-grays">
                  <div className="mr-4">
                    <Image src={Requestuser} alt="" className="r50" />
                  </div>
                  <div className="pl-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="col1 fw500 fs18 pb-1">
                          John Wade-Hampton
                        </div>
                        <div className="fs14 fw400 col54 pb-1">
                          Thu Apr 30, 2020 1.12 pm
                        </div>
                      </div>
                      <div className="col81 fs15 fs400 pr-3">
                        Review for - Mic Hegrid
                      </div>
                    </div>

                    <div className="col28 fs14 fw400 pt-1">
                      I enjoy working with individuals of all capacities as I
                      view the role of therapist as one in which you help the
                      client learn to cope with the pressures of daily life.{" "}
                      <span className="col40 fw500 pointer">Read more...</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <Button className="btnTyp9 shows">show more</Button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="reject" title="REJECTED">
              <div className="requests">
                <div className="d-flex pt-4 pb-4 text-left border-grays">
                  <div className="mr-4">
                    <Image src={Requestuser} alt="" className="r50" />
                  </div>
                  <div className="pl-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="col1 fw500 fs18 pb-1">
                          John Wade-Hampton
                        </div>
                        <div className="fs14 fw400 col54 pb-1">
                          Thu Apr 30, 2020 1.12 pm
                        </div>
                      </div>
                      <div className="col81 fs15 fs400 pr-3">
                        Review for - Mic Hegrid
                      </div>
                    </div>

                    <div className="col28 fs14 fw400 pt-1">
                      I enjoy working with individuals of all capacities as I
                      view the role of therapist as one in which you help the
                      client learn to cope with the pressures of daily life.{" "}
                      <span className="col40 fw500 pointer">Read more...</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <Button className="btnTyp9 shows">show more</Button>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default BlockReviewTabs;
