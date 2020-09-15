import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddTrack from './AddTrack';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import Reducers from './reducers';

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AddTrack />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
gg
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
