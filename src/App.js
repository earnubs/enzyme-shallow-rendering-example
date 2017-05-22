import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Foo extends Component {
  render() {
    return (
      <h3>Shallow rendering test</h3>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Foo />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
