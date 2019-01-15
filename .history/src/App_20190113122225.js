import React, { Component } from 'react';
import logo from '/imageslogo.svg';
import './App.css';
import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero/index";
import Cards from "./components/Cards";
import Footer from "./components/Footer/index";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <h2>Clicky Game</h2>
          <span>Click on an image to earn points, but don't click on any more than once!</span>
        </Hero>
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default App;
