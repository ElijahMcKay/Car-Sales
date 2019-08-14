import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'; 
import { createStore } from 'react'; 
// import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer); 

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider state={state}>
    <App />
</Provider>, rootElement);
