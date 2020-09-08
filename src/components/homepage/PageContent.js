import React, { Component } from 'react';
import HomePage from './HomePage';
import Login from '../nav-login/Login';


class PageContent extends Component {

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

    render() {
        const myPage = this.changePage(this.props.page);
        return myPage;
    }
}

export default PageContent;