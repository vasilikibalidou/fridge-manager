import React, { Component } from "react";
import axios from "axios";
import { Title, Button } from "./StyledComponents";

export default class Fridge extends Component {
  state = {
    fridge: null
  };

  componentDidMount() {
    axios.get(`/fridge/${this.props.fridgeId}`).then(response => {
      this.setState({
        fridge: response.data
      });
    });
  }

  // componentWillUnmount() {

  // }

  render() {
    return (
      <div>
        <div>
          <Title>{this.state.fridge?.name}</Title>
        </div>
      </div>
    );
  }
}
