import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fridge from "./Fridge";
import Login from "./Login";

import {
  StyledLink,
  Card,
  Container,
  HomeImg,
  AddImg,
  SmallFridge,
  Title
} from "./StyledComponents";

export default class Home extends Component {
  render() {
    if (this.props.user) {
      return (
        <>
          <Container>
            {this.props.user.fridges.map(fridgeId => {
              return (
                <StyledLink to={`/fridge/${fridgeId}`} key={fridgeId}>
                  <SmallFridge>
                    <Card>
                      <Fridge fridgeId={fridgeId} user={this.props.user} />
                    </Card>
                  </SmallFridge>
                </StyledLink>
              );
            })}
            <StyledLink to="/createFridge" style={{ padding: "5vw" }}>
              <AddImg src="/add.png" alt="add" />
            </StyledLink>
          </Container>
        </>
      );
    }
    return (
      <div>
        <Title>Fridgy</Title>
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
