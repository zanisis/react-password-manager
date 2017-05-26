import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Route exact path="/" component={Main} />

          {/* </Route> */}
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
