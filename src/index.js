import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';


const Root = () => {
    return (
        <Router>
         <Switch>
            <Route path="/" exact component={StorePicker}/>
            <Route pattern="/store/:storeId" component={App}/>
         </Switch>
        </Router>
    )
  }

  render(<Root/>, document.querySelector('#main'));

