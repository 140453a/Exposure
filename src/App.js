import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery'
import Trainer from './components/pages/Trainer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

class App extends Component {
render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (<Home />)} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/trainer" component={Trainer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
