import React, { Component } from "react";
import axios from "axios";
import { FridgeTitle, Postit } from "./StyledComponents";

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
        <Postit>
          <FridgeTitle>
            <p></p>
            {this.state.fridge?.name}
          </FridgeTitle>
        </Postit>
      </div>
    );
  }
}
