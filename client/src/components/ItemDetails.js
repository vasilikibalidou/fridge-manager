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
  DeleteButton,
  Cleanlist,
  Title
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
        <Section>
          <Title style={(empty, expired)}>{this.state.foodItem?.name}</Title>
          <Cleanlist>
            <li>
              <img height="50" src="/022-containers.png" alt="itemimage"></img>
            </li>
            <li>Category: {this.state.foodItem?.category}</li>
            <li>Availability: {this.state.foodItem?.availability}</li>
            <li>Best Before: {this.state.foodItem?.expiration}</li>
            <li>Description: {this.state.foodItem?.description}</li>
          </Cleanlist>
        </Section>
        <Section>
          <DeleteButton onClick={() => this.handleDelete(this.props.foodId)}>
            Delete
          </DeleteButton>
          <Link
            to={`/${this.props.fridgeId}/foodItem/${this.props.itemId}/edit`}
          >
            <Button>Edit item</Button>
          </Link>
        </Section>
      </div>
    );
  }
}
