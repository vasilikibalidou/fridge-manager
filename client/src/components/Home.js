import React, { Component } from "react";

const Home = props => {
  if (props.user) {
    return <div>User</div>;
  }
  return <div>Not User</div>;
};

export default Home;
