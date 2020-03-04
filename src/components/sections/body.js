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
          label: "Titel",
          name: "title",
          widget: "string",
          required: false
        },
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
        {this.props.title && (
          <header className="major">
            <h2>{this.props.title}</h2>
          </header>
        )}
        <MarkdownContent content={this.props.body} />
      </div>
    );
  }
}

export default Body;

export const query = graphql`
  fragment SectionBodyFragment on MarkdownRemarkFrontmatter {
    sections {
      body
      title
    }
  }
`;
