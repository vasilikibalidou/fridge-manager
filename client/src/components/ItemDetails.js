import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Section,
  Button,
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
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .post(`/foodItem/${this.props.itemId}/delete`, {
          fridgeId: this.props.fridgeId
        })
        .then(response => {
          this.props.updateFunc(response.data);
          this.props.history.push(`/fridge/${this.props.fridgeId}`);
        });
    }
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
    if (this.state.foodItem?.expiration) {
      if (new Date(this.state.foodItem?.expiration) < new Date()) {
        style = { color: "red" };
      }
    }
    return (
      <div>
        <Section>
          <Title style={style}>{this.state.foodItem?.name}</Title>
          <Cleanlist>
            <li>
              <img height="70vh" src={src} alt="itemimage"></img>
            </li>
            <li>Belongs to: {this.props.user.username}</li>
            <li>Category: {this.state.foodItem?.category}</li>
            <li>Availability: {this.state.foodItem?.availability}</li>
            {this.state.foodItem?.expiration && (
              <li>
                Best Before: {this.state.foodItem?.expiration?.slice(0, 10)}
              </li>
            )}
            <li>Common item: {this.state.foodItem?.common ? "Yes" : "No"}</li>
            {this.state.foodItem?.description && (
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
