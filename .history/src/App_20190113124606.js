import React, { Component } from 'react';
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
        <Hero />
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default App;
