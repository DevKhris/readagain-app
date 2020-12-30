import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings/Settings';

function App() {
  return (
    <div className="wrapper">
      <h1>ReadAgain App</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;