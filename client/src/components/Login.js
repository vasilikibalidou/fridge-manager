import React, { Component } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

import { Form, Section, Button, Input } from "./StyledComponents";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        // redirect
        this.props.history.push("/");
        // update state for user in <App/>
        this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <label htmlFor="username">Username: </label>
            <Input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Section>
          <Section>
            <label htmlFor="password">Password: </label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Section>
          <Section>
            <Button type="submit">Login</Button>
          </Section>
        </Form>
        <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
      </>
    );
  }
}
