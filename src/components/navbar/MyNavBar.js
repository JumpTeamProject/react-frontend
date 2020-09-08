import React, { Component } from "react";
import '../../App.css';
import logo from '../../images/cutout_logo.png';
import SearchForm from "./SearchForm";

//import { Link } from 'react-router-dom';

class MyNavBar extends Component {

  constructor(props) {
      super(props);
      this.state = { showSearch: true };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

    handleNavClick(event, newPage) {
        this.props.changePage(newPage);
        if (newPage === 'home') {
            this.setState({ showSearch: true });
        } else {
            this.setState({ showSearch: false });
        }
    // prevent reload of page caused by clicking links
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg nav fadeIn second">
          <a href="#"> <img src={logo} style={{ width: 65, marginTop: -7 }} className="navbar-brand title" onClick={(event) => this.handleNavClick(event, 'home')} /></a>
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
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'restaurant')}>Restaurant</a>
              </li>

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
