import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import reducer from './Reducers';
import middleware from './Middlewares';
import {Provider} from 'react-redux';
import {createStore} from "redux";

const store = createStore(reducer, middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
