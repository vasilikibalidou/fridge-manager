import React, { Component } from "react";
import axios from "axios";
import { Title } from "./StyledComponents";

export default class Fridge extends Component {
  state = {
    fridge: null
  };

  componentDidMount() {
    axios.get(`/api/fridge/${this.props.fridgeId}`).then(response => {
      this.setState({
        fridge: response.data
      });
    });
  }

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
