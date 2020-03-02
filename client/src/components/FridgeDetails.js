import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";

import {
  StyledLink,
  Container,
  Card,
  Section,
  Button
} from "./StyledComponents";

export default class FridgeDetails extends Component {
  state = {
    fridge: null,
    userIsAdmin: false,
    userHasFridge: false,
    message: ""
  };

  componentDidMount() {
    axios
      .get(`/fridge/${this.props.fridgeId}`)
      .then(response => {
        let isAdmin = response.data?.admins.includes(this.props.user._id);
        let hasFridge = response.data?.users.includes(this.props.user._id);
        this.setState({
          fridge: response.data,
          userIsAdmin: isAdmin,
          userHasFridge: hasFridge
        });
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  }

  joinFridge = () => {
    axios
      .post(`/fridge/${this.state.fridge._id}/join`, {
        userId: this.props.user._id
      })
      .then(response => {
        this.props.updateFunc();
        // redirect to get new props
        this.props.history.push(`/fridge/${this.state.fridge._id}`);
        // axios.get("/auth/loggedin").then(response => {
        //   this.setState({
        //     user: response.data
        //   });
        // });
        // this.setState({
        //   fridge: response.data
        // });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <div>
        <div>Fridge name: {this.state.fridge?.name}</div>
        <div>
          Items:
          <Container>
            {this.state.fridge?.items.map(itemId => {
              return (
                <Card key={itemId}>
                  <StyledLink
                    to={`/fridge/${this.state.fridge._id}/${itemId}`}
                    key={itemId}
                  >
                    <FoodItem foodId={itemId} />
                  </StyledLink>
                </Card>
              );
            })}
            {this.state.fridge && this.state.userHasFridge && (
              <Card>
                <StyledLink to={`/fridge/${this.state.fridge._id}/createItem`}>
                  Add item
                </StyledLink>
              </Card>
            )}
          </Container>
        </div>
        <br />
        {this.state.userIsAdmin && (
          <Link to={`/fridge/${this.state.fridge._id}/invite`}>
            Invite Users
          </Link>
        )}
        <br />
        {this.state.userHasFridge === false && (
          <div>
            <Button type="submit" onClick={this.joinFridge}>
              Join Fridge
            </Button>
          </div>
        )}
        <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
      </div>
    );
  }
}
