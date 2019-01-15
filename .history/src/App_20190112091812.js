import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav} from "./components/Header"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Jumbotron />
        <Cards />
        <Footer /> */}
      </div>
    )
  }
}

export default App;
