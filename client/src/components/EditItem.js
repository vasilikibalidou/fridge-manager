import React, { Component } from "react";
import axios from "axios";
import { Button } from "./StyledComponents";
import { Section, Input, Form, Select } from "./StyledComponents";
export default class EditItem extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    expiration: new Date(),
    number: 0,
    unit: "",
    availability: "",
    common: ""
  };

  handleChange = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  componentDidMount = () => {
    axios.get(`/api/foodItem/${this.props.foodItemId}`).then(response => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        category: response.data.category,
        expiration: response.data.expiration.slice(0, 10),
        number: response.data.quantity?.number,
        unit: response.data.quantity?.unit,
        availability: response.data.availability,
        common: response.data.common
      });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`/api/foodItem/edit/${this.props.foodItemId}`, {
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
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <label htmlFor="name">Item name: </label>
            <br />
            <Input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Section>
          <Section>
            <label htmlFor="number">Quantity </label>
            <br />
            <Input
              type="number"
              id="number"
              name="number"
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

          {this.state.unit !== "item" && (
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
          )}
          <Section>
            <label htmlFor="expiration">Best before: </label>
            <br />
            <Input
              type="date"
              id="expiration"
              name="expiration"
              value={this.state.expiration}
              onChange={this.handleChange}
            ></Input>
          </Section>
          {/* <Section>
            <label htmlFor="category">Category: </label>
            <br />

            <Select
              type="text"
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value={this.state.category} value="fruit">
                fruit
              </option>
              <option value="vegetables">vegetables</option>
              <option value="dairy">dairy</option>
              <option value="eggs">eggs</option>
              <option value="meat">meat</option>
              <option value="fish">fish</option>
              <option value="seafood">seafood</option>
              <option value="dessert">dessert</option>
              <option value="bread">bread</option>
              <option value="cooked_meal">cooked meal</option>
              <option value="drinks">drinks</option>
              <option value="alcoholic_drinks">alcohol</option>
              <option value="coffee">coffee</option>
              <option value="other">other</option>
            </Select>
          </Section> */}
          <Section>
            <label htmlFor="common">
              <input
                type="checkbox"
                id="common"
                name="common"
                checked={this.state.common}
                onChange={this.handleChange}
              />
              <span> </span>
              To share
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
