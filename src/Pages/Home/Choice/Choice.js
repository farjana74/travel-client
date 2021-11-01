import React from 'react';
import offer1 from '../../../images/offer-1.png';
import offer2 from '../../../images/offer-2.png';
import offer3 from '../../../images/offer-3.png';

import './Choice.css'

const Choice = () => {
    return (
        <div className="container my-5">
            <h5 className="text-center text-primary">Special offer</h5>
<h1 className="text-center"> Our Most Popular And Best Adventures</h1>

<div className="row   my-5   choice justify-content-between">

    <div className="col-md-3 shadow border card ">
        <img className="w-100" src={offer1} alt="" />
        <div className="  my-2 d-flex justify-content-between">
            <div>
<h5>6 night</h5>
            </div>
            <div>
            <i class=" fs-5 far fa-star "></i>
            <i class=" fs-5 far fa-star"></i>
            <i class=" fs-5 far fa-star"></i>
            <i class=" fs-5 far fa-star"></i>
            </div>
        </div>
        <h3 className="text-primary my-3"> <i class="fas fa-space-shuttle "></i>Paris Hill TOwer</h3>
        <h4 className="fs-2 my-3 ">$150</h4>
    </div>
    <div className="col-md-3 border shadow card">
<img className="w-100"  src={offer2} alt="" />

<div className="  my-2 d-flex justify-content-between">
            <div>
<h5>6 night</h5>
            </div>
            <div>
            <i class=" fs-5 far fa-star "></i>
            <i class=" fs-5 far fa-star"></i>
            <i class=" fs-5 far fa-star"></i>
            <i class=" fs-5 far fa-star"></i>
            </div>
        </div>
        <h3 className="text-primary my-3"> <i class="fas fa-space-shuttle "></i>Paris Hill TOwer</h3>
        <h4 className="fs-2 my-3 ">$150</h4>
    </div>
    <div className="col-md-3  border card shadow">
<img className="w-100"  src={offer3} alt="" />
<div className="  my-2 d-flex justify-content-between">
            <div>
<h5>6 night</h5>
            </div>
            <div>
            <i class=" fs-5 far fa-star "></i>
            <i class=" fs-5 far fa-star"></i>
            <i class=" fs-5 far fa-star"></i>
            <i class=" fs-5 far fa-star"></i>
            </div>
        </div>
        <h3 className="text-primary my-3"> <i class="fas fa-space-shuttle "></i>Paris Hill TOwer</h3>
        <h4 className="fs-2 my-3">$150</h4>
    </div>
</div>





        </div>
    );
};

export default Choice;