import React from "react";
import ImageGallery from "react-image-gallery";
import { graphql } from "gatsby";

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
          widget: "string"
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
            }
          ]
        }
      ]
    };
  }
  render() {
    const images = this.props.images.map(function(image) {
      return {
        original: image.image.childImageSharp.orig.src,
        thumbnail: image.image.childImageSharp.thumb.src
      };
    });

    return (
      <>
        {this.props.title && (
          <header className="major">
            <h2>{this.props.title}</h2>
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
        image {
          childImageSharp {
            thumb: fixed(width: 100, height: 60) {
              src
            }
            orig: fixed(width: 700, height: 400, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`;
