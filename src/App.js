import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'
import {fetchPass} from './actions'

import Main from './components/Main'

export class App extends Component {
  componentDidMount(){
    this.props.fetchListPass()
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchListPass : ()=> dispatch(fetchPass())
})

export default connect(null, mapDispatchToProps)(App);
