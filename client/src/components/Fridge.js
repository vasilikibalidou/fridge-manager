import React, { Component } from "react";
import axios from "axios";

export default class Fridge extends Component {
  state = {
    fridge: null
  };

  componentDidMount() {
    console.log("fridgeId: " + this.props.fridgeId);
    axios.get(`/fridge/${this.props.fridgeId}`).then(response => {
      this.setState({
        fridge: response.data
      });
    });
  }

  render() {
    return <div>Name: {this.state.fridge?.name}</div>;
  }
}
