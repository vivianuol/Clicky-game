import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero/index"
import Main from "./components/Main"
import Footer from "./components/Footer/index"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg" />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
