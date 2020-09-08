
import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Login from './darreal_login/Login';
import RestaurantProfile from './thien_profile/RestaurantProfile';

import MyNavBar from "./caroline_home/MyNavBar"
import PageContent from "./caroline_home/PageContent"
import './App.css';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
    // bind so you know you are calling the function that is in here.
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  render() {
    const webpage = this.state.page;
    return (
      //<Router>
        <div className="App">
          <MyNavBar changePage={this.changePage} />
          <PageContent page={webpage} />
          {/* <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={RestaurantProfile} />
          </Switch> */}
        </div>
      //</Router>
    );
  }
}

export default App;