import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Title,
  Cleanlist,
  FilterContainer,
  Button,
  CheckboxLabel
} from "./StyledComponents";

export default class Filters extends Component {
  state = {
    myItems: false,
    commonItems: false,
    expirationSort: false,
    expired: false,
    empty: false,
    submit: false,
    filters: []
  };

  handleChange = event => {
    if (event.target.type === "checkbox") {
      this.setState({
        [event.target.name]: event.target.checked
      });
    }
  };

  handleClick = event => {
    if (event.target.name === "submit") {
      // get active filters
      const filters = Object.keys({ ...this.state })
        .slice(0, 5)
        .filter(filterName => {
          return this.state[filterName] === true;
        });
      this.setState({ submit: true, filters: filters });
    } else if (event.target.name === "clear") {
      this.setState({
        myItems: false,
        commonItems: false,
        expirationSort: false,
        expired: false,
        empty: false,
        submit: false,
        filters: []
      });
    }
  };

  render() {
    return (
      <div style={{ height: "78vh" }}>
        <Title>Select a filter</Title>
        <FilterContainer>
          <ul style={{ textAlign: "left", margin: "0", listStyleType: "none" }}>
            <li>
              <input
                type="checkbox"
                id="myItems"
                name="myItems"
                checked={this.state.myItems}
                onChange={this.handleChange}
              />
              <CheckboxLabel htmlFor="myItems">My items</CheckboxLabel>
            </li>
            <li>
              <input
                type="checkbox"
                id="commonItems"
                name="commonItems"
                checked={this.state.commonItems}
                onChange={this.handleChange}
              />
              <CheckboxLabel htmlFor="commonItems">Common items</CheckboxLabel>
            </li>
            <li>
              <input
                type="checkbox"
                id="expired"
                name="expired"
                checked={this.state.expired}
                onChange={this.handleChange}
              />
              <CheckboxLabel htmlFor="expired">Expired</CheckboxLabel>
            </li>
            <li>
              <input
                type="checkbox"
                id="empty"
                name="empty"
                checked={this.state.empty}
                onChange={this.handleChange}
              />
              <CheckboxLabel htmlFor="empty">Empty</CheckboxLabel>
            </li>
            <li>
              <input
                type="checkbox"
                id="expirationSort"
                name="expirationSort"
                checked={this.state.expirationSort}
                onChange={this.handleChange}
              />
              <CheckboxLabel htmlFor="expirationSort">
                Sort by expiration
              </CheckboxLabel>
            </li>
          </ul>
        </FilterContainer>
        <Cleanlist>
          <li>
            <Button
              onClick={this.handleClick}
              name="clear"
              style={{ backgroundColor: "#e7a40a" }}
            >
              Clear Filters
            </Button>
          </li>
          <li>
            <Button onClick={this.handleClick} name="submit">
              Submit
            </Button>
          </li>
        </Cleanlist>
        {this.state.submit && (
          <Redirect
            to={{
              pathname: `/fridge/${this.props.fridgeId}`,
              search: `?filters=${this.state.filters.join("&")}`
              //   state: { filters: this.state.filters } doesn't work
            }}
          />
        )}
      </div>
    );
  }
}
