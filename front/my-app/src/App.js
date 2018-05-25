// React
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// CSS
import './App.css';
// Components
import PersistentDrawer from './Components/Client/NavBar/PersistentDrawer';
import Test from './Components/Admin/Test';
import Page2 from './Components/Admin/Page2';
import Home from './Components/Admin/Home';

const App = () => (
  <div>
    <BrowserRouter>
      <PersistentDrawer />
      <switch>
        <Route extact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/page2" component={Page2} />
      </switch>
    </BrowserRouter>
  </div>
);

export default App;
