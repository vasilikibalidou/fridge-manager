import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import axios from "axios";

import {
  SortButton,
  StyledLink,
  ContainerTitleAndFilter,
  ContainerFridgedetails,
  ContainerFridgeInside,
  SpacerDiv,
  Card,
  Section,
  Button,
  AddImg,
  GroupDeleteButton,
  GroupButton,
  Title,
  Innerbox,
  FilterLink,
  FilterSpan,
  ButtonContainer,
  Center
} from "./StyledComponents";

export default class FridgeDetails extends Component {
  state = {
    user: this.props.user,
    fridge: null,
    items: [],
    userIsAdmin: false,
    userHasFridge: false,
    message: ""
  };

  componentDidMount() {
    const filter = window.location.search
      ? window.location.search.split("=")[1]
      : "";
    axios
      .get(`/api/fridge/${this.props.fridgeId}/items`)
      .then(response => {
        let isAdmin = response?.data?.admins?.includes(this.state.user._id);
        let hasFridge = response?.data?.users?.includes(this.state.user._id);

        let filteredItems = response?.data?.items;
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
            filteredItems = response?.data?.items.filter(item => {
              if (filter === "my-items") {
                return item.users.includes(this.state.user._id);
              }
              if (filter === "availability") {
                return (
                  item.availability === "empty" ||
                  (item.expiration && new Date(item.expiration) < new Date())
                );
              } else if (filter === "common-items") {
                return item.common === true;
              }
              return true;
            });
          }
        }

        this.setState({
          fridge: response?.data,
          userIsAdmin: isAdmin,
          userHasFridge: hasFridge,
          items: filteredItems
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
      .post(`/api/fridge/${this.state.fridge._id}/join`, {
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
    if (window.confirm("Are you sure you want to delete this fridge?")) {
      axios
        .post(`/api/fridge/${this.props.fridgeId}/delete`, {
          userId: this.props.user._id
        })
        .then(response => {
          this.props.updateFunc();
          this.props.history.push("/");
        });
    }
  };

  render() {
    return (
      <div>
        <ContainerTitleAndFilter>
          <SpacerDiv></SpacerDiv>
          <Title> {this.state.fridge?.name}</Title>
          <FilterLink to={`/fridge/${this.props.fridgeId}/filters`}>
            <SortButton /> <FilterSpan>Filters</FilterSpan>
          </FilterLink>
        </ContainerTitleAndFilter>
        <ContainerFridgedetails>
          <ContainerFridgeInside>
            {this.state.items?.map(item => {
              return (
                <Innerbox key={item._id}>
                  <Card>
                    <StyledLink
                      to={`/fridge/${this.props.fridgeId}/foodItem/${item._id}`}
                    >
                      <FoodItem foodItem={item} history={this.props.history} />
                    </StyledLink>
                  </Card>
                </Innerbox>
              );
            })}

            {this.state.fridge && this.state.userHasFridge && (
              <Innerbox style={{ borderBottom: "none" }}>
                <Card>
                  <StyledLink
                    to={`/fridge/${this.state.fridge._id}/createItem`}
                  >
                    Add an item
                    <br />
                    <AddImg src="/add.png" alt="add" />
                  </StyledLink>
                </Card>
              </Innerbox>
            )}
          </ContainerFridgeInside>
        </ContainerFridgedetails>
        <ButtonContainer>
          {this.state.userIsAdmin && (
            <GroupDeleteButton
              onClick={() => this.handleDelete(this.props.fridgeId)}
            >
              Delete fridge
            </GroupDeleteButton>
          )}
          {this.state.userIsAdmin && this.state.fridge && (
            <Link to={`/fridge/${this.state.fridge._id}/users`}>
              <GroupButton>
                ({this.state.fridge.users.length}) Users
              </GroupButton>
            </Link>
          )}
          {this.state.userIsAdmin && (
            <Link to={`/fridge/${this.state.fridge._id}/invite`}>
              <GroupButton>Invite Users</GroupButton>
            </Link>
          )}
          {this.state.userHasFridge === false && (
            <Center>
              <Button type="submit" onClick={this.joinFridge}>
                Join Fridge
              </Button>
            </Center>
          )}
          <Section style={{ color: "#f05050" }}>
            {this.state.message && <p>{this.state.message}</p>}
          </Section>
        </ButtonContainer>
      </div>
    );
  }
}
