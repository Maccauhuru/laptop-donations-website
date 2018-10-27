import React, { Component } from "react";

class JoinForFree extends Component {
    render() {
        return (
            <section id="sign-up" className="sign-up py-5 container">
                <div>
                    <h1>Join For Free Today!</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="btnContainer container">
                                    <div className="googleBtn">
                                        <button className="btn btn-lg btn-danger btn-block mb-4 mt-4"><i className="fab fa-google-plus-g mr-5"></i>Sign up with Google+</button>
                                    </div>
                                    <div className="facebookBtn">
                                        <button className="btn btn-lg btn-primary btn-block mb-4 mt-4"><i className="fab fa-facebook-f mr-5"></i>Sign up with Facebook</button>
                                    </div>
                                    <div className="twitterBtn">
                                        <button className="btn btn-lg btn-success btn-block mb-4 mt-4"><i className="fab fa-twitter mr-5"></i>Sign up with Twitter</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="signupForm">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="email">Enter Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email">
                                            </input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Enter Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password">
                                            </input>
                                        </div>
                                        <div>
                                            <input type="button" className="btn btn-primary btn-lg btn-block" value="Submit">
                                            </input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default JoinForFree;