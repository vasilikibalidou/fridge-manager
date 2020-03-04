import React, { Component } from "react";

export default class FoodItem extends Component {
  render() {
    let src = "";
    if (this.props.foodItem?.category) {
      src = "/" + this.props.foodItem?.category + ".png";
    }

    let itemStyle = {};
    if (this.props.foodItem?.availability === "empty") {
      itemStyle = { opacity: "0.4" };
    }
    let nameStyle = {};
    if (this.props.foodItem?.expiration) {
      if (new Date(this.props.foodItem?.expiration) < new Date()) {
        nameStyle = { color: "#f05050" };
      }
    }
    return (
      <div style={itemStyle}>
        <div style={nameStyle}> {this.props.foodItem?.name}</div>
        {src && <img height="50" src={src} alt="itemimage"></img>}
      </div>
    );
  }
}
