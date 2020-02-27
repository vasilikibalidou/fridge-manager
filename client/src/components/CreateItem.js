import React, { Component } from "react";
import axios from "axios";

export default class CreateItem extends Component {
  state = {
    name: "",
    description: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/foodItem", {
        name: this.state.name,
        description: this.state.description,
        userId: this.props.user._id,
        fridgeId: this.props.fridgeId
      })
      .then(response => {
        console.log("response: " + response);
        // redirect
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="name">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
