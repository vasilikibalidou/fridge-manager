import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";

import {
  StyledLink,
  Container,
  Card,
  Section,
  Button,
  AddImg,
  DeleteButton
} from "./StyledComponents";

export default class ItemDetails extends Component {
  state = {
    foodItem: null
  };

  componentDidMount() {
    axios.get(`/foodItem/${this.props.itemId}`).then(response => {
      this.setState({
        foodItem: response.data
      });
    });
  }

  handleDelete = () => {
    axios
      .post(`/foodItem/${this.props.itemId}/delete`, {
        fridgeId: this.props.fridgeId
      })
      .then(response => {
        this.props.updateFunc(response.data);
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
      });
  };

  render() {
    let empty = {};
    if (this.state.foodItem?.availability === "empty") {
      empty = { opacity: "0.5" };
    }
    let expired = {};
    if (new Date(this.state.foodItem?.expiration) < new Date()) {
      console.log("expired");
      expired = { color: "red" };
    }
    return (
      <div>
        Item:
        <Container>
          <Card>
            <div>
              <div style={(empty, expired)}>
                Name: {this.state.foodItem?.name}
              </div>
              <ul>
                <li>
                  {" "}
                  <img
                    height="50"
                    src="/022-containers.png"
                    alt="itemimage"
                  ></img>
                  {this.state.foodItem?.category}
                </li>
                <li>Availability: {this.state.foodItem?.availability}</li>
                <li>Best Before: {this.state.foodItem?.expiration}</li>
                <li>Description: {this.state.foodItem?.description}</li>
              </ul>
              <Link
                to={`/${this.props.fridgeId}/foodItem/${this.props.itemId}/edit`}
              >
                Edit item
              </Link>

              <DeleteButton
                onClick={() => this.handleDelete(this.props.foodId)}
              >
                Delete
              </DeleteButton>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}
