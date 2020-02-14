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
          name: "image",
          widget: "image",
          default: "/img/default.jpg"
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
                image: this.props.image,
                alt: `featured image thumbnail for post`
              }}
            />
          </Link>
        ) : (
          <PreviewCompatibleImage
            imageInfo={{
              image: this.props.image,
              alt: `featured image thumbnail for post`
            }}
          />
        )}
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
