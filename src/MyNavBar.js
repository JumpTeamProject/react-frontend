import React, { Component } from "react";

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            href="#"
            className="navbar-brand"
            onClick={(event) => this.handleNavClick(event, "home")}
          >
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* use lamda below to make sure event and extra parameter is passed */}
              <a
                href="#"
                className="nav-link"
                onClick={(event) => this.handleNavClick(event, "page2")}
              >
                Page2 <span className="sr-only">(current)</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavBar;
