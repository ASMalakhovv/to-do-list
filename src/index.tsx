import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app/App';
import {Provider} from "react-redux";
import {store} from './redux/store';
import {BrowserRouter, HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

