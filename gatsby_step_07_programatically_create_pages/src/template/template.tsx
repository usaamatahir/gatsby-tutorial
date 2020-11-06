import React from "react";

type dataType = {
  pageContext: {
    name: string;
    age: number;
    designation: string;
  };
};
export default ({ pageContext }: dataType) => {
  return (
    <div>
      <h1>Hello Dynamic Page from {pageContext.name}</h1>
      <h1>My Age is {pageContext.age}</h1>
      <h1>I am a {pageContext.designation}</h1>
      <h1>This page is create dynamically at Build Time</h1>
    </div>
  );
};
