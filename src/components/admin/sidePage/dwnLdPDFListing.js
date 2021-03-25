import React, { useEffect, useState } from 'react';
import ELPViewApiService from '../../../common/services/apiService';

const DownLoadPDFListing = () => {
    const [subscriberListing, setSubscriberListing] = useState([]);
    useEffect(() => {
        if (true)
            ELPViewApiService("superadminget_subscriberlist", { count: 10, offset: 1 })
                .then((result) => {
                    console.log("RESULT DOWNLOAD PDF ", result)
                    const data = result.data.data.subscriber_listing;
                    console.log("DATA LOADED ", data)
                    setSubscriberListing(data);
                })
                .catch((err) => console.log("error Occured", err));
    }, []);

    return (
        <>
            DOWNLOADED PDF LISTING
            <div>
                <div>
                    {
                        subscriberListing.map((subscribers) => <p>{subscribers?.s_email}</p>)
                    }
                </div>
                <div>Delete</div>
            </div>
        </>
    )
}
export default DownLoadPDFListing;