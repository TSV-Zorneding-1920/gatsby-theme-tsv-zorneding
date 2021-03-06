import React from "react";
import ImageGallery from "react-image-gallery";
import { graphql } from "gatsby";
import { H2 } from "../globals";

class Carousel extends React.Component {
  admin() {
    return {
      label: "Gallerie",
      name: "carousel",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false
        },
        {
          label: "Bilder",
          name: "images",
          widget: "list",
          fields: [
            {
              label: "Bild",
              name: "image",
              widget: "image"
            },
            {
              label: "Bildunterschrift",
              name: "caption",
              widget: "string",
              required: false
            }
          ]
        }
      ]
    };
  }
  render() {
    let images = [];
    if (this.props.images) {
      images = this.props.images.filter(function(image) {
        return image.image;
      });
      images = images.map(function(image) {
        if (image.image && image.image.childImageSharp) {
          return {
            srcSet: image.image.childImageSharp.fixed.srcSet,
            thumbnail: image.image.childImageSharp.fixed.src,
            description: image.caption
          };
        } else {
          // This is for the admin view.
          return {
            original: image.image,
            thumbnail: image.image,
            description: image.caption
          };
        }
      });
    }

    return (
      <>
        {this.props.title && (
          <header className="major">
            <H2>{this.props.title}</H2>
          </header>
        )}
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>
        <hr />
      </>
    );
  }
}

export default Carousel;

export const query = graphql`
  fragment SectionCarouselFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      images {
        caption
        image {
          childImageSharp {
            fixed(width: 700, height: 400, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
