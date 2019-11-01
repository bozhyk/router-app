import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id">
            <DetailPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
