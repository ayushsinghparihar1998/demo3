import React , {useState , useEffect} from 'react';
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../../core/nav";
import Editicon from "../../../../assets/images/edit_icon.svg"; 
import { Link, useHistory, useParams } from "react-router-dom";    
import Footer from '../../../core/footer';
import ELPViewApiService from '../../../../common/services/apiService';


const ViewPassage = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const [passage, setPassage] = useState('');
    const [passDecribe, setPassDescribe] = useState('');
    const openCreatePassage = () => history.push(`/createPassage/${id}`);
    const openViewPassageQA = () => history.push(`/viewPassQA/${id}`);

    useEffect(() => {
        if (id !== "0") {
            ELPViewApiService('superadminget_detailslistnerparagraphtest', { lp_id: id })
                .then((response) => {
                    console.log("RESPONSE ", response)
                    if (response.data.status === "success") {
                        const data = response.data.data;
                        console.log("DATA ", data[0]);
                        setPassage(data[0].lp_title);
                        setPassDescribe(data[0].lp_description);
                        //{list.total_que_count}
                    }
                })
                .catch(err => new Error(`Error in Getting PARA ${err}`))
        }
    }, [id])

    return ( 
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props}  />
            </div>
        <div className="bg_lightBlue">             
        <Container>
            <Row>
            <Col md={3} className="pr-1">
            <div className="adminsidebar mt-4"> 
              <div className="inner_area">
                <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                  Quick Links
                </div>
                <div className="d-flex m-3 pb-3 border-bottom"> 
                  <div>
                    <div className="fs14 col28 fw500">
                      <Link to={{ pathname: `/admin` }}>Back</Link> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col> 
          <Col md={9} className="pl-1">
                <div className="profile_layout viewPassages mt-4 pt-4 pb-5">    
                        <div className="PassagesList">    
                            <div className="d-flex justify-content-between borderBots"> 
                                <div>
                                    <div className="col10 fw500 fs22 pb-1">{passage}</div>
                                    <div className="fs18 fw400 col14 pb-1">Number of questions 
                                    <span className="fw500 ml-1">: 120</span> 
                                    </div> 
                                </div>
                                <div className="col81 fs15 fs400 pr-3"> 
                                    <Button type="button" onClick={openCreatePassage} className="btnTyp12 approve">
                                        <Image src={Editicon} alt=""/> Edit Details</Button>       
                                </div>
                            </div> 
                            <div className="col14 fs16 fw400"> 
                                {passDecribe}
                            </div>
                        </div>
                        <div className="text-center mt-5 mb-5">
                            <Button type="button" className="btnTyp4" onClick={openViewPassageQA}>View Question & Answers</Button>    
                        </div> 
                </div> 
            </Col> 
            </Row>
            </Container> 
            </div>
            <Footer />
        </div>
    );
}

export default ViewPassage;