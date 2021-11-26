import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
// import MyOrder from './MyOrder';

const MyOrder = () => {
    const{user}=useAuth();
    const[order,setOrder]=useState([]);
    const[admin,setAdmin]=useState(false)
    useEffect(()=>{
        fetch(`https://fast-cliffs-36644.herokuapp.com/${user?.email}`)

        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user.email])
    
    console.log(order)
// delete usee
const handleDelete=id=>{
const url = `https://fast-cliffs-36644.herokuapp.com/${id}`;
fetch(url,{
  method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  if(data.deletedCount>0){
    alert('Deleted succesfully')
    const remainingUsers = order.filter(user=>user._id!==id)
    setOrder(remainingUsers)
    setAdmin(!admin);
  }
  else{
    setAdmin(false)
  }

})
}
   
    return (
        // <div>
            
        //     <h5>my orde{order.length}</h5>
        //     <h5>my orde{order.name}</h5>
        
        // </div>
        <div>
        <h1 className="text-primary text-center">My Order {order?.length}</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Price</th>
              <th>Place</th>
              
              
              <th>phone</th>
            </tr>
          </thead>
          {order?.map((tm, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{tm?.name}</td>
                <td>{tm?.email}</td>
                <td>{tm?.address}</td>
                <td>{tm?.price}</td>
                <td>{tm?.place}</td>
                
                <td>{tm?.phone}</td>
                <button onClick={()=>handleDelete(tm._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>



    );
};

export default MyOrder;