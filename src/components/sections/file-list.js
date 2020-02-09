import React from "react";
import { graphql } from "gatsby";

class LinkList extends React.Component {
  admin() {
    return {
      label: "Datei Liste",
      name: "file_list",
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
                <a href={post.file.publicURL} download>
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
  fragment SectionFileListFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      element {
        file {
          publicURL
        }
        title
      }
    }
  }
`;
