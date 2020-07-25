import React from 'react';
import './App.css';
import Home from './components/pages/home/Home'
import About from './components/pages/About'
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Products from '././components/pages/products/Products'
import ScrollToTop from './ScrollToTop'

function App() {
 
  return (
    <div className="App">
      <NavBar></NavBar>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={Products}/>
          </Switch>
        </ScrollToTop>
    </div>
  );
}

export default App;
