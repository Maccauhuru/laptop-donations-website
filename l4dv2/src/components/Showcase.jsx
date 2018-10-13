import React from "react";
import Hero from "./Hero-Options";

const Showcase = () => {
    return (
        <section id="showcase-section" className="container showcase py-3 bg-dark text-white border border-success">
            <div>
                <p className="lead text-center">Getting started only takes <strong>3</strong> simple steps.</p>
                <Hero />
            </div>
        </section>
    );
};

export default Showcase;