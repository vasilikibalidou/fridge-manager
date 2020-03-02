import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";

export default class FridgeDetails extends Component {
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

  render() {
    return (
      <div>
        <div>Fridge name: {this.state.fridge?.name}</div>
        <div>
          Items:
          {this.state.fridge?.items.map(itemId => {
            return (
              <Link
                to={`/fridge/${this.state.fridge._id}/${itemId}`}
                key={itemId}
              >
                <FoodItem foodId={itemId} fridgeId={this.state.fridge._id} />
              </Link>
            );
          })}
        </div>
        {this.state.fridge && (
          <Link to={`/fridge/${this.state.fridge._id}/createItem`}>
            Add item
          </Link>
        )}
      </div>
    );
  }
}
