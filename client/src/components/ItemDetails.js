import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Section,
  Button,
  DeleteButton,
  Cleanlist,
  Title,
  Li,
  ContainerTitleAndFilter,
  SpacerDiv,
  FilterLink
} from "./StyledComponents";

export default class ItemDetails extends Component {
  state = {
    foodItem: null
  };

  componentDidMount() {
    axios.get(`/api/foodItem/${this.props.itemId}`).then(response => {
      this.setState({
        foodItem: response.data
      });
    });
  }

  handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .post(`/api/foodItem/${this.props.itemId}/delete`, {
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
    if (
      this.state.foodItem?.availability === "empty" ||
      (this.state.foodItem?.expiration &&
        new Date(this.state.foodItem?.expiration) < new Date())
    ) {
      style = { color: "#f05050", fontWeight: "bold" };
    }
    return (
      <div>
        <ContainerTitleAndFilter>
          <SpacerDiv></SpacerDiv>
          <FilterLink to={`/fridge/${this.props.fridgeId}`}>
            <img src="/close-24px.svg" alt="back to frige"></img>
          </FilterLink>
        </ContainerTitleAndFilter>

        <Section>
          <Title>{this.state.foodItem?.name}</Title>
          <Cleanlist>
            <Li>
              <img height="70vh" src={src} alt="itemimage"></img>
            </Li>
            <br />
            <li>
              <strong>Belongs to: </strong> {this.props.user.username}
            </li>
            <li>
              <strong>Category: </strong>
              {this.state.foodItem?.category}
            </li>
            <li>
              <strong>Quantity: </strong>
              {this.state.foodItem?.quantity?.number}{" "}
              {this.state.foodItem?.quantity?.unit}
            </li>
            {this.state.foodItem?.quantity?.unit !== "item" && (
              <li>
                <strong>Availability: </strong>{" "}
                <span style={style}>{this.state.foodItem?.availability}</span>
              </li>
            )}
            {this.state.foodItem?.expiration && (
              <li>
                <strong>Best before: </strong>
                <br />
                <span style={style}>
                  {this.state.foodItem?.expiration?.slice(0, 10)}
                </span>
              </li>
            )}
            <li>
              <strong>To be shared: </strong>
              {this.state.foodItem?.common ? "Yes" : "No"}
            </li>
            {this.state.foodItem?.description && (
              <li>
                <strong>Description: </strong>
                {this.state.foodItem?.description}
              </li>
            )}
          </Cleanlist>
        </Section>
        <Section>
          <Link
            to={`/${this.props.fridgeId}/foodItem/${this.props.itemId}/edit`}
          >
            <Button>Edit item</Button>
          </Link>

          <br />
          <DeleteButton onClick={() => this.handleDelete(this.props.foodId)}>
            Delete
          </DeleteButton>
        </Section>
      </div>
    );
  }
}
