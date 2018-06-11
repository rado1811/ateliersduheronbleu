// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import TemporaryDrawer from './components/client/NavBar/TemporaryDrawer';
import Ateliers from './components/client/pageAteliers/Ateliers';
import AtelierHome from './components/client/ateliersHome/atelierHome';
import Concept from './components/client/NavBar/FakeComponents/Concept';
import Intervenants from './components/client/NavBar/FakeComponents/Intervenants';
import Contact from './components/client/NavBar/FakeComponents/Contact';


const App = () => (
  <div>
    <TemporaryDrawer />
    <Switch>
      <Route exact path="/" component={AtelierHome} />
      <Route path="/ateliers" component={Ateliers} />
      <Route path="/concept" component={Concept} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
