<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Atelier du Heron bleu</h2>
    </div>
  </div>
);
=======
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Les ateliers du héron bleu</h1>
        </header>

      </div>
    );
  }
}
>>>>>>> 90f3973bebe240e0a8d09fde3689665ca37e8c16

export default App;
