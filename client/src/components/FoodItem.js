import React, { Component } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

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
    return <div>Name: {this.state.foodItem?.name}</div>;
  }
}
