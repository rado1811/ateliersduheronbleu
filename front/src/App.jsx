import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import TemporaryDrawer from './components/client/navBar/TemporaryDrawer';
import Ateliers from './components/client/pageAteliers/Ateliers';
import AtelierHome from './containers/AtelierHome';
import Concept from './components/client/navBar/fakeComponents/Concept';
import Intervenants from './components/client/navBar/fakeComponents/Intervenants';
import Contact from './components/client/navBar/fakeComponents/Contact';

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
