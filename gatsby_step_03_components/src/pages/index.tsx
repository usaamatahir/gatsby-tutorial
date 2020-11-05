import React from "react";
import { Link } from "gatsby";
import Header_Component from "../components/Header_Component";

const index = () => {
  return (
    <div>
      <Header_Component />
      <h1>Hello World</h1>
      <Link to="/about">About Me</Link>
    </div>
  );
};

export default index;
