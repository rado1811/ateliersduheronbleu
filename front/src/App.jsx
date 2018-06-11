import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TemporaryDrawer from './components/client/navbar/TemporaryDrawer';
import Ateliers from './components/client/pageAteliers/Ateliers';
import AtelierHome from './components/client/ateliersHome/atelierHome';
import Concept from './components/client/navbar/fakeComponents/Concept';
import Intervenants from './components/client/navbar/fakeComponents/Intervenants';
import Contact from './components/client/navbar/fakeComponents/Contact';

const App = () => {
  return (
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
};

export default App;
