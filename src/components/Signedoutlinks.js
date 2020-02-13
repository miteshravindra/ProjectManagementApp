import { NavLink } from 'react-router-dom';
import React from 'react';

const Signedoutlinks = ()=>{
    return(
        <ul className="right">
            <li><NavLink to="/">Sign Up</NavLink> </li>
            <li><NavLink to="/">Sign In</NavLink> </li>
        </ul>    
    )
}

export default Signedoutlinks;