import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";
import styled, { css } from "styled-components";

import { StyledLink, Container, Card } from "./StyledComponents";

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
          <Container>
            {this.state.fridge?.items.map(itemId => {
              return (
                <Card>
                  <StyledLink
                    to={`/fridge/${this.state.fridge._id}/${itemId}`}
                    key={itemId}
                  >
                    <FoodItem foodId={itemId} />
                  </StyledLink>
                </Card>
              );
            })}
            <Card>
              {this.state.fridge && (
                <StyledLink to={`/fridge/${this.state.fridge._id}/createItem`}>
                  Add item
                </StyledLink>
              )}
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}
