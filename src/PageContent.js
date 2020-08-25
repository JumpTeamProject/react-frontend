import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

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