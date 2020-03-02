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
  DeleteButton
} from "./StyledComponents";

export default class FridgeDetails extends Component {
  state = {
    user: this.props.user,
    fridge: null,
    userIsAdmin: false,
    userHasFridge: false,
    message: ""
  };

  componentDidMount() {
    axios
      .get(`/fridge/${this.props.fridgeId}`)
      .then(response => {
        let isAdmin = response.data?.admins.includes(this.state.user._id);
        let hasFridge = response.data?.users.includes(this.state.user._id);
        console.log(hasFridge);
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
        axios.get("/auth/loggedin").then(resp => {
          let isAdmin = response.data?.admins.includes(resp.data._id);
          let hasFridge = response.data?.users.includes(resp.data._id);
          this.setState({
            user: resp.data,
            userIsAdmin: isAdmin,
            userHasFridge: hasFridge,
            fridge: response.data
          });
        });
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  handleDelete = id => {
    axios
      .post(`/fridge/${this.props.fridgeId}/delete`, {
        userId: this.props.user._id
      })
      .then(response => {
        this.props.updateFunc(response.data);
        this.props.history.push("/");
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
                    <FoodItem
                      foodId={itemId}
                      fridgeId={this.props.fridgeId}
                      updateFunc={this.props.updateFunc}
                      history={this.props.history}
                    />
                  </StyledLink>
                </Card>
              );
            })}
            {this.state.fridge && this.state.userHasFridge && (
              <Card>
                <StyledLink to={`/fridge/${this.state.fridge._id}/createItem`}>
                  <AddImg src="/add.png" alt="add" />
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
        {this.state.userIsAdmin && (
          <DeleteButton onClick={() => this.handleDelete(this.props.fridgeId)}>
            Delete this fridge
          </DeleteButton>
        )}
        <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
      </div>
    );
  }
}
