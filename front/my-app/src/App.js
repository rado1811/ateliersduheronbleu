// React
import React from 'react';
// React
import './App.css';
// Components
import ButtonAppBar from './Components/Client/NavBar/NavBar';
import Navigation from './Components/Client/Navigation/Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    <ButtonAppBar />
    <div className="App-header">
      <h2>Atelier du Heron bleu</h2>
    </div>
  </div>
);

export default App;
