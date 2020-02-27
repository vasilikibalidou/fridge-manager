import React, { Component } from "react";
import axios from "axios";

export default class CreateItem extends Component {
  state = {
    name: "",
    description: "",
    category: "other",
    expiration: Date,
    quantity: { number: "", unit: "L" },
    availability: "full",
    common: "false"
  };

  handleChange = event => {
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
        expiration: this.state.expiration,
        image: this.state.image,
        quantity: {
          number: this.state.number,
          unit: this.state.unit
        },
        availability: this.state.availability
      })
      .then(response => {
        console.log("response: " + response);
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={this.state.number}
            onChange={this.handleChange}
          />
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
          <label htmlFor="category">availability: </label>
          <select
            type="text"
            id="availability"
            name="availability"
            value={this.state.availability}
            onChange={this.handleChange}
          >
            <option value="full">full</option>
            <option value="half-full">1/2</option>
            <option value="almost empty">almost empty</option>
            <option value="empty">empty</option>
          </select>

          <label htmlFor="expirydate">Best before: </label>
          <input
            type="date"
            id="expirydate"
            name="expirydate"
            // value={this.state.expiration}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="category">Category: </label>

          <select
            type="text"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="fruit">🍏</option>
            <option value="vegetables">🍅</option>
            <option value="dairy">🧀</option>
            <option value="eggs">🥚 </option>
            <option value="meat">🥩 </option>
            <option value="fish">🐟 </option>
            <option value="seafood">🍤 </option>
            <option value="dessert">🧁 </option>
            <option value="bread">🥖</option>
            <option value="cooked meal">🥘 </option>
            <option value="drinks">🧃 </option>
            <option value="alcohol">🍾 </option>
            <option value="coffee">☕️ </option>
            <option value="other">other </option>
          </select>
          <label htmlFor="common">shared food </label>
          <input
            type="checkbox"
            id="common"
            name="common"
            value="false"
          ></input>
          <label htmlFor="name">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
