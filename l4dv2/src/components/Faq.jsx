import React from "react";
import Accordion from "../components/Accordion";

const Faq = () => {
    return (<div>
        <p className="h2 bg-success p-2 container text-center mt-1 mb-0">Frequently Asked Questions</p>
        <div id="faq" className="container">
            <Accordion />
        </div>
    </div>
        
    );
};

export default Faq;