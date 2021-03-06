import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Form, Section, Button, Input, H2 } from "./StyledComponents";

export default class Signup extends Component {
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
      .post("/api/auth/signup", {
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
      <div style={{ height: "78vh" }}>
        <H2>Sign Up</H2>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <label htmlFor="username">Username: </label>
            <br />
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
            <br />
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Section>
          <Section>
            <Button type="submit">Sign up</Button>
          </Section>
        </Form>
        <Section style={{ color: "#f05050" }}>
          {this.state.message && <p>{this.state.message}</p>}
        </Section>
        <div style={{ padding: "0 15vw", fontSize: "0.8em" }}>
          Already have an account?
          <Link to="/"> Login</Link>
        </div>
      </div>
    );
  }
}
