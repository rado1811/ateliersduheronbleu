// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// CSS
import './App.css';
// Components
import TemporaryDrawer from './Components/Client/NavBar/TemporaryDrawer';
import Accueil from './Components/Client/NavBar/FakeComponents/Accueil';
import Ateliers from './Components/Client/NavBar/FakeComponents/Ateliers';
import Concept from './Components/Client/NavBar/FakeComponents/Concept';
import Intervenants from './Components/Client/NavBar/FakeComponents/Intervenants';
import Contact from './Components/Client/NavBar/FakeComponents/Contact';

const App = () => (
  <div>
    <TemporaryDrawer />
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/ateliers" component={Ateliers} />
      <Route path="/concept" component={Concept} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
