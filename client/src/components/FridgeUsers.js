import React, { Component } from "react";
import axios from "axios";

import { Container, Card, Section, DeleteButton } from "./StyledComponents";

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

  render() {
    return (
      <div>
        <Section>Fridge name: {this.state.fridge?.name}</Section>
        <Section>
          Users:
          <Container>
            {this.state.fridge?.users &&
              this.state.fridge.users.map(user => {
                return (
                  <Card key={user._id}>
                    <strong>{user.username}</strong>
                    {user._id !== this.props.userId && (
                      <DeleteButton onClick={() => this.handleDelete(user._id)}>
                        Remove
                      </DeleteButton>
                    )}
                  </Card>
                );
              })}
          </Container>
        </Section>
        <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
      </div>
    );
  }
}
