import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/signup"
          render={props => (
            <Signup history={props.history} setUser={this.setUser} />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <Login history={props.history} setUser={this.setUser} />
          )}
        />
      </div>
    );
  }
}

export default App;
