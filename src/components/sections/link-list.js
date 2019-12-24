import React from "react";
import { graphql } from "gatsby";
import Link from "../link";

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
        <ul>
          {this.props.element.map(function(post, j) {
            return (
              <li key={j}>
                <Link to={post.link}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
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
