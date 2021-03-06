import React from "react";
import PreviewCompatibleImage from "../preview-compatible-image";
import { graphql } from "gatsby";
import { H2 } from "../globals";

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
          required: false,
        },
        {
          label: "Bild",
          name: "image_large",
          widget: "image",
          default: "/img/default.jpg",
        },
        {
          label: "Bildunterschrift",
          name: "caption",
          widget: "string",
          required: false,
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
          required: false,
        },
      ],
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
        <PreviewCompatibleImage
          imageInfo={{
            image: this.props.image_large,
            alt: `featured image thumbnail for post`,
          }}
          link={this.props.link}
        />
        <span>{this.props.caption}</span>
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
      link
      caption
      image_large {
        childImageSharp {
          fluid(
            maxWidth: 1180
            quality: 100
            srcSetBreakpoints: [300, 600, 900, 1180]
            fit: CONTAIN
            background: "rgb(255,255,255)"
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
