import React, { Component } from 'react';
import MyNavBar from "./caroline_home/MyNavBar"
import PageContent from "./caroline_home/PageContent"
import './App.css';

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
    <div className="App">
      <MyNavBar changePage = {this.changePage}/>
      <PageContent page = {webpage}/>
    </div>
  );
}
}

export default App;
