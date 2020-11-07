import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const index = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <h1>This is Home Page</h1>
      <h1>
        <b>Title : </b>
        {data.allContentfulBlogPost.nodes[0].title}
      </h1>
      <h1>
        <b>Data : </b>
        {documentToReactComponents(
          data.allContentfulBlogPost.nodes[0].content.json
        )}
      </h1>
      <h1>
        <b>Created At : </b>
        {data.allContentfulBlogPost.nodes[0].createdAt}
      </h1>
    </div>
  );
};

export default index;

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        content {
          json
        }
        title
        createdAt(fromNow: true)
      }
    }
  }
`;
