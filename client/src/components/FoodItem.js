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

  handleDelete = () => {
    axios
      .post(`/foodItem/${this.props.foodId}/delete`, {
        fridgeId: this.props.fridgeId
      })
      .then(response => {
        this.props.updateFunc(response.data);
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
      });
  };

  render() {
    return (
      <div>
        <div>Name: {this.state.foodItem?.name}</div>
        <img height="50" src="/022-containers.png" alt="itemimage"></img>
      </div>
    );
  }
}
