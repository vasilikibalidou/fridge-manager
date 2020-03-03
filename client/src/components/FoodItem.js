import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";
import {
  DeleteButton,
  Section,
  Card,
  Innerbox,
  Cleanlist
} from "./StyledComponents";

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

  handleDelete = id => {
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
        <div>
          <Cleanlist>
            <li>
              <img
                height="50vh"
                src="/022-containers.png"
                alt="itemimage"
              ></img>
              {this.state.foodItem?.category}
            </li>
            <li>Availability: {this.state.foodItem?.availability}</li>
            <li>Best Before: {this.state.foodItem?.expiration}</li>
            <li>Description: {this.state.foodItem?.description}</li>
          </Cleanlist>
        </div>
        <div>
          <Link
            to={`${this.props.fridgeId}/foodItem/${this.props.foodId}/edit`}
          >
            <Button>Edit item</Button>
          </Link>
        </div>
        <div>
          <DeleteButton onClick={() => this.handleDelete(this.props.foodId)}>
            Delete
          </DeleteButton>
        </div>
      </div>
    );
  }
}
