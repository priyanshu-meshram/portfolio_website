import React, { Component } from "react";
import Landing from "./Components/Landing/Landing";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/main";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/home" exact component={Main}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
