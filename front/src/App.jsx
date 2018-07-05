import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TemporaryDrawer from './components/client/navbar/TemporaryDrawer';
import Ateliers from './components/client/pageAteliers/Ateliers';
import AtelierHome from './containers/AtelierHome';
import Intervenants from './components/client/Intervenants';
import Contact from './components/client/Contact';
import AdminAtelier from './components/admin/formulaire/atelier/formulaireAtelier/AdminAtelier';
import MenuAdmin from './components/admin/menuAdmin/MenuAdmin';
import Admin from './components/admin/formulaireIntervenant/Admin';
import Dashboard from './components/admin/interfaceGestion/Dashboard';
import ContainerDashboard from './components/admin/interfaceAdministration/ContainerDashboard';

const App = () => (
  <div>
    <TemporaryDrawer />
    <Switch>
      <Route exact path="/" component={AtelierHome} />
      <Route path="/ateliers" component={Ateliers} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/ateliers" component={AdminAtelier} />
      <Route exact path="/admin/dashboard" component={MenuAdmin} />
      <Route exact path="/admin/intervenant" component={Admin} />
      <Route exact path="/admin/gestion" component={Dashboard} />
      <Route exact path="/admin/administration" component={ContainerDashboard} />
    </Switch>
  </div>
);

export default App;
