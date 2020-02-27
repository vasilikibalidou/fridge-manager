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

  updateFridgeState = () => {
    // axios.get("/auth/loggedin").then(response => {
    //   this.setState({
    //     user: response.data
    //   });
    // });
  };

  render() {
    return (
      <div>
        <div>Name: {this.state.fridge?.name}</div>
        <div>
          Items:
          {this.state.fridge?.items.map(itemId => {
            return (
              <Link
                to={`/fridge/${this.state.fridge._id}/${itemId}`}
                key={itemId}
              >
                <FoodItem foodId={itemId} />
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
