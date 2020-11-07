import React from "react";
import { graphql } from "gatsby";

const index = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>
        <b>Title : </b>
        {data.allContentfulBlogPost.nodes[0].title}
      </p>
      <p>
        <b>Data : </b>
        {data.allContentfulBlogPost.nodes[0].content.content}
      </p>
      <p>
        <b>Created At : </b>
        {data.allContentfulBlogPost.nodes[0].createdAt}
      </p>
      <br />
      <p>
        <b>Title : </b>
        {data.allContentfulBlogPost.nodes[1].title}
      </p>
      <p>
        <b>Data : </b>
        {data.allContentfulBlogPost.nodes[1].content.content}
      </p>
      <p>
        <b>Created At : </b>
        {data.allContentfulBlogPost.nodes[1].createdAt}
      </p>
    </div>
  );
};

export default index;

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        content {
          content
        }
        title
        createdAt(fromNow: true)
      }
    }
  }
`;
