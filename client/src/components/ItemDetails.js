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
    let src = "";
    if (this.state.foodItem?.category) {
      src = "/" + this.state.foodItem?.category + ".png";
    }
    let style = {};
    if (this.state.foodItem?.availability === "empty") {
      style = { opacity: "0.5" };
    }
    if (new Date(this.state.foodItem?.expiration) < new Date()) {
      style = { color: "red" };
    }
    return (
      <div>
        <Section>
          <Title style={style}>{this.state.foodItem?.name}</Title>
          <Cleanlist>
            <li>{src && <img height="50" src={src} alt="itemimage"></img>}</li>
            <li>Category: {this.state.foodItem?.category}</li>
            <li>Availability: {this.state.foodItem?.availability}</li>
            {this.state.foodItem?.expiration && (
              <li>
                Best Before: {this.state.foodItem?.expiration?.slice(0, 10)}
              </li>
            )}
            <li>Common item: {this.state.foodItem?.common ? "Yes" : "No"}</li>
            {this.state.foodItem?.expiration && (
              <li>Description: {this.state.foodItem?.description}</li>
            )}
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
