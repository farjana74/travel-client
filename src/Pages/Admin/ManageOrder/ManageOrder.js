import React from 'react';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
// import { useEffect } from 'react';

const ManageOrder = () => {
    const[manage,setManage]=useState([])
    // const [admin,setAdmin] = useState(false);
    useEffect(()=>{
        fetch('https://fast-cliffs-36644.herokuapp.com/manageOrder')
        .then(res=>res.json())
        .then(data=>setManage(data))
    },[])
    // / delete usee
    const handleDelete=id=>{
    const url = `https://fast-cliffs-36644.herokuapp.com/orders/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        alert('Deleted succesfully')

        const remainingUsers = manage.filter(user=>user._id!==id)
        setManage(remainingUsers)
        
      }
      
    
    })
    }




   
    
    return (
        // <div>
        //     <h3>this manse order</h3>
        //     <h2>this is manage{manage.length}</h2>
        // </div>



        <div>
      <h1>Manage order {manage?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Price</th>
              
              <th>img url</th>
              <th>phone</th>
          </tr>
        </thead>
        {manage?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.Adress}</td>
              <td>{pd?.Price}</td>
              <td>{pd?.img}</td>
              <td>{pd?.Phone}</td>
              <button onClick={()=>handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default ManageOrder;