import React, { Component } from "react";
import axios from "axios";

import { Form, Section, Button, Input, Select } from "./StyledComponents";

export default class CreateItem extends Component {
  state = {
    name: null,
    description: null,
    category: "dairy",
    expiration: null,
    quantity: { number: null, unit: null },
    availability: "full",
    common: false
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
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
        availability: this.state.availability
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
            <br />
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
            <label htmlFor="quantity">How much?</label>
            <br />
            <Input
              type="number"
              min="0"
              id="quantity"
              name="quantity"
              placeholder="0"
              value={this.state.number}
              onChange={this.handleChange}
              style={{ width: "10vw" }}
            />

            <Select
              type="text"
              id="unit"
              name="unit"
              value={this.state.unit}
              onChange={this.handleChange}
            >
              <option value="L">Liter</option>
              <option value="kg">kg</option>
              <option value="item">item</option>
            </Select>
          </Section>
          <Section>
            <label htmlFor="availability">How much is left? </label>
            <br />
            <Select
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
            </Select>
          </Section>
          <Section>
            <label htmlFor="expiration">Best before: </label>
            <br />
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
            <br />
            <Select
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
              <option value="cooked">cooked meal</option>
              <option value="drinks">drinks</option>
              <option value="alcohol">alcohol</option>
              <option value="other">other </option>
            </Select>
          </Section>
          <Section>
            <label htmlFor="common">
              To share
              <Input type="checkbox" id="common" name="common" value="false" />
            </label>
          </Section>
          <Section>
            <label htmlFor="name">Description: </label>
            <br />
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
