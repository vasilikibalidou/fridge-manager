import React, { Component } from "react";
import axios from "axios";

import { Form, Section, Button, Input } from "./StyledComponents";

export default class CreateFridge extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/fridge", {
        name: this.state.name,
        userId: this.props.user._id
      })
      .then(response => {
        // redirect
        this.props.history.push("/");
        this.props.updateFunc(response.data);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <div style={{ height: "78vh" }}>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <label htmlFor="name">Fridge name: </label>
            <br />
            <Input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Section>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
