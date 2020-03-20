import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Gallery from './components/Gallery'

class App extends Component {
render(){
    return (
      <div className="App">
        <h1>Hello!</h1>
        <Home />
      </div>
    );
  }
}

export default App;
