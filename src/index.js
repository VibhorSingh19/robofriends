import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Robo from './Robo';
//import Login from './Login';
import Cardlist from './Cardlist';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {Info} from './Info';
ReactDOM.render(
  <React.StrictMode>
    <Cardlist Info={Info}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
