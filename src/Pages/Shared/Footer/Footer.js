import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bor p-3">
            <div className="row ">
                <div className="  col-md-3 fs-6 text-white">
                    <h2 className="my-3 ">Contact us</h2>
                    <div className="d-flex fs-6 text-center mx-2 my-3 ">
                        <div>
                        <i class="me-3 fas fa-envelope"></i>
                        </div>
                        <div>
            <h5>csefaraja74@gmail.com</h5>
            <h5>popy5898@gmail.com</h5>


                        </div>
                    </div>
                    <div  className="d-flex  text-center mx-2 my-3">
                        <div>
                        <i class=" me-3 fas fa-mobile-alt"></i>
                        </div>
                        <div>
                            <h5>01757788888</h5>
                            <h5>01858346843u6</h5>
                        </div>
                    </div>
                    <div className="d-flex text-center mx-2 my-3">
                        <div>
                        <i class=" me-3 fas fa-location-arrow  "></i>
                        </div>
                        <div>
                            <h5>
                                Mirpur dhaka,
                            
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="  mx-3 col-md-2 ">
<h2 className="text-center text-white my-3 ">Quick links</h2>

<ul className="fs-5 text-white my-2">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Doctor</li>
  
</ul>




                </div>
                <div className=" col-md-2  mx-3 ">
                <h2 className="text-center text-white my-3">Our Services</h2>

                <ul className="fs-5 text-white my-2">
                    <li>Best Service</li>
                    <li>Extra Care</li>
                    <li>Hijama Place</li>
                    <li>Cost Manage</li>
                  
                </ul>
                </div>
                <div className=" col-md-2  mx-3">
                <h2 className="text-center text-white my-3">Feedback</h2>

              <form className="text-center "> 
              <input type="text" name="" id="" placeholder="your name" required/> 
               <br />
               <br />
               <input type="text" name="" id="" placeholder="your email" required/> 
              
               <br />
               <br />
               <button className=" text-white ps-3 pe-3 pt-2 pb-2 button rounded-pill">submit</button>
              </form>
                </div>
               
            </div>
            <hr />

            <div className="last-footer shadow-lg">
                <p>© 2021 Qode Interactive, All Rights Reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;