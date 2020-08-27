import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Restaurant from './pages/RestaurantProfile';

class PageContent extends Component {

  changePage(page) {
    switch(page) {
      case 'home':
        return <HomePage/>;
      case 'login':
        return <Login/>;
      case 'restaurant':
        return <Restaurant />;
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