import React from "react";
import { graphql } from "gatsby";
import { H2 } from "../globals";

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
            <H2>{this.props.title}</H2>
          </header>
        )}
        <ul>
          {this.props.element &&
            this.props.element.map(function(post, j) {
              return (
                <li key={j}>
                  <a href={post.link} download>
                    {post.title}
                  </a>
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
