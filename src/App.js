import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  changePage(page) {
    switch(page) {
      case 'home':
        return <HomePage/>;
      case 'login':
        return <Login/>;
      default:
        return <HomePage/>;
    }
  }

  handleNavClick(event, newPage) {
    this.setState({
      page: newPage
    });

    // prevent reload of page caused by clicking links
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg nav fadeIn third">
        <a href="#" className="navbar-brand" onClick={(event) => this.handleNavClick(event, 'home')}>Chowzers</a>
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
            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {this.changePage(this.state.page)}

      </div>
      
    );
  }
}

export default App;
