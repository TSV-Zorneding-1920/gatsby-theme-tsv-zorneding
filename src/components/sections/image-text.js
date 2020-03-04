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
              widget: "string"
            },
            {
              label: "Bild",
              name: "image",
              widget: "image",
              default: "/img/default.jpg"
            },
            {
              label: "Text",
              name: "body",
              widget: "markdown",
              required: false
            },
            {
              label: "Link",
              name: "link",
              widget: "string",
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
        <div className="posts">
          {this.props.nodes &&
            this.props.nodes.map(function(post, i) {
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
            fluid(
              maxWidth: 500
              maxHeight: 300
              srcSetBreakpoints: [350, 500]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
