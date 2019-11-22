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
          label: "Bild",
          name: "image",
          widget: "image"
        }
      ]
    };
  }
  render() {
    return (
      <>
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
      image {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
