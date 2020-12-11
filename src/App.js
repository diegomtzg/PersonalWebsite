import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Intro from './components/Intro'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/work" component={Work} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
