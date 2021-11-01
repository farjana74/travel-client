import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container-fluid about">
           


        <div className="container ">
        <h2 className="text-center fs-2 text-white my-5">WHAT CUSTOMERS SAY</h2>
        <div className="row my-auto justify-content-between">
       
            <div className="col-md-3 border bg-light shadow-lg rounded p-4">
            
        <h2 className="my-2 text-primary"> Handpicked Hotels</h2>
        <h6>Handpicked Hotels dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</h6>
            </div>
            <div className="col-md-3 border bg-light shadow-lg rounded p-4">
            
        <h2 className="my-2 text-primary">World Class Service</h2>
        <h6>World Class Service dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</h6>

            </div>
            <div className="col-md-3 border bg-light shadow-lg rounded p-4">
            <h2 className="my-2 text-primary">Best Price Guarantee</h2>
        <h6>Best Price Guarantee dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</h6>
            </div>
        </div>

    </div>
</div>

        

    );
};

export default About;