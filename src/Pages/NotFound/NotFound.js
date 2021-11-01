import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="bg-light">
            <h4 className="text-center text-danger">This is not found</h4>
            {/* <img className="w-75 text-cente/r found" src={/} alt="" /> */}
            <Link to="/"><button>Go Back</button></Link>

        </div>
    );
};

export default NotFound;