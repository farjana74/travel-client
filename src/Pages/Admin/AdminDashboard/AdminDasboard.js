import React from 'react';
import './AdminDasboard.css'
import { useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from './../MyOrder/MyOrder';
import AddService from '../AddService/AddService';

const AdminDasboard = () => {
    const[admin,setAdmin]=useState('manageOrder')
    return (
        <div className="container-fluid">
            <h2 className="text-center fs-2 fw-bold">Admin dashboard</h2>
<div className="row my-5  ">

    <div className="col-md-3 border admin shadow-lg board   ">
    <li
                    onClick={() => setAdmin("manageOrder")}
                    className="admin-menu p-2"
                  >
                    Manage order
                  </li>

                  <li
                    onClick={() => setAdmin("myOrder")}
                    className="admin-menu p-2"
                  >
                    My Order
                  </li>

                  <li
                    onClick={() => setAdmin("addService")}
                    className="admin-menu p-2"
                  >
                    Add Service
                  </li>
                  

    </div>
    <div className="col-md-7 ">
    {admin === "manageOrder" &&<ManageOrder></ManageOrder>}
    {admin === "myOrder" && <MyOrder></MyOrder>}
              {admin === "addService" && <AddService></AddService>}
              
    </div>
</div>

        </div>
    );
};

export default AdminDasboard;