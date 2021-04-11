import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from "react-router";
import ELPViewApiService from '../../../common/services/apiService';

const KitsDetailSA = () => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const [kitObj , setKitObj] = useState();
    const goBack = () => history.push('/admin',location.state);

    useEffect(()=>{
        ELPViewApiService("superadminget_kitsdetails", {kt_id: id}).then((result) => {
            
            if (result && result.status === 200) {
                console.log("result", result, result.data.data.kits_details_listing[0]);
                setKitObj(result.data.data.kits_details_listing[0]);
            }
          }).catch((error) => console.log(error));
    },[id])
    if(!kitObj){
        return 'Loading ...'
    }
    return (
        <>
            Hello
            <button onClick={goBack}>GoBack</button>
            <div>
                <div>Kit Name : {kitObj.kt_name}</div>
                <div>Kit OverView : {kitObj.kt_overview}</div>
                <div>Kit Description : {kitObj.kt_desc}</div>
                <div>Kit Sub Heading : {kitObj.kt_subheading}</div>
                <div> 
                    KITS Months :
                    {
                        kitObj.month_array.map((kitsMonth)=>
                        <>
                            <div> KIT MONTH : {kitsMonth.kp_max_range_month}</div>
                            <div> KIT PRICE : {kitsMonth.kp_price}</div>
                            <div> Kit DISCOUNTED PRICE : {kitsMonth.kp_discount_price}</div>
                        </>
                        )
                    } 
                </div>
                <div>
                    KITS IMAGE : 
                    <Image src={kitObj.kt_image_url} width={100} height={100}/>    
                </div>
            </div>
        </>
    )
}

export default KitsDetailSA;