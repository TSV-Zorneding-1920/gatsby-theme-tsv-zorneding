import React from "react";
import { graphql } from "gatsby";
import Teaser from "../teaser";

class ImageText extends React.Component {
  admin() {
    return {
      label: "Bild + Text",
      name: "image_text",
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
          name: "nodes",
          widget: "list",
          fields: [
            {
              label: "Titel",
              name: "title",
              widget: "string",
              required: true
            },
            {
              label: "Bild",
              name: "image",
              widget: "image",
              required: true
            },
            {
              label: "Text",
              name: "body",
              widget: "markdown"
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
        <div className="posts">
          {this.props.nodes.map(function(post, i) {
            return (
              <Teaser
                key={i}
                title={post.title}
                link={post.link}
                description={post.body}
                featuredimage={post.image}
              />
            );
          })}
        </div>
        <hr />
      </>
    );
  }
}

export default ImageText;

export const query = graphql`
  fragment SectionImageTextFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      nodes {
        body
        title
        link
        image {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
