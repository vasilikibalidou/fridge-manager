import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fridge from "./Fridge";

const Home = props => {
  if (props.user) {
    return (
      <div>
        Fridge List:
        {props.user.fridges.map(fridgeId => {
          return (
            <Link to={`/fridge/${fridgeId}`} key={fridgeId}>
              <Fridge fridgeId={fridgeId} />
            </Link>
          );
        })}
        <br />
        <Link to="/createFridge">Create Fridge</Link>
      </div>
    );
  }
  return <div>Not User</div>;
};

export default Home;
