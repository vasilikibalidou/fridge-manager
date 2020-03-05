import React, { Component } from "react";
import axios from "axios";
import { Section, Form, Button, Textarea, Label, H2 } from "./StyledComponents";

export default class CreateItem extends Component {
  state = {
    emails: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`/api/fridge/invite`, {
        emails: this.state.emails,
        userId: this.props.user._id,
        fridgeId: this.props.fridgeId
      })
      .then(response => {
        // redirect
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
        // TODO: show confirmation?
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <Section>
        <H2>Invite to fridge</H2>

        <Form onSubmit={this.handleSubmit} id="email-form">
          <Label htmlFor="emails">
            Please enter user e-mails, separated by a comma:
          </Label>
          <br />
          <Textarea
            name="emails"
            cols="80"
            rows="8"
            form="email-form"
            onChange={this.handleChange}
          ></Textarea>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Section>
    );
  }
}
