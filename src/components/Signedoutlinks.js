import { NavLink } from 'react-router-dom';
import React from 'react';

const Signedoutlinks = ()=>{
    return(
        <ul className="right">
            <li><NavLink to="/signup">Sign Up</NavLink> </li>
            <li><NavLink to="/signin">Sign In</NavLink> </li>
        </ul>    
    )
}

export default Signedoutlinks;