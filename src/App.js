import React from 'react';
import './App.css';
import Pokelist from './components/Pokelist';
import IndPokeCard from './components/IndPokeCard';
import AuthButton from './components/AuthButton';
import { ProvideAuth } from './provider/AuthProvider';
import Login from './components/Login';

import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <ProvideAuth>
      <AuthButton/>
      
      <Router>
        <ul>
          <li><Link to="/">HOME</Link></li>
        </ul>
          <Switch>
            <Route  path="/pokedex" component={Pokelist}/>
            <Route  path="/thisPokemon/:id" component={IndPokeCard}/>
            <Route exact  path="/" render={() => <div><Login/></div>}/>
          </Switch>
      </Router>
    </ProvideAuth>
    </>
  );
}

export default App;
