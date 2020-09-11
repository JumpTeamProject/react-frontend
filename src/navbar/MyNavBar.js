import React from "react";
import '../App.css';
import logo from '../images/cutout_logo.png';
import SearchForm from "./SearchForm";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { Logout } from "./Logout";

const MyNavBar = props => {
    const location = useLocation();
    const [showSearch, setShowSearch] = useState(true);
    const [showLogin, setShowLogin] = useState(true);
    const [showLogout, setShowLogout] = useState(false);

    React.useEffect(() => {
        setShowSearch(location.pathname === "/home" || location.pathname === "/");
    }, [location]);

    React.useEffect(() => {
        setShowLogin(localStorage.getItem("currentUser") === null || localStorage.getItem("currentUser") === JSON.stringify({}) || localStorage.getItem("currentUser") === {});
    }, [localStorage.getItem("currentUser")]);

    React.useEffect(() => {
        setShowLogout(localStorage.getItem("currentUser") !== null && localStorage.getItem("currentUser") !== JSON.stringify({}) && localStorage.getItem("currentUser") !== {});
    }, [localStorage.getItem("currentUser")]);

    return (
      <div>
        <nav className="navbar navbar-expand-lg nav second">
                <Link to="/home"> <img src={logo} alt="logo" style={{ width: 65, marginTop: -7 }} className="navbar-brand title"  /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                            <Link to="/home" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {showLogin && < li className="nav-item"><Link to="/login" className="nav-link" >Login</Link></li>}
                        {showLogout && < Logout />}
            </ul>
                    {showSearch && < SearchForm />}
          </div>
            </nav>
      </div>
    );
}

export default MyNavBar;
