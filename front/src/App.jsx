// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Components
import TemporaryDrawer from './Components/Client/NavBar/TemporaryDrawer';
import Ateliers from './Components/Client/pageAteliers/Ateliers';
import AtelierHome from './Components/Client/ateliersHome/atelierHome';
import Concept from './Components/Client/NavBar/FakeComponents/Concept';
import Intervenants from './Components/Client/NavBar/FakeComponents/Intervenants';
import Contact from './Components/Client/NavBar/FakeComponents/Contact';

/*
======== Fonctions
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
  }
}

export default App;
