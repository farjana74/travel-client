import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import axios from 'axios'
import './Details.css';


const Details = () => {
const {user}=useAuth();
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();

    const onSubmit = data =>{
        fetch('https://fast-cliffs-36644.herokuapp.com/orders',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert('added successfully')
                reset();
            }
        })
        

        
    }

      



    const{detailsId}=useParams()
    const [book,setBook]=useState({})
    useEffect(()=>{
        fetch(`https://fast-cliffs-36644.herokuapp.com/services/${detailsId}`)
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div className="details bg-light">
            <div className="container  ">
            <div className="row my-5 justify-content-between">
<div className="col-md-6 my-auto">

<div className="card w-100 border shadow-lg">
  <img src={book.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text fs-5 text-muted">{book.description}
    We save you time, and shoulder the stress of planning the perfect family vacation. Our Experienced Travel Agents Will Help You Enjoy Your next Trip. Call Today! Exclusive Travel Deals. Europe Travel Deals. Luxury Travel Specialists. Ocean Cruise Specialists. River Cruise
    </p>
  </div>
</div>

</div>

<div className="col-md-4">
    <h3 className="my-2 fs-3 fw-bold  text-center">Please place your order</h3>
<form onSubmit={handleSubmit(onSubmit)
} className=" submit border text-center p-3 bg-light shadow-lg">
      
      <input defaultValue={user.displayName} {...register("name")} />
      <br />
      <br />
      <input defaultValue={user.email} {...register("email")} />
      
      {errors.email && <span>This field is required</span>}
      <br />
      <br />
      <input {...register("Address")} placeholder="Address" />
      <br />
      <br />
      <input {...register("Price")} placeholder="Price" />
      <br />
      <br />
      <input {...register("Travel place")} placeholder="Travel place" />
      <br />
      <br />
      <input  {...register("img")}  placeholder="image url"/>
      <br />
      <br />
      <input type="number" {...register("Phone")} placeholder="phone" />
      <br />
      <br />
     
      
      <input  className="bg-primary text-white p-3 rounded " type="submit" />
    </form>
</div>


            </div>

           
            


        </div>
        </div>
    );
};

export default Details;