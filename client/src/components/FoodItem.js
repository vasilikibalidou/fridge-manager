import React, { Component } from "react";
import axios from "axios";

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
    return (
      <div>
        <ul>
          <li>
            {" "}
            <img height="50" src="/022-containers.png"></img>
            {this.state.foodItem?.category}
          </li>
          <li>Name: {this.state.foodItem?.name}</li>
          <li>Availability: {this.state.foodItem?.availability}</li>
          <li>Best Before: {this.state.foodItem?.expiration}</li>
          <li>Description: {this.state.foodItem?.description}</li>
        </ul>
      </div>
    );
  }
}
