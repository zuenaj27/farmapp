import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from '../src/component/Search';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import Create from './component/CreateFormer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from './actions/userActions';
import Farmers from './component/ListForms';

class App extends Component {

    constructor(props){
        super(props);
    }

      render() {
        return (
          <div className="App">
            <header className="App-header">

             
              <h1 className="App-title">Welcome to Farmer</h1>
            </header>
              <div>
                  <nav>
                      <Link to="/create">
                            Create Farmer</Link>
                  </nav>
                  <nav>
                      <Link to="/farmers">View Farmer</Link>
                  </nav>
                    <Route path="/create" component={Create}/>
                  <div>
                      <Route  path="/farmers" component={Farmers}/>
                  </div>
                  <div>
                  </div>
              </div>
              <div className="footer">
              </div>
          </div>
        );
      }
    }


function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userActions, dispatch)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))



