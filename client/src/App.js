import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateFridge from "./components/CreateFridge";
import Fridge from "./components/Fridge";
import axios from "axios";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  updateUserState = () => {
    axios.get("/auth/loggedin").then(response => {
      this.setState({
        user: response.data
      });
    });
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
        <Switch>
          <Route
            exact
            path="/fridge/:id"
            render={props => (
              <Fridge
                history={props.history}
                user={this.state.user}
                fridgeId={props.match.params.id}
              />
            )}
          />
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
              <CreateFridge
                history={props.history}
                user={this.props.user}
                updateFunc={this.updateUserState}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
