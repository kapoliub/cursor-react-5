import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Photos from "./components/Photos/Photos";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/homepage">
              <Homepage />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/">
              <Redirect to="/homepage" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
