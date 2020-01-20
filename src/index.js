import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./Components/Libraryct/Upload/store";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
