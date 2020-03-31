import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import ListaAvaliacoes from './components/ListaAvaliacoes';
import TelaDetalheEpisodio from './components/TelaDetalheEpisodio';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/avaliacoes" component={ ListaAvaliacoes } />
        <Route path="/episodio/:id" component={ TelaDetalheEpisodio } />
      </Router>
    );
  }
}