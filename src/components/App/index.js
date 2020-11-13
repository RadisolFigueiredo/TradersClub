import React, { Component } from "react";

import { GlobalProvider } from "../../context/GlobalState";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Logo } from "./Logo";
import { Header } from "./Header";
import { Home } from "./Home";
import { Add } from "./Add";
import { Edit } from "./Edit";

import "../../assets/styles/Shared.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalProvider>
          <Router>
            <div className="boxLogoHeader">
              <Logo />
              <div className="box">
                <Header />

                <div className="alignChildren">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={Add} />
                    <Route path="/edit/:id" component={Edit} />
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </GlobalProvider>
      </div>
    );
  }
}
