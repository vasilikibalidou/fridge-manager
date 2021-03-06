import React, { Component } from "react";
import axios from "axios";

import {
  Section,
  RemoveButton,
  UserCard,
  UserName,
  UserDeleteButton
} from "./StyledComponents";

export default class FridgeUsers extends Component {
  state = {
    fridge: null,
    message: ""
  };

  componentDidMount() {
    axios
      .get(`/api/fridge/${this.props.fridgeId}/users`)
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
        .post(`/api/fridge/${this.props.fridgeId}/removeUser`, {
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
      <div style={{ height: "78vh" }}>
        <Section>
          <Section>
            Users of: <strong>{this.state.fridge?.name}</strong>
          </Section>
          <Section>
            {this.state.fridge?.users &&
              this.state.fridge.users.map(user => {
                return (
                  <UserCard key={user._id}>
                    <UserName>{user.username}</UserName>
                    <UserDeleteButton>
                      {user._id !== this.props.userId && (
                        <RemoveButton
                          onClick={() => this.handleDelete(user._id)}
                        >
                          Remove
                        </RemoveButton>
                      )}
                    </UserDeleteButton>
                  </UserCard>
                );
              })}
          </Section>
        </Section>
        <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
      </div>
    );
  }
}
