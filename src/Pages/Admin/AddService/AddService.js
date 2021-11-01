import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://fast-cliffs-36644.herokuapp.com/services',data)
      .then(res=>{
          if(res.data.insertedId){
              alert('added successfully')
              reset();
          }
      })
  }
    
    return (
        <div className="add-service">
            <h3 className="text-center">added a servics</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}placeholder="name" />
      <br />

      <textarea {...register("description")} placeholder="description" />
      <br />
      <input type="number" {...register("price")} placeholder="price" />
      <br />
      <input  {...register("img")}  placeholder="image url"/>
      <br />
      <input type="submit" />
    </form>

        </div>
    );
};

export default AddService;
