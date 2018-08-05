import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Hero headline="Changing lives one laptop at a time..." />
      </div>
    );
  }
}

export default App;
