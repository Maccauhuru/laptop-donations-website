import React from "react";

const Navigation = () => {
    return (
        <header id="home">
            <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
                <div className="container">
                    <a href="#home" className="navbar-brand text-white">
                        <h3 className="d-inline align-middle">Laptop-Donations.Org</h3>
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link text-white">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#faq" className="nav-link text-white">FAQ </a>
                            </li>
                            <li className="nav-item">
                                <a href="#join-for-free" className="nav-link text-white">Contact</a>
                            </li>
                            <li className="nav-item d-none d-lg-block"> 
                                <a className="nav-link text-white">|</a>
                            </li>
                            <li className="nav-item">
                                <a href="#login" className="nav-link text-white">Login</a>
                            </li>
                            <li className="nav-item">
                                <a href="#signup" className="nav-link text-white">Sign Up</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navigation;