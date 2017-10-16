
import React from 'react';
import ListForms from '../src/component/ListForms';
import Create from '../src/component/CreateFormer';
import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={App}/>
            <Route path="/create" component={ListForms}/>
            <Route path="/list" component={ListForms}/>
        </div>
    </Router>
    )


export default BasicExample;

