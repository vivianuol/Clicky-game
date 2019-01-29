import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar score= {this.state.score} topScore={this.state.topScore} />
        <Hero />
        <Cards callbackFromParent={this.myCallback} />
        <Footer />
      </div>
    )
  }
}

export default App;
