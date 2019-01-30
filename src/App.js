import React, { Component } from 'react';
import './App.css';
import Navbar from "./container/Navbar";
import Hero from "./components/Hero";
import Cards from "./container/Cards";
import Footer from "./components/Footer";
import { Provider } from 'react-redux';
import storeFactory from './store'

const store = storeFactory()

class App extends Component {

  render() {
    return (<Provider store={store}>
        <div>
          <Navbar/>
          <Hero />
          <Cards/>
          <Footer />
        </div>
        </Provider>
    )
  }
}

export default App;
