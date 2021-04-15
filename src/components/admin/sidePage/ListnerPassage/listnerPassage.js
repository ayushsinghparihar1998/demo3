import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Deleteicon from "../../../../assets/images/delete_icon.svg";
import Editicon from "../../../../assets/images/edit_icon.svg";
import Visibilitys from "../../../../assets/images/visibilitys.png";
import { showSuccessToast } from '../../../../common/helpers/Utils';
import ELPViewApiService from '../../../../common/services/apiService';

const ListnerPassage = () => {
    const [listPas, setListPass] = useState();
    const history = useHistory();
    const openCreatePassage = (id) => history.push(`/createPassage/${id}`);
    const openViewPassage = (id) => history.push(`/viewPassage/${id}`);

    const getListPara = () => {
        ELPViewApiService('superadminget_listnerparagraphtest', { "count": 10, "offset": 1 })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", response.data.data);
                    setListPass(data.listener_paragraph_test)
                }
            })
    }
    useEffect(() => {
        getListPara();
    }, []);

    const deletePassage = (id) => {
        console.log("GET ID" , id)
        const data = {lp_id:id,  lp_status:"3"};
        ELPViewApiService('superadminparagraph_testdeletestatus',data)
        .then((response)=>{
            console.log("RESPONSE", response);
            if (response.data.status === 'success') {
                console.log("DATA ", response.data);
                showSuccessToast(response.data.message);
                getListPara();
            }
        })
        .catch((err)=>new Error(` Error ocured ${err}`))
    }

    const changeParaStatus = (id , status) => {
        console.log("GET ID" , id)
        const data = {lp_id:String(id),  lp_status:String(status)};
        ELPViewApiService('superadminparagraph_testchangestatus',data)
        .then((response)=>{
            console.log("RESPONSE", response);
            if (response.data.status === 'success') {
                console.log("DATA ", response.data);
                showSuccessToast(response.data.message);
                getListPara();
            }
        })
        .catch((err)=>new Error(` Error ocured ${err}`))
    }

    if (!listPas) {
        return (
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
                    No Passage Available .
                </div>
            </Col>
        )
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
                        <div className="adminlistener p-4 mb-3" key={list.lp_id}>
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
                                                            id={"custom-switch".concat(list.lp_id)}
                                                            type="switch"
                                                            name="status"
                                                            key={list.lp_id}
                                                            checked={list.lp_status === "1"}
                                                            label={list.lp_status === "1" ? "Enable" : "Disabled"}
                                                            onChange={()=>{
                                                                changeParaStatus(list.lp_id ,list.lp_status === '1' ? '2' : '1') 
                                                            }}
                                                        />
                                                    </span>
                                                    <span className="mr-3">
                                                        <Image
                                                            src={Visibilitys}
                                                            alt=""
                                                            className="pointer"
                                                            onClick={()=>{openViewPassage(list.lp_id)}}
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
                                                            onClick={()=>{deletePassage(list.lp_id)}}
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