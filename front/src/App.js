// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// CSS
import './App.css';
// Components
import TemporaryDrawer from './Components/Client/NavBar/TemporaryDrawer';
import Ateliers from './Components/Client/pageAteliers/Ateliers';
import AtelierHome from './containers/atelierHome';
import Concept from './Components/Client/NavBar/FakeComponents/Concept';
import Intervenants from './Components/Client/NavBar/FakeComponents/Intervenants';
import Contact from './Components/Client/NavBar/FakeComponents/Contact';
import MenuAdmin from './Components/Admin/MenuAdmin/MenuAdmin';
import Admin from './Components/Admin/FormulaireIntervenant/Admin';

const App = () => (
  <div>
    <TemporaryDrawer />
    <Switch>
      <Route exact path="/" component={AtelierHome} />
      <Route path="/ateliers" component={Ateliers} />
      <Route path="/concept" component={Concept} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/admin" component={MenuAdmin} />
      <Route path="/admin/administration" component={Admin} />
    </Switch>
  </div>
);

export default App;
