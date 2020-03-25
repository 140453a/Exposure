import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery'
import Trainer from './components/pages/Trainer'
import Header from './components/layout/Header'

class App extends Component {
render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/trainer" component={Trainer} />

        </div>
      </Router>
    );
  }
}

export default App;
