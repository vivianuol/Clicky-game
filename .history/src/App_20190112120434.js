import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        {/* <Cards />
        <Footer /> */} 
      </div>
    )
  }
}

export default App;
