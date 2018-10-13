import React from "react";
const Header =() => {
    return (<header id="header" className="container mt-1">
        <div className="header-overlay">
            <h1 className="header-primary">
                <span className="header-primary--main">Laptop Donations</span>
                <span className="header-primary--sub">Empowering the world daily</span>
            </h1>
            <a href="#" className="btn btn-dark btn--white btn--animated mt-3">Start Your Journey</a>
        </div>
    </header>
    );
};

export default Header;