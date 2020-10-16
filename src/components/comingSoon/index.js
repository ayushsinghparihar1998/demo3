import React from 'react';
import NavBar from "../core/menu";

const comingText = require('../../assets/images/coming_img.png')
const ComingSoon = (props) => {
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="coming_soon">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={comingText} alt="coming_img" className="comings" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ComingSoon