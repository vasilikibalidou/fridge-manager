import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { DeleteButton } from "./StyledComponents";

export default class FoodItem extends Component {
  state = {
    foodItem: null
  };

  componentDidMount() {
    axios.get(`/foodItem/${this.props.foodId}`).then(response => {
      this.setState({
        foodItem: response.data
      });
    });
  }

  render() {
    let empty = {};
    if (this.state.foodItem?.availability === "empty") {
      empty = { opacity: "0.5" };
    }
    let expired = {};
    if (new Date(this.state.foodItem?.expiration) < new Date()) {
      expired = { color: "red" };
    }
    return (
      <div>
        <div style={(empty, expired)}>Name: {this.state.foodItem?.name}</div>
        <img height="50" src="/022-containers.png" alt="itemimage"></img>
      </div>
    );
  }
}
