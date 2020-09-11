// JavaScript source code
import React from 'react'; 
import { Link } from 'react-router-dom';

export function Logout(props) {

    const handleClick = event => {
        localStorage.clear();
        console.log(localStorage.getItem("currentUser"));
    }

    return (
        <li className="nav-item">
            <Link to="/home" className="nav-link" onClick={ handleClick }>Logout</Link>
        </li>
    );
}