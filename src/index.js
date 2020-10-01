import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Robo from './Robo';
import Login from './Login';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {Info} from './Info';
ReactDOM.render(
  <React.StrictMode>
    <div>
    <Robo id={Info[0].id} name={Info[0].name} email={Info[0].email}/>
    <Robo id={Info[1].id} name={Info[1].name} email={Info[1].email}/>
    <Robo id={Info[2].id} name={Info[2].name} email={Info[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
