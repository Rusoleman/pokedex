import React from 'react';
import './App.css';
import Pokelist from './components/Pokelist';
import IndPokeCard from './components/IndPokeCard';
import { ProvideAuth } from './provider/AuthProvider';
import Login from './components/Login';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Encounters from './components/Encounters'

function App() {
  return (
    <>
    <ProvideAuth>
      <Router>
          <Switch>
            <Route path="/pokedex/pokemon/:id/encounters" component={Encounters}/>
            <Route  path="/pokedex/pokemon/:id" component={IndPokeCard}/>
            <Route  path="/pokedex" component={Pokelist}/>
            <Route exact  path="/" render={() => <div><Login/></div>}/>
          </Switch>
      </Router>
    </ProvideAuth>
    </>
  );
}

export default App;
