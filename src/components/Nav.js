import { Link } from 'react-router-dom';
import React from 'react';
import Signedinlinks from './Signedinlinks';
import Signedoutlinks from './Signedoutlinks';

const Nav = ()=>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                 <Link to="/" className="brand-logo"> Project Management</Link>
                 <Signedinlinks/>
                 <Signedoutlinks/>
            </div>
        </nav>
    )
}

export default Nav;