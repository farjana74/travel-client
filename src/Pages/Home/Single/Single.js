import React from 'react';
import { Link } from 'react-router-dom';
import './Single.css';
import {useEffect}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// https://fast-cliffs-36644.herokuapp.com/
const Single = ({services}) => {
  useEffect(()=>{
    AOS.init({duration:2000});
},[])
    console.log(services);
    const {name,price,img,description,_id}=services
    return (
        <div class="col cards">
    <div data-aos="fade-up" class="card w-100 shadow-lg carder">
      <img className="w-50 text-center" src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class=" text-muted card-text">{description}</p>
        <p>${price}</p>
       
        <Link to={`/details/${_id}`}><button className="text-center me-auto bg-primary text-white shadow-lg border-0 rounded-pill ps-4 pe-4 pt-2 pb-2">Booking</button></Link>

       {/* <Link to={`/details/${id}`}><button type="button" class="btn  text-primary btn-lg">Details </button></Link>
      */}
        
      </div>
    </div>
    {/* <button className="text-center me-auto">submit</button> */}
  </div>


    );
};

export default Single;
