import React from "react";
import PreviewCompatibleImage from "../preview-compatible-image";
import { graphql } from "gatsby";
import Link from "../link";

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
          name: "image_large",
          widget: "image",
          default: "/img/default.jpg"
        },
        {
          label: "Bildunterschrift",
          name: "caption",
          widget: "string",
          required: false
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
          required: false
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
        {this.props.link ? (
          <Link to={this.props.link} className="">
            <PreviewCompatibleImage
              imageInfo={{
                image: this.props.image_large,
                alt: `featured image thumbnail for post`
              }}
            />
          </Link>
        ) : (
          <PreviewCompatibleImage
            imageInfo={{
              image: this.props.image_large,
              alt: `featured image thumbnail for post`
            }}
          />
        )}
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
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
