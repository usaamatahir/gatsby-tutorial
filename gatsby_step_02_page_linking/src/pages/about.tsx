import { navigate } from "gatsby";
import React from "react";

const about = () => {
  return (
    <div>
      <h1>About Me</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default about;
