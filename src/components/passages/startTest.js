import React, { useEffect, useState } from "react";
import {
    Container, Button
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import ELPViewApiService from "../../common/services/apiService";
import { useHistory, useParams } from "react-router";

const StartTest = (props) => {
    const history = useHistory();
    const { testId } = useParams();
    const [testData, setTestData] = useState();
    useEffect(() => {
        ELPViewApiService('getlistner_paragraphtest', { count: 10, offset: 1, listner_paragraph_id: testId })
            .then((response) => {
                console.log("RESPONSE", response);
                if (response.data.status === 'success') {
                    const data = response.data.data;
                    console.log("DATA ", data);
                    setTestData(data.listener_paragraph_test.find(({lp_id})=>lp_id === testId));
                }
            })
            .catch((err) => new Error(`Error occured because ${err}`))
    }, [testId])

    const takeTest = () => history.push(`/listner-test/${testData.lp_id}`)
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="ngo_services plans passageLayout">
                <Container>
                    <div className="ngo_listing mt-4 mb-4">
                        <div className="fs28 fw600 col8 w-100 mb-2 mt-4">
                            {testData?.lp_title}
                        </div>
                        <div className="fs16 fw300 mb-5">
                            {testData?.lp_description}
                        </div>
                        <div className="mt-5 mb-5">
                            <Button type="button" onClick={takeTest} className="btnTyp5">Start Test</Button>
                        </div>

                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
export default StartTest;

