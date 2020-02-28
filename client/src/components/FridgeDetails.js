import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";
import styled, { css } from "styled-components";

import { StyledLink, Container, Card } from "./StyledComponents";

export default class FridgeDetails extends Component {
  state = {
    fridge: null,
    userIsAdmin: false,
    userHasFridge: false
  };

  componentDidMount() {
    axios.get(`/fridge/${this.props.fridgeId}`).then(response => {
      let isAdmin = response.data?.admins.includes(this.props.user._id);
      let hasFridge = response.data?.users.includes(this.props.user._id);
      this.setState({
        fridge: response.data,
        userIsAdmin: isAdmin,
        userHasFridge: hasFridge
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
        {this.state.fridge && (
          <Link to={`/fridge/${this.state.fridge._id}/createItem`}>
            Add item
          </Link>
        )}
        <br />
        {this.state.userIsAdmin && (
          <Link to={`/fridge/${this.state.fridge._id}/invite`}>
            Invite Users
          </Link>
        )}
        <br />
        {this.state.userHasFridge && (
          <Link to={`/fridge/${this.state.fridge._id}/join`}>Join Fridge</Link>
        )}
      </div>
    );
  }
}
