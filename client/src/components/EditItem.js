import React, { Component } from "react";
import axios from "axios";

export default class EditItem extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    expiration: "",
    quantity: { number: "", unit: "" },
    availability: "",
    common: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount = () => {
    axios.get(`/foodItem/${this.props.foodItemId}`).then(response => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        category: response.data.category,
        expiration: response.data.expiration,
        quantity: { number: "", unit: "" },
        availability: response.data.availability,
        common: response.data.common
      });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.expiration);
    axios
      .post(`/foodItem/edit/${this.props.foodItemId}`, {
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

          <label htmlFor="expiration">Best before: </label>
          <input
            type="date"
            id="expiration"
            name="expiration"
            value={this.state.expiration}
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
            <option value="cooked meal">cooked meal</option>
            <option value="drinks">drinks</option>
            <option value="alcohol">alcohol</option>
            <option value="coffee">coffee</option>
            <option value="other">other</option>
          </select>
          <label htmlFor="common">shared food</label>
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
