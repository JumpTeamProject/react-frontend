import React, { Component } from "react";
import '../../App.css';
import logo from '../../images/cutout_logo.png';
import SearchForm from "./SearchForm";

import { Link } from 'react-router-dom';

class MyNavBar extends Component {

  constructor(props) {
      super(props);
      this.state = { showSearch: true };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

    handleNavClick(event, newPage) {
        this.setState({ showSearch: newPage });
    // prevent reload of page caused by clicking links
    //event.preventDefault();
  }

    render() {
        const cardClicked = localStorage.getItem("showSearch");

    return (
      <div>
        <nav className="navbar navbar-expand-lg nav fadeIn second">
                <Link to="/home"> <img src={logo} style={{ width: 65, marginTop: -7 }} className="navbar-brand title" onClick={(event) => this.handleNavClick(event, true)} /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                            <Link to="/home" className="nav-link" onClick={(event) => this.handleNavClick(event, true)}>Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                            <Link to="/login" className="nav-link" onClick={(event) => this.handleNavClick(event, false)}>Login</Link>
              </li>
              {/*<li className="nav-item">
                <a href="profile" className="nav-link" onClick={(event) => this.handleNavClick(event, 'restaurant')}>Restaurant</a>
              </li>*/}

              {/* <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li> */}
            </ul>

                    {this.state.showSearch && < SearchForm />}
          </div>
            </nav>
      </div>
    );
  }
}

export default MyNavBar;
