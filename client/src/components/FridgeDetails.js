import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";

import {
  StyledLink,
  Container,
  ContainerScroll,
  Card,
  Section,
  Button,
  AddImg,
  DeleteButton,
  Title,
  Innerbox
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
    const filter = window.location.search
      ? window.location.search.split("=")[1]
      : "";
    axios
      .get(`/fridge/${this.props.fridgeId}/items`)
      .then(response => {
        let isAdmin = response.data?.admins.includes(this.state.user._id);
        let hasFridge = response.data?.users.includes(this.state.user._id);

        let filteredItems = response.data.items;
        if (filter) {
          if (filter === "expiration-date") {
            // sort by exp.date
            filteredItems = filteredItems.sort((a, b) => {
              if (!a.expiration || !b.expiration) {
                return true;
              }
              return new Date(a.expiration) - new Date(b.expiration);
            });
          } else {
            filteredItems = response.data.items.filter(item => {
              if (filter === "my-items") {
                return item.users.includes(this.state.user._id);
              } else if (filter === "common-items") {
                return item.common === true;
              }
              return true;
            });
          }
        }

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

  handleDelete = () => {
    axios
      .post(`/fridge/${this.props.fridgeId}/delete`, {
        userId: this.props.user._id
      })
      .then(response => {
        this.props.updateFunc();
        this.props.history.push("/");
      });
  };

  render() {
    // if (this.state.redirect){
    //   return <Redirect />
    // }
    return (
      <div>
        <Title> {this.state.fridge?.name}</Title>
        <ContainerScroll>
          {this.state.fridge?.items.map(item => {
            return (
              <Innerbox>
                <Card key={item._id}>
                  <StyledLink
                    to={`/fridge/${this.props.fridgeId}/foodItem/${item._id}`}
                    key={item._id}
                  >
                    <FoodItem
                      foodId={item._id}
                      fridgeId={this.props.fridgeId}
                      updateFunc={this.props.updateFunc}
                      history={this.props.history}
                    />
                  </StyledLink>
                </Card>
              </Innerbox>
            );
          })}
          {this.state.fridge && this.state.userHasFridge && (
            <Innerbox>
              <Card>
                <StyledLink to={`/fridge/${this.state.fridge._id}/createItem`}>
                  <AddImg src="/add.png" alt="add" />
                </StyledLink>
              </Card>
            </Innerbox>
          )}
          <Section>
            {this.state.userIsAdmin && this.state.fridge && (
              <Link to={`/fridge/${this.state.fridge._id}/users`}>
                ({this.state.fridge.users.length}) Users
              </Link>
            )}
          </Section>
        </ContainerScroll>
        <div>
          <br />
          {this.state.userIsAdmin && (
            <Link to={`/fridge/${this.state.fridge._id}/invite`}>
              <Button>Invite Users</Button>
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
            <DeleteButton
              onClick={() => this.handleDelete(this.props.fridgeId)}
            >
              Delete this fridge
            </DeleteButton>
          )}
          <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
        </div>
      </div>
    );
  }
}
