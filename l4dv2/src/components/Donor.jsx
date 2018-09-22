/* global require */
import React from "react";

const Donor = () => {
    return (<div className="card mt-5 text-dark">
        <div className="card-body">
            <img src={require("../img/person3.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3" />
            <h3>James Frost</h3>
            <h5 className="text-muted">Donor | Member Since XXXX</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </div>
    );
};

export default Donor;