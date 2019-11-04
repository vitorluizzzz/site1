import React, {Component} from 'react';

import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';

import "./stiles.css";

import CS from './CS';
import LOL from './LOL';
import Header from './Components/Header';


class App extends Component {
  render(){
    return (
  <div>
        <Header />
          <a href="LOL">page1</a> 
          <a href="CS">page2</a> 
    <Router>
        <main>
          <Switch>
            <Route path="/page1" Component={LOL}>
            <LOL/>
            </Route>
            <Route path="/page2" Component={CS}> 
            <CS/>
            </Route>
          </Switch>
          </main>
      </Router>
  
  </div>
    );
}
}

export default App;







