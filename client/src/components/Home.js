import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fridge from "./Fridge";
import Login from "./Login";
import styled, { css } from "styled-components";

import { StyledLink, Card, Container, HomeImg } from "./StyledComponents";

export default class Home extends Component {
  render() {
    if (this.props.user) {
      return (
        <>
          <h3>Fridge List:</h3>
          <Container>
            {this.props.user.fridges.map(fridgeId => {
              return (
                <Card key={fridgeId}>
                  <StyledLink to={`/fridge/${fridgeId}`}>
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
    return (
      <div>
        <h1>Fridgy</h1>
        <p style={{ padding: "0 10vh" }}>
          Welcome to Fridgy!
          <br /> The app that helps you organise your fridge.
        </p>
        <div>
          <HomeImg src="/fridge.png" alt="" />
        </div>
        <div style={{ paddingBottom: "10vh" }}>
          <Login setUser={this.props.setUser} />
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}
