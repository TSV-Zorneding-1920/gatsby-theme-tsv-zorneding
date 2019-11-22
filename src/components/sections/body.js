import React from "react";
import { MarkdownContent } from "../content";
import { graphql } from "gatsby";

class Body extends React.Component {
  admin() {
    return {
      label: "Text",
      name: "body",
      widget: "object",
      fields: [
        {
          label: "Text",
          name: "body",
          widget: "markdown"
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        <MarkdownContent content={this.props.content} />
      </div>
    );
  }
}

export default Body;

export const query = graphql`
  fragment SectionBodyFragment on MarkdownRemarkFrontmatter {
    sections {
      body
    }
  }
`;
