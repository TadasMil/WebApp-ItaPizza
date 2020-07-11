import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />np
        </Switch>
    </div>
  );
}

export default App;
