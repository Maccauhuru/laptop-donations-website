/* global require */
import React from "react";
import Donor from "./Donor";


const LatestDonor= () => {
 
    return (
        <section id="latest-donor" className="latest py-5">
            <h3 className = "text-dark">Latest Donations Activity</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"><Donor /></div>
                    <div className="col-md-4"><img src={require("../img/Green_RIght_Arrow.jpg")} className="pr-2 mt-5" width="250" height="250" alt="" /></div>
                    <div className="col-md-4"><Donor /></div>
                </div>  
            </div>
        </section>
    );
};

export default LatestDonor;