import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import RegisterServiceWorker from './registerServiceWorker';
import allReducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleWare(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
RegisterServiceWorker();
