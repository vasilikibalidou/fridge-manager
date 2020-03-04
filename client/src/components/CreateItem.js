import React, { Component } from "react";
import axios from "axios";

import { Form, Section, Button, Input } from "./StyledComponents";

export default class CreateItem extends Component {
  state = {
    name: "",
    description: "",
    category: "dairy",
    expiration: null,
    quantity: { number: null, unit: null },
    availability: "full",
    common: false
  };

  handleChange = event => {
<<<<<<< HEAD
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
=======
    console.log(event.target.value);
>>>>>>> master
    this.setState({
      [event.target.name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/foodItem", {
        name: this.state.name,
        description: this.state.description,
        userId: this.props.user._id,
        fridgeId: this.props.fridgeId,
        category: this.state.category,
        expiration: this.state.expiration,
        image: this.state.image,
        quantity: {
          number: this.state.number,
          unit: this.state.unit
        },
        availability: this.state.availability,
        common: this.state.common
      })
      .then(response => {
        // redirect
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <label htmlFor="name">This is: </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="item name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Section>
          <Section>
            <label htmlFor="quantity">How much is it? </label>
            <Input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="quantity"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Section>
          <Section>
            <label htmlFor="unit">unit </label>
            <select
              type="text"
              id="unit"
              name="unit"
              value={this.state.unit}
              onChange={this.handleChange}
            >
              <option value="L">Liter</option>
              <option value="kg">kg</option>
              <option value="item">item</option>
            </select>
          </Section>
          <Section>
            <label htmlFor="availability">availability: </label>
            <select
              type="text"
              id="availability"
              name="availability"
              value={this.state.availability}
              onChange={this.handleChange}
            >
              <option value="full">full</option>
              <option value="half-full">half-full</option>
              <option value="almost empty">almost empty</option>
              <option value="empty">empty</option>
            </select>
          </Section>
          <Section>
            <label htmlFor="expiration">Best before: </label>
            <Input
              type="date"
              id="expiration"
              name="expiration"
              // value={this.state.expiration}
              onChange={this.handleChange}
            ></Input>
          </Section>
          <Section>
            <label htmlFor="category">Category: </label>

            <select
              type="text"
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="fruit">fruit</option>
              <option value="vegetables">vegetables</option>
              <option value="dairy">dairy</option>
              <option value="eggs">eggs</option>
              <option value="meat">meat </option>
              <option value="fish">fish </option>
              <option value="seafood">seafood </option>
              <option value="dessert">dessert </option>
              <option value="bread">bread</option>
              <option value="cooked meal">cooked meal </option>
              <option value="drinks">drinks</option>
              <option value="alcohol">alcohol </option>
              <option value="coffee">coffee</option>
              <option value="other">other </option>
            </select>
          </Section>
          <Section>
            <label htmlFor="common">
              To share
              <Input
                type="checkbox"
                id="common"
                name="common"
                checked={this.state.common}
                onChange={this.handleChange}
              />
            </label>
          </Section>
          <Section>
            <label htmlFor="name">Description: </label>
            <Input
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Section>

          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}
