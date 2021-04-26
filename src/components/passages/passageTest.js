import React, { useEffect, useState } from "react";
import {
    Container, Button
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import ELPViewApiService from "../../common/services/apiService";
import { useHistory } from "react-router";

const PassageTest = (props) => {
    const history = useHistory();
    const [listParaTest, setListPara] = useState();

    const takeToTest = (id) => history.push(`/listner-start-test/${id}`) ;

    useEffect(() => {
        ELPViewApiService('getlistner_paragraphtest', { count: 10, offset: 1 })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
                    setListPara(data.listener_paragraph_test);
                }
            })
            .catch((err) => new Error(`Error occured because ${err}`))
    }, [])
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="ngo_services plans passageLayout">
                <Container>
                    <div className="ngo_listing mt-4 mb-4">
                        <div className="fs28 fw600 col8 w-100 mb-2 mt-4">
                            Passage Test
                    </div>
                        {/* <div className="fs16 fw300 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div> */}
                        <div>
                            <div className="PassagesList">
                                <div className="d-flex justify-content-between">
                                    {
                                        Array.isArray(listParaTest) &&
                                        listParaTest.map((para , index) =>
                                            <>
                                                <div className="d-flex" key={para.lp_id}>
                                                    <div className="minw-22 col8">{index+1}.</div>
                                                    <div>
                                                        <div className="col8 fw500 fs18 pb-1">{para.lp_title}</div>
                                                        <div className="fs16 fw400 col14 pb-1">Number of questions
                                                        <span className="fw500 ml-1">: {para.total_que_count}</span>
                                                        </div>
                                                        <div className="fs15 col14 fw300">
                                                            {para.lp_description}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col81 fs15 fs400 pr-3">
                                                    <Button 
                                                        type="button" 
                                                        className="btnTyp9 approve" 
                                                        onClick={()=>{takeToTest(para.lp_id)}}>TAKE TEST</Button>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
export default PassageTest;

/**
 * <div className="PassagesList">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="minw-22 col8">2.</div>
                                        <div>
                                            <div className="col8 fw500 fs18 pb-1"> HEALTH Management</div>
                                                <div className="fs16 fw400 col14 pb-1">Number of questions
                                                <span className="fw500 ml-1">: 120</span>
                                            </div>
                                            <div className="fs15 col14 fw300">
                                                Lorem dummy content Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.  <a className="readMores">Read more...</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col81 fs15 fs400 pr-3">
                                        <Button type="button" className="btnTyp9 approve">TAKE TEST</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="PassagesList">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="minw-22 col8">3.</div>
                                        <div>
                                            <div className="col8 fw500 fs18 pb-1"> HEALTH Management</div>
                                                <div className="fs16 fw400 col14 pb-1">Number of questions
                                                <span className="fw500 ml-1">: 120</span>
                                            </div>
                                            <div className="fs15 col14 fw300">
                                                Lorem dummy content Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.  <a className="readMores">Read more...</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col81 fs15 fs400 pr-3">
                                        <Button type="button" className="btnTyp9 approve">TAKE TEST</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="PassagesList">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="minw-22 col8">4.</div>
                                        <div>
                                            <div className="col8 fw500 fs18 pb-1"> Hospitality Management</div>
                                                <div className="fs16 fw400 col14 pb-1">Number of questions
                                                <span className="fw500 ml-1">: 120</span>
                                            </div>
                                            <div className="fs15 col14 fw300">
                                                Lorem dummy content Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.  <a className="readMores">Read more...</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col81 fs15 fs400 pr-3">
                                        <Button type="button" className="btnTyp9 approve">TAKE TEST</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="PassagesList">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="minw-22 col8">1.</div>
                                        <div>
                                            <div className="col8 fw500 fs18 pb-1"> Hospitality Management</div>
                                                <div className="fs16 fw400 col14 pb-1">Number of questions
                                                <span className="fw500 ml-1">: 120</span>
                                            </div>
                                            <div className="fs15 col14 fw300">
                                                Lorem dummy content Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.  <a className="readMores">Read more...</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col81 fs15 fs400 pr-3">
                                        <Button type="button" className="btnTyp9 approve">TAKE TEST</Button>
                                    </div>
                                </div>
                            </div>
 */

