import React from "react";
import { Link } from "gatsby";

const index = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/about">About Me</Link>
    </div>
  );
};

export default index;
