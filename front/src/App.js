// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// CSS
// Components
import TemporaryDrawer from './Components/Client/NavBar/TemporaryDrawer';
import Ateliers from './Components/Client/pageAteliers/Ateliers';
import AtelierHome from './Components/Client/ateliersHome/atelierHome';
import Concept from './Components/Client/NavBar/FakeComponents/Concept';
import Intervenants from './Components/Client/NavBar/FakeComponents/Intervenants';
import Contact from './Components/Client/NavBar/FakeComponents/Contact';


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
