import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Title, Cleanlist, Button } from "./StyledComponents";

export default class Filters extends Component {
  state = {
    filter: ""
  };

  handleClick = event => {
    this.setState({ filter: event.target.name });
  };

  render() {
    return (
      <div>
        <Title>Select a filter</Title>
        <Cleanlist>
          <li>
            <Button onClick={this.handleClick} name="my-items">
              My items
            </Button>
          </li>
          <li>
            <Button onClick={this.handleClick} name="common-items">
              Common items
            </Button>
          </li>
          <li>
            <Button onClick={this.handleClick} name="expiration-date">
              Expiration date
            </Button>
          </li>
          {/* <li>
            <Button onClick={this.handleClick} name="expiration-date">
              Category
            </Button>
          </li> */}
          <li>
            <Button
              onClick={this.handleClick}
              name="no-filter"
              style={{ backgroundColor: "#e7a40a" }}
            >
              No filter
            </Button>
          </li>
        </Cleanlist>
        {/* Redirect, with a parameter, if a flter has been selected. */}
        {this.state.filter && (
          <Redirect
            to={{
              pathname: `/fridge/${this.props.fridgeId}`,
              search: `?filter=${this.state.filter}`
              //   state: { filter: this.state.filter } doesn't work
            }}
          />
        )}
        {this.state.filter === "no-filter" && (
          <Redirect to={{ pathname: `/fridge/${this.props.fridgeId}` }} />
        )}
      </div>
    );
  }
}
