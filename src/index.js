
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js" 
import './index.css'
import {createStore, applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import Rootreducer from "./api/reducer/index"
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom"
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(Rootreducer,
   composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
<App />
        </BrowserRouter>
</Provider>
, document.getElementById('root')); 