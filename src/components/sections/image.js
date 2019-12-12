import React from "react";
import PreviewCompatibleImage from "../preview-compatible-image";
import { graphql } from "gatsby";

class Image extends React.Component {
  admin() {
    return {
      label: "Bild",
      name: "image",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false
        },
        {
          label: "Bild",
          name: "image",
          widget: "image",
          default: "/img/default.jpg"
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
        <PreviewCompatibleImage
          imageInfo={{
            image: this.props.image,
            alt: `featured image thumbnail for post`
          }}
        />
        <hr />
      </>
    );
  }
}

export default Image;

export const query = graphql`
  fragment SectionImageFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      image_large: image {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
