import React from 'react';
import { Row } from 'react-bootstrap';
import Single from './../Single/Single';
import { useState } from 'react';
import {useEffect}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Booking = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    
const [service,setService]=useState([])
    useEffect(()=>{
fetch('https://fast-cliffs-36644.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setService(data))


    },[])
    return (
        <div className="container">
            <h5 data-aos="fade-up" className="text-primary text-center mt-5 ">Choose Your Package</h5>
            <h1 data-aos="flip-left"  className="fs-1 mb-5 fw-bold text-muted text-center">Select Your Best Package For Your Travel</h1>
            <br />
            <br />

            <Row xs={1} md={3} className="g-4">
{
    service.map(services=><Single 
    services={services}
    
    ></Single>)
}


  
</Row>


        </div>
        
    );
};

export default Booking;