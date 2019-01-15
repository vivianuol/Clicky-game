import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Board from "./components/Board"
import Board from "./components/Cards"
import Board from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Board />
        {/* <Cards />
        <Footer /> */} 
      </div>
    )
  }
}

export default App;
