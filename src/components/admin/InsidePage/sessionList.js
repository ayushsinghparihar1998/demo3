import React from 'react';
import { Tab, Tabs, Image, Button, Col } from 'react-bootstrap';
import moment from "moment";

const SessionListPage = ({ sessionList, activeKey, onChangeTab, Suser, changeStatusSession }) => {
    console.log("Session LIst  PAGE")
    const renderEvent = [
        {
            eventKey: "request",
            title: "REQUESTED"
        },
        {
            eventKey: "completed",
            title: "CONFIRMED"
        },
        {
            eventKey: "reject",
            title: "CANCELED"
        }
    ]
    return (
        <Col md={8} lg={9} className="pl-1">
            <div className="professor_search mb-3">
                <div className="fs22 fw600 col10">Session Requests</div>
            </div>
            <div className="myprofile reviewrequest">
                <div className="text-center user_tab">
                    <Tabs
                        activeKey={activeKey}
                        defaultActiveKey="request"
                        onSelect={(key) => onChangeTab(key, "session")}
                    >
                        {
                            renderEvent.map((event) => {
                                return (
                                    <Tab eventKey={event.eventKey} title={event.title}>
                                        <div className="requests">
                                            {sessionList &&
                                                sessionList.map((item) => {
                                                    return (
                                                        <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                            <div className="mr-4">
                                                                <Image
                                                                    src={item.cs_image ? item.cs_image : ""}
                                                                    alt=""
                                                                    className="r50"
                                                                />
                                                            </div>
                                                            <div className="pl-2">
                                                                <div className="d-flex justify-content-between">
                                                                    <div>
                                                                        <div className="col3 fw500 fs18 pb-1">
                                                                            {item.cs_corporate_name}
                                                                        </div>
                                                                        <div className="col28 fs14 fw400 pb-1">
                                                                            {item.cs_subject} {"-"}{" "}
                                                                            {item.cs_description}
                                                                        </div>
                                                                        <div className="fs14 fw400 col54 pb-1">
                                                                            {moment(
                                                                                new Date(item.cs_date)
                                                                            ).format("dddd MMM Do YYYY")}{" "}

                                                                            {item.cs_time}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                                                        <div className="text-right">
                                                                            Session with
                                                                        </div>
                                                                        <div className="pt-2 just_aligns text-right">
                                                                            <Image
                                                                                src={
                                                                                    item.cs_pro_image
                                                                                        ? item.cs_pro_image
                                                                                        : Suser
                                                                                }
                                                                                className="mw35s r50"
                                                                            />
                                                                            <span className="pl-2 col1 fw500 fs13">
                                                                                {item.cs_pro_name}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    event.eventKey === 'request' && 
                                                                    <div className="mt-3">
                                                                        <Button
                                                                            className="btnTyp9 approve mr-4"
                                                                            onClick={() =>
                                                                                changeStatusSession(
                                                                                    item.cs_id,
                                                                                    2
                                                                                )
                                                                            }
                                                                        >
                                                                            CONFIRM
                                                                        </Button>
                                                                        <Button
                                                                            className="btnTyp9 reject"
                                                                            onClick={() =>
                                                                                changeStatusSession(
                                                                                    item.cs_id,
                                                                                    3
                                                                                )
                                                                            }
                                                                        >
                                                                            CANCEL
                                                                        </Button>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </Tab>
                                )
                            })
                        }
                        
                    </Tabs>
                </div>
            </div>
        </Col>
    )
}

export default SessionListPage;
/**
 * <Tab eventKey="request" title="REQUESTED">
                            <div className="requests">
                                {sessionList &&
                                    sessionList.map((item) => {
                                        return (
                                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                <div className="mr-4">
                                                    <Image
                                                        src={item.cs_image ? item.cs_image : ""}
                                                        alt=""
                                                        className="r50"
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="col3 fw500 fs18 pb-1">
                                                                {item.cs_corporate_name}
                                                            </div>
                                                            <div className="col28 fs14 fw400 pb-1">
                                                                {item.cs_subject} {"-"}{" "}
                                                                {item.cs_description}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {moment(
                                                                    new Date(item.cs_date)
                                                                ).format("dddd MMM Do YYYY")}{" "}

                                                                {item.cs_time}
                                                            </div>
                                                        </div>
                                                        <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                                            <div className="text-right">
                                                                Session with
                                  </div>
                                                            <div className="pt-2 just_aligns text-right">
                                                                <Image
                                                                    src={
                                                                        item.cs_pro_image
                                                                            ? item.cs_pro_image
                                                                            : Suser
                                                                    }
                                                                    className="mw35s r50"
                                                                />
                                                                <span className="pl-2 col1 fw500 fs13">
                                                                    {item.cs_pro_name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-3">
                                                        <Button
                                                            className="btnTyp9 approve mr-4"
                                                            onClick={() =>
                                                                this.changeStatusSession(
                                                                    item.cs_id,
                                                                    2
                                                                )
                                                            }
                                                        >
                                                            CONFIRM
                                </Button>
                                                        <Button
                                                            className="btnTyp9 reject"
                                                            onClick={() =>
                                                                this.changeStatusSession(
                                                                    item.cs_id,
                                                                    3
                                                                )
                                                            }
                                                        >
                                                            CANCEL
                                </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Tab>
                        <Tab eventKey="completed" title="CONFIRMED">
                            <div className="requests">
                                {this.state.sessionList &&
                                    this.state.sessionList.map((item) => {
                                        return (
                                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                <div className="mr-4">
                                                    <Image
                                                        src={item.cs_image ? item.cs_image : ""}
                                                        alt=""
                                                        className="r50"
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="col3 fw500 fs18 pb-1">
                                                                {item.cs_corporate_name}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {item.cs_subject} {"-"}{" "}
                                                                {item.cs_description}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {item.cs_date} {item.cs_time}
                                                            </div>
                                                        </div>

                                                        <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                                            <div className="text-right">
                                                                Session with
                                  </div>
                                                            <div className="pt-2 just_aligns text-right">
                                                                <Image
                                                                    src={
                                                                        item.cs_pro_image
                                                                            ? item.cs_pro_image
                                                                            : Suser
                                                                    }
                                                                    className="mw35s r50"
                                                                />
                                                                <span className="pl-2 col1 fw500 fs13">
                                                                    {item.cs_pro_name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Tab>
                        <Tab eventKey="reject" title="CANCELED">
                            <div className="requests">
                                {this.state.sessionList &&
                                    this.state.sessionList.map((item) => {
                                        return (
                                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                <div className="mr-4">
                                                    <Image
                                                        src={item.cs_image ? item.cs_image : ""}
                                                        alt=""
                                                        className="r50"
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="col3 fw500 fs18 pb-1">
                                                                {item.cs_corporate_name}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {item.cs_subject} {"-"}{" "}
                                                                {item.cs_description}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {item.cs_date} {item.cs_time}
                                                            </div>
                                                        </div>

                                                        <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                                            <div className="text-right">
                                                                Session with
                                  </div>
                                                            <div className="pt-2 just_aligns text-right">
                                                                <Image
                                                                    src={
                                                                        item.cs_pro_image
                                                                            ? item.cs_pro_image
                                                                            : Suser
                                                                    }
                                                                    className="mw35s r50"
                                                                />
                                                                <span className="pl-2 col1 fw500 fs13">
                                                                    {item.cs_pro_name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Tab>
 */
/**
 *
 * (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">Session Requests</div>
                  </div>
                  <div className="myprofile reviewrequest">
                    <div className="text-center user_tab">
                      <Tabs
                        activeKey={this.state.key}
                        defaultActiveKey="request"
                        onSelect={(key) => this.onChangeTab(key, "session")}
                      >
<Tab eventKey="request" title="REQUESTED">
<div className="requests">
  {this.state.sessionList &&
    this.state.sessionList.map((item) => {
      return (
        <div className="d-flex pt-4 pb-4 text-left border-grays">
          <div className="mr-4">
            <Image
              src={item.cs_image ? item.cs_image : ""}
              alt=""
              className="r50"
            />
          </div>
          <div className="pl-2">
            <div className="d-flex justify-content-between">
              <div>
                <div className="col3 fw500 fs18 pb-1">
                  {item.cs_corporate_name}
                </div>
                <div className="col28 fs14 fw400 pb-1">
                  {item.cs_subject} {"-"}{" "}
                  {item.cs_description}
                </div>
                <div className="fs14 fw400 col54 pb-1">
                  {moment(
                    new Date(item.cs_date)
                  ).format("dddd MMM Do YYYY")}{" "}

                  {item.cs_time}
                </div>
              </div>
              <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                <div className="text-right">
                  Session with
                </div>
                <div className="pt-2 just_aligns text-right">
                  <Image
                    src={
                      item.cs_pro_image
                        ? item.cs_pro_image
                        : Suser
                    }
                    className="mw35s r50"
                  />
                  <span className="pl-2 col1 fw500 fs13">
                    {item.cs_pro_name}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <Button
                className="btnTyp9 approve mr-4"
                onClick={() =>
                  this.changeStatusSession(
                    item.cs_id,
                    2
                  )
                }
              >
                CONFIRM
              </Button>
              <Button
                className="btnTyp9 reject"
                onClick={() =>
                  this.changeStatusSession(
                    item.cs_id,
                    3
                  )
                }
              >
                CANCEL
              </Button>
            </div>
          </div>
        </div>
      );
    })}
</div>
</Tab>
<Tab eventKey="completed" title="CONFIRMED">
<div className="requests">
  {this.state.sessionList &&
    this.state.sessionList.map((item) => {
      return (
        <div className="d-flex pt-4 pb-4 text-left border-grays">
          <div className="mr-4">
            <Image
              src={item.cs_image ? item.cs_image : ""}
              alt=""
              className="r50"
            />
          </div>
          <div className="pl-2">
            <div className="d-flex justify-content-between">
              <div>
                <div className="col3 fw500 fs18 pb-1">
                  {item.cs_corporate_name}
                </div>
                <div className="fs14 fw400 col54 pb-1">
                  {item.cs_subject} {"-"}{" "}
                  {item.cs_description}
                </div>
                <div className="fs14 fw400 col54 pb-1">
                  {item.cs_date} {item.cs_time}
                </div>
              </div>
              <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                <div className="text-right">
                  Session with
                </div>
                <div className="pt-2 just_aligns text-right">
                  <Image
                    src={
                      item.cs_pro_image
                        ? item.cs_pro_image
                        : Suser
                    }
                    className="mw35s r50"
                  />
                  <span className="pl-2 col1 fw500 fs13">
                    {item.cs_pro_name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
</div>
</Tab>
<Tab eventKey="reject" title="CANCELED">
<div className="requests">
  {this.state.sessionList &&
    this.state.sessionList.map((item) => {
      return (
        <div className="d-flex pt-4 pb-4 text-left border-grays">
          <div className="mr-4">
            <Image
              src={item.cs_image ? item.cs_image : ""}
              alt=""
              className="r50"
            />
          </div>
          <div className="pl-2">
            <div className="d-flex justify-content-between">
              <div>
                <div className="col3 fw500 fs18 pb-1">
                  {item.cs_corporate_name}
                </div>
                <div className="fs14 fw400 col54 pb-1">
                  {item.cs_subject} {"-"}{" "}
                  {item.cs_description}
                </div>
                <div className="fs14 fw400 col54 pb-1">
                  {item.cs_date} {item.cs_time}
                </div>
              </div>
              <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                <div className="text-right">
                  Session with
                </div>
                <div className="pt-2 just_aligns text-right">
                  <Image
                    src={
                      item.cs_pro_image
                        ? item.cs_pro_image
                        : Suser
                    }
                    className="mw35s r50"
                  />
                  <span className="pl-2 col1 fw500 fs13">
                    {item.cs_pro_name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
</div>
</Tab>
</Tabs>
</div>
</div>
</Col>
)
 */