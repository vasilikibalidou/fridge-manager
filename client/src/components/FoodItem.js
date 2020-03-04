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
    let src = "";
    if (this.state.foodItem?.category) {
      src = "/" + this.state.foodItem?.category + ".png";
    }

    let style = {};
    if (this.state.foodItem?.availability === "empty") {
      style = { opacity: "0.5" };
    } else if (new Date(this.state.foodItem?.expiration) < new Date()) {
      style = { color: "red" };
    }
    return (
      <div>
        <div style={style}> {this.state.foodItem?.name}</div>
        {src && <img height="50" src={src} alt="itemimage"></img>}
      </div>
    );
  }
}
