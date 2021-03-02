import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// Styles
import "./App.css";

// Components
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import ReadList from "./ReadList/ReadList";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Settings/Settings";

// Auth
import Login from "./Auth/Login";
import Register from "./Auth/Register";

// Hooks
import useToken from "./useToken";

function App() {
  // Set token from hook
  const { token, setToken } = useToken();

  // if not token is set, request user to login
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="">
      <Navbar username="" />
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/readlist">
            <ReadList />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/logout"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
