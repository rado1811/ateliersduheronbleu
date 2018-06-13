import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TemporaryDrawer from './components/client/navbar/TemporaryDrawer';
import Ateliers from './components/client/pageAteliers/Ateliers';
import AtelierHome from './containers/AtelierHome';
import Concept from './components/client/navbar/fakeComponents/Concept';
import Intervenants from './components/client/navbar/fakeComponents/Intervenants';
import Contact from './components/client/navbar/fakeComponents/Contact';
import AdminAtelier from './components/admin/formulaire/atelier/formulaireAtelier/AdminAtelier';
import MenuAdmin from './components/admin/menuAdmin/MenuAdmin';
import Admin from './components/admin/formulaireIntervenant/Admin';

const App = () => (
  <div>
    <TemporaryDrawer />
    <Switch>
      <Route exact path="/" component={AtelierHome} />
      <Route path="/ateliers" component={Ateliers} />
      <Route path="/concept" component={Concept} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/ateliers" component={AdminAtelier} />
      <Route exact path="/admin/dashboard" component={MenuAdmin} />
      <Route exact path="/admin/intervenant" component={Admin} />

    </Switch>
  </div>
);

export default App;