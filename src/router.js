import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App  from './components/App';
import Code from  './components/Code/Code';
import About from  './components/About/About';
import Contact from  './components/Contact/Contact';
import Landing from './components/Landing/Landing';

export default(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Landing} />
      <Route path='home' component={Landing} />
      <Route path='code' component={Code} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
)
