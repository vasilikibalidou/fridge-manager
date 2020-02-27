import React from "react";
import { Route } from "react-router-dom";
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
          path="/fridge/:id"
          render={props => (
            <Fridge history={props.history} user={this.state.user} />
          )}
        />
        {/* <Route
          path="/fridge/:id/detail"
          render={props => (
            console.log("props: "+props);
            <Fridge history={props.history} user={this.state.user}/>
          )}
        /> */}
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
      </div>
    );
  }
}

export default App;
