import React from "react";
import { MarkdownContent } from "../content";
import { graphql } from "gatsby";

class IconList extends React.Component {
  admin() {
    return {
      label: "Icon Liste",
      name: "icon_list",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false
        },
        {
          label: "Element",
          name: "element",
          widget: "list",
          fields: [
            {
              label: "Titel",
              name: "title",
              widget: "string"
            },
            {
              label: "Icon",
              name: "icon",
              widget: "string"
            },
            {
              label: "Text",
              name: "body",
              widget: "markdown",
              required: false
            }
          ]
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
        <div className="features">
          {this.props.element &&
            this.props.element.map(function(post, j) {
              return (
                <article key={j}>
                  <span className={post.icon + " icon solid"}></span>
                  <div className="content">
                    <h3>{post.title}</h3>
                    <MarkdownContent content={post.body} />
                  </div>
                </article>
              );
            })}
        </div>
        <hr />
      </>
    );
  }
}

export default IconList;

export const query = graphql`
  fragment SectionIconListFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      element {
        body
        icon
        title
      }
    }
  }
`;
