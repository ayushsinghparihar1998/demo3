import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Deleteicon from "../../../../assets/images/delete_icon.svg";
import Editicon from "../../../../assets/images/edit_icon.svg";
import Visibilitys from "../../../../assets/images/visibilitys.png";
import ELPViewApiService from '../../../../common/services/apiService';
const ListnerPassage = () => {
    const [listPas, setListPass] = useState();
    const history = useHistory();
    const openCreatePassage = (id) => history.push(`/createPassage/${id}`);

    useEffect(() => {
        ELPViewApiService('superadminget_listnerparagraphtest', { "count": 10, "offset": 1 })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", response.data.data);
                    setListPass(data.listener_paragraph_test)
                }
            })
    }, []);

    if (!listPas) {
        return 'Loading...'
    }
    
    return (
        <>
            <Col md={8} lg={9} className="pl-1">
                <div className="professor_search listBlogs VlogLists">
                    <Row className="mb-1">
                        <Col md={8}>
                            <div className="fs22 fw600 col10">
                                Listner's Passage
                          </div>
                            <div className="fw300 fs16 col14">
                                {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-right pro_cbtn">
                                <Button
                                    type="button"
                                    className="btnTyp5"
                                    onClick={()=>{openCreatePassage(0)}}
                                >
                                    create passage
                            </Button>
                            </div>
                        </Col>
                    </Row>

                </div>

                {
                    listPas.map((list) =>
                        <div className="adminlistener p-4 mb-3">
                            <div className="d-flex text-left">
                                <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                        <div className="w-100">
                                            <div className="d-flex w-100">
                                                <div className="col1 fw600 fs18 pb-1 w-40">
                                                    {list.lp_title}
                                                    </div>
                                                <div className="d-flex ml-auto w-60 justify-content-end buttonTypes">
                                                    <Button
                                                        type="button"
                                                        className="btn-btnTypAdd btnQa"

                                                    >
                                                        <span>
                                                            <i class="fa fa-plus"></i>
                                                        </span>
                                                        Add Question
                                                        </Button>
                                                    <span className="pr-3 disabled">
                                                        <Form.Check
                                                            id={"custom-switch".concat("item.as_id")}
                                                            type="switch"
                                                            name="status"
                                                            checked={list.lp_status === "1"}
                                                            label={list.lp_status === "1" ? "Enable" : "Disabled"}
                                                        // onChange={(val) => { this.superAdminChange_AssesStatus(item.as_id, item.lp_status == "1" ? "2" : "1"); console.log("Onchange", item.lp_status, item.lp_status == "1" ? "Enable" : "Disabled") }}
                                                        />
                                                    </span>
                                                    <span className="mr-3">
                                                        <Image
                                                            src={Visibilitys}
                                                            alt=""
                                                            className="pointer"
                                                        />
                                                    </span>
                                                    <span className="mr-3">
                                                        <Image
                                                            src={Editicon}
                                                            alt=""
                                                            className="pointer"
                                                            onClick={()=>{openCreatePassage(list.lp_id)}}
                                                        />
                                                    </span>
                                                    <span>
                                                        <Image
                                                            src={Deleteicon}
                                                            alt=""
                                                            className="pointer"

                                                        />
                                                    </span>
                                                </div>
                                            </div>


                                            <div className="mb-1">
                                                <span className="fs18 fw400 col14">
                                                    No. Of Questions :
                                                </span>
                                                {list.total_que_count}
                                            </div>
                                            <div className="d-flex elpCategory">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </Col>
        </>
    )
}
export default ListnerPassage;