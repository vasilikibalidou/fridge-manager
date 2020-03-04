import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Card,
  Section,
  RemoveButton,
  UserCard
} from "./StyledComponents";

export default class FridgeUsers extends Component {
  state = {
    fridge: null,
    message: ""
  };

  componentDidMount() {
    axios
      .get(`/fridge/${this.props.fridgeId}/users`)
      .then(response => {
        this.setState({
          fridge: response.data
        });
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  }

  handleDelete(userId) {
    if (
      window.confirm(
        "Are you sure you want to remove this user from this fridge?"
      )
    ) {
      axios
        .post(`/fridge/${this.props.fridgeId}/removeUser`, {
          userId: userId
        })
        .then(response => {
          this.setState({
            fridge: response.data
          });
        })
        .catch(err => {
          this.setState({
            message: err.response.data.message
          });
        });
    }
  }

  render() {
    return (
      <div>
        <Section>Fridge name: {this.state.fridge?.name}</Section>
        <Section>
          Users:
          {this.state.fridge?.users &&
            this.state.fridge.users.map(user => {
              return (
                <UserCard key={user._id}>
                  <div>
                    <strong>{user.username}</strong>
                  </div>
                  <div>
                    {user._id !== this.props.userId && (
                      <RemoveButton onClick={() => this.handleDelete(user._id)}>
                        Remove
                      </RemoveButton>
                    )}
                  </div>
                </UserCard>
              );
            })}
        </Section>
        <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
      </div>
    );
  }
}
