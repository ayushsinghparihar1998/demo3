import React from 'react';
import { Tab, Tabs, Image, Button, Col } from 'react-bootstrap';
import moment from "moment";

const BlockListPage = ({ onChangeTab, activeKey, blockList, blockUserStatus }) => {
    console.log("BLOCKPAGR")
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
                <div className="fs22 fw600 col10">Report Requests</div>
            </div>
            <div className="myprofile reviewrequest">
                <div className="text-center user_tab">
                    <Tabs
                        defaultActiveKey="request"
                        activeKey={activeKey}
                        onSelect={(key) => onChangeTab(key, "block")}
                    >
                        {
                            renderEvent.map((renderEvent) => {
                                return (
                                    <Tab eventKey={renderEvent.eventKey} title={renderEvent.eventKey.toUpperCase()}>
                                        <div className="requests">
                                            {
                                                blockList &&
                                                blockList.map((item) => {
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
                                                                            {moment(item.br_datetime).format(
                                                                                "dddd MMM Do YYYY HH:mm"
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col81 fs15 fs400 pr-3">
                                                                        Review for - {item.toname}
                                                                    </div>
                                                                </div>

                                                                <div className="col28 fs14 fw400 pt-1">
                                                                    {item.br_comment}{" "}

                                                                </div>
                                                                {
                                                                    renderEvent.eventKey === 'request' &&
                                                                    <div className="mt-3">
                                                                        <Button
                                                                            className="btnTyp9 approve mr-4"
                                                                            onClick={() =>
                                                                                blockUserStatus(item.br_id, 1)
                                                                            }
                                                                        >
                                                                            APPROVE
                                                                        </Button>
                                                                        <Button
                                                                            className="btnTyp9 reject"
                                                                            onClick={() =>
                                                                                blockUserStatus(item.br_id, 2)
                                                                            }
                                                                        >
                                                                            REJECT
                                                                        </Button>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
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

export default BlockListPage;

/**
 *
 *
 */