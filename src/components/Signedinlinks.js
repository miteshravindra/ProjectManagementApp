import { NavLink } from 'react-router-dom';
import React from 'react';

const Signedinlinks = ()=>{
    return(
        <ul className="right">
            <li><NavLink to="/create">Create New Project</NavLink> </li>
            <li><NavLink to="/">Sign Out</NavLink> </li>
            <li><NavLink to="/" className="btn btn-floating pink ">MK</NavLink> </li>
        </ul>    
    )
}

export default Signedinlinks;