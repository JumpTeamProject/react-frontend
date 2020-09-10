
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import HomePage from './home/HomePage';
import RestaurantProfile from './components/pages/restaurant_profile/RestaurantProfile';
import MyNavBar from "./navbar/MyNavBar";
import './App.css';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <div className="App">
          <MyNavBar />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={RestaurantProfile} />
            </Switch>
        </div>
    );
  }
}

export default App;