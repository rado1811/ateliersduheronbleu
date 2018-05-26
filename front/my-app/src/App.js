// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// CSS
import './App.css';
// Components
import TemporaryDrawer from './Components/Client/NavBar/TemporaryDrawer';
import Test from './Components/Admin/Test';
import Page2 from './Components/Admin/Page2';
import Home from './Components/Admin/Home';

const App = () => (
  <div>
    <TemporaryDrawer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/page2" component={Page2} />
    </Switch>
  </div>
);

export default App;
