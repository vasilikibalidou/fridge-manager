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

  handleDelete = () => {
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
    // if (this.state.redirect){
    //   return <Redirect />
    // }
    return (
      <div>
        <p>The Fridge:</p>
        <Title> {this.state.fridge?.name}</Title>
        <div> Items:</div>
        <Container>
          <ContainerScroll>
            {this.state.fridge?.items.map(itemId => {
              return (
                <Card key={itemId}>
                  <Innerbox>
                    <StyledLink
                      to={`/fridge/${this.props.fridgeId}/foodItem/${itemId}`}
                      key={itemId}
                    >
                      <FoodItem
                        foodId={itemId}
                        fridgeId={this.props.fridgeId}
                        updateFunc={this.props.updateFunc}
                        history={this.props.history}
                      />
                    </StyledLink>
                  </Innerbox>
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
          </ContainerScroll>
        </Container>
        <div>
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
            <DeleteButton
              onClick={() => this.handleDelete(this.props.fridgeId)}
            >
              Delete this fridge
            </DeleteButton>
          )}
          <Section>{this.state.message && <p>{this.state.message}</p>}</Section>
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
        <Section style={{ color: "red" }}>
          {this.state.message && <p>{this.state.message}</p>}
        </Section>
      </div>
    );
  }
}
