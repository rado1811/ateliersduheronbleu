import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Ateliers from './components/client/pageAteliers/Ateliers';
import AtelierHome from './containers/AtelierHome';
import Intervenants from './components/client/Intervenants';
import Contact from './components/client/Contact';
import AdminAtelier from './components/admin/formulaire/atelier/formulaireAtelier/AdminAtelier';
import AdminAccueil from './components/admin/menuAdmin/AdminAcceuil';
import Admin from './components/admin/formulaireIntervenant/Admin';
import Dashboard from './components/admin/interfaceGestion/Dashboard';
import ContainerSecurite from './components/securite/ContainerSecurite';
import ContainerDashboard from './components/admin/interfaceAdministration/ContainerDashboard';
import SignIn from './components/securite/SignIn';
import CGV from './components/client/cgv/CGV';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={AtelierHome} />
      <Route path="/ateliers" component={Ateliers} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/ateliers" component={AdminAtelier} />
      <Route exact path="/admin/dashboard" component={AdminAccueil} />
      <Route exact path="/admin/intervenant" component={Admin} />
      <Route exact path="/admin/gestion" component={Dashboard} />
      <Route exact path="/zfesg4685f4dqsfv46es8qz4df" component={SignIn} />
      <Route
        exact
        path="/admin/administration"
        component={ContainerDashboard}
      />
      <Route exact path="/admin/securite" component={ContainerSecurite} />
      <Route
        exact
        path="/admin/administration"
        component={ContainerDashboard}
      />
      <Route exact path="/admin/profilAdmin" component={Admin} />
      <Route path="/CGV" component={CGV} />
    </Switch>
  </div>
);

export default App;
