import React, { Component } from "react";
import './App.css';
import logo from './images/cutout_logo.png';

class MyNavBar extends Component {

    constructor(props) {
        super(props);
        this.handleNavClick = this.handleNavClick.bind(this);
      }
     
      handleNavClick(event, newPage) {
        this.props.changePage(newPage);
        // prevent reload of page caused by clicking links
        event.preventDefault();
      }

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg nav fadeIn third">
      <a href="#"> <img src={logo} style={{width:80, marginTop: -7}} className="navbar-brand title" onClick={(event) => this.handleNavClick(event, 'home')} /></a>        
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'home')}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'login')}>Login</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-color my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
    );
  }
}

export default MyNavBar;
