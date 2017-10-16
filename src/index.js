import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const store = configureStore();

ReactDOM.render((
    <Provider store={store} >
    <Router>
        <App/>
    </Router>
    </Provider>
), document.getElementById('root'))

registerServiceWorker();
