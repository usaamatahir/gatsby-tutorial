import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Template = ({ pageContext: { data } }: any) => {
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{documentToReactComponents(data.content.json)}</h2>
      <h4>Published: {data.createdAt}</h4>
    </div>
  );
};

export default Template;
