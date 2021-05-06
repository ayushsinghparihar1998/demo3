import React, { useEffect, useState } from "react";
import {
    Container, Button
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import ELPViewApiService from "../../common/services/apiService";
import { useHistory } from "react-router";
import ShowAlertModal from "../modals/ShowAlertModal";

const PassageTest = (props) => {
    const history = useHistory();
    const [listParaTest, setListPara] = useState();
    const [showPopUp , setShowPopUp] = useState(false);

    const takeToTest = (id) =>{ 
        ELPViewApiService('listnerDashboardDetail')
        .then((response) => {
            if (response.data.status === 'success') {
                const data = response.data.data;
                const listnerTest = data?.dashboard_list?.u_listner_test;
                if(listnerTest === '2'){
                    history.push(`/listner-start-test/${id}`) ;
                }
                else{
                    setShowPopUp(true);
                }
            }
        })
        .catch((err) => new Error(`Error occured because ${err}`))
    };

    const closePopup = () =>{ history.push(`/`);};

    useEffect(() => {
        ELPViewApiService('getlistner_paragraphtest', { count: 10, offset: 1 })
            .then((response) => {
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    setListPara(data.listener_paragraph_test);
                }
            })
            .catch((err) => new Error(`Error occured because ${err}`))
    }, [])
    return (
        <>
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
            <ShowAlertModal 
                show={showPopUp}
                close={closePopup}
                buttonMessage='Okay'
                message='You are not allowed to take test . Please Contact SuperAdmin'
            />
            <Footer />
        </div>
        </>
    );
}
export default PassageTest;

