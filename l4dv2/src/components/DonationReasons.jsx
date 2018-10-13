import React from "react";

const DonationReasons =() => {
    return (<section id="boxes" className="py-5 bg-dark container">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-center border-success mb-resp">
                        <div className="card-body">
                            <i className="fas fa-gift fa-5x"></i>
                            <h3 className="text-success">Giving</h3>
                            <p className="text-muted">Giving other people a means to craft their skills will help shape a better tomorrow that this world really needs</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center text-white bg-success mb-resp">
                        <div className="card-body">
                            <i className="far fa-handshake fa-5x"></i>
                            <h3 className="text-white">Sharing</h3>
                            <p>That laptop you no longer need or use might help someone who is truly in need of it</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center border-success mb-resp">
                        <div className="card-body">
                            <i className="fas fa-graduation-cap"></i>
                            <i className="fas fa-graduation-cap fa-5x"></i>
                            <h3 className="text-success">Education</h3>
                            <p className="text-muted">College is expensive.Most students need a laptop to train themselves for in-demand skills</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center text-white bg-success">
                        <div className="card-body">
                            <i className="fas fa-globe fa-5x"></i>
                            <h3 className="text-white">Play Your Part</h3>
                            <p>The world needs to eradicate poverty,unemployment and disease.That laptop you own could be the first step.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default DonationReasons;
