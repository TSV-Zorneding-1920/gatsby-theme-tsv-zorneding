import React from "react";
import { MarkdownContent } from "../content";
import { graphql } from "gatsby";

class LinkList extends React.Component {
  admin() {
    return {
      label: "Link Liste",
      name: "link_list",
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
              label: "Link",
              name: "link",
              widget: "string"
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
          {this.props.element.map(function(post, j) {
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

export default LinkList;

export const query = graphql`
  fragment SectionLinkListFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      element {
        link
        title
      }
    }
  }
`;
