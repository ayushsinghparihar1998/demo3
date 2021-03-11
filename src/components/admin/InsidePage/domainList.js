import React from 'react';
import { Col, Form, Button, Image, Table } from 'react-bootstrap';

const DomainListPage = ({ Editicon, changepath, domainList, modifyDomainContent, deleteId }) => {
    console.log("DOMAIN LIST")
    return (
        <Col md={8} lg={9} className="pl-1">
            <div className="corporateMember adminlistener d_detail">
                <div className="domainSave mb-4 pb-2">
                    <div>
                        <div className="fs22 col10 mb-1">List of Domains</div>
                    </div>
                    <div className="ml-auto">
                        <Button
                            variant="primary"
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                                changepath(`/adddomain/0`, "getDomainListing")
                            }
                        >
                            Add Domain
                </Button>
                    </div>
                </div>
                <Table bordered className="domainTable">
                    <thead>
                        <tr>
                            <th>Domain</th>
                            <th>No. of Employees</th>
                            <th>Total Audio(minutes)</th>
                            <th>Total Video(minutes)</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            domainList &&
                            domainList.map((item, index) => {
                                return (
                                    <tr>
                                        <td
                                            onClick={() =>
                                                changepath(
                                                    `/domainDetails/${item.cd_domain_name}/${item.cd_id}`,
                                                    "getDomainListing"
                                                )
                                            }
                                        >
                                            {item.cd_domain_name}
                                        </td>
                                        <td>{item.member_count}</td>
                                        <td>{item.cd_audio_min / 60}</td>
                                        <td>{item.cd_video_min / 60}</td>
                                        <td className="blogTables">
                                            <div>
                                                <span className="disabled text-center">
                                                    <Form.Check
                                                        type="switch"
                                                        id={"custom-switch" + index}
                                                        name={"status" + index}
                                                        label=""
                                                        onClick={(e) => {
                                                            modifyDomainContent(
                                                                item,
                                                                deleteId,
                                                                "superadminchangestatusCorporatedomain",
                                                                item.cd_status === "1" ? "0" : "1"
                                                            );
                                                        }}
                                                        checked={item.cd_status === "1"}
                                                    />
                                                </span>
                                                <span className="pr-2 fs13 col47 fw500">
                                                    {item.cd_status === "1"
                                                        ? "Deactivate"
                                                        : "Activate"}
                                                </span>
                                            </div>

                                            <div>
                                                <span className="mr-2">
                                                    <Image
                                                        src={Editicon}
                                                        alt=""
                                                        onClick={() =>
                                                            changepath(
                                                                `/adddomain/${item.cd_id}`,
                                                                "getDomainListing"
                                                            )
                                                        }
                                                    />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        </Col>
    )
}

export default DomainListPage;
