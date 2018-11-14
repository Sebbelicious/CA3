import React, { Component } from 'react';
import './App.css';
import URL from './settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{URL}</p>
        </header>
      </div>
    );
  }
}

export default App;
