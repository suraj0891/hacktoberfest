import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router} from 'react-router-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.css';
import '../node_modules/babel-polyfill';
import App from './App';
import * as serviceWorker from './serviceWorker';


// form data polyfill to support IE form data methods.
require('formdata-polyfill');

ReactDOM.render(
<Router>
<App/>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
