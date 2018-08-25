import React from 'react';
import Hero from './Hero-Options';

const Showcase = () =>{
    return (
        <section id="showcase-section" className="showcase py-5">
            <div>
                <p className="lead pb-5 text-white text-center showcase-heading">The sharing and receiving process only takes <strong>3</strong> simple steps.</p>
                    <Hero />
            </div>
        </section>
        );
}

export default Showcase;