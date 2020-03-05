import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Title, Cleanlist, FilterButton } from "./StyledComponents";

export default class Filters extends Component {
  state = {
    filters: []
  };

  handleClick = event => {
    this.setState({ filters: [...this.state.filters, event.target.name] });
    console.log(this.state.filters);
  };

  render() {
    return (
      <div>
        <Title>Select a filter</Title>
        <Cleanlist>
          <li>
            <FilterButton onClick={this.handleClick} name="my-items">
              My items
            </FilterButton>
          </li>
          <li>
            <FilterButton onClick={this.handleClick} name="common-items">
              Common items
            </FilterButton>
          </li>
          <li>
            <FilterButton onClick={this.handleClick} name="expiration-date">
              Sort by Expiration date
            </FilterButton>
          </li>
          <li>
            <FilterButton onClick={this.handleClick} name="availability">
              Unavailable / Expired items
            </FilterButton>
          </li>
          {/* <li>
            <FilterButton onClick={this.handleClick} name="expiration-date">
              Category
            </FilterButton>
          </li> */}
          <li>
            <FilterButton
              onClick={this.handleClick}
              name="no-filter"
              style={{ backgroundColor: "#e7a40a" }}
            >
              No filter
            </FilterButton>
          </li>
        </Cleanlist>
        {/* Redirect, with a parameter, if a filter has been selected. */}
        {this.state.filters && (
          <Redirect
            to={{
              pathname: `/fridge/${this.props.fridgeId}`,
              search: `?filter=${this.state.filters.join("&")}`
              //   state: { filters: this.state.filters } doesn't work
            }}
          />
        )}
        {this.state.filters === "no-filter" && (
          <Redirect to={{ pathname: `/fridge/${this.props.fridgeId}` }} />
        )}
      </div>
    );
  }
}
