import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateFridge from "./components/CreateFridge";
import Fridge from "./components/Fridge";

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
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Route
          extact
          path="/"
          render={props => (
            <Home history={props.history} user={this.state.user} />
          )}
        />
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
        <Route
          path="/createFridge"
          render={props => (
            <CreateFridge history={props.history} user={this.state.user} />
          )}
        />
        <Route
          path="/fridge/:id"
          render={props => (
            <Fridge history={props.history} user={this.state.user} />
          )}
        />
      </div>
    );
  }
}

export default App;
