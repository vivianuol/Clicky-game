import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/containers/Navbar";
import Hero from "./components/ui/Hero";
import Cards from "./components/containers/Cards";
import Footer from "./components/ui/Footer";


class App extends Component {

  render() {
    return (
      <div>
        <Navbar  />
        <Hero />
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default App;
