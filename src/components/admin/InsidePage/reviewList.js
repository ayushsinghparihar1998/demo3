import React from 'react';
import { Tab, Tabs, Image, Button, Col } from 'react-bootstrap';
import moment from "moment";

const ReviewListPage = ({ changeStatusReview , reviewList , onChangeTab , activeKey}) => {
    console.log("REVIEW PAGE")
    const renderEvent = [
        {
            eventKey: "request",
            title: "Requested"
        },
        {
            eventKey: "completed",
            title: "Requested"
        },
        {
            eventKey: "reject",
            title: "Requested"
        }
    ]
    return (
        <Col md={8} lg={9} className="pl-1">
            <div className="professor_search mb-3">
                <div className="fs22 fw600 col10">Review Requests</div>
            </div>
            <div className="myprofile reviewrequest">
                <div className="text-center user_tab">
                    <Tabs
                        activeKey={activeKey}
                        defaultActiveKey="request"
                        onSelect={(key) => onChangeTab(key, "review")}
                    >
                        {
                            renderEvent.map((event) => {
                                return (
                                    <Tab eventKey={event.eventKey} title={event.eventKey.toUpperCase()}>
                                        <div className="requests">
                                            {reviewList &&
                                                reviewList.map((item) => {
                                                    return (
                                                        <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                            <div className="mr-4">
                                                                <Image
                                                                    src={item.u_image ? item.u_image : ""}
                                                                    alt=""
                                                                    className="r50"
                                                                />
                                                            </div>
                                                            <div className="pl-2">
                                                                <div className="d-flex justify-content-between">
                                                                    <div>
                                                                        <div className="col3 fw500 fs18 pb-1">
                                                                            {item.fromname}
                                                                        </div>
                                                                        <div className="fs14 fw400 col54 pb-1">
                                                                            {moment(item.rv_datetime).format(
                                                                                "dddd MMM Do YYYY HH:mm"
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col81 fs15 fs400 pr-3">
                                                                        Review for - {item.toname}
                                                                    </div>
                                                                </div>

                                                                <div className="col28 fs14 fw400 pt-1">
                                                                    {item.rv_text}{" "}
                                                                </div>

                                                                {
                                                                    event.eventKey === 'request' &&
                                                                    <div className="mt-3">
                                                                        <Button
                                                                            className="btnTyp9 approve mr-4"
                                                                            onClick={() =>
                                                                                changeStatusReview(
                                                                                    item.rv_id,
                                                                                    1
                                                                                )
                                                                            }
                                                                        >
                                                                            APPROVE
                                                                        </Button>
                                                                        <Button
                                                                            className="btnTyp9 reject"
                                                                            onClick={() =>
                                                                                changeStatusReview(
                                                                                    item.rv_id,
                                                                                    2
                                                                                )
                                                                            }
                                                                        >
                                                                            REJECT
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

export default ReviewListPage;
/**
 * <Tab eventKey="request" title="Requested">
                            <div className="requests">
                                {this.state.reviewList &&
                                    this.state.reviewList.map((item) => {
                                        return (
                                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                <div className="mr-4">
                                                    <Image
                                                        src={item.u_image ? item.u_image : ""}
                                                        alt=""
                                                        className="r50"
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="col3 fw500 fs18 pb-1">
                                                                {item.fromname}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {moment(item.rv_datetime).format(
                                                                    "dddd MMM Do YYYY HH:mm"
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col81 fs15 fs400 pr-3">
                                                            Review for - {item.toname}
                                                        </div>
                                                    </div>

                                                    <div className="col28 fs14 fw400 pt-1">
                                                        {item.rv_text}{" "}
                                                    </div>

                                                    <div className="mt-3">
                                                        <Button
                                                            className="btnTyp9 approve mr-4"
                                                            onClick={() =>
                                                                this.changeStatusReview(
                                                                    item.rv_id,
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            APPROVE
                                </Button>
                                                        <Button
                                                            className="btnTyp9 reject"
                                                            onClick={() =>
                                                                this.changeStatusReview(
                                                                    item.rv_id,
                                                                    2
                                                                )
                                                            }
                                                        >
                                                            REJECT
                                </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Tab>
                        <Tab eventKey="completed" title="COMPLETED">
                            <div className="requests">
                                {this.state.reviewList &&
                                    this.state.reviewList.map((item) => {
                                        return (
                                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                <div className="mr-4">
                                                    <Image
                                                        src={item.u_image ? item.u_image : ""}
                                                        alt=""
                                                        className="r50"
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="col3 fw500 fs18 pb-1">
                                                                {item.fromname}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {moment(item.rv_datetime).format(
                                                                    "dddd MMM Do YYYY HH:mm"
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col81 fs15 fs400 pr-3">
                                                            Review for - {item.toname}
                                                        </div>
                                                    </div>

                                                    <div className="col28 fs14 fw400 pt-1">
                                                        {item.rv_text}{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Tab>
                        <Tab eventKey="reject" title="REJECTED">
                            <div className="requests">
                                {this.state.reviewList &&
                                    this.state.reviewList.map((item) => {
                                        return (
                                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                                                <div className="mr-4">
                                                    <Image
                                                        src={item.u_image ? item.u_image : ""}
                                                        alt=""
                                                        className="r50"
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="col3 fw500 fs18 pb-1">
                                                                {item.fromname}
                                                            </div>
                                                            <div className="fs14 fw400 col54 pb-1">
                                                                {moment(item.rv_datetime).format(
                                                                    "dddd MMM Do YYYY HH:mm"
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col81 fs15 fs400 pr-3">
                                                            Review for - {item.toname}
                                                        </div>
                                                    </div>

                                                    <div className="col28 fs14 fw400 pt-1">
                                                        {item.rv_text}{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Tab>
 */
/**
 * (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">Review Requests</div>
                  </div>
                  <div className="myprofile reviewrequest">
                    <div className="text-center user_tab">
                      <Tabs
                        activeKey={this.state.key}
                        defaultActiveKey="request"
                        onSelect={(key) => this.onChangeTab(key, "review")}
                      >
                        <Tab eventKey="request" title="Requested">
                          <div className="requests">
                            {this.state.reviewList &&
                              this.state.reviewList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {/* {console.log(item)} */
                                        //     {moment(item.rv_datetime).format(
                                        //         "dddd MMM Do YYYY HH:mm"
                                        //       )}
                                        //     </div>
                                        //   </div>
                                        //   <div className="col81 fs15 fs400 pr-3">
                                        //     Review for - {item.toname}
                                        //   </div>
                                        // </div>

                //                         <div className="col28 fs14 fw400 pt-1">
                //                           {item.rv_text}{" "}
                //                           {/* <span className="col40 fw500 pointer">
                //                             Read more...
                //                           </span> */}
                //                         </div>

                //                         <div className="mt-3">
                //                           <Button
                //                             className="btnTyp9 approve mr-4"
                //                             onClick={() =>
                //                               this.changeStatusReview(
                //                                 item.rv_id,
                //                                 1
                //                               )
                //                             }
                //                           >
                //                             APPROVE
                //                           </Button>
                //                           <Button
                //                             className="btnTyp9 reject"
                //                             onClick={() =>
                //                               this.changeStatusReview(
                //                                 item.rv_id,
                //                                 2
                //                               )
                //                             }
                //                           >
                //                             REJECT
                //                           </Button>
                //                         </div>
                //                       </div>
                //                     </div>
                //                   );
                //                 })}
                //             </div>
                //           </Tab>
                //           <Tab eventKey="completed" title="COMPLETED">
                //             <div className="requests">
                //               {this.state.reviewList &&
                //                 this.state.reviewList.map((item) => {
                //                   return (
                //                     <div className="d-flex pt-4 pb-4 text-left border-grays">
                //                       <div className="mr-4">
                //                         <Image
                //                           src={item.u_image ? item.u_image : ""}
                //                           alt=""
                //                           className="r50"
                //                         />
                //                       </div>
                //                       <div className="pl-2">
                //                         <div className="d-flex justify-content-between">
                //                           <div>
                //                             <div className="col3 fw500 fs18 pb-1">
                //                               {item.fromname}
                //                             </div>
                //                             <div className="fs14 fw400 col54 pb-1">
                //                               {moment(item.rv_datetime).format(
                //                                 "dddd MMM Do YYYY HH:mm"
                //                               )}
                //                             </div>
                //                           </div>
                //                           <div className="col81 fs15 fs400 pr-3">
                //                             Review for - {item.toname}
                //                           </div>
                //                         </div>

                //                         <div className="col28 fs14 fw400 pt-1">
                //                           {item.rv_text}{" "}
                //                           {/* <span className="col40 fw500 pointer">
                //                             Read more...
                //                           </span> */}
                //                         </div>
                //                       </div>
                //                     </div>
                //                   );
                //                 })}
                //             </div>
                //           </Tab>
                //           <Tab eventKey="reject" title="REJECTED">
                //             <div className="requests">
                //               {this.state.reviewList &&
                //                 this.state.reviewList.map((item) => {
                //                   return (
                //                     <div className="d-flex pt-4 pb-4 text-left border-grays">
                //                       <div className="mr-4">
                //                         <Image
                //                           src={item.u_image ? item.u_image : ""}
                //                           alt=""
                //                           className="r50"
                //                         />
                //                       </div>
                //                       <div className="pl-2">
                //                         <div className="d-flex justify-content-between">
                //                           <div>
                //                             <div className="col3 fw500 fs18 pb-1">
                //                               {item.fromname}
                //                             </div>
                //                             <div className="fs14 fw400 col54 pb-1">
                //                               {moment(item.rv_datetime).format(
                //                                 "dddd MMM Do YYYY HH:mm"
                //                               )}
                //                             </div>
                //                           </div>
                //                           <div className="col81 fs15 fs400 pr-3">
                //                             Review for - {item.toname}
                //                           </div>
                //                         </div>

                //                         <div className="col28 fs14 fw400 pt-1">
                //                           {item.rv_text}{" "}
                //                           {/* <span className="col40 fw500 pointer">
                //                             Read more...
                //                           </span> */}
                //                         </div>
                //                       </div>
                //                     </div>
                //                   );
                //                 })}
                //             </div>
                //           </Tab>
                //         </Tabs>
                //       </div>
                //     </div>
                //   </Col>
                // )
