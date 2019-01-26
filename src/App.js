import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

class App extends Component {
  constructor (props) {
    super(props);
    this.state ={
      score: 0,
      topScore: 0
    }
  }

  myCallback = dataFromCards => {
    console.log ( "dataFromCards:" +dataFromCards);
    console.log( "score: " +this.state.score);
    if (dataFromCards === this.state.score) {
      this.setState ({
        score: 0
      })
    }
    
    else if(dataFromCards > this.state.score) {
      this.setState ({
        score: dataFromCards
      })
    } else {
      throw("error");
    }

    if(dataFromCards > this.state.topScore) {
      this.setState  ({
        topScore: dataFromCards
      })
    }
}


 
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
