import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppRouter } from './AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <AppRouter />
      </div>
    );
  }
}

export default App;
