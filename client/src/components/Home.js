import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fridge from "./Fridge";
import styled, { css } from "styled-components";

import { StyledLink, Card, Container } from "./StyledComponents";

export default class Home extends Component {
  render() {
    if (this.props.user) {
      return (
        <>
          <h3>Fridge List:</h3>
          <Container>
            {this.props.user.fridges.map(fridgeId => {
              return (
                <Card>
                  <StyledLink to={`/fridge/${fridgeId}`} key={fridgeId}>
                    <Fridge fridgeId={fridgeId} />
                  </StyledLink>
                </Card>
              );
            })}
            <Card>
              <StyledLink to="/createFridge">Create Fridge</StyledLink>
            </Card>
          </Container>
        </>
      );
    }
    return <div>About</div>;
  }
}
