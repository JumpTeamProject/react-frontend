
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import HomePage from './components/pages/homepage/HomePage';
import RestaurantProfile from './components/pages/restaurant_profile/RestaurantProfile';
import MyNavBar from "./components/navbar/MyNavBar"
import PageContent from "./components/pages/PageContent"
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
            {/*<PageContent page={webpage} />*/}
          {/* <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={RestaurantProfile} />
          </Switch> */}
            <Switch>
                {/*<Route path="/" component={HomePage} exact />*/}
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={RestaurantProfile} />
            </Switch>
        </div>
      //</Router>
    );
  }
}

export default App;