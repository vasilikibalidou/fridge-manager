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
  SmallFridge
} from "./StyledComponents";

export default class Home extends Component {
  render() {
    if (this.props.user) {
      return (
        <>
          <h3>Fridge List:</h3>
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
            <Card>
              <StyledLink to="/createFridge">
                <AddImg src="/add.png" alt="add" />
              </StyledLink>
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
