import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";
import {
  DeleteButton,
  Section,
  Card,
  Innerbox,
  Cleanlist
} from "./StyledComponents";

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
    let style = {};
    if (this.state.foodItem?.availability === "empty") {
      style = { opacity: "0.5" };
    } else if (new Date(this.state.foodItem?.expiration) < new Date()) {
      style = { color: "red" };
    }
    return (
      <div>
        <div style={style}>Name: {this.state.foodItem?.name}</div>
        <img height="50" src="/022-containers.png" alt="itemimage"></img>
      </div>
    );
  }
}
