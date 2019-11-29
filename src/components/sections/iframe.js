import React from "react";
import { HTMLContent } from "../content";
import { graphql } from "gatsby";

class IFrame extends React.Component {
  admin() {
    return {
      label: "iFrame",
      name: "iframe",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false
        },
        {
          label: "HTML",
          name: "html",
          widget: "text"
        }
      ]
    };
  }
  render() {
    return (
      <>
        {this.props.title && (
          <header className="major">
            <h2>{this.props.title}</h2>
          </header>
        )}
        <HTMLContent content={this.props.html} />
      </>
    );
  }
}

export default IFrame;

export const query = graphql`
  fragment SectionIFrameFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      html
    }
  }
`;
