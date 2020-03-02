import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateFridge from "./components/CreateFridge";
import FridgeDetails from "./components/FridgeDetails";
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";
import Invite from "./components/Invite";
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
        {this.state.user && (
          <Navbar user={this.state.user} setUser={this.setUser} />
        )}
        <Switch>
          <Route
            path="/fridge/:fridgeId/foodItem/:id/edit"
            render={props => (
              <EditItem
                history={props.history}
                user={this.state.user}
                updateFunc={this.updateUserState}
                foodItemId={props.match.params.id}
                fridgeId={props.match.params.fridgeId}
              />
            )}
          />
          <Route
            path="/fridge/:id/createItem"
            render={props => (
              <CreateItem
                history={props.history}
                user={this.state.user}
                updateFunc={this.updateUserState}
                fridgeId={props.match.params.id}
              />
            )}
          />
          <Route
            path="/fridge/:id/invite"
            render={props => (
              <Invite
                history={props.history}
                user={this.state.user}
                fridgeId={props.match.params.id}
              />
            )}
          />
          <Route
            path="/fridge/:id/join"
            render={props => (
              <Invite
                history={props.history}
                user={this.state.user}
                fridgeId={props.match.params.id}
              />
            )}
          />
          <Route
            path="/createFridge"
            render={props => (
              <CreateFridge
                history={props.history}
                user={this.state.user}
                updateFunc={this.updateUserState}
              />
            )}
          />
          <Route
            exact
            path="/fridge/:id"
            render={props => (
              <FridgeDetails
                history={props.history}
                user={this.state.user}
                fridgeId={props.match.params.id}
                updateFunc={this.updateUserState}
              />
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
            path="/"
            render={props => (
              <Home
                history={props.history}
                user={this.state.user}
                setUser={this.setUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
