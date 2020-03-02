import React, { Component } from "react";
import axios from "axios";

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
    console.log(this.props);
    event.preventDefault();
    axios
      .post(`/fridge/invite`, {
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
      <div>
        <h2>Invite</h2>
        <form onSubmit={this.handleSubmit} id="email-form">
          <label htmlFor="emails">
            Enter user e-mails, separated by a comma:
          </label>
          <br />
          <textarea
            name="emails"
            cols="80"
            rows="8"
            form="email-form"
            onChange={this.handleChange}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
