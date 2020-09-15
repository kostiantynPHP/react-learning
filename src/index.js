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
ggbet
/*import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

function playlist(state = [], action) {
    if(action.type === 'ADD_TRACK')
    return [
        ...state,
        action.payload
    ];
}
const store = createStore(playlist);
const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
    list.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach(track => {
       const li = document.createElement('li');
       li.textContent = track;
       list.appendChild(li);
    });
});

addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    store.dispatch({type: 'ADD_TRACK', payload: trackName});
});*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
